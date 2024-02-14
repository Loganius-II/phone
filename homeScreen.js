let calculatorApp = document.getElementById("calculatorApp");
let exit = document.getElementById("exit");
let weatherApp = document.getElementById("weatherApp")
let weatherAppButton = document.getElementById("weatherAppButton")
calculatorApp.addEventListener('click', function(){

    document.getElementById("calculatorAPP").style.zIndex = "1";
    document.getElementById("calculatorAPP").style.opacity = "1";
    document.getElementById("calculatorAPP").style.visibility = "visible";
    document.getElementById("calculatorAPP").style.transform = "scale(1)";

})
exit.addEventListener('click', function(){
    document.getElementById("calculatorAPP").style.visibility = "hidden";
    document.getElementById("calculatorAPP").style.transform = "scale(0)";
    document.getElementById("calculatorAPP").style.zIndex = "0";
    document.getElementById("calculatorAPP").style.opacity = "0";
})
document.getElementById("exit2").addEventListener('click', function(){
    document.getElementById("weatherApp").style.visibility = "hidden";
    document.getElementById("weatherApp").style.transform = "scale(0)";
    document.getElementById("weatherApp").style.zIndex = "0";
    document.getElementById("weatherApp").style.opacity = "0";
})
document.addEventListener("mousemove", function(){
    if(exit.style.color == "white") {exit.innerHTML = "<Exit";}

})
weatherApp.addEventListener('click', function(){
    document.getElementById("weatherApp").style.visibility = "visible";
    document.getElementById("weatherApp").style.transform = "scale(1)";
    document.getElementById("weatherApp").style.zIndex = "1";
    document.getElementById("weatherApp").style.opacity = "1";
})














let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
