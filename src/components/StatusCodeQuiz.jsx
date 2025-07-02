import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const questions = [
  {
    question: 'A user tries to access a private endpoint without logging in. What response should they receive?',
    options: ['200 OK', '403 Forbidden', '401 Unauthorized', '404 Not Found'],
    answer: '401 Unauthorized',
  },
  {
    question: 'Your client mistyped the endpoint URL. What status code should your API return?',
    options: ['400 Bad Request', '404 Not Found', '500 Internal Server Error', '302 Found'],
    answer: '404 Not Found',
  },
  {
    question: 'Your API received malformed JSON in a POST body. What status code is appropriate?',
    options: ['201 Created', '200 OK', '400 Bad Request', '204 No Content'],
    answer: '400 Bad Request',
  },
];

export default function StatusCodeQuiz() {
  const { colorMode } = useColorMode();
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const isDark = colorMode === 'dark';

  const textColor = isDark ? '#fff' : '#000';
  const bgColor = isDark ? '#1a1a1a' : '#f5f5f5';

  const handleSelect = (qIdx, option) => {
    if (!submitted) {
      setSelected({ ...selected, [qIdx]: option });
    }
  };

  const handleSubmit = () => setSubmitted(true);

  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: bgColor,
        borderRadius: '12px',
        boxShadow: isDark ? '0 2px 6px rgba(0,0,0,0.6)' : '0 2px 6px rgba(0,0,0,0.1)',
        color: textColor,
        marginBottom: '2rem',
      }}
    >
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>🧠 Quick Status Code Quiz</h3>
      {questions.map((q, qIdx) => (
        <div key={qIdx} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Q{qIdx + 1}:</strong> {q.question}
          </div>
          {q.options.map((opt, oIdx) => {
            const isCorrect = submitted && opt === q.answer;
            const isWrong = submitted && selected[qIdx] === opt && opt !== q.answer;
            const bg =
              isCorrect ? '#06d6a0' :
              isWrong ? '#ef476f' :
              isDark ? '#333' : '#e9e9e9';
            const color = isCorrect || isWrong ? '#fff' : textColor;

            return (
              <div
                key={oIdx}
                onClick={() => handleSelect(qIdx, opt)}
                style={{
                  padding: '0.5rem 0.75rem',
                  marginBottom: '0.4rem',
                  backgroundColor: bg,
                  color,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: selected[qIdx] === opt ? `2px solid ${isDark ? '#fff' : '#000'}` : '1px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                {opt}
              </div>
            );
          })}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          style={{
            padding: '0.6rem 1.2rem',
            fontSize: '1rem',
            backgroundColor: isDark ? '#06d6a0' : '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          Submit Answers
        </button>
      ) : (
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          ✅ Quiz Complete! Review your answers above.
        </div>
      )}
    </div>
  );
}

