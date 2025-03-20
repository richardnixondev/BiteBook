import React from "react";

function RecipeItem({ recipe, onDelete }) {
  return (
    <div className="recipe-item" style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{recipe.name}</h2>
      <p><strong>Calories:</strong> {recipe.calories}</p>
      <img src={recipe.image} alt={recipe.name} style={{ width: "200px" }} />
      <p><strong>Servings:</strong> {recipe.servings}</p>
      
      <button onClick={() => onDelete(recipe.id)} style={{ backgroundColor: "red", color: "white", padding: "5px", cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
}

export default RecipeItem;
