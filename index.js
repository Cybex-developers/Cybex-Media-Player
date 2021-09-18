function Download(){
    var des = document.getElementById("downnow");
    const backcolor = getComputedStyle(des).backgroundColor;console.log(backcolor);
    GoDownload();
}
function GoHome(){window.location.href = "https://cybex-developers.github.io/Cybex-Media-Player/";}
function GoConPage(){window.location.href = "./ContactUs.html";}
function GoAboutPage(){window.location.href = "./AboutUs.html";}
function GoDownload(){window.location.href = "./Downloads.html";}
function ReadDocs(){window.location.href = "./Docs.html";}
function Launch() {
    app=window.open("./Cybex_Media_Player","Cybex Media Player","height=450,width=650");
    if (window.focus) {app.focus()}
    return false;
}