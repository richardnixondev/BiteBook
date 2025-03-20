import React from "react";
import RecipeItem from "./RecipeItem";


function RecipeList({ recipes, onDelete }) {

  const filteredRecipes = recipes.filter(recipe => recipe.servings > 0);

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes here!.</p>;
  }
// If objects in your JSON dataset don’t contain any boolean property,
//  make a conditional check that results in true or false. For example, 
// you can check if a value is greater or less than a specified number.
  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default RecipeList;
