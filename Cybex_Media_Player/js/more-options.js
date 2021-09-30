var change = {
    video: function () {
        document.getElementById("vid-source").setAttribute('src', document.getElementById("video-finder").value)
        video.load()
    }
}
'use strict';
let inputNode = document.getElementById('video-finder');let happening = false;
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
        document.getElementById("img-container").style.display = "flex"
        document.getElementById("img-menus").style.display = "block"
        document.getElementById("controls-auvid").style.display = "none"
        video.src = null;video.load();video.style.display = "none"
        $("#video-finder").attr("accept","image/*")
        $("#video-finder").trigger("click")
        inputNode.addEventListener("change",function () {
            var file = inputNode.files[0]
            var fileURL = URL.createObjectURL(file)
            const extension = this.value.substr(this.value.lastIndexOf("."),this.value.length)
            document.getElementById("FormatName").innerHTML = 'Format: "'+extension+'"';
            document.getElementById("imgr").href = fileURL;
        })
    },
    vifw : function () {document.getElementById("img-url-popup").style.display = "block"}
}