window.onload = function() {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none"
        let curope = 0.001;
        setInterval(function () {
            document.getElementById("body").style.opacity = curope;
            curope = curope + 0.005;
        }, 1)
    }, 1500)
}
function ShowMenu (id,grid){
    let elem  = document.getElementById(id);
    if(getComputedStyle(elem).display === "none"){
        document.getElementById("zoom-options").style.display = "none"
        document.getElementById("more_options").style.display = "none"
        document.getElementById("filters").style.display = "none"
        document.getElementById("convert-types").style.display = "none"
        if (grid === "do"){
            elem.style.display = "grid";
        }
        else{elem.style.display = "block";}
        setTimeout(function () {
            elem.style.display = "none";
        },5000)
    }
    else{
        elem.style.display = "none";
    }
}
window.resizeTo(650, 450);let happening = false;
setTimeout(function () {
    CloseMessage()
}, 5000)
let video = document.getElementById("video-container")
const PlayPause = document.getElementById("play-pause")
const VidSpan = document.getElementById("videoTime")
const VidTimeRange = document.getElementById("videoPoint")
const messageBox = document.getElementsByClassName("alert info")[0]
const volumeRange = document.getElementById("volume-range");
let inputNode = document.querySelector('#video-finder')
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

var more_options = {
    Exit: function () {
        window.close()
    },
    Reload: function () {
        window.location.reload()
    },
    CloseMenu: function () {
        document.getElementById("more_options").style.display = "none"
    },
    PlayVideo: function () {
        $("#video-finder").attr("accept","video/mp4,video/webm,video/ogg")
        $("#video-finder").trigger("click")
    },
    ListenAudio: function () {

        $("#video-finder").attr("accept","audio/mp3,audio/wav,audio/ogg")
        $("#video-finder").trigger("click")
    },
    ViewImage : function (){
        document.getElementById("controls-img").style.display = "block"
        document.getElementById("img-container").style.display = "block"
        document.getElementById("img-menus").style.display = "block"
        document.getElementById("controls-auvid").style.display = "none"
        video.src = null;video.load();video.style.display = "none"
        $("#video-finder").attr("accept","image/*")
        $("#video-finder").trigger("click")
        inputNode.addEventListener("change",function () {
            var file = inputNode.files[0]
            var fileURL = URL.createObjectURL(file)
            document.getElementById("image-main").src = fileURL
            const extension = this.value.substr(this.value.lastIndexOf("."),this.value.length)
            document.getElementById("FormatName").innerHTML = 'Format: "'+extension+'"';
        })
    },
    vifw : function () {document.getElementById("img-url-popup").style.display = "block"}
}
function ViewWebImg(){
    let valuer = document.getElementById("popup").value;
    if (valuer !== "" && valuer !== null){
        document.getElementById("controls-img").style.display = "block"
        document.getElementById("img-container").style.display = "block"
        document.getElementById("img-menus").style.display = "block"
        document.getElementById("controls-auvid").style.display = "none"
        document.getElementById('image-main').src = valuer;
        const vr = document.getElementById('image-main').src.toString();
        document.getElementById("FormatName").innerHTML = "can't read type of web image";
        video.src = null;video.load();video.style.display = "none"
        document.getElementById('img-url-popup').style.display = 'none';
    }
}
var change = {
    video: function () {
        document.getElementById("vid-source").setAttribute('src', document.getElementById("video-finder").value)
        video.load()
    }
}
'use strict'
var URL = window.URL || window.webkitURL
var playSelectedFile = function () {
    if (document.querySelector('#video-finder').accept != "image/*"){
        
        var file = this.files[0]
        var fileURL = URL.createObjectURL(file)
        video.src = fileURL
        document.getElementById("controls-img").style.display = "none"
        document.getElementById("img-container").style.display = "none"
        document.getElementById("img-menus").style.display = "none"
        document.getElementById("controls-auvid").style.display = "block"
        document.getElementById("audio-container").style.display = "none"
        document.getElementById("video-container").style.display = "none"
        document.getElementById("img-container").style.display = "none"
        video.style.display = "block"

        const extension = this.value.substr(this.value.lastIndexOf("."),this.value.length)
        document.getElementById("FormatName").innerHTML = 'Format: "'+extension+'"';
    }
}
inputNode.addEventListener('change', playSelectedFile)
var removeBug1 = {
    startr : function () {
        happening = true;
    },
    leave : function () {
        happening = false;
    }
}




let imgtag = document.getElementById("image-main")
var ImgMenus = {
    showFiltersMenu : function () {ShowMenu("filters")},
    showZoomOptionsMenu : function (){ShowMenu("zoom-options")},
    showConverttypeMenu : function () {ShowMenu("convert-types")}
}
function showFilters(value) {
    document.getElementById('filters-popup').style.display = "block";
    document.getElementById('filters').style.display = "none"
    document.getElementById('filter-type').value = value;
    filterify()
}
function FixBug3() {
    let zoomp = document.getElementById('zoom')
    if(zoomp.value > 1000){zoomp.value = 1000}
    if(zoomp.value < 1){zoomp.value = 1}
}
var ZoomOptions = {
    PixelToPixel : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";imgtag.style.zoom = 1
        imgtag.style.zoom = 1;FixBug3()
        document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100
    },
    FitTheArea : function () {
        imgtag.style.width = "100%";imgtag.style.height = "100%";imgtag.style.zoom = 1
        document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100
    },
    ZoomIn : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";
        imgtag.style.zoom = getComputedStyle(imgtag).zoom * 1.25;
        document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100;FixBug3()
    },
    ZoomOut : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";
        imgtag.style.zoom = getComputedStyle(imgtag).zoom / 1.25;
        document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100;FixBug3()
    },
    ZoomNum : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";
        imgtag.style.zoom = document.getElementById('zoom').value / 100;
        document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100;;FixBug3()
    }
}
function AvailableSoon() {
    messageBox.style.display = "block"
    messageBox.innerHTML = "<span class='closebtn' onclick='CloseMessage()'>&times;</span>Available Soon!";
    setTimeout(function () {
        messageBox.style.display = "none";
    }, 2000)
}
function filterP(nu) {
    let vl1 = document.getElementById('filter-strength')
    let vl2 = document.getElementById('filter-power')
    if(nu == 1){
        vl2.value = vl1.value;vl2.max = vl1.max 
    }
    else if(nu == 2){
        if(vl2.value > vl2.max ){vl2.value = vl2.max}
        if(vl2.value < 0 ){vl2.value = 0}
        vl1.value = vl2.value;vl1.max = vl2.max;
    }
}
function ApplyFilter() {
    let type = document.getElementById('filter-type').value;
    let strength = document.getElementById('filter-power').value;
    let result = document.getElementById('image-main');
    if(type == "Blur-point"){result.style.filter = "blur(" + strength + "px)"}
    if(type == "Brightness"){result.style.filter = "brightness(" + strength + "%)"}
    if(type == "Contrast"){result.style.filter = "contrast(" + strength  + "%)"}
    if(type == "Grayness"){result.style.filter = "grayscale(" + strength + "%)"}
    if(type == "Hue-rotation"){result.style.filter = "hue-rotate(" + strength  + "deg)"}
    if(type == "Invert"){result.style.filter = "invert(" + strength + "%)"}
    if(type == "Opacity"){result.style.filter = "opacity(" + strength + "%)"}
    if(type == "Saturate"){result.style.filter = "saturate(" + strength + "%)"}
    if(type == "Sepia"){result.style.filter = "sepia(" + strength + "%)"}
    document.getElementById('filters-popup').style.display = "none"
}
function filterify() {
    let type = document.getElementById('filter-type').value;
    let stre = document.getElementById('filter-power');
    let unit = document.getElementById('fpp')
    if(type == "Blur-point"){stre.max = 20;stre.value = 0;unit.innerHTML = "px"}
    if(type == "Brightness"){stre.max = 1000;stre.value = 100;unit.innerHTML = "%"}
    if(type == "Contrast"){stre.max = 1000;stre.value = 100;unit.innerHTML = "%"}
    if(type == "Grayness"){stre.max = 100;stre.value = 0;unit.innerHTML = "%"}
    if(type == "Hue-rotation"){stre.max = 360;stre.value = 0;unit.innerHTML = "deg"}
    if(type == "Invert"){stre.max = 100;stre.value = 0;unit.innerHTML = "%"}
    if(type == "Opacity"){stre.max = 100;stre.value = 100;unit.innerHTML = "%"}
    if(type == "Saturate"){stre.max = 1000;stre.value = 100;unit.innerHTML = "%"}
    if(type == "Sepia"){stre.max = 100;stre.value = 0;unit.innerHTML = "%"}
    filterP(2)
}
function showRotatePopup() {
    document.getElementById('rotate-popup').style.display = "block"
}
function RotateSuggest(deg) {
    document.getElementById('rot-deg').value = deg;
}
function FixBug4() {
    let val = document.getElementById('rot-deg').value
    if(val == 0){
        val = val.substr(1,val.length)
        document.getElementById('rot-deg').value = val;
    }
}
function Rotate() {
    let val = document.getElementById('rot-deg').value;
    document.getElementById('image-main').style.transform = "rotate(" + val + "deg)"
    document.getElementById('rotate-popup').style.display = "none"
}
document.getElementById('rot-deg').addEventListener("keydown",function (key) {
    if(key.which == 13){Rotate()}
})