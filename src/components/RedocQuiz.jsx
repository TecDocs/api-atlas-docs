
import React, { useState } from 'react';
import './redoc-quiz.css';

const RedocQuiz = () => {
  const questions = [
    {
      question: "What is Redoc primarily used for?",
      answers: [
        "Sending real-time API requests",
        "Visualizing OpenAPI specs with clarity",
        "Mocking backend servers",
        "Generating client SDKs"
      ],
      correctAnswer: 1
    },
    {
      question: "Which layout style does Redoc use?",
      answers: [
        "Tabbed layout with hidden schemas",
        "Table-based matrix",
        "Scroll-first, top-down layout",
        "Accordion-only model view"
      ],
      correctAnswer: 2
    },
    {
      question: "Redoc is especially useful for:",
      answers: [
        "Debugging CORS issues",
        "Testing OAuth flows",
        "Schema validation and auditing",
        "Simulating load tests"
      ],
      correctAnswer: 2
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (qIdx, aIdx) => {
    if (!submitted) {
      const updated = [...selectedAnswers];
      updated[qIdx] = aIdx;
      setSelectedAnswers(updated);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="redoc-quiz">
      <h2 className="quiz-title">🧠 Redoc Quiz</h2>
      {questions.map((q, qIdx) => (
        <div key={qIdx} className="quiz-question">
          <p><strong>{qIdx + 1}. {q.question}</strong></p>
          <ul>
            {q.answers.map((answer, aIdx) => {
              let className = '';
              if (submitted) {
                if (aIdx === q.correctAnswer) className = 'correct';
                else if (aIdx === selectedAnswers[qIdx]) className = 'incorrect';
              } else if (aIdx === selectedAnswers[qIdx]) {
                className = 'selected';
              }
              return (
                <li
                  key={aIdx}
                  className={className}
                  onClick={() => handleAnswerSelect(qIdx, aIdx)}
                >
                  {answer}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {!submitted && (
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      )}
      {submitted && (
        <div className="quiz-results">
          You got {selectedAnswers.filter((ans, idx) => ans === questions[idx].correctAnswer).length} out of {questions.length} correct.
        </div>
      )}
    </div>
  );
};

export default RedocQuiz;
