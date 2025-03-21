import RecipeList from "../components/RecipeList";

const Recipes = ({ recipes, onDelete }) => {
  return (
    <div>
      <h2>List of Recipes</h2>
      <RecipeList recipes={recipes} onDelete={onDelete} />
    </div>
  );
};

export default Recipes;