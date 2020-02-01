
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
//Power stats section --------------------------------------------------------------------------------
var powerStatsDiv = $("<div>");
var powerStatsDurability = $("<p>")
var powerStatsIntelligence = $("<p>")
var powerStatsSpeed = $("<p>")
var powerStatsStrength = $("<p>")
var powerStatsPower = $("<p>")
var powerStatsCombat= $("<p>")
powerStatsDiv.addClass("powerStats powerStatsDiv")
powerStatsIntelligence.text("Intelligence: "+ matchedSuperHero[0].powerstats.intelligence);
powerStatsIntelligence.addClass("powerStats");
powerStatsStrength.text("Strength: " +matchedSuperHero[0].powerstats.strength);
powerStatsStrength.addClass("powerStats");
powerStatsSpeed.text("Speed: " +matchedSuperHero[0].powerstats.speed);
powerStatsSpeed.addClass("powerStats");
powerStatsDurability.text("Durability: " +matchedSuperHero[0].powerstats.durability);
powerStatsDurability.addClass("powerStats");
powerStatsPower.text("Power: " +matchedSuperHero[0].powerstats.power);
powerStatsPower.addClass("powerStats");
powerStatsCombat.text("Combat: " +matchedSuperHero[0].powerstats.combat);
powerStatsCombat.addClass("powerStats");
powerStatsDiv.append(powerStatsIntelligence);
powerStatsDiv.append(powerStatsStrength);
powerStatsDiv.append(powerStatsSpeed);
powerStatsDiv.append(powerStatsDurability);
powerStatsDiv.append(powerStatsPower);
powerStatsDiv.append(powerStatsCombat);
$("#loreHolder").append(powerStatsDiv);
//--------------------------------------------------------------------------------------------------


var AppearanceDiv = $("<div>");
var appearance = $("<p>")
var BioDiv = $("<div>");
var biography = $("<p>")
var workDiv = $("<div>");
var work = $("<p>")
var connectionsDiv = $("<div>");
var connections = $("<p>")

}
});





// if there is a match, matchedSuperHero will have a length of 1
// if there is not a match, matchedSuperHero will have a length of 0 || it could be undefined

