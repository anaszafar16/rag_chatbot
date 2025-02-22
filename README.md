# RAG Chatbot

A Retrieval-Augmented Generation (RAG) chatbot that processes various document types (text, PDF, images, Word) and provides intelligent responses using OpenAI's language models. Built specifically for Fedora Linux environments.

## Features

- Multi-format document processing:
  - Text files (.txt)
  - PDF documents (.pdf)
  - Images with text (.png, .jpg, .jpeg)
  - Word documents (.docx)
- Interactive web interface
- Real-time document processing
- Context-aware responses
- Vector-based document retrieval
- OCR capabilities for image processing

## System Requirements

- Fedora Linux (tested on Fedora 37+)
- Python 3.x
- Tesseract OCR
- 4GB RAM minimum (8GB recommended)
- OpenAI API key

## Installation

### 1. System Dependencies

```bash
sudo dnf install python3 python3-pip tesseract
```

### 2. Python Dependencies

```bash
pip install -r requirements.txt
```

### 3. OpenAI API Key

Create a `.env` file in the root directory and add your OpenAI API key:

```bash
OPENAI_API_KEY=your_api_key_here
```

## Usage

### 1. Start the Chatbot

```bash
python3 app.py
```

### 2. Upload Documents

Navigate to the web interface and upload your documents.

### 3. Chat with the Bot

Type your message in the chat interface, and the bot will respond with a context-aware answer.

### 4. File Processing

The bot will process the uploaded documents and store them in the `data/documents` directory.

### 5. Chat History

The chat history is stored in the `data/chat_history` directory.

### Access the web interface at: `http://localhost:5000`

### Using the Chatbot

1. **Document Upload**
   - Click the upload button in the web interface
   - Select one or multiple supported documents
   - Wait for processing confirmation

2. **Asking Questions**
   - Type your question in the chat input
   - Press Enter or click Send
   - The bot will respond using context from uploaded documents

## Project Structure

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Troubleshooting

### Common Issues

1. **Tesseract OCR Error**
   ```bash
   # Verify Tesseract installation
   tesseract --version
   
   # Reinstall if needed
   sudo dnf reinstall tesseract tesseract-devel
   ```

2. **Permission Issues**
   ```bash
   # Fix virtual environment permissions
   sudo chown -R $USER:$USER venv/
   
   # Fix data directory permissions
   sudo chmod 755 data/documents
   ```

3. **Module Import Errors**
   ```bash
   # Verify Python path
   echo $PYTHONPATH
   
   # Add project root if needed
   export PYTHONPATH="${PYTHONPATH}:/path/to/rag_chatbot"
   ```

### Logs

- Application logs: Check terminal output
- System logs: `journalctl -f`
- Python errors: Check console output

## Production Deployment

For production deployment, consider:

1. Using Gunicorn as WSGI server
2. Setting up Nginx as reverse proxy
3. Implementing proper security measures
4. Setting up SSL/TLS
5. Configuring proper logging
6. Setting up monitoring

## Security Considerations

- Keep `.env` file secure and never commit it
- Regularly update dependencies
- Implement rate limiting
- Validate file uploads
- Sanitize user inputs
- Use HTTPS in production

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for GPT API
- Sentence Transformers for embeddings
- ChromaDB for vector storage
- Flask for web framework
- Tesseract for OCR capabilities

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

### Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to repository
git push origin main
```

## Development

### Virtual Environment

Always activate the virtual environment before development:

```bash
source venv/bin/activate
```

Deactivate when finished:

```bash
deactivate
```

### Adding Dependencies

```bash
pip install new_package
pip freeze > requirements.txt
```
