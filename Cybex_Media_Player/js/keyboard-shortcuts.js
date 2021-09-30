document.addEventListener('keyup',function(e) {
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
})