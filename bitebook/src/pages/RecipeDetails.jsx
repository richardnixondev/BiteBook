import { useParams } from "react-router-dom";
import recipesData from "../recipes.json";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <h1>Recipe not found</h1>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <p>Ingredients {recipe.ingredients.join(", ")}</p>
    </div>
  );
};

export default RecipeDetails;
