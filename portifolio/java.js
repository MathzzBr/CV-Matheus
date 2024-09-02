document.getElementById("musicImage").addEventListener("click", function() {
    var audio = document.getElementById("music");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
