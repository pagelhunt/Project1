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
    audioElement.setAttribute("src", "Assets/music-Sounds/evilLaughSoundEffect.mp3");

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
 

  $(".redbttn").on("click",function(){
    audioElement.play();
    });
  });