import chromadb
from chromadb.config import Settings

class VectorStore:
    def __init__(self, persist_directory="./data/chroma"):
        self.client = chromadb.Client(Settings(
            persist_directory=persist_directory,
            is_persistent=True
        ))
        self.collection = self.client.get_or_create_collection("documents")
    
    def add_documents(self, documents, embeddings, ids):
        self.collection.add(
            embeddings=embeddings,
            documents=documents,
            ids=ids
        )
    
    def query(self, query_embedding, n_results=3):
        results = self.collection.query(
            query_embeddings=[query_embedding],
            n_results=n_results
        )
        return results 