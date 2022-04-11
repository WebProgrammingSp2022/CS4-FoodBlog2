
let Data = function(id,name,ingredients,instructions,allergies,diet) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.allergies = allergies;
    this.diet = diet;

    console.log(allergies)
    console.log(diet)
}

module.exports = Data;
