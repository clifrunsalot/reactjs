import React from 'react'

/*
* MealsProvider.js
* This component will provide the meals list to the rest of the application. 
*/

// Creates the context object
const MealsContext = React.createContext();

// The list of meals for today
const todaysMeals = ["Baked Chicker", "Baked Potato", "Salad"];

// The provider component
const MealsProvider = ({ children }) => {

  // The state to hold the meals list
  const [meals, setMealsList] = React.useState(todaysMeals);

  return (
    <div>

      {/* Provide access to state data to child components */}
      <MealsContext.Provider value={{ meals }} >
        {children}
      </MealsContext.Provider>

    </div>
  )
}

// Export custom hook to use the meals list 
export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
