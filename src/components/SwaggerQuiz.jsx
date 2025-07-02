import React from 'react';
import './swagger-quiz.css';

const questions = [
  {
    question: 'What is the primary purpose of Swagger UI?',
    answers: [
      'To render static HTML pages',
      'To enable interactive API testing from your OpenAPI spec',
      'To replace Postman collections',
      'To automatically deploy backend services'
    ],
    correct: 1
  },
  {
    question: 'What file format does Swagger UI primarily use?',
    answers: ['CSV', 'XML', 'YAML or JSON (OpenAPI)', 'Markdown'],
    correct: 2
  },
  {
    question: 'Which Swagger feature allows real-time endpoint testing?',
    answers: ['Static Render Mode', 'Authorization Tab', 'Schema Builder', 'Try It Out'],
    correct: 3
  },
  {
    question: 'How does Swagger help with debugging?',
    answers: [
      'It logs console output',
      'It simulates server crashes',
      'It shows raw HTTP responses including headers and status codes',
      'It replaces error handlers'
    ],
    correct: 2
  }
];

export default function SwaggerQuiz() {
  const [selected, setSelected] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setSelected({});
    setSubmitted(false);
  };

  return (
    <div className="swagger-quiz">
      <h3 className="quiz-title">🧪 Swagger Quiz</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="quiz-question">
          <p><strong>{idx + 1}.</strong> {q.question}</p>
          <ul>
            {q.answers.map((answer, aIdx) => {
              const isCorrect = q.correct === aIdx;
              const isSelected = selected[idx] === aIdx;
              const isSubmitted = submitted;
              return (
                <li
                  key={aIdx}
                  onClick={() => !submitted && setSelected({ ...selected, [idx]: aIdx })}
                  className={
                    isSubmitted
                      ? isCorrect
                        ? 'correct'
                        : isSelected
                        ? 'incorrect'
                        : ''
                      : isSelected
                      ? 'selected'
                      : ''
                  }
                >
                  {answer}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {!submitted ? (
        <button className="quiz-button" onClick={handleSubmit}>Submit</button>
      ) : (
        <button className="quiz-button" onClick={handleReset}>Try Again</button>
      )}
    </div>
  );
}