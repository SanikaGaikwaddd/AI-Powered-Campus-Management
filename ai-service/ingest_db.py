import os
import pymysql
from dotenv import load_dotenv
import chromadb
from sentence_transformers import SentenceTransformer

# reuse the backend's database settings
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "backend", ".env"))

model = SentenceTransformer("all-MiniLM-L6-v2")
col = chromadb.PersistentClient(path="chroma_db").get_or_create_collection("campus")

conn = pymysql.connect(
    host=os.getenv("DB_HOST", "localhost"),
    port=int(os.getenv("DB_PORT", 3306)),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME"),
    cursorclass=pymysql.cursors.DictCursor,
)

# remove old database entries so deleted rows don't linger
col.delete(where={"kind": "db"})


def add(doc_id, text, source):
    col.upsert(
        ids=[doc_id],
        documents=[text],
        embeddings=[model.encode(text).tolist()],
        metadatas=[{"source": source, "page": 0, "audience": "all", "kind": "db"}],
    )


with conn.cursor() as cur:
    cur.execute("SELECT * FROM events")
    for r in cur.fetchall():
        text = (
            f"Event: {r['title']} ({r['category']}) on {r['event_date']} at {r['event_time']}, "
            f"{r['location']}. Organised by {r['organizer']}. {r['description']} "
            f"Total seats: {r['seats']}, registered: {r['registered']}, "
            f"seats left: {r['seats'] - r['registered']}. Status: {r['status']}."
        )
        add(f"event-{r['id']}", text, "Events")

    cur.execute("SELECT * FROM placement_drives")
    for r in cur.fetchall():
        text = (
            f"Placement drive: {r['company']} is hiring for {r['role']} with a package of "
            f"{float(r['package_lpa'])} LPA in {r['location']}. Application deadline: {r['deadline']}. "
            f"Minimum CGPA: {float(r['min_cgpa'])}. Eligible branches: {r['branches']}. "
            f"Status: {r['status']}. {r['description']}"
        )
        add(f"drive-{r['id']}", text, "Placement drives")

    # resolved complaints only, no personal details
    cur.execute("SELECT * FROM complaints WHERE status = 'Resolved'")
    for r in cur.fetchall():
        text = (
            f"Resolved {r['category']} complaint example: {r['title']}. "
            f"{r['description']} Resolution: {r['resolution']}"
        )
        add(f"complaint-{r['id']}", text, "Complaint resolutions")

conn.close()
print("database knowledge indexed")