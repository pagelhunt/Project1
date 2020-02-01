// JavaScript function that wraps everything
$(document).ready(function() {

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/music-Sounds/evilLaughSoundEffect.mp3");

    // Theme Button
    $(".theme-button").on("click", function() {
      audioElement.play();
    });
    $(".pause-button").on("click", function() {
      audioElement.pause();
    });
 

  $(".redbttn").on("click",function(){
    audioElement.play();
    });
  });