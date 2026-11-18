import os, glob
from pypdf import PdfReader
import chromadb
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
col = chromadb.PersistentClient(path="chroma_db").get_or_create_collection("campus")

def chunk(text, size=800, overlap=100):
    out, i = [], 0
    while i < len(text):
        out.append(text[i:i + size])
        i += size - overlap
    return out

for path in glob.glob("knowledge/*.pdf"):
    name = os.path.basename(path)
    audience = name.split("_")[0]            # student | faculty | all
    for p, page in enumerate(PdfReader(path).pages, 1):
        for n, c in enumerate(chunk(page.extract_text() or "")):
            col.upsert(
                ids=[f"{name}-{p}-{n}"],
                documents=[c],
                embeddings=[model.encode(c).tolist()],
                metadatas=[{"source": name, "page": p, "audience": audience}],
            )
print("done")