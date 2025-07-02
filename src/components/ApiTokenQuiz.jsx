import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './quizStyles.module.css'; // Create this CSS module separately

const choices = [
  {
    text: 'It authorizes and authenticates API requests',
    correct: true,
  },
  {
    text: 'It increases the speed of your endpoint',
    correct: false,
  },
  {
    text: 'It replaces all need for HTTPS',
    correct: false,
  },
  {
    text: 'It encrypts frontend UI code automatically',
    correct: false,
  },
];

export default function ApiTokenQuiz() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (index) => {
    if (!submitted) {
      setSelected(index);
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={styles.quizContainer}
    >
      <h3 className={styles.quizTitle}>🧪 Quiz: What’s the purpose of an API token?</h3>
      <ul className={styles.optionList}>
        {choices.map((choice, index) => {
          const isCorrect = choice.correct;
          const isSelected = selected === index;
          let statusClass = '';

          if (submitted) {
            statusClass = isCorrect
              ? styles.correct
              : isSelected
              ? styles.incorrect
              : '';
          }

          return (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`${styles.option} ${isSelected ? styles.selected : ''} ${statusClass}`}
            >
              {choice.text}
            </li>
          );
        })}
      </ul>

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.explanation}
        >
          {choices[selected].correct ? (
            <p>✅ Correct! API tokens authorize and authenticate each client request.</p>
          ) : (
            <p>❌ Not quite. API tokens exist to authorize and authenticate access to endpoints, not to replace HTTPS or encrypt UI code.</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
