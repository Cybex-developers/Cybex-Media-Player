function DisplayMenu(id) {
    $('#file-menu').css("display","none")
    $('#filters-menu').css("display","none")
    $('#zoom-menu').css("display","none")
    $('#tools-menu').css("display","none")
    $('#help-menu').css("display","none")
    const elem = $('#' + id + '-menu')
    if (elem.css("display") == "block") {
        elem.css("display","none")
    }
    else if(elem.css("display") == "none"){
        elem.css("display","block")
    }
    
    setTimeout(() => {
        document.addEventListener("click",function () {
            document.getElementById(id + '-menu').style.display = "none"
            this.removeEventListener('click', arguments.callee);
        })
    }, 10);
}
function DisplaySubMenu(id) {
    document.getElementById('open-sub-menu').style.display = "none"
    document.getElementById('capture-sub-menu').style.display = "none"

    document.getElementById(id + '-sub-menu').style.display = "block"
    setTimeout(() => {
        document.addEventListener("click",function () {
            document.getElementById(id + '-sub-menu').style.display = "none"
            this.removeEventListener('click', arguments.callee);
        })
        document.getElementById(id + "-sub-menu").parentNode.style.display = "block"
    }, 10);
}
const File_options = {
    Reload : function (){window.location.reload()},
    Exit: function () {CreateCancelPopup()},
    open_Options : {
        PlayVideo: function () {
            $("#video-finder").attr("accept","video/mp4,video/webm,video/ogg")
            $("#video-finder").trigger("click")
            $("#file-menu").css("display","none")
        },
        ListenAudio: function () {
            $("#video-finder").attr("accept","audio/mp3,audio/wav,audio/ogg")
            $("#video-finder").trigger("click")
            $("#file-menu").css("display","none")
        },
        ViewImage : function (){
            $("#video-finder").attr("accept","image/*")
            $("#video-finder").trigger("click")
            $("#file-menu").css("display","none")
        },
    },
    CaptureOptions : {
        TakeImage : function () {CapturePopups.CameraPhoto()}
    },
    saveAs : function () {
        
    }
}
const Filters_options = {
    
}
const Tools_options = {
    File_details : function () {CreateFileDetailsPopup()} 
}
const Help_options = {
    Documentation : function () {window.open("https://cybex-developers.github.io/Cybex-Media-Player/Docs", "_blank");},
    AboutUs : function () {window.open("https://cybex-developers.github.io/Cybex-Media-Player/AboutUs", "_blank");},
    AIhelp : function () {window.open("https://cybex-developers.github.io/Cybex-Media-Player/Help", "_blank");},
}