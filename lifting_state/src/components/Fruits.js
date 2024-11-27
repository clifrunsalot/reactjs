import React from 'react'

const Fruits = (props) => {

    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitname}</p>)}
        </div>
    )
}

export default Fruits;


