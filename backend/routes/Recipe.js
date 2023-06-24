const {
  createRecipe,
  getRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/RecipeController");
const router = require("express").Router();

router.post("/create", createRecipe);  // for creating new Recipe
router.get("/allRecipes", getRecipe);  // for getting new Recipe
router.delete("/persons/:id", deleteRecipe); // for Deleting existing Recipe
router.put("/persons/:id", updateRecipe);  // for Updating Recipe

module.exports = router;
