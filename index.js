function Download(){
    var des = document.getElementById("downnow");
    const backcolor = getComputedStyle(des).backgroundColor;console.log(backcolor);
    GoDownload();
}
function GoHome(){window.location.href = "https://cybex-developers.github.io/Cybex-Media-Player/";}
function GoConPage(){window.location.href = "./Contact";}
function GoDownload(){window.location.href = "./Cybex Media Player 2021.7.1 Setup.exe";}
function ReadDocs(){window.location.href = "./Docs";}