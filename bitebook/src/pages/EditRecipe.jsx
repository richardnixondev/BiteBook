import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import recipesData from "../recipes.json";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recipeIndex = recipesData.findIndex((r) => r.id === parseInt(id));
  if (recipeIndex === -1) return <h1>Receita não encontrada</h1>;

  const [recipe, setRecipe] = useState({ ...recipesData[recipeIndex] });

  // Function to save changes (simulated, since JSON is not changeable)
  const handleSave = () => {
    alert("Recipe saved! (Simulation, since static JSON cannot be changed)");
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      <h1>Editing: {recipe.name}</h1>
      <label>Name:</label>
      <input 
        type="text" 
        value={recipe.name} 
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} 
      />
      <label>Description:</label>
      <textarea 
        value={recipe.description} 
        onChange={(e) => setRecipe({ ...recipe, description: e.target.value })} 
      />
      <button onClick={handleSave} style={{ marginTop: "10px", padding: "5px", backgroundColor: "green", color: "white" }}>
        💾 SAVE
      </button>
    </div>
  );
};

export default EditRecipe;
