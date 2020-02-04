
let inputElement = document.getElementById('#input1');
var loreHolder = $("#loreHolder");
var giphyKey = apiKey.myKey;
var superHeroArray = [];
var gifIndex = 0;
let queryURL = "https://akabab.github.io/superhero-api/api/all.json";
//grabbing all superheroes on db because no good endpoints to use
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
    event.preventDefault();
    loreHolder.empty();

    var userInput = $("#searchText").val().trim();
    //giphy api stuff
    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=marvel+" + userInput.toLowerCase() + "&api_key=" + giphyKey;
    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var superheroGif = $("<img>");
        var superheroGifHolder = $("#gifHolder");
        superheroGif.attr("src", response.data[gifIndex].images.original.url);
        superheroGifHolder.append(superheroGif);
        $("#prevGif").on("click",function()
            {
                if(gifIndex > 0)
                {
                    gifIndex--;
                    superheroGif.attr("src", response.data[gifIndex].images.original.url);
                }
            }
        )
    

        $("#nextGif").on("click", function()
            {
                gifIndex++;
                superheroGif.attr("src", response.data[gifIndex].images.original.url);
            }
        )

    });
    //searching array for superhero by name
    var matchedSuperHero = superHeroArray.filter(superHero => {
        //if found create superhero obj and adding what we want into it
        if (superHero.name.toLowerCase() === userInput.toLowerCase()) {
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
    if (matchedSuperHero[0] == undefined) {
        var errorMsg = $("<p>");
        errorMsg.text("Only A-Bomb is here! Try again!")
        $("#loreHolder").append(errorMsg);
    } else {

        // Taking all information from found object and placing it into page
        var heroNameDiv = $("<div>");
        heroNameDiv.addClass("heroNameDiv heroName");
        var heroName = $("<h1>");
        heroName.addClass("heroName");
        heroName.text(matchedSuperHero[0].name);
        heroNameDiv.append(heroName);
        loreHolder.append(heroNameDiv);


        //Power stats section --------------------------------------------------------------------------------
        var powerStatsDiv = $("<div>");
        var powerStatsDurability = $("<p>")
        var powerStatsIntelligence = $("<p>")
        var powerStatsSpeed = $("<p>")
        var powerStatsStrength = $("<p>")
        var powerStatsPower = $("<p>")
        var powerStatsCombat = $("<p>")
        powerStatsDiv.addClass("powerStats powerStatsDiv")
        powerStatsIntelligence.text("Intelligence: " + matchedSuperHero[0].powerstats.intelligence);
        powerStatsIntelligence.addClass("powerStats");
        powerStatsStrength.text("Strength: " + matchedSuperHero[0].powerstats.strength);
        powerStatsStrength.addClass("powerStats");
        powerStatsSpeed.text("Speed: " + matchedSuperHero[0].powerstats.speed);
        powerStatsSpeed.addClass("powerStats");
        powerStatsDurability.text("Durability: " + matchedSuperHero[0].powerstats.durability);
        powerStatsDurability.addClass("powerStats");
        powerStatsPower.text("Power: " + matchedSuperHero[0].powerstats.power);
        powerStatsPower.addClass("powerStats");
        powerStatsCombat.text("Combat: " + matchedSuperHero[0].powerstats.combat);
        powerStatsCombat.addClass("powerStats");
        powerStatsDiv.append(powerStatsIntelligence);
        powerStatsDiv.append(powerStatsStrength);
        powerStatsDiv.append(powerStatsSpeed);
        powerStatsDiv.append(powerStatsDurability);
        powerStatsDiv.append(powerStatsPower);
        powerStatsDiv.append(powerStatsCombat);
        loreHolder.append(powerStatsDiv);
        //--------------------------------------------------------------------------------------------------

        //Appearance----------------------------------------------------------------------------------------
        var appearanceDiv = $("<div>");
        var gender = $("<p>");
        var race = $("<p>");
        var height = $("<p>");
        var weight = $("<p>");
        var eyeColor = $("<p>");
        var hairColor = $("<p>");

        appearanceDiv.addClass("appearance appearanceDiv");
        gender.addClass("appearance");
        race.addClass("appearance");
        height.addClass("appearance");
        weight.addClass("appearance");
        eyeColor.addClass("appearance");
        hairColor.addClass("appearance");

        gender.text("Gender: " + matchedSuperHero[0].appearance.gender);
        race.text("Race: " + matchedSuperHero[0].appearance.race);
        height.text("Height: " + matchedSuperHero[0].appearance.height[0]);
        weight.text("Weight :" + matchedSuperHero[0].appearance.weight[0]);
        eyeColor.text("Eye color: " + matchedSuperHero[0].appearance.eyeColor);
        hairColor.text("Hair Color: " + matchedSuperHero[0].appearance.hairColor)

        appearanceDiv.append(gender);
        appearanceDiv.append(race);
        appearanceDiv.append(height);
        appearanceDiv.append(weight);
        appearanceDiv.append(eyeColor);
        appearanceDiv.append(hairColor);
        loreHolder.append(appearanceDiv);


        //--------------------------------------------------------------------------------------------------

        //Bio-----------------------------------------------------------------------------------------------
        var BioDiv = $("<div>");
        var fullName = $("<p>");
        var placeOfBirth = $("<p>");
        var alignment = $("<p>");

        BioDiv.addClass("bio bioDiv");
        fullName.addClass("bio");
        placeOfBirth.addClass("bio");
        alignment.addClass("bio");

        fullName.text("Full Name: " + matchedSuperHero[0].biography.fullName);
        placeOfBirth.text("Place of Birth: " + matchedSuperHero[0].biography.placeOfBirth);
        alignment.text("Alignment: " + matchedSuperHero[0].biography.alignment);

        BioDiv.append(fullName);
        BioDiv.append(placeOfBirth);
        BioDiv.append(alignment);
        loreHolder.append(BioDiv);
        //--------------------------------------------------------------------------------------------------


        //Work----------------------------------------------------------------------------------------------
        var workDiv = $("<div>");
        var Occupation = $("<p>");

        workDiv.addClass("work workDiv");
        Occupation.addClass("work");

        Occupation.text("Occupation: " + matchedSuperHero[0].work.Occupation);

        workDiv.append(Occupation);
        loreHolder.append(workDiv);

        //--------------------------------------------------------------------------------------------------


        //Connections---------------------------------------------------------------------------------------
        var connectionsDiv = $("<div>");
        var groupAffiliation = $("<p>");
        var relatives = $("<p>")

        connectionsDiv.addClass("connections connectionsDiv");
        groupAffiliation.addClass("connections");
        relatives.addClass("connections");

        groupAffiliation.text("Affiliations: " + matchedSuperHero[0].connections.groupAffiliation)
        relatives.text("Relatives: " + matchedSuperHero[0].connections.relatives);

        connectionsDiv.append(groupAffiliation);
        connectionsDiv.append(relatives);
        loreHolder.append(connectionsDiv);
        //--------------------------------------------------------------------------------------------------
    }
});