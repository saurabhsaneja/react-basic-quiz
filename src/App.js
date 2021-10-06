import React, { useState } from 'react';
import End from './components/End';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
  const [screen, setScreen] = useState("home")
  const [name, setName] = useState("")
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([
    {
      id:0,
      question: "Which is this is a state in India",
      optionA:"Punjab",
      optionB:"california",
      optionC:"connecticut",
      optionD:"arizona",
      correctAnswer: 1
    },
    {
      id:2,
      question: "Which is Cal State Chico located",
      optionA:"california",
      optionB:"Punjab",
      optionC:"connecticut",
      optionD:"arizona",
      correctAnswer: 1
    },
    {
      id:3,
      question: "Which is San Francisco located",
      optionA:"california",
      optionB:"Punjab",
      optionC:"connecticut",
      optionD:"arizona",
      correctAnswer: 1
    },
  ])

  return (
    <div className="App">
      {name != "" && "Hi, " + name}
      {screen === "home" && <Home name={name} setName={setName} setScreen={setScreen}/>}
      {screen === "quiz" && <Quiz name={name} questions={questions} setScore={setScore} score={score} setScreen={setScreen}/>}
      {screen === "end" && <End name={name} score={score} questions={questions} />}
    </div>
  );
}

export default App;
