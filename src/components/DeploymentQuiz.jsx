import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './DeploymentQuiz.module.css';

const questions = [
  {
    question: 'What does AKS stand for?',
    options: [
      'Amazon Kubernetes System',
      'Azure Kubernetes Service',
      'Advanced Kube Scheduler',
      'Auto Kube Scaling'
    ],
    answer: 'Azure Kubernetes Service'
  },
  {
    question: 'Which resource in Kubernetes defines CPU and memory limits?',
    options: ['ConfigMap', 'Deployment', 'LimitRange', 'ResourceQuota'],
    answer: 'ResourceQuota'
  },
  {
    question: 'What is the purpose of a readiness probe?',
    options: [
      'To test if the container has crashed',
      'To verify if the container can receive traffic',
      'To kill the container if memory spikes',
      'To define service ports'
    ],
    answer: 'To verify if the container can receive traffic'
  }
];

export default function DeploymentQuiz() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex, option) => {
    if (!submitted) {
      setSelected({ ...selected, [qIndex]: option });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className={styles.quizBox}>
      <h3 className={styles.quizTitle}>🚀 Quick Check: AKS Deployment Quiz</h3>
      {questions.map((q, index) => (
        <div key={index} className={styles.questionBlock}>
          <p className={styles.questionText}>{index + 1}. {q.question}</p>
          <ul className={styles.optionsList}>
            {q.options.map((opt) => (
              <li
                key={opt}
                className={clsx(styles.option,
                  selected[index] === opt && styles.selected,
                  submitted && opt === q.answer && styles.correct,
                  submitted && selected[index] === opt && selected[index] !== q.answer && styles.incorrect
                )}
                onClick={() => handleSelect(index, opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {!submitted ? (
        <button className={styles.submitButton} onClick={handleSubmit}>Submit Answers</button>
      ) : (
        <p className={styles.resultText}>
          You got {Object.keys(selected).filter(i => selected[i] === questions[i].answer).length} out of {questions.length} correct.
        </p>
      )}
    </div>
  );
}