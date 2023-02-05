const search = document.getElementById('search'),
    random = document.getElementById('random'),
    submit = document.getElementById('submit'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEL = document.getElementById('single-meal');

    
//Search meal and fetch from API
function searchMeal (e) {
    e.preventDefault();

// Clear single meal
single_mealEL.innerHTML = '';

//Get search term 
const term = search.value;

// Check for empty state
if(term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        resultHeading.innerHTML= `<h2> Search Results for '${term}':`


        if(data.meals === null) {
            resultHeading.innerHTML = `<p> There are no search results. Try again </p>`
        } else {
            mealsEl.innerHTML = data.meals
            
            .map
            
            (meal => `
            <div class="meals">
                <img src = "${meal.strMealThumb}" alt="${meal.strMeal}"/>
                <div clas = "meal-info" data-mealID = "${meal.idMeal}">
                <h3> ${meal.strMeal} </h3>
                
            </div>
            `)
            .join('');
        }

    });

    //

// Search clear text

search.value = '';
    
} else {
    alert("Please type something in")
}
}

// Event Listener
submit.addEventListener('submit', searchMeal);


mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
      if (item.classList) {
        return item.classList.contains('meal-info');
      } else {
        return false;
      }
    });
console.log(mealInfo)
    });





