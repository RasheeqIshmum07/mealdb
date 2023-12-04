function connect(){
    var searchInput = document.getElementById("searchBox").value ; 
   
    var url = `https://www.themealdb.com/api/json/v1/1/random.php?f=${searchInput}` ;

    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
   
}
   
function display (data){
    var randomMeals = data.meals ;
    console.log(randomMeals);
   
    var oldContent = document.getElementById("container");
    oldContent.textContent = ""; 
   
    if (randomMeals.length > 5){
        for (var i=0; i<5; i++){
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal Name: ${randomMeals[i].strMeal}  <br>
                        <img src="${randomMeals[i].strMealThumb}"> <br> <br>
                        Cooking Instructions: <p>
                        ${randomMeals[i].strInstructions}  </p> <br>
                                   ` 
            newDiv.classList.add("mealStyle");
            oldContent.appendChild(newDiv);
        }
    }
    else{
        for (var i=0; i<randomMeals.length; i++){
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal Name: ${randomMeals[i].strMeal}  <br>
                            <img src="${randomMeals[i].strMealThumb}"> <br> <br>
                            Cooking Instructions: <p>
                            ${randomMeals[i].strInstructions}  </p> <br>
                                   ` 
            newDiv.classList.add("mealStyle");
            oldContent.appendChild(newDiv);
        }
    }
    
}

