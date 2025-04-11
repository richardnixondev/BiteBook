import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, onDelete }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(recipe.id));
  }, [recipe.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (favorites.includes(recipe.id)) {
      updatedFavorites = favorites.filter(id => id !== recipe.id);
    } else {
      updatedFavorites = [...favorites, recipe.id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (!recipe) {
    return <p>Error: No recipes here.</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-72 m-4 p-6">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.name}</h2>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Calories:</strong> {recipe.calories}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Servings:</strong> {recipe.servings}
      </p>

      <button
        onClick={toggleFavorite}
        className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
          isFavorite ? "bg-red-600 hover:bg-red-700" : "bg-gray-500 hover:bg-gray-600"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mb-4`}
      >
        {isFavorite ? "💔 Remove Favorite" : "❤️ Add to Favorites"}
      </button>

      {/* Button Container with flex layout */}
      <div className="flex flex-col space-y-3">
        <Link
          to={`/recipe/${recipe.id}`}
          className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 py-2 px-4 rounded-md w-full text-center transition duration-300"
        >
          <span>🔍</span>
          <span className="font-medium">See Details</span>
        </Link>

        <Link
          to={`/edit/${recipe.id}`}
          className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 py-2 px-4 rounded-md w-full text-center transition duration-300"
        >
          <span>✏️</span>
          <span className="font-medium">Edit</span>
        </Link>

        <button
          onClick={() => onDelete(recipe.id)}
          className="flex items-center justify-center space-x-2 text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md w-full text-center transition duration-300"
        >
          <span>🗑️</span>
          <span className="font-medium">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
