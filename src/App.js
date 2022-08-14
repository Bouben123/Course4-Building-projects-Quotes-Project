import React from 'react';
import { useState } from 'react';
import './App.css';


const quotes =[
  "Be happy the way you are",
  "Be happy even the world go against you",
  "You are who you are, don't change for anyone",
  "You are pretty the way you are"
]
function App() {
  const [counter , setCounter] = useState(3)
  return (
    <div 
        onClick={(event) => setCounter(counter + 1)}
        className="App"
      >
        {quotes[counter % quotes.length]}
    </div>
  );
}

export default App;
