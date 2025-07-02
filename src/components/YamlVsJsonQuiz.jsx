import React, { useState } from 'react';
import styles from './YamlVsJsonQuiz.module.css';

const quizData = [
  {
    question: 'Which format is more human-readable?',
    options: ['JSON', 'YAML'],
    answer: 'YAML'
  },
  {
    question: 'Which format uses curly braces and square brackets?',
    options: ['YAML', 'JSON'],
    answer: 'JSON'
  },
  {
    question: 'Which format supports comments?',
    options: ['JSON', 'YAML'],
    answer: 'YAML'
  }
];

export default function YamlVsJsonQuiz() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index, option) => {
    setSelected({ ...selected, [index]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className={styles.quizContainer}>
      <h3 className={styles.quizTitle}>🧠 YAML vs JSON Quiz</h3>
      {quizData.map((q, index) => (
        <div key={index} className={styles.questionBlock}>
          <p className={styles.question}>{q.question}</p>
          <div className={styles.options}>
            {q.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(index, option)}
                className={`
                  ${styles.optionButton}
                  ${selected[index] === option ? styles.selected : ''}
                  ${submitted && option === q.answer ? styles.correct : ''}
                  ${submitted && selected[index] === option && option !== q.answer ? styles.incorrect : ''}
                `}
                disabled={submitted}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      {!submitted && (
        <button className={styles.submitBtn} onClick={handleSubmit}>✅ Submit Answers</button>
      )}
      {submitted && (
        <div className={styles.feedback}>🎉 Great job! Now scroll down to see how YAML transforms into real API specs.</div>
      )}
    </div>
  );
}
