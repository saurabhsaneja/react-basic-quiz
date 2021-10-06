import React, { useState } from 'react'

function Quiz({ name, questions, setScore, score, setScreen }) {
    const [whichQuestion, setWhichQuestion] = useState(0)

    const answerSelected = (number) => {
        if (number === questions[whichQuestion].correctAnswer) {
            setScore(score + 1)
        }
        console.log(whichQuestion + 1, "<", questions.length)
        if (whichQuestion + 1 < questions.length) {
            console.log("next question")
            setWhichQuestion(whichQuestion + 1)
        } else {
            console.log("next screen")
            setScreen("end")
        }
    }

    return (
        <div>
            <h1>Quiz</h1>
            <h3>{name} is playing quiz</h3>
            <h3>{name} current score is {score}</h3>
            <p>{questions[whichQuestion].question}</p>

            <button onClick={() => { answerSelected(1) }}>{questions[whichQuestion].optionA}</button>
            <button onClick={() => { answerSelected(2) }}>{questions[whichQuestion].optionB}</button>
            <button onClick={() => { answerSelected(3) }}>{questions[whichQuestion].optionC}</button>
            <button onClick={() => { answerSelected(4) }}>{questions[whichQuestion].optionD}</button>
        </div>)
}

export default Quiz
