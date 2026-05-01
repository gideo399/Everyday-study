let display= document.querySelector("button")
let userInput = document.querySelector("boxE")

function appear(){
    
window.alert("You just clicked")
   
}

 display.addEventListener("click", appear)

document.addEventListener("keypress", (event) => {
    alert("Key pressed:", event.key);
});
