// JavaScript function that wraps everything
$(document).ready(function() {

    // Gets Links for Music N Sounds
    var spiderManAudio = document.createElement("audio");
    spiderManAudio.setAttribute("src", "Assets/music-Sounds/Spidermantheme1960s.mp3");

    var deadpoolAudio = document.createElement("audio");
    deadpoolAudio.setAttribute("src", "Assets/music-Sounds/Deadpoolthemesong.mp3")

    var ironManAudio = document.createElement("audio");
    ironManAudio.setAttribute("src", "Assets/music-Sounds/ironManTheme.mp3");

    var hulkAudio = document.createElement("audio");
    hulkAudio.setAttribute("src", "Assets/music-Sounds/TheHulk2003Theme.mp3");

    var thorAudio = document.createElement("audio");
    thorAudio.setAttribute("src", "Assets/music-Sounds/ThorTheDarkWorld.mp3");

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/music-Sounds/ImSpiderMan.mp3");

    var audioElement2 = document.createElement("audio");
    audioElement2.setAttribute("src", "Assets/music-Sounds/fly.mp3");

    var audioElement3 = document.createElement("audio");
    audioElement3.setAttribute("src", "Assets/music-Sounds/Greatpower.mp3");

    var audioElement4 = document.createElement("audio");
    audioElement4.setAttribute("src", "Assets/music-Sounds/whoIAM.mp3");

    var audioElement5 = document.createElement("audio");
    audioElement5.setAttribute("src", "Assets/music-Sounds/cab.mp3");

    var audioElement6 = document.createElement("audio");
    audioElement6.setAttribute("src", "Assets/music-Sounds/clobberintime.mp3");

    // Music N Sounds Buttons
    $(".spiderMan-button").on("click", function() {
      spiderManAudio.play();
    });
    $(".spiderManpause-button").on("click", function() {
      spiderManAudio.pause();
    });

    $(".deadpool-button").on("click", function() {
      deadpoolAudio.play();
    });
    $(".deadpoolpause-button").on("click", function() {
      deadpoolAudio.pause();
    });

    $(".ironMan-button").on("click", function() {
      ironManAudio.play();
    });
    $(".ironManpause-button").on("click", function() {
      ironManAudio.pause();
    });

    $(".hulk-button").on("click", function() {
      hulkAudio.play();
    });
    $(".hulkpause-button").on("click", function() {
      hulkAudio.pause();
    });

    $(".thor-button").on("click", function() {
      thorAudio.play();
    });
    $(".thorpause-button").on("click", function() {
      thorAudio.pause();
    });
 

  $(".spiderbttn").on("click",function(){
    audioElement.play();
    });

    $(".flybttn").on("click",function(){
      audioElement2.play();
      });

      $(".powerbttn").on("click",function(){
        audioElement3.play();
        });

        $(".whobttn").on("click",function(){
          audioElement4.play();
          });

          $(".cabbttn").on("click",function(){
            audioElement5.play();
            });

            $(".clobberbttn").on("click",function(){
              audioElement6.play();
              });
  });