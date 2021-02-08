const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    
}
const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container')

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-items-center my-3 p-3';
        mealDiv.innerHTML = `
        <div class="col-md-9">
            <img class="img" src = "${meal.strMealThumb}">
            <h3 class="lyrics-name">${meal.strMeal}</h3>
        </div>`;
        mealContainer.append(mealDiv);
    })
}