Ethiopian Law Trainer

Overview

The Ethiopian Law Trainer is a web application designed to help users learn about the Ethiopian Constitution through interactive question-answering and quizzes. It features a React frontend with a dark mode UI, typewriter effect for answers, and a Flask backend powered by LangChain for natural language processing. The project uses a vector store to retrieve information from a knowledge base (knowledge_base.json) and provides a CLI interface for additional interaction.





Frontend: React, TypeScript, Vite, Tailwind CSS



Backend: Python 3.12, Flask, LangChain, HuggingFace Transformers



Environment: Node.js v22.14.0, npm v10.9.2, Windows 10 (19045)

Features





Question-Answering: Ask questions about the Ethiopian Constitution (e.g., "What is Article 1 about?") and get detailed answers.



Quiz Mode: Test your knowledge with multiple-choice quizzes.



Dark Mode UI: A sleek dark theme with a #1F2023 background and white buttons.



Typewriter Effect: Answers are displayed with a typing animation for an engaging user experience.



CLI Interface: Use the command line to ask questions or take quizzes.

Prerequisites

Before setting up the project, ensure you have the following installed:





Python 3.12: Download



Node.js v22.14.0: Download



npm v10.9.2: Included with Node.js



Git: Download

Setup Instructions

Clone the Repository

Clone the project from GitHub:

git clone https://github.com/azarielTesfaye/Ethiopian-Law-Trainer.git
cd Ethiopian-Law-Trainer

Backend Setup





Navigate to the Backend:

cd backend



Create a Virtual Environment:

python -m venv venv





On Windows:

.\venv\Scripts\activate



On macOS/Linux:

source venv/bin/activate



Install Dependencies: Ensure requirements.txt exists in the backend/ directory. Then run:

pip install -r requirements.txt





Example requirements.txt:

pdfplumber==0.10.3
langchain==0.2.0
langchain-community==0.2.0
transformers==4.41.0
sentence-transformers==2.7.0
flask==2.3.2
flask-cors==4.0.0
torch==2.3.0
faiss-cpu==1.7.4



Verify Knowledge Base:





Ensure knowledge_base.json exists in the backend/ directory with data like:

[
  {"article_number": "1", "title": "Nomenclature of the State", "content": "Article 1 establishes the name of the state as the Federal Democratic Republic of Ethiopia."},
  ...
]



Run the Backend:

python app.py





The Flask server should start at http://localhost:5000.

Frontend Setup





Navigate to the Frontend:

cd frontend



Install Dependencies:

npm install



Run the Frontend:

npm run dev





The React app should start at http://localhost:5173.

Usage

Web Interface





Open your browser and go to http://localhost:5173.



Question Section:





Enter a question like "What is Article 1 about?" and click "Submit Question".



Expected: "Article 1 establishes the name of the state as the Federal Democratic Republic of Ethiopia." (displayed with a typewriter effect).



Quiz Section:





Click "Start Quiz".



Answer questions (e.g., select "Capital City" for Article 49).



Expected: "Correct!" (in green) or "Incorrect" (in red).

API





Question-Answering:

curl -X POST http://localhost:5000/query -H "Content-Type: application/json" -d "{\"question\": \"What is Article 1 about?\"}"





Expected:

{"answer": "Article 1 establishes the name of the state as the Federal Democratic Republic of Ethiopia."}



Quiz:

curl http://localhost:5000/quiz





Expected: A JSON response with quiz questions.

CLI





Run the CLI interface:

python backend/cli.py





Options:

Ethiopian Law Trainer
1. Ask a question
2. Take a quiz
3. Exit



Example:

Choose an option (1-3): 1
Enter your question: What is Article 1 about?
Answer: Article 1 establishes the name of the state as the Federal Democratic Republic of Ethiopia.

Troubleshooting





Short Answers (e.g., "True"):





Ensure backend/question_answering.py uses a prompt like provide a detailed explanation and sets min_length=50 in the T5 model.



Incorrect Answers:





Verify knowledge_base.json data (e.g., Article 1, 9, 49).



Check vector store retrieval in knowledge_base.py (e.g., similarity_search output).



Typewriter Effect Missing:





Ensure the TypewriterText component in frontend/src/App.tsx is used for answers.



CORS Issues:





Browser console shows Access-Control-Allow-Origin error.



Fix: Verify flask-cors==4.0.0 is installed and CORS(app) is in app.py.



UI Styling Issues:





Ensure Tailwind CSS is set up in frontend/index.css or index.html.



PostCSS Error:





Update frontend/postcss.config.js to export default or use .cjs.



chroma-hnswlib Error:





Install Microsoft C++ Build Tools (link) or use faiss-cpu==1.7.4.



Model Download Fails:





Ensure internet connectivity for HuggingFace models (e.g., t5-small).



Alternatively, download models manually and load locally in question_answering.py.

Project Structure

Ethiopian-Law-Trainer/
├── backend/
│   ├── app.py              # Flask server
│   ├── question_answering.py # Question-answering logic
│   ├── knowledge_base.py   # Vector store setup
│   ├── quiz_generator.py   # Quiz generation logic
│   ├── cli.py              # CLI interface
│   ├── knowledge_base.json # Ethiopian Constitution data
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.tsx         # Main React component
│   │   └── index.css       # Tailwind CSS styles
│   ├── index.html          # HTML entry point
│   ├── package.json        # Node.js dependencies
│   └── vite.config.ts      # Vite configuration
├── .gitignore              # Git ignore file
└── README.md               # Project documentation

Contributing

We welcome contributions! To contribute:





Fork the repository.



Create a new branch:

git checkout -b feature/your-feature



Make your changes and commit:

git commit -m "Add your feature"



Push to your fork:

git push origin feature/your-feature



Open a Pull Request on GitHub.

License

MIT License - feel free to use, modify, and distribute this project.

Contact

For questions or feedback, reach out to azarielTesfaye on GitHub.
