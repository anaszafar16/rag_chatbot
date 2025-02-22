from ..embeddings.embedding import EmbeddingHandler
from ..vectorstore.vectordb import VectorStore

class Retriever:
    def __init__(self):
        self.embedding_handler = EmbeddingHandler()
        self.vector_store = VectorStore()
    
    def retrieve(self, query, n_results=3):
        query_embedding = self.embedding_handler.generate_embeddings(query)
        results = self.vector_store.query(query_embedding, n_results)
        return results['documents'][0] 