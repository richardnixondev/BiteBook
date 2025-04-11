import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Favorites() {
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from Local Storage
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  
    // Load favorite recipes using IDs stored in 'favorites'
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    const favorites = storedRecipes.filter((recipe) => favoriteIds.includes(recipe.id));
    setFavoriteRecipes(favorites);
  }, []);
  
  return (
    <div className="favorites-page">
      <h1 className="text-3xl font-bold text-center my-4">Favorite Recipes</h1>

      {favoriteRecipes.length === 0 ? (
        <p className="text-center text-lg">You don't have any favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card p-4 border rounded-lg shadow-lg"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{recipe.name}</h3>
              <p>Calories: {recipe.calories}</p>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                See Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
