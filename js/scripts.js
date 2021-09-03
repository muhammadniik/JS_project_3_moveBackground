const mainclass = document.getElementsByClassName("main")[0];

window.onmousemove = function(man) {
    let x = man.clientX / 10;
    let y = man.clientY / 10;

    mainclass.style.backgroundPositionX = x + "px";
    mainclass.style.backgroundPositionY = y + "px";
}