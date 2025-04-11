import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { HeaderPage } from "./components/HeaderPage";
import { FooterPage } from "./components/FooterPage";
import React, { useState, useEffect } from "react";
import recipesData from "./recipes.json";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";
import EditRecipe from "./pages/EditRecipe";
import { DashBoard } from "./pages/DashBoard";
import { Profile } from "./pages/Profile";
import { Theme } from "./pages/Theme";
import AddRecipe from "./pages/AddRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);

// Load recipes from Local Storage on startup
useEffect(() => {
  const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
  if (storedRecipes) {
    setRecipes(storedRecipes);
  } else {
    localStorage.setItem("recipes", JSON.stringify(recipesData));
    setRecipes(recipesData);
  }
}, []);

// Add a new recipe and save it to Local Storage
  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

// Delete a recipe and update Local Storage
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
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
            <Route path="/edit/:id" element={<EditRecipe recipes={recipes} setRecipes={setRecipes} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/recipes"
              element={<Recipes recipes={recipes} onDelete={deleteRecipe} />}
            />
            <Route
              path="/recipe/:recipeID"
              element={<RecipeDetails recipes={recipes} />}
            />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addrecipe" element={<AddRecipe onAdd={addRecipe} />} />
            <Route path="/theme" element={<Theme />} />
          </Routes>
        </div>
      </div>
      <FooterPage />
    </Router>
  );
}


export default App;
