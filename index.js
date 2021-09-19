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
function Download() {
    window.open("./archives/2021/Cybex Media Player 2021.1 Setup.exe")
}