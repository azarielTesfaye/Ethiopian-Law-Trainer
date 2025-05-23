from flask import Flask, request, jsonify
from flask_cors import CORS
from knowledge_base import load_knowledge_base, setup_vectorstore
from question_answering import answer_query
from quiz_generator import generate_quiz_question  # Correct import

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

kb = load_knowledge_base("knowledge_base.json")
vectorstore = setup_vectorstore(kb)

@app.route("/query", methods=["POST"])
def query():
    data = request.json
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "Question is required"}), 400
    answer = answer_query(question, vectorstore)
    return jsonify({"answer": answer})

@app.route("/quiz", methods=["GET"])
def quiz():
    question = generate_quiz_question(kb)
    return jsonify(question)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)