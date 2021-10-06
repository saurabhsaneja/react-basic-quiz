import React from 'react'

function End({name, score, questions}) {
    return (
        <div>
            <h1>End</h1>
            <h3>{name} ended quiz</h3>
            <h3>you scored {score} / {questions.length}</h3>
        </div>
    )
}

export default End
