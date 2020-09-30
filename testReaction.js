var startTime = new Date().getTime();
function appearShape() {
    var top = Math.random() * 400;
    var left = Math.random() * 500;
    var radius = Math.random() * 100;
    var color = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.borderRadius = radius + "px";
    document.getElementById("shape").style.backgroundColor = "#" + color;
    startTime = new Date().getTime();
}
function delayAppear() {

    setTimeout(appearShape, Math.random() * 2000);
}
delayAppear();
document.getElementById("shape").onclick = function () {
    var endTime = new Date().getTime();
    document.getElementById("shape").style.display = "none";
    var calTime = (endTime - startTime) / 1000
    document.getElementById("timerTime").innerHTML = calTime + "s";

    delayAppear();
}

const checkbox = document.getElementById('switchtheme')

checkbox.addEventListener('change', (event) => {
    var element = document.querySelector("body");
    if(event.target.checked){
        element.classList.add("dark-theme");
    }else{
        element.classList.remove("dark-theme");
    }
})