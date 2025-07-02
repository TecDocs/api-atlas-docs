import React, { useState } from 'react';
import styles from './FinalCourseQuiz.module.css';

const questions = [
  {
    question: "What is the most likely cause of a 400 Bad Request error?",
    options: [
      "Network timeout",
      "JSON syntax or schema error",
      "Server crash",
      "SSL handshake failure"
    ],
    answer: "JSON syntax or schema error"
  },
  {
    question: "Which format is indentation-sensitive and often used in Kubernetes configs?",
    options: ["JSON", "XML", "YAML", "CSV"],
    answer: "YAML"
  },
  {
    question: "What does a 502 Bad Gateway usually indicate?",
    options: [
      "TLS certificate expired",
      "Reverse proxy could not reach the service",
      "OpenAPI validation failed",
      "User is unauthorized"
    ],
    answer: "Reverse proxy could not reach the service"
  },
  {
    question: "Which tool can help validate an OpenAPI schema?",
    options: ["Redoc", "YAMLlint", "Postman", "Swagger UI"],
    answer: "Swagger UI"
  },
  {
    question: "In the FailureIsolationMatrix, which step comes first when debugging?",
    options: [
      "TLS negotiation",
      "Server response",
      "DNS resolution",
      "Application log parsing"
    ],
    answer: "DNS resolution"
  }
];

export default function FinalCourseQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionIdx, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIdx]: selectedOption
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className={styles.quizBox}>
      <h2 className={styles.quizTitle}>Final Knowledge Check</h2>
      <p className={styles.resultText}>
        Test your understanding of the entire API Atlas course.
      </p>

      {questions.map((q, idx) => (
        <div key={idx} className={styles.questionBlock}>
          <p className={styles.questionText}>
            {idx + 1}. {q.question}
          </p>
          <ul className={styles.optionsList}>
            {q.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[idx] === opt;
              const isCorrect = opt === q.answer;
              const isIncorrect = isSelected && submitted && opt !== q.answer;

              let optionClass = styles.option;
              if (submitted) {
                if (isSelected && isCorrect) optionClass += ` ${styles.correct}`;
                else if (isSelected && isIncorrect) optionClass += ` ${styles.incorrect}`;
                else if (isCorrect) optionClass += ` ${styles.correct}`;
              } else if (isSelected) {
                optionClass += ` ${styles.selected}`;
              }

              return (
                <li key={optIdx} className={optionClass}>
                  <label>
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      value={opt}
                      disabled={submitted}
                      checked={isSelected}
                      onChange={() => handleChange(idx, opt)}
                    />
                    {opt}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {!submitted && (
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit Answers
        </button>
      )}

      {submitted && (
        <div className={styles.resultText}>
          Quiz completed. Review each answer above to see what you got right or wrong.
        </div>
      )}
    </div>
  );
}
