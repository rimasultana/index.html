//  select Dom Element
let myWindow;

const width = document.getElementById("width");
const height = document.getElementById("height");


width.innerHTML = "Window inner width is : " + window.innerWidth;

height.innerHTML = "Window inner is : " + window.innerHeight;

function openWindow(){
    window.open("https://goggle.com");
}

function closeWindow() {
    myWindow.close();
}