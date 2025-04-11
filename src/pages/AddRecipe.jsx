import { useState } from "react";
import * as Headless from '@headlessui/react'

const Label = ({ children }) => {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  );
};

const Textarea = ({ ...props }) => {
  return (
    <textarea
      {...props}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  );
};

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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <Headless.Field className="mb-4">
          <Label>Recipe Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Recipe's Name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </Headless.Field>

        <Headless.Field className="mb-4">
          <Label>Calories</Label>
          <Input
            type="number"
            name="calories"
            placeholder="Calories"
            value={recipe.calories}
            onChange={handleChange}
            required
          />
        </Headless.Field>

        <Headless.Field className="mb-4">
          <Label>Image URL (optional)</Label>
          <Input
            type="text"
            name="image"
            placeholder="Image URL (optional)"
            value={recipe.image}
            onChange={handleChange}
          />
        </Headless.Field>

        <Headless.Field className="mb-4">
          <Label>Or Upload a Local Image</Label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </Headless.Field>

        <Headless.Field className="mb-4">
          <Label>Servings</Label>
          <Input
            type="number"
            name="servings"
            placeholder="Servings"
            value={recipe.servings}
            onChange={handleChange}
            required
          />
        </Headless.Field>

        <Headless.Field className="mb-4">
          <Label>Ingredients (separated by comma)</Label>
          <Input
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </Headless.Field>

        <Headless.Field className="mb-4">
          <Label>Instructions</Label>
          <Textarea rows="10" cols="70"
            name="strInstructions"
            placeholder="Instructions"
            value={recipe.strInstructions}
            onChange={handleChange}
            required
          />
        </Headless.Field>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Add Recipe
        </button>
      </form>

      {recipe.image && (
        <div className="mt-6 text-center">
          <h4 className="font-semibold mb-2">Image Preview</h4>
          <img
            src={recipe.image}
            alt="Recipe Preview"
            className="rounded-md shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default AddRecipe;
