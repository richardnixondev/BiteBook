import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import recipesData from "./recipes.json";

function App() {
  const [recipes, setRecipes] = useState(recipesData); // state of recipe

  // delete recipe using id
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <>
    <div className="App">
      <h1>Bite Book</h1>
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
    </div>

    </>

  );
}

export default App;
