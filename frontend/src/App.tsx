import { useState } from 'react';
import axios from 'axios';
import './App.css';
import AnswerBox from './componet/Answer'

interface Quiz {
  question: string;
  options: string[];
  correct: string;
}

const App: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [quizResult, setQuizResult] = useState<string>('');

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer('Loading...');
    try {
      const response = await axios.post<{ answer: string }>('http://localhost:5000/query', { question });
      setAnswer(response.data.answer);
    } catch (error: any) {
      setAnswer('Error: ' + error.message);
    }
  };

  const fetchQuiz = async () => {
    try {
      const response = await axios.get<Quiz>('http://localhost:5000/quiz');
      setQuiz(response.data);
      setSelectedOption('');
      setQuizResult('');
    } catch (error: any) {
      setQuizResult('Error: ' + error.message);
    }
  };

  const handleQuizSubmit = () => {
    if (quiz && selectedOption === quiz.correct) {
      setQuizResult('Correct!');
    } else if (quiz) {
      setQuizResult(`Incorrect. The correct answer is: ${quiz.correct}`);
    }
  };

  return (
    <div className="min-h-screen max-w-[1500px] text-gray-100 flex flex-col items-center p-6" style={{ backgroundColor: '#1F2023' }}>
      <div className='grid grid-cols-5 gap-10'>
      <div className={`${answer?'col-span-2':'col-span-4'} `}>
           <h1 className="text-3xl font-semibold text-center mb-8 text-white">Ethiopian Law AI</h1>

{/* Question Section */}
          <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Ask any Question about ethiopian law</h2>
            <form onSubmit={handleQuestionSubmit}>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., What is Article 1 about?"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-gray-900 p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Submit Question
              </button>
            </form>
          
          </div>

          {/* Quiz Section */}
          <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Take a Quiz</h2>
            {!quiz ? (
              <button
                onClick={fetchQuiz}
                className="w-full bg-white text-gray-900 p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Start Quiz
              </button>
            ) : (
              <div>
                <p className="mb-4 text-gray-100">{quiz.question}</p>
                {quiz.options.map((option, index) => (
                  <div key={index} className="mb-3">
                    <label className="flex items-center text-gray-100">
                      <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="mr-2 text-blue-500 focus:ring-blue-500"
                      />
                      {option}
                    </label>
                  </div>
                ))}
                <button
                  onClick={handleQuizSubmit}
                  disabled={!selectedOption}
                  className={`w-full p-3 rounded-lg mt-4 transition-colors ${
                    selectedOption
                      ? 'bg-white text-gray-900 hover:bg-gray-200'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>
                {quizResult && (
                  <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                    <p className={`text-gray-100 ${quizResult === 'Correct!' ? 'text-green-400' : 'text-red-400'}`}>
                      {quizResult}
                    </p>
                  </div>
                )}
                <button
                  onClick={fetchQuiz}
                  className="w-full bg-white text-gray-900 p-3 rounded-lg mt-4 hover:bg-gray-200 transition-colors"
                >
                  Next Question
                </button>
              </div>
            )}
          </div>

      </div>
    

{answer&&<AnswerBox answer={answer} />}

      </div>
    
    </div>
  );
};

export default App;