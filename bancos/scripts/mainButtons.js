var index = 0;


function clickHome() {
    document.getElementsByClassName("overlayIniciativa")[0].style.display = "none";
    document.getElementsByClassName("overlayProjetos")[0].style.display = "none";
    document.getElementsByClassName("downloadConfirm")[0].style.display = "none";
    document.getElementsByClassName("overlayInfo")[0].style.display = "none";
    document.getElementsByClassName("homeButton inline-block-30px white")[0].className = "homeButton inline-block-30px";
    document.getElementsByClassName("profileButton inline-block-30px")[0].className = "profileButton inline-block-30px";
    document.getElementsByClassName("helpButton inline-block-30px")[0].className = "helpButton inline-block-30px";
    document.getElementsByClassName("overlayParticipe")[0].style.display = "none";
    if (index > 0) {
        document.getElementsByClassName("infoProjetos")[index - 1].style.display = "none";
        document.getElementsByClassName("imgProjetos")[index - 1].style.display = "none";
        document.getElementsByClassName("imgProjetos")[index - 1].style.visibility = "visible";
    }

    if (index > 1) {
        document.getElementsByClassName("arrow Left")[0].style.visibility = "visible";
    }
    if (index < document.getElementsByClassName("imgProjetos").length) {
        document.getElementsByClassName("arrow Right")[0].style.visibility = "visible";
    }
}

function clickIniciativa() {
    document.getElementsByClassName("overlayIniciativa")[0].style.display = "block";
    document.getElementsByClassName("homeButton inline-block-30px")[0].className += " white";
    document.getElementsByClassName("profileButton inline-block-30px")[0].className += " white";
}

function clickProjetos() {
    document.getElementsByClassName("overlayProjetos")[0].style.display = "block";
    document.getElementsByClassName("homeButton inline-block-30px")[0].className += " white";
    document.getElementsByClassName("profileButton inline-block-30px")[0].className += " white";
    for (var i = 1; i < document.getElementsByClassName("imgProjetos").length; i++) {
        document.getElementsByClassName("imgProjetos")[i].style.display = "none";
    }
    document.getElementsByClassName("imgProjetos")[0].style.display = "inline-block";
    document.getElementsByClassName("arrow Left")[0].style.visibility = "hidden";
    document.getElementsByClassName("arrow Right")[0].style.visibility = "visible";
    index = 1;
}

function clickParticipe() {
    document.getElementsByClassName("overlayParticipe")[0].style.display = "block";
    document.getElementsByClassName("homeButton inline-block-30px")[0].className += " white";
    document.getElementsByClassName("profileButton inline-block-30px")[0].className += " white";
}


function getImageProjetos(addImg) {
    if (addImg) {
        if (index > 0) {
            document.getElementsByClassName("imgProjetos")[index - 1].style.display = "none";
            document.getElementsByClassName("arrow Left")[0].style.visibility = "visible";
        }
        index++;
        if (index == document.getElementsByClassName("imgProjetos").length) {
            document.getElementsByClassName("arrow Right")[0].style.visibility = "hidden";
        }
    }
    if (!addImg) {
        if (index <= document.getElementsByClassName("imgProjetos").length) {
            document.getElementsByClassName("imgProjetos")[index - 1].style.display = "none";
            document.getElementsByClassName("arrow Right")[0].style.visibility = "visible";
        }
        index--;
        if (index == 1) {
            document.getElementsByClassName("arrow Left")[0].style.visibility = "hidden";
        }
    }

    document.getElementsByClassName("imgProjetos")[index - 1].style.display = "inline-block";
}

function showInfo() {
    document.getElementsByClassName("overlayInfo")[0].style.display = "block";
    document.getElementsByClassName("infoProjetos")[index - 1].style.display = "block";
    document.getElementsByClassName("imgProjetos")[index - 1].style.visibility = "hidden";
    document.getElementsByClassName("arrow Left")[0].style.visibility = "hidden";
    document.getElementsByClassName("arrow Right")[0].style.visibility = "hidden";
}

function infoBack() {
    document.getElementsByClassName("overlayInfo")[0].style.display = "none";
    document.getElementsByClassName("infoProjetos")[index - 1].style.display = "none";
    document.getElementsByClassName("imgProjetos")[index - 1].style.visibility = "visible";
    if (index > 1) {
        document.getElementsByClassName("arrow Left")[0].style.visibility = "visible";
    }
    if (index < document.getElementsByClassName("imgProjetos").length) {
        document.getElementsByClassName("arrow Right")[0].style.visibility = "visible";
    }
}

function Download() {
    document.getElementsByClassName("overlayInfo")[0].style.display = "none";
    document.getElementsByClassName("infoProjetos")[index - 1].style.display = "none";
    document.getElementsByClassName("downloadConfirm")[0].style.display = "block";
    window.setTimeout(clickHome, 3000);
    }
