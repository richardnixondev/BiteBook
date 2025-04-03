import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function DashBoard() {
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from Local Storage
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);

    // Filter favorite recipes (assuming there is an 'isFavorite' property to mark favorites)
    const favorites = storedRecipes.filter((recipe) => recipe.isFavorite);
    setFavoriteRecipes(favorites);
  }, []);

  const totalCalories = recipes.reduce((total, recipe) => total + recipe.calories, 0);

  return (
    <div>
      <h4>Welcome to your Dashboard!</h4>
      <p>Here you can view your favorite recipes, check statistics, and add new recipes.</p>

      <div>
        <h5>Statistics</h5>
        <p><strong>Total Recipes:</strong> {recipes.length}</p>
        <p><strong>Calories Totais:</strong> {totalCalories}</p>
      </div>

      <div>
        <h5>Latest Registered Recipes</h5>
        {recipes.length === 0 ? (
          <p>No recipes registered yet.</p>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {recipes.slice(-3).reverse().map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                  maxWidth: "250px",
                  textAlign: "center",
                }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h3>{recipe.name}</h3>
                <p>Calories: {recipe.calories}</p>
                <p>Added on: {new Date(recipe.timestamp).toLocaleString()}</p>
                <Link to={`/recipe/${recipe.id}`}>See Details</Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h5>Favorite Recipes</h5>
        {favoriteRecipes.length === 0 ? (
          <p>No favorite recipes yet.</p>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {favoriteRecipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                  maxWidth: "250px",
                  textAlign: "center",
                }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h3>{recipe.name}</h3>
                <p>Calories: {recipe.calories}</p>
                <Link to={`/recipe/${recipe.id}`}>See Details</Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <Link to="/addrecipe">
          <button style={{ padding: "10px", backgroundColor: "green", color: "white" }}>
            Adicionar Nova Receita
          </button>
        </Link>
      </div>
    </div>
  );
}
