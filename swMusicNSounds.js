// JavaScript function that wraps everything
      $(document).ready(function() {


        // Gets Link for Music N Sounds
        var swThemeAudio = document.createElement("audio");
        swThemeAudio.setAttribute("src", "assets/music-sounds/StarWarsMainTheme.mp3");

        var darthVaderAudio = document.createElement("audio");
        darthVaderAudio.setAttribute("src", "assets/music-sounds/DarthVader.mp3");

        var imperialAttackAudio = document.createElement("audio");
        imperialAttackAudio.setAttribute("src", "Assets/music-Sounds/EpisodeIVImperialAttack.mp3");

        var imperialSuiteAudio = document.createElement("audio");
        imperialSuiteAudio.setAttribute("src", "Assets/music-Sounds/rogueOneTheImperialSuite.mp3");

        var hotPursuitAudio = document.createElement("audio");
        hotPursuitAudio.setAttribute("src", "Assets/music-Sounds/EpisodeIIBountyHuntersHotPursuit.mp3");

        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/music-sounds/ChewbaccaNoise.mp3");

        var audioElement2 = document.createElement("audio");
        audioElement2.setAttribute("src", "assets/music-sounds/LightsaberTurnOn.mp3");

        var audioElement3 = document.createElement("audio");
        audioElement3.setAttribute("src", "Assets/music-Sounds/LightsaberTurnOff.mp3");

        var audioElement4 = document.createElement("audio");
        audioElement4.setAttribute("src", "Assets/music-Sounds/LightsaberClash.mp3");

        var audioElement5 = document.createElement("audio");
        audioElement5.setAttribute("src", "Assets/music-Sounds/DarkSide.mp3");

        var audioElement6 = document.createElement("audio");
        audioElement6.setAttribute("src", "Assets/music-Sounds/Beep.mp3");

        // Music N Sounds Buttons
        $(".sw-button").on("click", function() {
          swThemeAudio.play();
        });
        $(".swpause-button").on("click", function() {
          swThemeAudio.pause();
        });

        $(".darth-button").on("click", function() {
          darthVaderAudio.play();
        });
        $(".darthpause-button").on("click", function() {
          darthVaderAudio.pause();
        });

        $(".imperial-button").on("click", function() {
          imperialAttackAudio.play();
        });
        $(".imperialpause-button").on("click", function() {
          imperialAttackAudio.pause();
        });

        $(".imperialSuite-button").on("click", function() {
          imperialSuiteAudio.play();
        });
        $(".imperialSuitepause-button").on("click", function() {
          imperialSuiteAudio.pause();
        });

        $(".hotPursuit").on("click", function() {
          hotPursuitAudio.play();
        });
        $(".hotPursuitpause-button").on("click", function() {
          hotPursuitAudio.pause();
        });

        $(".wookiebttn").on("click",function(){
          audioElement.play();
          });

          $(".lightsaberbttn").on("click",function(){
            audioElement2.play();
            });

            $(".lightsaberbttn2").on("click",function(){
              audioElement3.play();
              });

              $(".lightsaberbttn3").on("click",function(){
                audioElement4.play();
                });

                $(".DarkSidebttn").on("click",function(){
                  audioElement5.play();
                  });

                  $(".beepbttn").on("click",function(){
                    audioElement6.play();
                    });
          });
    

     