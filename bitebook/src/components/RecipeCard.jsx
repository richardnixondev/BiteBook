import React from "react";

function RecipeCard({ recipe, onDelete }) {

  if (!recipe) {
    return <p>Erro: No recipes here.</p>;
  }

  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2> {/* Ajustado de title para name */}
      <p><strong>Calories:</strong> {recipe.calories}</p>
      <img src={recipe.image} alt={recipe.name} style={{ width: "200px" }} />
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <button onClick={() => onDelete(recipe.id)} style={{ backgroundColor: "red", color: "white", padding: "5px", cursor: "pointer" }}>
        Deletar
      </button>
    </div>
  );
}

export default RecipeCard;
