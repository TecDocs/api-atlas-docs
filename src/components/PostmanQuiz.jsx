
import React, { useState } from 'react';
import './postman-quiz.css';

const questions = [
  {
    question: "What is a Postman Collection used for?",
    options: [
      "Storing SQL queries",
      "Saving and organizing API requests",
      "Hosting your API server",
      "Managing Kubernetes clusters"
    ],
    answer: "Saving and organizing API requests"
  },
  {
    question: "What are Postman Environments useful for?",
    options: [
      "Simulating JSON schemas",
      "Switching request variables across dev, staging, and prod",
      "Storing user credentials",
      "Setting database indexes"
    ],
    answer: "Switching request variables across dev, staging, and prod"
  },
  {
    question: "What does a pre-request script do in Postman?",
    options: [
      "Runs tests after receiving a response",
      "Generates OpenAPI spec files",
      "Runs JavaScript code before the request is sent",
      "Creates GitHub workflows"
    ],
    answer: "Runs JavaScript code before the request is sent"
  }
];

const PostmanQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="postman-quiz">
      {questions.map((q, idx) => (
        <div key={idx} className="quiz-question">
          <p className="question">{q.question}</p>
          <div className="options">
            {q.options.map((option, i) => (
              <label key={i} className={
                submitted
                  ? option === q.answer
                    ? "correct"
                    : selectedAnswers[idx] === option
                    ? "incorrect"
                    : ""
                  : ""
              }>
                <input
                  type="radio"
                  name={`question-${idx}`}
                  value={option}
                  checked={selectedAnswers[idx] === option}
                  onChange={() => handleOptionChange(idx, option)}
                  disabled={submitted}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button onClick={handleSubmit} className="submit-btn">Submit Answers</button>
      ) : (
        <p className="results">Quiz completed! Correct answers are highlighted in green.</p>
      )}
    </div>
  );
};

export default PostmanQuiz;
