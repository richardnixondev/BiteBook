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
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">Recipe not found!</h1>
      </div>
    );
  }

 
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // save updates on localStorage
  const handleSave = () => {
    const updatedRecipes = recipes.map((r) => (r.id === id ? recipe : r));
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    navigate(`/recipe/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Editing: {recipe.name}</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe's Name</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Recipe's name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Calories</label>
          <input
            type="number"
            name="calories"
            value={recipe.calories}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type calories number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image (URL)</label>
          <input
            type="text"
            name="image"
            value={recipe.image}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="URL Image"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Servings</label>
          <input
            type="number"
            name="servings"
            value={recipe.servings}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="number of servings"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">ingredients (separated by comma)</label>
          <input
            type="text"
            name="ingredients"
            value={recipe.ingredients.join(", ")}
            onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split(",") })}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="separated by comma"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea
            name="strInstructions"
            value={recipe.strInstructions}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="6"
            placeholder="Describe the method of prepare"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full py-3 mt-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          💾 Salvar
        </button>
      </div>
    </div>
  );
};

export default EditRecipe;
