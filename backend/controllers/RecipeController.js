const Recipe = require("../models/RecipeModel");

const createRecipe = async (req, res) => {
  try {
    const { recipeName, recipeItems, recipeImage} = req.body;
    const recipe = new Recipe({
      recipeName,
      recipeItems,
      recipeImage
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipes = await recipe.find();
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const {recipeName, recipeItems, recipeImage } = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { recipeName, recipeItems, recipeImage },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(updatedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createRecipe, getRecipe, deleteRecipe, updateRecipe };
