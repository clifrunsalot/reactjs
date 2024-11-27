import { React, useState } from 'react'

function UpdateMessage() {

    const [word, setWord] = useState('Eat');

    const handleClick = () => {
        setWord('Work');
    }

    return (
        <div>
            <h1> {word + " at Little Lemon"}</h1>
            <button onClick={handleClick}>Click here to change message</button>
        </div>
    )
}

export default UpdateMessage
