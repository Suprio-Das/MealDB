const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data))
}

const displayFood = (data) => {
    const meals = data.meals;
    for(const meal of meals){
        console.log(meal);
    }
}