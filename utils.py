# utils.py
import csv
import os

UPLOAD_DIR = "uploads"
CSV_FILE_PATH = "output.csv"

os.makedirs(UPLOAD_DIR, exist_ok=True)

def save_file(file):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as f:
        f.write(file.file.read())
    return file_path

def save_to_csv(row: list):
    with open(CSV_FILE_PATH, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(row)
