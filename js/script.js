//The two subjects in question; the userInput, and the foodRecipe data
let foodRecipe, userInput;
//Create variables that correspond to the html ids that we will be working with
const $foodName = $("#dishname");
const $region = $("#region");
const $category = $("#category");
const $prepInstruct = $("#instructions");
const $link = $("#youtube");
const $input = $('input[type="text"]');
const $img = $("#image");
const $ingredients = $("#ingr");

//Referencing "form", when user clicks "submit", perform the handleGetData function
$("form").on("submit", handleGetData);

//event is set as parameter inside of this function
//.preventDefault stops the default action of a selected element from happening by a user
function handleGetData(event) {
  event.preventDefault();

  //declaring userInput variable. Using .val() to get the current value of the element in the $input id and logging it
  userInput = $input.val();
  console.log(userInput);

  //Promise function that concatenates the user input to the rest of the URL string that links to the API. This tells the program to perform this promise function last
  $.ajax(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput

    //after promise fulfilled, then if the value(meals) of the key(data) returns a "null value", pop an alert that tells the user that the food item is unavailable, or else, assign the key name to "foodRecipe"
    //render the function
  ).then((data) => {
    if (data.meals === null) {
      alert("Sorry, this food item is not available at this time");
    } else {
      foodRecipe = data;
      // Variables where we'll put the ingredients and measures.
      const ingredients = [];
      const measures = [];
      // Loop, up to 20. Can increase if needed.
      for (let i = 1; i <= 20; i++) {
        // Find the ingredient. Add it to the ingredients array if it exists.
        // Otherwise don't do anything.

        const ingredient = foodRecipe.meals[0][`strIngredient${i}`];
        if (ingredient !== undefined && ingredient !== "") {
          ingredients.push(ingredient);
        }
      }
      console.log(ingredients);
      render(ingredients);
    }
  });
}

function render(ingredients) {
  $foodName.text(foodRecipe.meals[0].strMeal);
  $region.text(foodRecipe.meals[0].strArea);
  $category.text(foodRecipe.meals[0].strCategory);
  $prepInstruct.text(foodRecipe.meals[0].strInstructions);
  let youtubeVar = foodRecipe.meals[0].strYoutube;
  youtubeVar = youtubeVar.replace("watch?v=", "embed/");
  $link.attr("src", youtubeVar);
  $img.attr("src", foodRecipe.meals[0].strMealThumb);
  $ingredients.text(ingredients.join(","));
}
