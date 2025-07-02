
import React from 'react';
import styles from './JSONandYAML.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const examples = {
  json: {
    title: 'Broken JSON (Missing Comma)',
    content: `{
  "user": {
    "name": "Alice"
    "age": 25,
    "email": "alice@example.com"
  }
}`,
  },
  yaml: {
    title: 'Incorrect YAML Indentation',
    content: `user:
  name: Alice
    age: 25
  email: alice@example.com`,
  },
  schema: {
    title: 'Schema Mismatch Example',
    content: `{
  "user": {
    "name": 12345,
    "email": "alice@example.com"
  }
}`,
  },
};

const JSONandYAML = ({ type = 'json' }) => {
  const { colorMode } = useColorMode();
  const themeClass = colorMode === 'dark' ? styles.dark : styles.light;
  const current = examples[type] || examples.json;

  return (
    <div className={styles.wrapper}>
      <div className={styles.codeBlock}>
        <h4 className={styles.header}>{current.title}</h4>
        <pre className={`${styles.pre} ${themeClass}`}>
          <code className={styles.code}>{current.content}</code>
        </pre>
      </div>
    </div>
  );
};

export default JSONandYAML;
