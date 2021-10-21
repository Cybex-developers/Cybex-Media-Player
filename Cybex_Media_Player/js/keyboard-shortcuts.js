document.addEventListener('keyup',function(e) {
    /*if (e.which != null){
        console.log(e.which);
    }*/
    if (e.ctrlKey && e.which == 82) {
        more_options.Reload()
    }
    else if (e.ctrlKey && e.which == 87) {
        more_options.Exit()
    }
    else if (e.ctrlKey && e.which == 79) {
        more_options.PlayVideo()
    }
    else if (e.ctrlKey && e.shiftKey && e.which == 79) {
        more_options.ListenAudio()
    }
    else if (e.ctrlKey && e.altKey && e.which == 79) {
        more_options.ViewImage()
    }
    else if(e.shiftKey && e.which == 107){
        e.preventDefault()
        if(document.getElementById('video-finder').accept == "image/*"){
            ZoomOptions.ZoomIn()
        }
        else if(document.getElementById('video-finder').accept == "audio/mp3,audio/wav,audio/ogg"){
            FastForward()
        }
        else if(document.getElementById('video-finder').accept == "video/mp4,video/webm,video/ogg"){
            FastForward()
        }
    }
    else if(e.shiftKey && e.which == 109){
        e.preventDefault()
        if(document.getElementById('video-finder').accept == "image/*"){
            ZoomOptions.ZoomOut()
        }
        else if(document.getElementById('video-finder').accept == "audio/mp3,audio/wav,audio/ogg"){
            SlowForward()
        }
        else if(document.getElementById('video-finder').accept == "video/mp4,video/webm,video/ogg"){
            SlowForward()
        }
    }
    else if(e.which == 32){
        if(document.getElementById('video-finder').accept == "audio/mp3,audio/wav,audio/ogg"){
            PP()
        }
        else if(document.getElementById('video-finder').accept == "video/mp4,video/webm,video/ogg"){
            PP()
        }
    }
    else if(e.which == 38){
        if(document.getElementById('video-finder').accept == "audio/mp3,audio/wav,audio/ogg"){
            volumeRange.value = (parseInt( volumeRange.value) + 1).toString();ApplyVolume();
            console.log(typeof(volumeRange.value));
        }
        else if(document.getElementById('video-finder').accept == "video/mp4,video/webm,video/ogg"){
            volumeRange.value = (parseInt( volumeRange.value) + 1).toString();ApplyVolume()
            console.log(typeof(volumeRange.value));
        }
    }
    else if(e.which == 40){
        if(document.getElementById('video-finder').accept == "audio/mp3,audio/wav,audio/ogg"){
            volumeRange.value = (parseInt( volumeRange.value) + 1).toString();ApplyVolume();
            console.log(typeof(volumeRange.value));
        }
        else if(document.getElementById('video-finder').accept == "video/mp4,video/webm,video/ogg"){
            volumeRange.value = (parseInt( volumeRange.value) + 1).toString();ApplyVolume()
            console.log(typeof(volumeRange.value));
        }
    }
})