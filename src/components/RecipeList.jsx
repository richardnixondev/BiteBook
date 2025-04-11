import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onDelete }) {
  const filteredRecipes = recipes.filter(recipe => recipe.servings > 0);

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p className="text-center text-lg">No recipes here!</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default RecipeList;
