import React from 'react'
import { useMealsListContext } from './MealsProvider';

/*
* Counter.js
* This component will display the number of meals for today.
*/

function Counter() {

    // Get the meals list from the context
    const { meals } = useMealsListContext();

    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    )
}

export default Counter
