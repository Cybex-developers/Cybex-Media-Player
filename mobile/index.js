function Size() {
    let sw = screen.width;let sh = screen.height;
    document.getElementById('header').style.width = sw + "px"
    document.getElementById('header').style.height = sh / 20 + "px"
    document.getElementById('header-logo').style.height = sh / 25 + "px"
    document.getElementById('header-logo').style.top = sh / 200 + "px"
    document.getElementById('header-logo').style.left = sw / 200 + "px"
    document.getElementById('header-name').style.left = sw / 10 + "px"
    document.getElementById('header-name').style.top = (sh / 80 * -1) + "px"
    document.getElementById('info').style.top = sh / 18 + "px"

    document.getElementById('not-avail').style.top = sh / 2 + sh / 3.4 + "px"
    document.getElementById('sys-req').style.top = sh / 2 + sh / 5 + "px"
    document.getElementById('version').style.top = sh / 2 + sh / 4 + "px"
    document.getElementById('copyright').style.bottom = sh / 18 + "px"

    document.getElementById('snap').style.width = sw / 1.04 + "px"
    document.getElementById('snap').style.height = sh / 2.54 + "px"
    document.getElementById('snap').style.top = sh / 3.5 + "px"
    document.getElementById('snap').style.left = sw / 50 + "px"
}
Size()