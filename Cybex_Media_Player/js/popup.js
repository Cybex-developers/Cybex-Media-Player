let popupId;
function FixBug3() {
    let zoomp = document.getElementById('zoomRange')
    if(zoomp.value > 999){zoomp.value = 999}
    if(zoomp.value < 1){zoomp.value = 1}
}
function ApplyFilter() {
    Filterbrightness = $("#BrightnessFilter").val(),
    Filtercontrast = $("#ContrastFilter").val(),
    Filtersaturate = $("#SaturationFilter").val(),
    Filtergrayscale = $("#GrayscaleFilter").val(),
    Filterinvert = $("#InversionFilter").val(),
    Filterhuerotate = $("#HueRotationFilter").val(),
    Filterblur = $("#BlurnessFilter").val(),
    Filteropacity = $("#OpacityFilter").val(),
    Filtersepia = $("#SepiaFilter").val();

    $('#image-main').css("filter","brightness(" + Filterbrightness +
        "%) contrast(" + Filtercontrast +
        "%) saturate(" + Filtersaturate +
        "%) grayscale(" + Filtergrayscale +
        "%) invert(" + Filterinvert +
        "%) hue-rotate(" + Filterhuerotate +
        "deg) blur(" + Filterblur / 5 +
        "px) opacity(" + Filteropacity +
        "%) sepia(" + Filtersepia + "%)") 
}
var ZoomOptions = {
    PixelToPixel : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";imgtag.style.zoom = 1
        imgtag.style.zoom = 1;FixBug3()
        let ZoomPercent = Math.floor(getComputedStyle(imgtag).zoom * 100)
        document.getElementById('zoomText').innerHTML = `Zoom : ` + ZoomPercent + `%`
        document.getElementById('zoomRange').value = ZoomPercent
    },
    FitTheArea : function () {
        if(ImgWidth >= ImgHeight){
            imgtag.style.width = "100%";imgtag.style.height = 'auto';imgtag.style.zoom = 1
            let ZoomPercent = Math.floor(getComputedStyle(imgtag).zoom * 100)
            document.getElementById('zoomText').innerHTML = `Zoom : ` + ZoomPercent + `%`
            document.getElementById('zoomRange').value = ZoomPercent
        }
        else{
            imgtag.style.height = "100%";imgtag.style.width = 'auto';imgtag.style.zoom = 1
            let ZoomPercent = Math.floor(getComputedStyle(imgtag).zoom * 100)
            document.getElementById('zoomText').innerHTML = `Zoom : ` + ZoomPercent + `%`
            document.getElementById('zoomRange').value = ZoomPercent
        }
    },
    ZoomIn : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";
        imgtag.style.zoom = getComputedStyle(imgtag).zoom * 1.25;
        let ZoomPercent = Math.floor(getComputedStyle(imgtag).zoom * 100)
        document.getElementById('zoomText').innerHTML = `Zoom : ` + getComputedStyle(imgtag).zoom * 100 + `%`;FixBug3() 
        document.getElementById('zoomRange').value = ZoomPercent
    },
    ZoomOut : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";
        imgtag.style.zoom = getComputedStyle(imgtag).zoom / 1.25;
        let ZoomPercent = Math.floor(getComputedStyle(imgtag).zoom * 100)
        document.getElementById('zoomText').innerHTML = `Zoom : ` + ZoomPercent + `%`;FixBug3()
        document.getElementById('zoomRange').value = ZoomPercent
    },
    ZoomNum : function () {
        imgtag.style.width = "auto";imgtag.style.height = "auto";
        imgtag.style.zoom = document.getElementById('zoomRange').value / 100;
        let ZoomPercent = Math.floor(getComputedStyle(imgtag).zoom * 100)
        document.getElementById('zoomText').innerHTML = `Zoom : ` + ZoomPercent + `%`;FixBug3()
    }
}
var RotateOptions = {
    RotateTo : function (deg) {
        $("#image-main").css("transform","rotate(" + deg + "deg)");
        $('#RotateRange').val(deg)
        $('#RotateText').text(`Rotation : ` + deg + `°`);
    },
    RotateNum : function () {
        $("#image-main").css("transform","rotate(" + parseInt($('#RotateRange').val()) + "deg)");
        $('#RotateText').text(`Rotation : ` + $('#RotateRange').val() + `°`)
    },
    RotateIncrease : function () {
        let deg = (parseInt($('#RotateRange').val())) + 10;
        if(deg >= 360){deg = 360}
        $("#image-main").css("transform","rotate(" + deg + "deg)");
        $('#RotateRange').val(deg)
        $('#RotateText').text(`Rotation : ` + deg + `°`);
    },
    RotateDecrease : function () {
        let deg = $('#RotateRange').val() - 10;
        if(deg < 0){deg = 0}
        $("#image-main").css("transform","rotate(" + deg + "deg)");
        $('#RotateRange').val(deg)
        $('#RotateText').text(`Rotation : ` + deg + `°`);
    }
}
function CreatePopup(name,id,width,height,text,script) {
    const container = document.getElementById('popups')
    const elem = document.createElement("div")
    elem.className = 'popup'
    elem.id = id
    elem.innerHTML =`<div class="header">
    <span class="name">`+name+`</span>
    <div class="close">x</div>
</div><div class='popup-container'></div>`
    container.appendChild(elem)
    popupId = id
    $('<script>'+script+'</' + 'script>').appendTo(document.getElementById(id))
    setTimeout(() => {
        const element = document.getElementById(id)
        const HeadElem =  element.getElementsByClassName("header")[0]
        const closeBtn = HeadElem.getElementsByClassName('close')[0];
        var mousePosition;var offset = [0,0];var div;var isDown = false;
        HeadElem.addEventListener('mousedown', function(e) {
            isDown = true;
            offset = [
                element.offsetLeft - e.clientX,
                element.offsetTop - e.clientY
            ];
        }, true);
        document.body.addEventListener('mouseup', function() {
            isDown = false;
        }, true);
        document.body.addEventListener('mousemove', function(event) {
            if (isDown) {
                mousePosition = {
        
                    x : event.clientX,
                    y : event.clientY
        
                };
                element.style.left = (mousePosition.x + offset[0]) + 'px';
                element.style.top  = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);
        element.style.width = width + "px";
        element.style.height = height + "px";
        element.style.top = (window.innerHeight / 2 - (height / 2)) + "px"
        element.style.left = (window.innerWidth / 2 - (width / 2)) + "px"
        closeBtn.style.left =  (width - 25) + "px"
        closeBtn.addEventListener("click",function () {
            document.getElementById(id).remove()
        })
        element.getElementsByClassName("popup-container")[0].innerHTML = text;
    }, 10);
}
function CreateCancelPopup() {
    CreatePopup('Are you sure you want to exit?','exitOrNot',300,100,
`<style>
.popupClosebutton{
    background: #222;
    padding: 10px;
    padding-right: 0;
    padding-left: 0;
    border: 1px solid black;
    border-radius: 5px;
    color: #eee;
    margin-top: 15px;
    font-size: 18px;
    width: 100px;
    cursor: pointer;
}
.popupClosebutton:hover{background: #282828;}
.popupClosebutton:active{background: #333;}
</style>
<button class='popupClosebutton' style="margin-left: 40px;" onclick="Popup1Cancel()">Cancel</button>
<button class='popupClosebutton' style="margin-left: 10px" onclick="Popup1Exit()">Exit</button>`,
`
function Popup1Cancel(){
    document.getElementById(popupId).remove()
}
function Popup1Exit(){
    this.close()
}
`)
}
function CreateFileDetailsPopup() {
    CreatePopup('File Details:-','FileDetails',400,250,
`
<div>
<style>
    span{
        font-family: Verdana;
        color: #eee;
        margin-left: 20px;
    }
</style><br>
<span>File Name:</span><span id="popup2FileName">welcome.png</span><br><br>
<span>File Format:</span><span id="popup2FileFormat">png/Image</span><br><br>
<span>File Size:</span><span id="popup2FileSize">13kb</span><br><br>
<span>Image Resolution:</span><span id="popup2ImageResolution">320 x 240</span><br><br>
<span>Last Modified:</span><span id="popup2lastModified"></span><br><br>
</div>
`)
setTimeout(() => {
    document.getElementById("popup2FileName").innerHTML = FileName
    document.getElementById("popup2FileFormat").innerHTML = extension
    document.getElementById("popup2FileSize").innerHTML = fileSize
    document.getElementById("popup2ImageResolution").innerHTML = ImgWidth + " x " + ImgHeight
    document.getElementById("popup2lastModified").innerHTML = lastModified
}, 10);
}
function ShowSoftwareInfo() {
    CreatePopup('Software Details:-','FileDetails',350,190,
    `
    <style>
span{
    font-family: Verdana;
    color: #eee;
    margin-left: 20px;
}
</style><br>
<span>Name:</span><span>Cybex Media Player</span><br><br>
<span>Version:</span><span>v2021.2.1</span><br><br>
<span>Author:</span><span>Cybex Studios</span><br><br>
<span>License:</span><span>MIT</span><br><br>
    `)
}
function CreateFiltersPopup() {
    let Filterbrightness = 100,
        Filtercontrast = 100,
        Filtersaturate = 100,
        Filtergrayscale = 0,
        Filterinvert = 0,
        Filterhuerotate = 0,
        Filterblur = 0,
        Filteropacity = 100,
        Filtersepia = 0;
        function Filtervaly() {
                $("#BrightnessFilter").on("input",function () {
                    $("#Filter-prop-value-Brightness").css("display","block")
                    $("#Filter-prop-value-Brightness").css("left", (( $("#BrightnessFilter").val() / 6.3) + 95) + "px")
                    $("#Filter-prop-value-Brightness").text($("#BrightnessFilter").val() + "%")
                })
                $("#BrightnessFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Brightness").css("display","none")
                })

                $("#ContrastFilter").on("input",function () {
                    $("#Filter-prop-value-Contrast").css("display","block")
                    $("#Filter-prop-value-Contrast").css("left", (( $("#ContrastFilter").val() / 6.3) + 95) + "px")
                    $("#Filter-prop-value-Contrast").text($("#ContrastFilter").val() + "%")
                })
                $("#ContrastFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Contrast").css("display","none")
                })

                $("#SaturationFilter").on("input",function () {
                    $("#Filter-prop-value-Saturation").css("display","block")
                    $("#Filter-prop-value-Saturation").css("left", (( $("#SaturationFilter").val() / 6.3) + 95) + "px")
                    $("#Filter-prop-value-Saturation").text($("#SaturationFilter").val() + "%")
                })
                $("#SaturationFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Saturation").css("display","none")
                })

                $("#GrayscaleFilter").on("input",function () {
                    $("#Filter-prop-value-Grayscale").css("display","block")
                    $("#Filter-prop-value-Grayscale").css("left", (( $("#GrayscaleFilter").val() / 0.63) + 95) + "px")
                    $("#Filter-prop-value-Grayscale").text($("#GrayscaleFilter").val() + "%")
                })
                $("#GrayscaleFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Grayscale").css("display","none")
                })

                $("#InversionFilter").on("input",function () {
                    $("#Filter-prop-value-Inversion").css("display","block")
                    $("#Filter-prop-value-Inversion").css("left", (( $("#InversionFilter").val() / 0.63) + 95) + "px")
                    $("#Filter-prop-value-Inversion").text($("#InversionFilter").val() + "%")
                })
                $("#InversionFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Inversion").css("display","none")
                })

                $("#HueRotationFilter").on("input",function () {
                    $("#Filter-prop-value-HueRotation").css("display","block")
                    $("#Filter-prop-value-HueRotation").css("left", (( $("#HueRotationFilter").val() / 0.63 / 3.6) + 95) + "px")
                    $("#Filter-prop-value-HueRotation").text($("#HueRotationFilter").val() + "deg")
                })
                $("#HueRotationFilter").on("mouseup",function () {
                    $("#Filter-prop-value-HueRotation").css("display","none")
                })

                $("#BlurnessFilter").on("input",function () {
                    $("#Filter-prop-value-Blurness").css("display","block")
                    $("#Filter-prop-value-Blurness").css("left", (( $("#BlurnessFilter").val() / 0.63) + 95) + "px")
                    $("#Filter-prop-value-Blurness").text($("#BlurnessFilter").val()  + "%")
                })
                $("#BlurnessFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Blurness").css("display","none")
                })

                $("#OpacityFilter").on("input",function () {
                    $("#Filter-prop-value-Opacity").css("display","block")
                    $("#Filter-prop-value-Opacity").css("left", (( $("#OpacityFilter").val() / 0.63) + 95) + "px")
                    $("#Filter-prop-value-Opacity").text($("#OpacityFilter").val() + "%")
                })    
                $("#OpacityFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Opacity").css("display","none")
                })

                $("#SepiaFilter").on("input",function () {
                    $("#Filter-prop-value-Sepia").css("display","block")
                    $("#Filter-prop-value-Sepia").css("left", (( $("#SepiaFilter").val() / 0.63) + 95) + "px")
                    $("#Filter-prop-value-Sepia").text($("#SepiaFilter").val() + "%")
                    ApplyFilter()
                })
                $("#SepiaFilter").on("mouseup",function () {
                    $("#Filter-prop-value-Sepia").css("display","none")
                })
        }
    CreatePopup('Apply Filters :-','applyFilterz',300,310,
    `        <style>
    .filterLabel{
        margin-left: 10px;
        color: #eee;
        font-family: Arial;
        position: relative;
        margin-top: -10px;
    }
    .filterRange{
        appearance: none;
        width: 170px;
        border-radius: 10px;
        height: 2px;
        margin-left: 15px;
        background: Crimson;
        position: relative;
        left: 100px;
        top: -22px;
        margin-bottom: 10px;
    }
    .filterRange::-webkit-slider-thumb{
        appearance: none;
        height: 14px;
        width: 14px;
        background: #fff;
        cursor: pointer;
        border-radius: 9px;
    }
    .filterRange::-webkit-slider-thumb:hover{background: #eee;}
    .filterRange:active::-webkit-slider-thumb{box-shadow: 0 0 0 3px #eee8;background: #eee;}
    .Filter-prop-value{
        position: relative;
        top: -65px;
        left: 90px;
        text-align: center;
        background: #0f8;
        padding: 3px;
        width: 50px;
        border-radius: 2px;
        display: none;
        margin-bottom: -34px;
        color : #111;
    }
    .Filter-prop-value::before{
        content: " ";
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #0f8;
        position: absolute;
        left: 15px;
        top: 20px;
    }
</style>
<div for="BrightnessFilter" class="filterLabel" style="margin-top: 10px">Brightness :</div>
<input class="filterRange" id="BrightnessFilter" type="range" min="0" value="100" max="999" oninput="ApplyFilter()" style="margin-top: 10px">
<div class="Filter-prop-value" id="Filter-prop-value-Brightness"></div>

<div for="ContrastFilter" class="filterLabel">Contrast :</div>
<input class="filterRange" id="ContrastFilter" type="range" min="0" value="100" max="999" oninput="ApplyFilter()">
<div class="Filter-prop-value" id="Filter-prop-value-Contrast"></div>

<div for="SaturationFilter" class="filterLabel">Saturation :</div>
<input class="filterRange" id="SaturationFilter" type="range" min="0" value="100" max="999" oninput="ApplyFilter()">
<div class="Filter-prop-value" id="Filter-prop-value-Saturation"></div>

<div for="GrayscaleFilter" class="filterLabel">Grayscale :</div>
<input class="filterRange" id="GrayscaleFilter" type="range" min="0" value="0" max="100" oninput="ApplyFilter()">
<div class="Filter-prop-value" id="Filter-prop-value-Grayscale"></div>

<div for="InversionFilter" class="filterLabel">Inversion :</div>
<input class="filterRange" id="InversionFilter" type="range" min="0" value="0" max="100" oninput="ApplyFilter()">
<div class="Filter-prop-value" id="Filter-prop-value-Inversion"></div>

<div for="HueRotationFilter" class="filterLabel">Hue-rotation:</div>
<input class="filterRange" id="HueRotationFilter" type="range" min="0" value="0" max="360" oninput="ApplyFilter()">
<div class="Filter-prop-value" id="Filter-prop-value-HueRotation"></div>

<div for="BlurnessFilter" class="filterLabel">Blurness :</div>
<input class="filterRange" id="BlurnessFilter" type="range" min="0" value="0" max="100" oninput="ApplyFilter()">
<div class="Filter-prop-value" id="Filter-prop-value-Blurness"></div>

<div for="OpacityFilter" class="filterLabel">Opacity :</div>
<input class="filterRange" id="OpacityFilter" type="range" min="0" value="100" max="100" oninput="ApplyFilter()">
<div class="Filter-prop-value" id="Filter-prop-value-Opacity"></div>

<div for="SepiaFilter" class="filterLabel">Sepia :</div>
<input class="filterRange" id="SepiaFilter" type="range" min="0" value="0" max="100">
<div class="Filter-prop-value" id="Filter-prop-value-Sepia">0%</div>`
    )
    setTimeout(() => {
        Filtervaly()
    }, 10);
}
var CapturePopups = {
    CameraPhoto : function () {
        CreatePopup('Take Photo from camera','takeCamerPhoto',300,270,
        `<style>
        .CaptureCameraButton{
            background: #181818;
            color: #eee;
            border: 1px solid #08f;
            outline: none;
            margin-top: 5px;
            margin-left: 15px;
            margin-right: 15px;
            padding-top: 3px;
            padding-bottom: 3px;
            cursor: pointer;
        }
        .CaptureCameraButton:hover{background: #222;}
        .CaptureCameraButton:active{background: #333;}
        #CaptureCameravideo,#CaptureCameracanvas{
            position: absolute;
            top: 40px;
            left: 15px;
            width: 270px;
            height: 200px;
        }
        .CaptureCameratick{
            color: lime;
            border-radius: 10px;
            background: #181818;
            border: 1px solid #08f;
            padding: 3px;
            padding-left: 6px;
            padding-right: 6px;
            cursor: pointer;
        }
        .CaptureCameratick:hover{background: #222;}
        .CaptureCameratick:active{background: #333;}
    </style>
    <button id="CaptureCamerastart-camera" class="CaptureCameraButton">Start Camera</button>
    <button id="CaptureCameraclick-photo" class="CaptureCameraButton">Click Photo</button>
    <video id="CaptureCameravideo" autoplay></video>
    <canvas id="CaptureCameracanvas"></canvas>
    <button class="CaptureCameratick" id="CaptureCameratick">✔</button>
    <img src="" id="image-main">`,``)
        setTimeout(() => {
            
        let Capture_Camera_camera_button = document.querySelector("#CaptureCamerastart-camera");
        let Capture_Camera_video = document.querySelector("#CaptureCameravideo");
        let Capture_Camera_click_button = document.querySelector("#CaptureCameraclick-photo");
        let Capture_Camera_canvas = document.querySelector("#CaptureCameracanvas");
        let Capture_Camera_stream;
        Capture_Camera_camera_button.addEventListener('click', async function() {
            Capture_Camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            Capture_Camera_video.srcObject = Capture_Camera_stream;
            Capture_Camera_canvas.style.display = "none"
        });

        Capture_Camera_click_button.addEventListener('click', function() {
            if(Capture_Camera_stream != null){
                Capture_Camera_canvas.getContext('2d').drawImage(Capture_Camera_video, 0, 0, Capture_Camera_canvas.width, Capture_Camera_canvas.height);
                let image_data_url = Capture_Camera_canvas.toDataURL('image/jpeg');
                // data url of the image
                Capture_Camera_canvas.style.display = "block"
                Capture_Camera_stream.getTracks().forEach(function(track) {
                    track.stop();
                    Capture_Camera_stream = null;
                });
            }
            else{}
        });
        document.getElementById('CaptureCameratick').onclick = function () {
            let image_data_url = Capture_Camera_canvas.toDataURL('image/jpeg');
            document.getElementById('image-main').src = image_data_url
            ZoomOptions.FitTheArea()
            this.parentElement.remove()
        }
        }, 10);
    }
}
var Tools_popups = {
    RotatePopup : function() {
        CreatePopup('Zoom Options:-','zoomOpts',300,160,
        `
        <style>
        .Rotatebutton{
            color: #eee;
            border: none;
            background: #222;
            border-radius: 50%;
            padding: 5px;
            width: 25px;
            height: 25px;
            cursor: pointer;
            text-align: center;
            position: relative;
            margin-top: 10px;
        }
        .Rotatebutton:hover{background: #282828;}
        .Rotatebutton:active{background: #333;}
        .RotateSuggest{
            width: 135px;
            position: relative;
            left: 50px;
            margin-top: 10px;
            margin-left: -40px;
            background: #222;
            color: #eee;
            border: 1px solid #08f;
            font-size: 14px;
            padding-top: 4px;
            padding-bottom: 4px;
            cursor:pointer;
        }
        .RotateSuggestright{margin-left: 10px;}
        .RotateRange{
            appearance: none;
            width: 222px;
            position: relative;
            top: 1px;
            border-radius: 10px;
            height: 10px;
            background: #80f;
        }
        .RotateRange::-webkit-slider-thumb{
            appearance: none;
            height: 16px;
            width: 16px;
            background: #fff;
            cursor: pointer;
            border-radius: 8px;
        }
        .RotateRange::-webkit-slider-thumb:hover{background: #eee;}
        .RotateRange:active::-webkit-slider-thumb{border: 3px solid #0f8;background: #eee;}
        #RotateText{
            color: #eee;
            font-family: Verdana;
            margin-top: 10px;
            text-align: center;
        }
    </style>
    <button class="RotateSuggest" onclick="RotateOptions.RotateTo(90)">Rotate to 90°</button>
    <button class="RotateSuggest RotateSuggestright" onclick="RotateOptions.RotateTo(270)">Rotate to 270°</button>
    <button class="RotateSuggest" onclick="RotateOptions.RotateTo(180)">Rotate to 180°</button>
    <button class="RotateSuggest RotateSuggestright" onclick="RotateOptions.RotateTo(0)">Rotate to 0°</button><br>
    <button class="Rotatebutton" style="margin-left:10px" onclick="RotateOptions.RotateIncrease()">+</button>
    <input type="range" id="RotateRange" class="RotateRange" min='0' max='360' value='0' oninput="RotateOptions.RotateNum()">
    <button class="Rotatebutton" onclick="RotateOptions.RotateDecrease()">-</button><br>
    <p id="RotateText">Rotation : 0°</p>
        `,``)
    },
    ZoomPopup : function () {
        CreatePopup('Zoom Options:-','zoomOpts',300,160,
    `
    <style>
    .zoombutton{
        color: #eee;
        border: none;
        background: #222;
        border-radius: 50%;
        padding: 5px;
        width: 25px;
        height: 25px;
        cursor: pointer;
        text-align: center;
        position: relative;
        margin-top: 10px;
    }
    .zoombutton:hover{background: #282828;}
    .zoombutton:active{background: #333;}
    .zoomFunctions{
        width: 200px;
        position: relative;
        left: 50px;
        margin-top: 10px;
        background: #222;
        color: #eee;
        border: 1px solid #08f;
        font-size: 14px;
        padding-top: 4px;
        padding-bottom: 4px;
        cursor:pointer;
    }
    .zoomRange{
        appearance: none;
        width: 222px;
        position: relative;
        top: 1px;
        border-radius: 10px;
        height: 10px;
        background: #80f;
    }
    .zoomRange::-webkit-slider-thumb{
        appearance: none;
        height: 16px;
        width: 16px;
        background: #fff;
        cursor: pointer;
        border-radius: 8px;
    }
    .zoomRange::-webkit-slider-thumb:hover{background: #eee;}
    .zoomRange:active::-webkit-slider-thumb{border: 3px solid #0f8;background: #eee;}
    #zoomText{
        color: #eee;
        font-family: Verdana;
        margin-top: 10px;
        text-align: center;
    }
</style>
<button class="zoomFunctions" onclick="ZoomOptions.PixelToPixel()">Pixel to Pixel</button>
<button class="zoomFunctions" onclick="ZoomOptions.FitTheArea()">Fit the Area</button><br>
<button class="zoombutton" onclick="ZoomOptions.ZoomIn()" style="margin-left:10px">+</button>
<input type="range" id="zoomRange" class="zoomRange" oninput="ZoomOptions.ZoomNum()" min='1' max='999' value='100'>
<button class="zoombutton" onclick="ZoomOptions.ZoomOut()">-</button><br>
<p id="zoomText">Zoom : 100%</p>
    `,``)
    }
}