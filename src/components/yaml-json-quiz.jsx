import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const quizData = [
  {
    question: 'What is the correct way to define a list in YAML?',
    options: [
      'list: ["item1", "item2"]',
      'list = ["item1", "item2"]',
      'list: \n  - item1\n  - item2',
      '{ list: [item1, item2] }'
    ],
    correctIndex: 2,
    explanation: 'YAML uses dashes (-) and indentation to define list items on new lines.'
  },
  {
    question: 'Which of the following is NOT true about YAML?',
    options: [
      'YAML is more human-readable than JSON.',
      'YAML requires curly braces for objects.',
      'YAML uses indentation to represent nesting.',
      'YAML is often used in configuration files.'
    ],
    correctIndex: 1,
    explanation: 'YAML does not use curly braces for objects; that is a JSON convention.'
  },
  {
    question: 'Which syntax is valid in both JSON and YAML?',
    options: [
      'name: "API Atlas"',
      '{ "name": "API Atlas" }',
      'name = API Atlas',
      'name => API Atlas'
    ],
    correctIndex: 1,
    explanation: 'JSON syntax with key-value pairs in braces and double quotes is valid JSON and can be embedded in YAML.'
  }
];

export default function YamlJsonQuiz() {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const { colorMode } = useColorMode();

  const handleSelect = (questionIndex, optionIndex) => {
    if (!submitted) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = optionIndex;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const bgColor = colorMode === 'dark' ? '#222' : '#fff';
  const textColor = colorMode === 'dark' ? '#eee' : '#111';
  const borderColor = colorMode === 'dark' ? '#444' : '#ddd';
  const correctColor = '#38b000';
  const incorrectColor = '#d00000';

  return (
    <div style={{ background: bgColor, color: textColor, padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '1rem' }}>🧠 YAML vs JSON Quiz</h2>
      {quizData.map((q, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>{i + 1}. {q.question}</h4>
          {q.options.map((opt, j) => {
            const isSelected = answers[i] === j;
            const isCorrect = submitted && q.correctIndex === j;
            const isWrong = submitted && isSelected && j !== q.correctIndex;
            return (
              <div
                key={j}
                onClick={() => handleSelect(i, j)}
                style={{
                  padding: '0.5rem 1rem',
                  margin: '0.25rem 0',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  border: `1px solid ${borderColor}`,
                  backgroundColor: isCorrect ? correctColor : isWrong ? incorrectColor : isSelected ? '#ccc' : 'transparent',
                  color: isCorrect || isWrong ? '#fff' : textColor,
                  fontWeight: isSelected ? 'bold' : 'normal'
                }}>
                {opt}
              </div>
            );
          })}
          {submitted && (
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#999' }}>💡 {q.explanation}</p>
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={submitted}
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '0.75rem 1.25rem',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
        {submitted ? '✅ Submitted' : 'Submit Answers'}
      </button>
    </div>
  );
}
