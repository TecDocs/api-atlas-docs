import React, { useState } from 'react';
import styles from './SpecDesignQuiz.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const questions = [
  {
    question: "Why should you use `$ref` in OpenAPI specs?",
    options: [
      "To avoid retyping endpoint URLs",
      "To enable reuse of shared components like schemas and responses",
      "To store user credentials securely",
      "To make the spec run faster",
    ],
    correctAnswer: 1,
  },
  {
    question: "What’s a benefit of modular spec files (like paths/, schemas/, responses/)?",
    options: [
      "They prevent API throttling",
      "They make CI validation and ownership more manageable",
      "They remove the need for versioning",
      "They generate YAML automatically",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a proper naming convention for a schema?",
    options: [
      "errorRes",
      "user_profile",
      "PaginationQuery",
      "pageThingy",
    ],
    correctAnswer: 2,
  },
  {
    question: "What’s the purpose of linters like Spectral in OpenAPI?",
    options: [
      "To shorten YAML files",
      "To enforce structural and naming standards",
      "To host the API on Azure",
      "To convert JSON to YAML",
    ],
    correctAnswer: 1,
  },
];

export default function SpecDesignQuiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const { colorMode } = useColorMode(); // light or dark

  const handleSelect = (qIdx, optionIdx) => {
    if (submitted) return;
    const updated = [...answers];
    updated[qIdx] = optionIdx;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getClass = (qIdx, optIdx) => {
    if (!submitted) return styles.option;
    if (optIdx === questions[qIdx].correctAnswer) return styles.correct;
    if (answers[qIdx] === optIdx) return styles.incorrect;
    return styles.option;
  };

  const correctCount = answers.reduce(
    (acc, ans, idx) => (ans === questions[idx].correctAnswer ? acc + 1 : acc),
    0
  );

  return (
    <div className={`${styles.quizBox} ${colorMode === 'light' ? styles.lightMode : ''}`}>
      <h3 className={styles.title}>🧪 Test Your Spec Design Knowledge</h3>
      {questions.map((q, qIdx) => (
        <div key={qIdx} className={styles.questionBlock}>
          <p className={styles.question}>{q.question}</p>
          {q.options.map((opt, optIdx) => (
            <label
              key={optIdx}
              className={getClass(qIdx, optIdx)}
              onClick={() => handleSelect(qIdx, optIdx)}
            >
              <input
                type="radio"
                name={`question-${qIdx}`}
                checked={answers[qIdx] === optIdx}
                readOnly
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Submit Answers
        </button>
      ) : (
        <div className={styles.result}>
          ✅ You got {correctCount} out of {questions.length} correct!
        </div>
      )}
    </div>
  );
}
