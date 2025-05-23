# Ethiopian Law Trainer

## Overview
The Ethiopian Law Trainer is a web application designed to help users learn about the Ethiopian Constitution through interactive question-answering and quizzes. It features a React frontend with a dark mode UI, typewriter effect for answers, and a Flask backend powered by LangChain for natural language processing. The project uses a vector store to retrieve information from a knowledge base (`knowledge_base.json`) and provides a CLI interface for additional interaction.

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Python 3.12, Flask, LangChain, HuggingFace Transformers
- **Environment**: Node.js v22.14.0, npm v10.9.2, Windows 10 (19045)

## Features
- **Question-Answering**: Ask questions about the Ethiopian Constitution (e.g., "What is Article 1 about?") and get detailed answers.
- **Quiz Mode**: Test your knowledge with multiple-choice quizzes.
- **Dark Mode UI**: A sleek dark theme with a #1F2023 background and white buttons.
- **Typewriter Effect**: Answers are displayed with a typing animation for an engaging user experience.
- **CLI Interface**: Use the command line to ask questions or take quizzes.

## Prerequisites
Before setting up the project, ensure you have the following installed:
- **Python 3.12**: [Download](https://www.python.org/downloads/)
- **Node.js v22.14.0**: [Download](https://nodejs.org/en/download/)
- **npm v10.9.2**: Included with Node.js
- **Git**: [Download](https://git-scm.com/download/win)

## Setup Instructions

### Clone the Repository
Clone the project from GitHub:
```bash
git clone https://github.com/azarielTesfaye/Ethiopian-Law-Trainer.git
cd Ethiopian-Law-Trainer
