function GoHome(){window.location.href = "https://cybex-developers.github.io/Cybex-Media-Player/";}
function GoConPage(){window.location.href = "./ContactUs";}
function GoAboutPage(){window.location.href = "./AboutUs";}
function GoDownload(){window.location.href = "./Downloads";}
function ReadDocs(){window.location.href = "./Docs";}
function Launch() {
    app=window.open("./Cybex_Media_Player","Cybex Media Player","height=450,width=650");
    if (window.focus) {app.focus()}
    return false;
}
function Download() {
    window.open("./archives/2021/Cybex Media Player 2021.1 Setup.exe")
}