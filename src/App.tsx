import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemePanel} from './components/ThemePanel';
import {CounterPanel} from './components/CounterPanel';
function App() {
  return (
    <div className="App">



      <ThemePanel></ThemePanel>
        <CounterPanel></CounterPanel>


    </div>
  );
}

export default App;
