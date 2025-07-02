
import React, { useState } from 'react';
import styles from './ScalingApisQuiz.module.css';

const questions = [
  {
    question: "What tool injects secrets into Kubernetes pods during CI/CD?",
    options: ["ArgoCD", "Helm", "Key Vault / Secrets Manager", "RBAC"],
    answer: "Key Vault / Secrets Manager"
  },
  {
    question: "What is the benefit of using Helm in a pipeline?",
    options: [
      "Increased pod memory",
      "Templatized deployment across environments",
      "Prevents YAML validation",
      "Triggers GitHub Actions"
    ],
    answer: "Templatized deployment across environments"
  },
  {
    question: "How do GitOps tools like ArgoCD ensure consistency?",
    options: [
      "Manual CLI syncing",
      "Branch merges",
      "Watching Git state and applying declarative diffs",
      "Cron jobs on nodes"
    ],
    answer: "Watching Git state and applying declarative diffs"
  }
];

export default function ScalingApisQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setShowScore(true);
  };

  return (
    <div className={styles.quiz}>
      {showScore ? (
        <h3>Your Score: {score} / {questions.length}</h3>
      ) : (
        <div>
          <h3>{questions[current].question}</h3>
          <div className={styles.options}>
            {questions[current].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(opt)}>{opt}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
