let video = document.getElementById("video-container")
const PlayPause = document.getElementById("play-pause")
const VidSpan = document.getElementById("videoTime")
const VidTimeRange = document.getElementById("videoPoint")
const messageBox = document.getElementsByClassName("alert info")[0]
const volumeRange = document.getElementById("volume-range");
window.onload = function() {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none"
        for (let i = 0; i < 101; i ++) {
            document.getElementById("body").style.opacity = i / 100;
        }
    }, 2000)
}
window.resizeTo(650,450)