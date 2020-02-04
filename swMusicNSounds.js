// JavaScript function that wraps everything
      $(document).ready(function() {

        var captainPlanet = $(".captain-planet");

        // Gets Link for Theme Song

        var darthVaderAudio = document.createElement("audio");
        darthVaderAudio.setAttribute("src", "assets/music-sounds/DarthVader.mp3");

        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/music-sounds/ChewbaccaNoise.mp3");

        // Theme Button
        $(".theme-button").on("click", function() {
          darthVaderAudio.play();
        });
        $(".pause-button").on("click", function() {
          darthVaderAudio.pause();
        });

        $(".redbttn").on("click",function(){
          audioElement.play();
          });
        });
    

     