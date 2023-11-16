import React, { useEffect } from "react";

function Game() {
    const [solution, setSolution] = useState(null)

    useEffect(() => {
        fetch('')
    }, [])

    return (
        <div className='App'>
            <h1>Berkeley Wordle</h1>
        </div>
    )
};

export default Game;