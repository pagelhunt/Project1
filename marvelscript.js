
let inputElement = document.getElementById('#input1');

var superHeroArray = [];
let queryURL = "https://akabab.github.io/superhero-api/api/all.json";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    superHeroArray = response;
    console.log(response);
}).catch(function (err) {
    console.log(err);
});

$("#searchButton").on("click", function () {
    var userInput = $("#searchText").val().trim();

var matchedSuperHero = superHeroArray.filter(superHero => {

if(superHero.name.toLowerCase() === userInput.toLowerCase())
  {
    var superHeroObj = new Object();
    superHeroObj["name"] = superHero.name;
    superHeroObj["powerstats"] = superHero.powerstats;
    superHeroObj["appearance"] = superHero.appearance;
    superHeroObj["biography"] = superHero.biography;
    superHeroObj["work"] = superHero.work;
    superHeroObj["connections"] = superHero.connections;
    return superHeroObj;
  }
})

if(matchedSuperHero[0] == undefined)
{
    var errorMsg = $("<p>");
    errorMsg.text("Only A-Bomb is here! Try again!")
    $("#loreHolder").append(errorMsg);
}else{

var heroNameDiv = $("<div>");
var heroName = $("<h1>");
heroName.text(matchedSuperHero[0].name);
heroNameDiv.append(heroName);
$("#loreHolder").append(heroNameDiv);
}
});





// if there is a match, matchedSuperHero will have a length of 1
// if there is not a match, matchedSuperHero will have a length of 0 || it could be undefined

