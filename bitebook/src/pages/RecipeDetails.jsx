import { useParams } from "react-router-dom";
import recipesData from "../recipes.json";

const RecipeDetails = () => {
  const { recipeID } = useParams();
  const recipe = recipesData.find((r) => r.id === recipeID);
  console.log(recipesData);
  
  if (!recipe) return <h1>Recipe not found</h1>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>

      {/*Conditional*/}
      { recipe.ingredients &&  
      <p>Ingredients {recipe.ingredients.map(item => {
        return(
          <li>
            {item}
          </li>
        )
      })}</p>}

    </div>
  );
};

export default RecipeDetails;
