import PyPDF2
from PIL import Image
import pytesseract
from docx import Document
import os

class FileHandler:
    @staticmethod
    def read_text_file(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()

    @staticmethod
    def read_pdf(file_path):
        text = ""
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
        return text

    @staticmethod
    def read_image(file_path):
        image = Image.open(file_path)
        text = pytesseract.image_to_string(image)
        return text

    @staticmethod
    def read_docx(file_path):
        doc = Document(file_path)
        text = ""
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
        return text

    @classmethod
    def process_file(cls, file_path):
        file_extension = os.path.splitext(file_path)[1].lower()
        
        handlers = {
            '.txt': cls.read_text_file,
            '.pdf': cls.read_pdf,
            '.png': cls.read_image,
            '.jpg': cls.read_image,
            '.jpeg': cls.read_image,
            '.docx': cls.read_docx,
        }
        
        handler = handlers.get(file_extension)
        if handler:
            return handler(file_path)
        else:
            raise ValueError(f"Unsupported file type: {file_extension}") 