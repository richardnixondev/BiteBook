import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditRecipe = ({ recipes, setRecipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  // Carrega a receita correta ao iniciar
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const foundRecipe = storedRecipes.find((r) => r.id === id);

    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      setRecipe(null);
    }
  }, [id]);

  if (!recipe) {
    return <h1>Receita não encontrada!</h1>;
  }

  // Atualiza os valores conforme o usuário edita
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Salva as alterações e atualiza no Local Storage
  const handleSave = () => {
    const updatedRecipes = recipes.map((r) => (r.id === id ? recipe : r));
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      <h1>Editando: {recipe.name}</h1>
      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleChange}
      />

      <label>Calorias:</label>
      <input
        type="number"
        name="calories"
        value={recipe.calories}
        onChange={handleChange}
      />

      <label>Imagem (URL):</label>
      <input
        type="text"
        name="image"
        value={recipe.image}
        onChange={handleChange}
      />

      <label>Porções:</label>
      <input
        type="number"
        name="servings"
        value={recipe.servings}
        onChange={handleChange}
      />

      <label>Ingredientes (separados por vírgula):</label>
      <input
        type="text"
        name="ingredients"
        value={recipe.ingredients.join(", ")}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split(",") })}
      />

      <label>Instruções:</label>
      <textarea
        name="strInstructions"
        value={recipe.strInstructions}
        onChange={handleChange}
      />

      <button
        onClick={handleSave}
        style={{ marginTop: "10px", padding: "5px", backgroundColor: "green", color: "white" }}
      >
        💾 SALVAR
      </button>
    </div>
  );
};

export default EditRecipe;
