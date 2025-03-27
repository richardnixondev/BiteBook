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

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Função para salvar a receita
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Criando um ID único para a nova receita
    const newRecipe = {
      ...recipe,
      id: crypto.randomUUID(),
      calories: Number(recipe.calories),
      servings: Number(recipe.servings),
      ingredients: recipe.ingredients.split(","), // Transforma a string em array
    };

    onAdd(newRecipe); // Adiciona a receita no estado e Local Storage

    // Resetar o formulário após salvar
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
      <h1>Adicionar Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome da Receita"
          value={recipe.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="calories"
          placeholder="Calorias"
          value={recipe.calories}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL da Imagem"
          value={recipe.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="servings"
          placeholder="Porções"
          value={recipe.servings}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredientes (separados por vírgula)"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="strInstructions"
          placeholder="Instruções"
          value={recipe.strInstructions}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
};

export default AddRecipe;
