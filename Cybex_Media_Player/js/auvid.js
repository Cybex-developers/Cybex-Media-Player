setTimeout(function () {
    CloseMessage()
}, 5000)

setInterval(function () {
    if(happening === false){
        if (video.readyState > 0) {
            var TotalMinutes = Math.floor(parseInt(video.duration / 60, 10));
            var TotalSeconds = Math.floor(video.duration % 60);
            var CurMinutes = Math.floor(parseInt(video.currentTime / 60, 10));
            var CurSeconds = Math.floor(video.currentTime % 60);
            if (CurSeconds < 10) {
                CurSeconds = "0" + CurSeconds.toString()
            }
            if (TotalSeconds < 10) {
                TotalSeconds = "0" + TotalSeconds.toString()
            }
            if (CurMinutes < 10) {
                CurMinutes = "0" + CurMinutes.toString()
            }
            if (TotalMinutes < 10) {
                TotalMinutes = "0" + TotalMinutes.toString()
            }

            VidSpan.innerHTML = +CurMinutes + ":" + CurSeconds + "/" + TotalMinutes + ":" + TotalSeconds
            VidTimeRange.max = Math.floor(video.duration);
            VidTimeRange.value = Math.floor(video.currentTime)
            if (Math.floor(video.duration) === Math.floor(video.currentTime)) {
                PlayPause.innerHTML = "||"
            }
        }
    }
    let val = document.getElementById('rot-deg').value;
    if(val > 360){document.getElementById('rot-deg').value = 360}
    if(val < 0){
        document.getElementById('rot-deg').value = 0
    }

}, 100)
$('#play-pause').click(function () {
    let mediaFile = $(video).get(0);
    if (mediaFile.paused) {
        mediaFile.play();
        PlayPause.innerHTML = "&#9658;"
    } else {
        mediaFile.pause();
        PlayPause.innerHTML = "||"
    }
});
function ReTime() {
    video.currentTime = VidTimeRange.value;
}
function FastForward() {
    if(video.playbackRate !== 16){
        video.playbackRate = video.playbackRate * 2;
        messageBox.style.display = "block";
        messageBox.innerHTML = "<span class='closebtn' onclick='CloseMessage()'>&times;</span>Video Speed :" + video.playbackRate + "x";
        setTimeout(function () {
            messageBox.style.display = "none";
        }, 2000)
    }
}
function SlowForward() {
    if (video.playbackRate !== 0.0625){
        video.playbackRate = video.playbackRate / 2;
        messageBox.style.display = "block";
        messageBox.innerHTML = "<span class='closebtn' onclick='CloseMessage()'>&times;</span>Video Speed :" + video.playbackRate + "x";
        setTimeout(function () {
            messageBox.style.display = "none";
        }, 5000)
    }
}
function CloseMessage() {
    messageBox.style.display = "none";
}
function ChangeVolume() {
    if (getComputedStyle(volumeRange).display === "none") {
        volumeRange.style.display = "block";
        document.getElementById("volume-value").style.display = "block"
    } else {
        volumeRange.style.display = "none";
        document.getElementById("volume-value").style.display = "none"
    }
}
function ApplyVolume() {
    video.volume = volumeRange.value / 100;
    let tex;
    if (volumeRange.value == 100) {
        tex = "<span class=\"arrow\"></span>100%"
    } else if (volumeRange.value < 100 && volumeRange.value >= 10) {
        tex = "<span class=\"arrow\"></span>0" + volumeRange.value.toString() + "%"
    } else if (volumeRange.value < 10) {
        tex = "<span class=\"arrow\"></span>00" + volumeRange.value.toString() + "%"
    }
    document.getElementById("volume-value").innerHTML = tex;
    document.getElementById("volume-value").style.bottom = (parseFloat(volumeRange.value) * 1.5 + 15) + "px";
}
ApplyVolume()
function DisShow() {
    setTimeout(function () {
        volumeRange.style.display = "none";
        document.getElementById("volume-value").style.display = "none"
    }, 500)
}