/*document.addEventListener('contextmenu', event => event.preventDefault());
let keypressedctrl = false;
window.onbeforeunload = function (e) {
    e.preventDefault();
};
document.onkeydown = function (e) {
    e = e || window.event;//Get event
    console.log(e.which)
    if (!e.ctrlKey) return;
    if(e.which == 32){
        e.preventDefault()
    }
    var code = e.which || e.keyCode;//Get key code

    switch (code) {
        case 83:case 87:case 82:case 78:case 79:
        case 72:case 70:case 109:case 107:case 187:
        case 189: case 68:case 74:case 75:case 69:
        case 80:case 84: case 85:
            e.preventDefault();
            e.stopPropagation();
            break;
        case 16:
            case 73:case 46:case 66:case 78:case 84:
            case 87:
                e.preventDefault()
                e.stopPropagation();
                break;
    }
};*/