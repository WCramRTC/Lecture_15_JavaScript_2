/*
     Conditions
        Loops
        Operators
        functions
        pulling radio button info
        pulling checkbox
        parse int
*/
const loopText = document.getElementById("text-loop");
const loopBtn = document.getElementById("btn-loops");
const loopDisplay = document.getElementById("loop-display");


loopBtn.addEventListener('click', loops);

function loops() {
    loopDisplay.innerHTML = "";
    let count = parseInt(loopText.value);

    if(count > 100) count = 100;

    for(let i = 0; i < count; i++) {
        loopDisplay.innerText += i + "\n";
    }

} // loop

function conditions() {

}