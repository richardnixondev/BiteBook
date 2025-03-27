import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditRecipe = ({ recipes, setRecipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  // load recipes
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

  // Update values as user choices
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Save chances and store at local storage
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

      <label>calories:</label>
      <input
        type="number"
        name="calories"
        value={recipe.calories}
        onChange={handleChange}
      />

      <label>Image (URL):</label>
      <input
        type="text"
        name="image"
        value={recipe.image}
        onChange={handleChange}
      />

      <label>Servings:</label>
      <input
        type="number"
        name="servings"
        value={recipe.servings}
        onChange={handleChange}
      />

      <label>ingredients (separate by comma):</label>
      <input
        type="text"
        name="ingredients"
        value={recipe.ingredients.join(", ")}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split(",") })}
      />

      <label>Instructions:</label>
      <textarea
        name="strInstructions"
        value={recipe.strInstructions}
        onChange={handleChange}
      />

      <button
        onClick={handleSave}
        style={{ marginTop: "10px", padding: "5px", backgroundColor: "green", color: "white" }}
      >
        💾 SAVE
      </button>
    </div>
  );
};

export default EditRecipe;
