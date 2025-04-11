import { useParams } from "react-router-dom";

const RecipeDetails = ({ recipes }) => {
  const { recipeID } = useParams();

  // Find recipe using ID
  const recipe = recipes.find((r) => r.id === recipeID);

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} width="200" />
      <p><strong>Calories:</strong> {recipe.calories} kcal</p>
      <p><strong>servings:</strong> {recipe.servings}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h3>Ingredients:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
