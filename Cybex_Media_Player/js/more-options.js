var change = {
    video: function () {
        document.getElementById("vid-source").setAttribute('src', document.getElementById("video-finder").value)
        video.load()
    }
}
var filename;let ImgHeight = 320, ImgWidth = 240;
'use strict';
let inputNode = document.getElementById('video-finder');let happening = false;
var URL = window.URL || window.webkitURL
FitTheArea = function () {
    if(ImgWidth >= ImgHeight){
        imgtag.style.width = "100%";imgtag.style.height = 'auto';imgtag.style.zoom = 1
        document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100
    }
    else{
        imgtag.style.height = "100%";imgtag.style.width = 'auto';imgtag.style.zoom = 1
        document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100
    }
}
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
    else if(document.querySelector('#video-finder').accept == "image/*"){
        document.getElementById("controls-img").style.display = "block"
        document.getElementById("img-container").style.display = "flex"
        document.getElementById("img-menus").style.display = "block"
        document.getElementById("controls-auvid").style.display = "none"
        video.src = null;video.load();video.style.display = "none"

        var file = inputNode.files[0]
        var fileURL = URL.createObjectURL(file)
        document.getElementById("image-main").src = fileURL
        const extension = this.value.substr(this.value.lastIndexOf("."),this.value.length)
        document.getElementById("FormatName").innerHTML = 'Format: "'+extension+'"';
        img = new Image();
        img.onload = function() {
            ImgWidth = this.width;
            ImgHeight = this.height;
            if(ImgHeight > 380){FitTheArea()}
            if(ImgWidth > 600){FitTheArea()}
            console.clear()
        };
        img.onerror = function() {
            alert( "not a valid file: " + file.type);
        };
        img.src = fileURL;
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
        $("#video-finder").attr("accept","image/*")
        $("#video-finder").trigger("click")
    },
    vifw : function () {document.getElementById("img-url-popup").style.display = "block"}
}