from openai import OpenAI
import os

class LLMHandler:
    def __init__(self):
        self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
    def generate_response(self, query, context):
        prompt = f"""Given the following context, please answer the question.
        
Context: {context}

Question: {query}

Answer: """
        
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message.content 