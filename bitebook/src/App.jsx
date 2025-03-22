import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { HeaderPage } from "./components/HeaderPage";
import { FooterPage } from "./components/FooterPage";
import React, { useState } from "react";
import recipesData from "./recipes.json";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/notfound";
import EditRecipe from "./pages/EditRecipe";


function App() {
  const [recipes, setRecipes] = useState(recipesData);

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <Router>
      <HeaderPage />
      <div className="header">
        <NavBar />
        <SideBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/edit/:id" element={<EditRecipe />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes recipes={recipes} onDelete={deleteRecipe} />} />
            <Route path="/recipe/:recipeID" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
      <FooterPage />
    </Router>
  );
}

export default App;
