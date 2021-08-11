function Download(){
    var des = document.getElementById("downnow");
    const backcolor = getComputedStyle(des).backgroundColor;console.log(backcolor);

    if(backcolor == "rgb(0, 255, 255)"){
        des.style.background = "Blue";
        des.style.color = "White"; 
        des.style.boxShadow = "0px 0px 10px Cyan";
    }
    if(backcolor == "rgb(0, 0, 255)"){
        des.style.background = "Cyan";
        des.style.color = "Black";
        des.style.boxShadow = "0px 0px 10px Blue";
    }
    GoDownload();
}
function GoHome(){window.location.href = "./index";}
function GoConPage(){window.location.href = "./Contact";}
function GoDownload(){window.location.href = "./Cybex Media Player 2021.7.1 Setup.exe";}
function ReadDocs(){window.location.href = "./Docs";}
