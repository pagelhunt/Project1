// JavaScript function that wraps everything
      $(document).ready(function() {


        // Gets Link for Music N Sounds
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

        // Music N Sounds Buttons
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

        $(".redbttn").on("click",function(){
          audioElement.play();
          });
        });
    

     