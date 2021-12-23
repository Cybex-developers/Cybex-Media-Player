let imgtag = document.getElementById("image-main")
function AvailableSoon() {
    messageBox.style.display = "block"
    messageBox.innerHTML = "<span class='closebtn' onclick='CloseMessage()'>&times;</span>Available Soon!";
    setTimeout(function () {
        messageBox.style.display = "none";
    }, 2000)
}
var filterOptions = {
    showFilters : function(value) {
        document.getElementById('filters-popup').style.display = "block";
        document.getElementById('filters').style.display = "none"
        document.getElementById('filter-type').value = value;
        filterOptions.filterify()
    },
    filterP : function(nu) {
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
    },
    ApplyFilter : function() {
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
    },
    filterify : function() {
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
        filterOptions.filterP(2)
    }
}
var rotateOptions = {
    Rotate : function() {
        let val = document.getElementById('rot-deg').value;
        document.getElementById('image-main').style.transform = "rotate(" + val + "deg)"
        document.getElementById('rotate-popup').style.display = "none"
    },
    showRotatePopup : function() {
        document.getElementById('rotate-popup').style.display = "block"
    },
    RotateSuggest : function(deg) {
        document.getElementById('rot-deg').value = deg;
    }
}
function Save() {
    var a = $("<a>")
    .attr("href", "./welcome.png")
    .attr("download", "img.png")
    .appendTo("body");

    a[0].click();

    a.remove();
}
function FixBug4() {
    let val = document.getElementById('rot-deg').value
    if(val == 0){
        val = val.substr(1,val.length)
        document.getElementById('rot-deg').value = val;
    }
}
document.getElementById('rot-deg').addEventListener("keydown",function (key) {
    if(key.which == 13){Rotate()}
})
function ViewWebImg(){
    let valuer = document.getElementById("popup").value;
    if (valuer !== "" && valuer !== null){
        document.getElementById("controls-img").style.display = "block"
        document.getElementById("img-container").style.display = "flex"
        document.getElementById("img-menus").style.display = "block"
        document.getElementById("controls-auvid").style.display = "none"
        document.getElementById('image-main').src = valuer;
        const vr = document.getElementById('image-main').src.toString();
        document.getElementById("FormatName").innerHTML = "can't read type of web image";
        video.src = null;video.load();video.style.display = "none"
        document.getElementById('img-url-popup').style.display = 'none';
    }
}