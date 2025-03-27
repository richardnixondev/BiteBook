import { useState } from "react";

const AddRecipe = ({ onAdd }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    calories: "",
    image: "",
    servings: "",
    ingredients: "",
    strInstructions: "",
  });

// Update state as the user types
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

// Function to save the recipe
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

 // Create a unique ID for the new recipe
    const newRecipe = {
      ...recipe,
      id: crypto.randomUUID(),
      calories: Number(recipe.calories),
      servings: Number(recipe.servings),
      ingredients: recipe.ingredients.split(","),
    };

    onAdd(newRecipe);// Add the recipe to state and Local Storage

// Reset the form after saving
    setRecipe({
      name: "",
      calories: "",
      image: "",
      servings: "",
      ingredients: "",
      strInstructions: "",
    });
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe's Name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories"
          value={recipe.calories}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Imagem's Recipe"
          value={recipe.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="servings"
          placeholder="Servings"
          value={recipe.servings}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients (separated by comma)"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="strInstructions"
          placeholder="Instructions"
          value={recipe.strInstructions}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
