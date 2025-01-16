const search = document.getElementById("searchbox");
const btn = document.getElementById("button");
const maincontainer = document.getElementById("main-bar");
const RecipeDtailscontent = document.getElementById("recipedetails-content");
const Recipe = document.getElementById("recipe-details");
const closebtn = document.getElementById("close-btn");

async function fetchRecipe(searchword) {
    maincontainer.innerHTML = ` <h1>Fetching Recipes...</h1>`;
    let url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchword}`);
    let response = await fetch(url);
    let data = await response.json();

    maincontainer.innerHTML = "";
    data.meals.forEach(meals => {
        let recipediv = document.createElement("div");
        recipediv.classList.add('recipe');
        recipediv.innerHTML = `
        <img src="${meals.strMealThumb}" alt="">
        <h2>${meals.strMeal}</h2>
        <h4>${meals.strArea} Dish</h4>
        <button><a href="${meals.strYoutube}" target="_blank">Watch Video</a></button>`

        let recipebtn = document.createElement("button");
        recipebtn.textContent = "View Recipe";
        recipediv.appendChild(recipebtn);
        maincontainer.appendChild(recipediv);

        recipebtn.addEventListener("click", () => {
            openrecipe(meals);
        })
    });
    console.log(data);
}
const IngredientsFetch = (meals) => {
    let ingrediantlist = "";
    for (let i = 1; i <= 20; i++) {
        let singleingrediant = meals[`strIngredient${i}`];
        if (singleingrediant) {
            let measure = meals[`strMeasure${i}`];                  
            ingrediantlist += `<li>${measure} - ${singleingrediant}</li>`;
        }
        else{
            break;
        }
    }
    return ingrediantlist;
}


const openrecipe = (meals) => {
    RecipeDtailscontent.innerHTML = `
        
        <h2 class="recipe-title">${meals.strMeal}</h2>
        <h4 class="ingrediantlistTittle" >Ingredients list :</h4>
        <ul class="ingrediantlist"  >${IngredientsFetch(meals)}</ul>
        <h3>Instructions:</h3>
        <p class="instructionsdata" >${meals.strInstructions}</p>

        `
        Recipe.style.display = "block";
}
closebtn.addEventListener("click", () => {
    Recipe.style.display = "none";
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let searchword = search.value.trim();
    // console.log("clicked");
    fetchRecipe(searchword);
})


