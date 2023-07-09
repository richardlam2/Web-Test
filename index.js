let changed = false;

bClick = () => {
    console.log("button clicked");
    if (changed === false) {
        document.getElementById("myPic").src = "./media/pic2.avif";
        changed = true;
    }
    else {
        document.getElementById("myPic").src = "./media/chop.PNG";
        changed = false;
    }
}   