import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function DashBoard() {
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Carregar receitas do Local Storage
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);

    // Filtrar receitas favoritas (supondo que há uma propriedade 'isFavorite' para marcar favoritas)
    const favorites = storedRecipes.filter((recipe) => recipe.isFavorite);
    setFavoriteRecipes(favorites);
  }, []);

  const totalCalories = recipes.reduce((total, recipe) => total + recipe.calories, 0);

  return (
    <div>
      <h4>Bem-vindo ao seu Dashboard!</h4>
      <p>Aqui você pode ver suas receitas favoritas, estatísticas e adicionar novas receitas.</p>

      <div>
        <h5>Estatísticas</h5>
        <p><strong>Total de Receitas:</strong> {recipes.length}</p>
        <p><strong>Calorias Totais:</strong> {totalCalories}</p>
      </div>

      <div>
        <h5>Últimas Receitas Cadastradas</h5>
        {recipes.length === 0 ? (
          <p>Nenhuma receita cadastrada ainda.</p>
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
                <p>Calorias: {recipe.calories}</p>
                <p>Adicionada em: {new Date(recipe.timestamp).toLocaleString()}</p>
                <Link to={`/recipe/${recipe.id}`}>Ver Detalhes</Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h5>Receitas Favoritas</h5>
        {favoriteRecipes.length === 0 ? (
          <p>Nenhuma receita favorita ainda.</p>
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
                <p>Calorias: {recipe.calories}</p>
                <Link to={`/recipe/${recipe.id}`}>Ver Detalhes</Link>
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
