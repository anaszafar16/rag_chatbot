from sentence_transformers import SentenceTransformer

class EmbeddingHandler:
    def __init__(self, model_name="all-MiniLM-L6-v2"):
        self.model = SentenceTransformer(model_name)
    
    def generate_embeddings(self, texts):
        if isinstance(texts, str):
            texts = [texts]
        return self.model.encode(texts) 

        