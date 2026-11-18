from datetime import date

import chromadb
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer

app = FastAPI()
model = SentenceTransformer("all-MiniLM-L6-v2")
col = chromadb.PersistentClient(path="chroma_db").get_or_create_collection("campus")


class Q(BaseModel):
    question: str
    role: str


@app.post("/rag/query")
def query(q: Q):
    role = q.role.lower()
    where = None if role == "admin" else {"audience": {"$in": [role, "all"]}}

    res = col.query(
        query_embeddings=[model.encode(q.question).tolist()],
        n_results=4,
        where=where,
    )
    docs, metas = res["documents"][0], res["metadatas"][0]

    context = "\n\n".join(
        f"[{m['source']}" + (f" p.{m['page']}" if m["page"] else "") + f"] {d}"
        for d, m in zip(docs, metas)
    )

    prompt = (
        f"You are CampusAI. Today's date is {date.today()}. "
        "Answer ONLY from the context below. "
        "If the answer is not there, say you don't know.\n\n"
        f"Context:\n{context}\n\nQuestion: {q.question}\nAnswer:"
    )

    r = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": "llama3.2", "prompt": prompt, "stream": False},
    )
    answer = r.json()["response"]

    # unique source files only
    sources, seen = [], set()
    for m in metas:
        if m["source"] not in seen:
            seen.add(m["source"])
            sources.append({"source": m["source"], "page": m["page"]})

    # no sources when the bot has no answer
    if "don't know" in answer.lower():
        sources = []

    return {"answer": answer, "sources": sources}