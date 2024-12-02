import React from 'react'
import { useMealsListContext } from './MealsProvider';

/*
* MealsList.js
* This component will display the list of meals for today.
*/

const MealsList = () => {

    // Get the meals list from the context
    const { meals } = useMealsListContext();

    return (
        <div>
            <h1>Meals List using Context API</h1>

            {/* Use map to display the list of meals */}
            {meals.map((meal, index) => (<h2 className="card" key={index}>{meal}</h2>))}
        </div>
    )

}

export default MealsList
