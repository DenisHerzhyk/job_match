from fastapi import FastAPI
from skills import read_pdf
app = FastAPI()

@app.post("/cv")
def process_cv(file):
    read_pdf(file)