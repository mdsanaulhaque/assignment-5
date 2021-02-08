const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    
}
const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-items-center my-3 p-3';
        mealDiv.innerHTML = `
        <div onclick="mealsDetails(${meal.idMeal})">
            <img class="img" src = "${meal.strMealThumb}">
            <h3 class="lyrics-name">${meal.strMeal}</h3>
        </div>`;
         mealContainer.appendChild(mealDiv);
    })
}

const mealsDetails = name => {
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealsDetails(data.meals[0]));
}

const displayMealsDetails = meal =>{
    const div = document.getElementById('meal-details');
    div.innerHTML = `
<p>${meal.strIngredient1}</p>
<p>${meal.strIngredient2}</p>
<p>${meal.strIngredient3}</p>
<p>${meal.strIngredient4}</p>
<p>${meal.strIngredient5}</p>
<p>${meal.strIngredient6}</p>
<p>${meal.strIngredient7}</p>
<p>${meal.strIngredient8}</p>
<p>${meal.strIngredient9}</p>
<p>${meal.strIngredient10}</p>
<p>${meal.strIngredient11}</p>
<p>${meal.strIngredient12}</p>
<p>${meal.strIngredient13}</p>
<p>${meal.strIngredient14}</p>
<p>${meal.strIngredient15}</p>
<p>${meal.strIngredient16}</p>
<p>${meal.strIngredient17}</p>
<p>${meal.strIngredient18}</p>
<p>${meal.strIngredient19}</p>
<p>${meal.strIngredient20}</p>
<img class="img" src = "${meal.strMealThumb}">
`;
    console.log(meal);
}