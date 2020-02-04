let userInput = document.getElementById('#input1');
let peopleArray = [];
var giphyKey = apiKey.myKey;
gifIndex = 0;

// api call to compile peopleArray on onload
window.onload = function () {

    let queryURL = "https://swapi.co/api/people/";
    let queryURL2 = "https://swapi.co/api/people/?page=2";
    let queryURL3 = "https://swapi.co/api/people/?page=3";
    let queryURL4 = "https://swapi.co/api/people/?page=4";
    let queryURL5 = "https://swapi.co/api/people/?page=5";
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < response.results.length; i++) {
            peopleArray.push(response.results[i]);
        }

    }).catch(function (err) {
        console.log(err);
    });

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response2) {

        for (let i = 0; i < response2.results.length; i++) {
            peopleArray.push(response2.results[i]);
        }

    }).catch(function (err) {
        console.log(err);
    });

    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function (response3) {

        for (let i = 0; i < response3.results.length; i++) {
            peopleArray.push(response3.results[i]);
        }

    }).catch(function (err) {
        console.log(err);
    });

    $.ajax({
        url: queryURL4,
        method: "GET"
    }).then(function (response4) {

        for (let i = 0; i < response4.results.length; i++) {
            peopleArray.push(response4.results[i]);
        }

    }).catch(function (err) {
        console.log(err);
    });

    $.ajax({
        url: queryURL5,
        method: "GET"
    }).then(function (response5) {

        for (let i = 0; i < response5.results.length; i++) {
            peopleArray.push(response5.results[i]);
        }

    }).catch(function (err) {
        console.log(err);
    });
};

// search button
$("#button1").on("click", function () {

    $('#name').empty();
    $('#height').empty();
    $('#mass').empty();
    $('#hair_color').empty();
    $('#skin_color').empty();
    $('#eye_color').empty();
    $('#birth_year').empty();
    $('#gender').empty();
    $('#no-results').empty();
    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=star+wars+" + userInput + "&api_key=" + giphyKey;
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

    userInput = $("#input1").val().trim().toLowerCase();
    
    console.log(`User input: ${userInput}`)

    var match = peopleArray.filter((person) => {
        return (
          //  person.name === userInput

          person.name.toLowerCase().includes(userInput)

        )
    });

    // if match equals 


    if (match.length === 1) {
        let resultsName = match[0].name;
        let resultsHeight = match[0].height;
        let resultsMass = match[0].mass;
        let resultsHair = match[0].hair_color;
        let resultsSkin = match[0].skin_color;
        let resultsEye = match[0].eye_color;
        let resultsBirth = match[0].birth_year;
        let resultsGender = match[0].gender;

        $('#name').append("Name: " + resultsName);
        $('#height').append("Height: " + resultsHeight);
        $('#mass').append("Mass: " + resultsMass);
        $('#hair_color').append("Hair Color: " + resultsHair);
        $('#skin_color').append("Skin Color: " + resultsSkin);
        $('#eye_color').append("Eye Color: " + resultsEye);
        $('#birth_year').append("Birth Year: " + resultsBirth);
        $('#gender').append("Gender: " + resultsGender);
    } else {
        $('#no-results').append("No Match. Please try again.")
    }

    // clear user input

    $("#input1").val("");

});