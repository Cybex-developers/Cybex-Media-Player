var change = {
    video: function () {
        document.getElementById("vid-source").setAttribute('src', document.getElementById("video-finder").value)
        video.load()
    }
}
var FileName = 'welcome.png';let ImgHeight = 320, ImgWidth = 240;
var file;var fileSize = '12.1kb';var extension = '.png';let lastModified = "Available Soon"
'use strict';
let inputNode = document.getElementById('video-finder');let happening = false;
var URL = window.URL || window.webkitURL
FitTheArea = function () {
    if(ImgWidth >= ImgHeight){
        imgtag.style.width = "100%";imgtag.style.height = 'auto';imgtag.style.zoom = 1
        //document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100
    }
    else{
        imgtag.style.height = "100%";imgtag.style.width = 'auto';imgtag.style.zoom = 1
        //document.getElementById('zoom').value = getComputedStyle(imgtag).zoom * 100
    }
}
var playSelectedFile = function () {
    if (document.querySelector('#video-finder').accept != "image/*"){  
        var file = this.files[0]
        var fileURL = URL.createObjectURL(file)
        video.src = fileURL
        document.getElementById("img-container").style.display = "none"
        document.getElementById("header_img").style.display = "none"
        document.getElementById("controls-auvid").style.display = "block"
        document.getElementById("audio-container").style.display = "none"
        document.getElementById("video-container").style.display = "none"
        video.style.display = "block"
        fileSize = file.size
        FileName = file.name
        extension = this.value.substr(this.value.lastIndexOf("."),this.value.length)
    }
    else if(document.querySelector('#video-finder').accept == "image/*"){
        document.getElementById("img-container").style.display = "flex"
        document.getElementById("controls-auvid").style.display = "none"
        video.src = null;video.load();video.style.display = "none"
        document.getElementById("header_img").style.display = "block"
        var file = inputNode.files[0]
        var fileURL = URL.createObjectURL(file)
        document.getElementById("image-main").src = fileURL
        extension = this.value.substr(this.value.lastIndexOf("."),this.value.length)
        img = new Image();
        img.onload = function() {
            ImgWidth = this.width;
            ImgHeight = this.height;
            if(ImgHeight > 380){FitTheArea()}
            if(ImgWidth > 600){FitTheArea()}
            fileSize = file.size
            FileName = file.name
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
}