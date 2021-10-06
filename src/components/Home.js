import React from 'react'

function Home({ name, setName, setScreen }) {
    return (
        <div>
            <h1>Home</h1>
            <label>
                Name: <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <input type="button" value="Start Quiz" onClick={() => setScreen("quiz")} />
        </div>
    )
}

export default Home
