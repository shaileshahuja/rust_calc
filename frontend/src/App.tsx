import React from 'react';
import { Calculator } from './components/Calculator';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
  );
};

export default App;