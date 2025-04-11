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

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setRecipe((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...recipe,
      id: crypto.randomUUID(),
      calories: Number(recipe.calories),
      servings: Number(recipe.servings),
      ingredients: recipe.ingredients.split(","),
    };

    onAdd(newRecipe);

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
    <div className="add-recipe-container">
      <h1>Add New Recipe</h1>
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <div className="form-fields">
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
            placeholder="Image URL (optional)"
            value={recipe.image}
            onChange={handleChange}
          />
          <div className="upload-section">
            <label>Or upload a local image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
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
        </div>

        {recipe.image && (
          <div className="image-preview">
            <h4>Preview</h4>
            <img
              src={recipe.image}
              alt="Recipe Preview"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddRecipe;
