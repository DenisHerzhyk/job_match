from pypdf import PdfReader

def read_pdf(file):
    reader = PdfReader(file)
    page = reader.pages[0]
    text = page.extract_text()
    print("PDF Text: ", text)