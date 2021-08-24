function Download(){
    var des = document.getElementById("downnow");
    const backcolor = getComputedStyle(des).backgroundColor;console.log(backcolor);
    GoDownload();
}
function GoHome(){window.location.href = "./index.html";}
function GoConPage(){window.location.href = "Contact.html";}
function GoDownload(){window.location.href = "./Cybex Media Player 2021.7.1 Setup.exe";}
function ReadDocs(){window.location.href = "./Docs.html";}