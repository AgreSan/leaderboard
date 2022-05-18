import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import './components/style.css';
import React, {useState} from 'react';

function App() {
 const [word, setBackground] = useState('GreggerIsland')
  return (
    
    <div className = {word} >
    <div className = "roomtitle">{word}</div>
    <div className="App" id='main'>
   
      <Board changeBackground={word => setBackground(word) } ></Board>
      
    </div>
    </div>
  );
}

export default App;
