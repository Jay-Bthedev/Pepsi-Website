alert("Welcome to Pepsi's Website");


var blue = document.querySelector(".bluepep");
var white = document.querySelector(".whitepep");
var black = document.querySelector(".blackpep");
var mainSelector = document.querySelector("body");


blue.addEventListener("click", function(){
mainSelector.style.backgroundColor = "blue"
blue.innerHTML = mainSelector
})
white.addEventListener("click",function(){
    mainSelector.style.backgroundColor = "red"
white.innerHTML = mainSelector
})
black.addEventListener("click",function(){
     mainSelector.style.backgroundColor = "black"
black.innerHTML = mainSelector
})