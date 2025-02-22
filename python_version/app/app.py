from flask import Flask, render_template, request, jsonify
import os
import sys
from dotenv import load_dotenv

# Add the project root to Python path
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(project_root)

from src.retriever.retriever import Retriever
from src.llm.model import LLMHandler
from src.utils.file_handlers import FileHandler
from src.utils.text_processor import clean_text, split_text
from src.embeddings.embedding import EmbeddingHandler
import uuid

load_dotenv()

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = os.path.join(project_root, 'data/documents')
retriever = Retriever()
llm = LLMHandler()
embedding_handler = EmbeddingHandler()

# Ensure upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        # Save file
        filename = str(uuid.uuid4()) + os.path.splitext(file.filename)[1]
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        try:
            # Process file
            text = FileHandler.process_file(filepath)
            text = clean_text(text)
            chunks = split_text(text)

            # Generate embeddings and store in vector database
            embeddings = embedding_handler.generate_embeddings(chunks)
            ids = [str(uuid.uuid4()) for _ in chunks]
            retriever.vector_store.add_documents(chunks, embeddings, ids)

            return jsonify({'message': 'File processed successfully'})
        except Exception as e:
            return jsonify({'error': str(e)}), 400

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get('message', '')
    
    # Retrieve relevant documents
    context = retriever.retrieve(query)
    
    # Generate response using LLM
    response = llm.generate_response(query, context)
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True) 