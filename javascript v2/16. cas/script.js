/**
 *
 * Izlistati 9 recepta
 * Ispisati u HTML-u
 * Sortirati po imenu (title) po abecednom redu
 */

let recipeHolder = document.getElementById("recipes");
let tagsHolder = document.getElementById("tagsHolder");

let params = new URLSearchParams(window.location.search);
let category = params.get('category');

if(category === null) {

    fetch("https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc")
        .then(response => response.json())
        .then(function(data) {
            for(let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        });

} else {
    let apiUrl = "https://dummyjson.com/recipes/tag/"+category;

    fetch(apiUrl).then(response => response.json())
        .then(function(data) {
            recipeHolder.innerHTML = "";
            for(let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        })
}


fetch("https://dummyjson.com/recipes/tags")
    .then(response => response.json())
    .then(function(data) {
        for(let tag of data) {
            let tagElement = document.createElement("option");
            tagElement.innerText = tag;
            tagElement.value = tag;
            tagsHolder.append(tagElement);
        }
    })

tagsHolder.addEventListener("change", function() {
    let apiUrl = "https://dummyjson.com/recipes/tag/"+this.value;

    fetch(apiUrl).then(response => response.json())
        .then(function(data) {
            recipeHolder.innerHTML = "";
            for(let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        })
});

function appendCookingRecipe(recipe) {
    let cookingInstructions = buildInstructionsElement(recipe.instructions);

    let singleRecipe = document.createElement("div");

    let recipeTitle = document.createElement("h1");
    recipeTitle.innerText = recipe.name;

    let recipeCuisine = document.createElement("p");
    recipeCuisine.innerText = recipe.cuisine;

    let permalinkElement = document.createElement("a");
    permalinkElement.innerText = "Show recipe";
    permalinkElement.href = "permalink.html?id="+recipe.id; // permalink.html?id=5

    singleRecipe.append(recipeTitle, recipeCuisine, cookingInstructions, permalinkElement);

    recipeHolder.append(singleRecipe);
}

/**
 * instructions = [
 *     "In a bowl, mix ground meat, grated onions, minced garlic, chopped parsley, and spices.",
 *     "Form the mixture into kebab shapes and grill until fully cooked.",
 *     "Serve the kebabs on flatbread with a drizzle of tahini sauce.",
 *     "Enjoy these flavorful Turkish Kebabs with your favorite sides."
 * ]
 *
 * <ul><li>Preheat the oven to 475°F (245°C).</li><li>Roll out the pizza dough and spread tomato sauce evenly.</li><li>Top with slices of fresh mozzarella and fresh basil leaves.</li><li>Drizzle with olive oil and season with salt and pepper.</li><li>Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.</li><li>Slice and serve hot.</li></ul>
 */
function buildInstructionsElement(instructions) {
    let recipeInstructions = document.createElement("ul");

    for(let instruction of instructions) {
        let instructionElem = document.createElement("li");
        instructionElem.innerText = instruction;

        recipeInstructions.append(instructionElem);
    }

    return recipeInstructions;
}