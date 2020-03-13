import React from 'react';
import './App.css';
import { Card } from './components';

// for styles
import { styles } from './styles/global';

function App() {
  return (
    <div style={styles.container}>
      <Card/>
    </div>
  );
}

export default App;