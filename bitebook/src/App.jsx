import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { HeaderPage } from "./components/HeaderPage";
import { FooterPage } from "./components/FooterPage";
import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import recipesData from "./recipes.json";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState(recipesData); // state of recipe

  // delete recipe using id
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <>
      <HeaderPage />
      <div className="header">
        <NavBar />
          <SideBar />
           <div className="App">
           <h1>Bite Book</h1>
           <RecipeList recipes={recipes} onDelete={deleteRecipe} />
           </div>
      </div>
      <FooterPage />
    </>

  );
}

export default App;
