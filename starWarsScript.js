let userInput = document.getElementById('#input1');
let peopleArray = [];

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

        //peopleArray.push(response.results);

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

        //peopleArray.push(response2.results);

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

        //peopleArray.push(response3.results);

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

        //peopleArray.push(response4.results);

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

        //peopleArray.push(response5.results);

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

    userInput = $("#input1").val().trim().toLowerCase();
    console.log(`User input: ${userInput}`)

    // userInput = "Luke Skywalker";

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