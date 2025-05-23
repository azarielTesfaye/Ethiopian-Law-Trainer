from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma  # Or FAISS
import json

def load_knowledge_base(json_path):
    with open(json_path, "r", encoding="utf-8") as f:
        return json.load(f)

def setup_vectorstore(documents):
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    texts = [doc["content"] for doc in documents]
    metadata = [{"article": doc["article_number"], "title": doc["title"]} for doc in documents]
    return Chroma.from_texts(texts, embeddings, metadatas=metadata)  # Or FAISS.from_texts
