const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
  },
  recipeItems: {
    type: Number,
  },
  recipeImage: {
      data: Buffer, 
      contentType: String     
  },
});

const Person = mongoose.model("Recipe", recipeSchema);

module.exports = Person;
