import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './KubernetesQuiz.module.css';

const questions = [
  {
    question: 'What is the purpose of a Kubernetes Secret?',
    options: [
      'To manage deployment replicas',
      'To store sensitive information securely',
      'To apply CPU limits',
      'To define ingress routes'
    ],
    answer: 'To store sensitive information securely'
  },
  {
    question: 'Which Kubernetes object controls access permissions?',
    options: ['Deployment', 'RBAC', 'ConfigMap', 'Pod'],
    answer: 'RBAC'
  },
  {
    question: 'What does a readiness probe do?',
    options: [
      'Checks if a pod is alive and restarts it if needed',
      'Scales the number of replicas based on CPU usage',
      'Determines if a pod is ready to receive traffic',
      'Provides logs to observability tools'
    ],
    answer: 'Determines if a pod is ready to receive traffic'
  },
  {
    question: 'Which tool auto-adjusts pod replicas based on metrics?',
    options: [
      'Horizontal Pod Autoscaler (HPA)',
      'Kubelet',
      'Helm',
      'ServiceMesh'
    ],
    answer: 'Horizontal Pod Autoscaler (HPA)'
  },
  {
    question: 'Why should ConfigMaps and Secrets be managed declaratively?',
    options: [
      'To allow CLI editing',
      'To simplify YAML syntax',
      'To enable versioning and repeatable deployments',
      'To restrict pod networking'
    ],
    answer: 'To enable versioning and repeatable deployments'
  }
];

export default function KubernetesQuiz() {
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
    <div className="postman-quiz">
      <h3 className={styles.quizTitle}>🧪 Kubernetes Deep Dive Quiz</h3>
      {questions.map((q, index) => (
        <div key={index} className="quiz-question">
          <p className="question">{index + 1}. {q.question}</p>
          <div className="options">
            {q.options.map((opt) => (
              <label
                key={opt}
                className={clsx(
                  selected[index] === opt && 'selected',
                  submitted && opt === q.answer && 'correct',
                  submitted && selected[index] === opt && selected[index] !== q.answer && 'incorrect'
                )}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={opt}
                  onChange={() => handleSelect(index, opt)}
                  disabled={submitted}
                />{' '}
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button className="submit-btn" onClick={handleSubmit}>Submit Quiz</button>
      ) : (
        <p className="results">
          ✅ You got {correctCount} out of {questions.length} correct.
        </p>
      )}
    </div>
  );
}
