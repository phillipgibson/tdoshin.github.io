# The Food DataBase

## "An app that returns random, fun and exciting recipes for any food item or ingredient that you give it"

### Website where API used - https://www.themealdb.com/api.php

### Technologies Used - VSCode, JavaScript, HTML, CSS, jQuery, Ajax

### Link to Repo - https://github.com/tdoshin/tdoshin.github.io

# The Project

[x] Found an API that contains a list of recipes from 32 different countries

- Tested and confirmed that API works by inserting food name e.g. "Pasta" into value in link https://www.themealdb.com/api/json/v1/1/search.php?s=Pasta

  -This API does not expand to dishes across Africa and the Carribbean. I want to change this. But for now, I'll work with what I have

[x] Created folders, boiler plates, and went "Live" via VSCode

[x] Created page text appearance in index.html file

[x] Defined constants in script.js file

[x] Pulled data from mealdb api using ajax and promises

[x] Rendered the function so it displays on webpage

- Struggled with pulling the ingredients data from the API. This is because for each recipe, the ingredients are not in the form of an array, but instead individual key value pairs. For example strIngredient 1: onions, strIngredient2: tomatoes, strIngredient3: salt, etc. Devised a solution that will loop over these key value pair items and push its values into an empty array. As each recipe has a different number of ingredients, I set the max number of ingredients to "20". I was then able to access these items (now in an array) and render them into my render function.

- Having the link to Youtube display as embedded on my website also took some time. For the Youtube part, I kept getting a X-Frame-Options "Same Origin" error. Had to convert youtube video url to an embedded code in order for it to display on my webpage.

[x] Attempting to get a return message when user enters an item that does not exist in the api data and clear the page for the next input. Used alert system instead. Alert will pop "Sorry, this food is not available at this time"

[x] CSS Styling- For this one, I had an idea of how I wanted my application to display but very little idea on what commands to use to achieve this. So as last resort, I went to Youtube for help and followed along a tutorial and customized this to my personal taste. The website is mobile friendly. For the background image, I discovered this awesome website `pexels.com` where I pulled this picture from.

### Realized I was using the enterprise git repository instead of my personal, struggled with creating a clone due to access permission issues so had to re-create entire project into personal, loosing all my past commits. For commit history, go to https://git.generalassemb.ly/tdoshin/Food-DB-Project1

### Outstanding Items

- After finding solution to ingredient problem, realized that for ingredients with recipes less than 20, blank commas were printing on the page. So I wrote an additional condition `line 45 of js` to address this. However, some ingredient list items still print out commas at the end. Not sure why
