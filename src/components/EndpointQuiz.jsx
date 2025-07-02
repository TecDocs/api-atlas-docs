import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './EndpointQuiz.module.css';

const EndpointQuiz = ({ question, options, correctIndex, explanation }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      className={styles.quizContainer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={styles.question}>{question}</h3>
      <ul className={styles.optionList}>
        {options.map((option, index) => (
          <li key={index} className={styles.optionItem}>
            <label className={submitted ? (
              index === correctIndex
                ? styles.correct
                : index === selected
                ? styles.incorrect
                : ''
            ) : ''}>
              <input
                type="radio"
                name="endpoint-quiz"
                value={index}
                disabled={submitted}
                checked={selected === index}
                onChange={() => setSelected(index)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      {!submitted ? (
        <button onClick={handleSubmit} className={styles.submitButton} disabled={selected === null}>
          Submit
        </button>
      ) : (
        <div className={styles.feedback}>
          {selected === correctIndex ? (
            <p className={styles.correctMsg}>✅ Correct!</p>
          ) : (
            <p className={styles.incorrectMsg}>❌ Not quite. The correct answer was: <strong>{options[correctIndex]}</strong></p>
          )}
          <p className={styles.explanation}>{explanation}</p>
        </div>
      )}
    </motion.div>
  );
};

export default EndpointQuiz;
