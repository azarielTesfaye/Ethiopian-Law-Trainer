import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

type AnswerBoxProps = {
  answer: string;
};

const AnswerBox: React.FC<AnswerBoxProps> = ({ answer }) => {
  return (
    <div className='col-span-3 mt-12'>
      {answer && (
        <div className="mt-4 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-md">
          <p className="text-sm text-green-400 mb-2 font-semibold">Answer:</p>
          <p className="text-gray-100 text-base leading-relaxed whitespace-pre-wrap">
            <Typewriter
              key={answer} // ← This is the key fix!
              words={[answer]}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={0}
              delaySpeed={100000} 
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default AnswerBox;
