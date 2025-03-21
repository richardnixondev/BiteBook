import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onDelete }) {
  const filteredRecipes = recipes.filter(recipe => recipe.servings > 0);

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes here!.</p>;
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default RecipeList;
