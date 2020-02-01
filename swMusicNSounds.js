// JavaScript function that wraps everything
      $(document).ready(function() {

        var captainPlanet = $(".captain-planet");

        // Gets Link for Theme Song
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/captainplanet24.mp3");

        // Theme Button
        $(".theme-button").on("click", function() {
          audioElement.play();
        });
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });
      });

     