import { useParams } from "react-router-dom";

const RecipeDetails = ({ recipes }) => {
  const { recipeID } = useParams();

  // Find recipe using ID
  const recipe = recipes.find((r) => r.id === recipeID);

  if (!recipe) {
    return <h2 className="text-center text-xl text-red-500">Recipe not found!</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">{recipe.name}</h1>
      
      <div className="flex justify-center mb-6">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full sm:w-96 h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-700">
          <strong className="font-semibold">Calories:</strong> {recipe.calories} kcal
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold">Servings:</strong> {recipe.servings}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Ingredients:</h3>
        <ul className="list-inside list-disc text-gray-700">
          {recipe.ingredients.map((ing, index) => (
            <li key={index} className="text-lg">{ing}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Instructions:</h3>
        <p className="text-lg text-gray-700">{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
