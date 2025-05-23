import pdfplumber
import json

def extract_pdf_to_json(pdf_path, output_json):
    with pdfplumber.open(pdf_path) as pdf:
        articles = []
        current_article = {"article_number": "", "title": "", "content": ""}
        for page in pdf.pages:
            text = page.extract_text()
            if not text:
                continue
            lines = text.split("\n")
            for line in lines:
                if line.startswith("Article"):
                    if current_article["article_number"]:  # Save previous article
                        articles.append(current_article)
                    current_article = {"article_number": line, "title": "", "content": ""}
                elif current_article["article_number"] and not current_article["title"]:
                    current_article["title"] = line
                else:
                    current_article["content"] += line + " "
        if current_article["article_number"]:  # Save last article
            articles.append(current_article)
    
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(articles, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    extract_pdf_to_json("EthiopiaConstitution.pdf", "backend/knowledge_base.json")