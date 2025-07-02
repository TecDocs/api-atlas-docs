import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './CICDQuiz.module.css';

const questions = [
  {
    question: 'What does CI stand for in DevOps?',
    options: ['Continuous Injection', 'Config Integration', 'Continuous Integration', 'Cluster Initialization'],
    answer: 'Continuous Integration'
  },
  {
    question: 'Which tool is commonly used to inject secrets in CI/CD pipelines?',
    options: ['Helm', 'Grafana', 'HashiCorp Vault', 'Ingress Controller'],
    answer: 'HashiCorp Vault'
  },
  {
    question: 'Why use Helm in a CI/CD pipeline?',
    options: [
      'To write custom Kubernetes controllers',
      'To manage and template Kubernetes deployments',
      'To monitor CPU usage',
      'To log cluster events'
    ],
    answer: 'To manage and template Kubernetes deployments'
  },
  {
    question: 'How does a CI pipeline typically start?',
    options: [
      'When a user logs into the dashboard',
      'When YAML configs are deleted',
      'When a code push triggers automation',
      'When Kubernetes nodes scale down'
    ],
    answer: 'When a code push triggers automation'
  },
  {
    question: 'What benefit does validating readiness probes in CI/CD provide?',
    options: [
      'Reduces CI pipeline duration',
      'Ensures pods start regardless of health',
      'Prevents deployment of unhealthy services',
      'Improves logging verbosity'
    ],
    answer: 'Prevents deployment of unhealthy services'
  }
];

export default function CICDQuiz() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index, option) => {
    if (!submitted) {
      setSelected({ ...selected, [index]: option });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const correctCount = Object.keys(selected).filter(
    (i) => selected[i] === questions[i].answer
  ).length;

  return (
    <div className={styles.quizBox}>
      <h3 className={styles.quizTitle}>🚀 CI/CD DevOps Knowledge Check</h3>
      {questions.map((q, index) => (
        <div key={index} className={styles.questionBlock}>
          <p className={styles.questionText}>{index + 1}. {q.question}</p>
          <ul className={styles.optionsList}>
            {q.options.map((opt) => (
              <li
                key={opt}
                className={clsx(
                  styles.option,
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
        <button className={styles.submitButton} onClick={handleSubmit}>Submit Quiz</button>
      ) : (
        <p className={styles.resultText}>
          You got {correctCount} out of {questions.length} correct.
        </p>
      )}
    </div>
  );
}
