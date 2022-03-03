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
// let cars = document.getElementsByName("car-1");
const btnCar = document.getElementById("btn-car");

loopBtn.addEventListener('click', function() {
    // for(int i = 0; i < 10; i++) {

    // }

    let count = parseInt(loopText.value);
    // if(count > 100 || count < 0) return;

    loopDisplay.innerText = "";
    
    if(count > 100) {
        count = 100;
    }

    else if(count < 0) {
        count = 5;
    }

    for(let i = 0; i < count ; i++) {
        loopDisplay.innerText += i + "\n";
    }

    // == Not type sensitive
    // === Type sensitive

});


function thisMethod(name, num, bool) {
    if(bool) {
        return name;
    }
    else {
        return num;
    }
}



// function loops() {
//     loopDisplay.innerHTML = "";
//     let count = parseInt(loopText.value);

//     if(count > 100) count = 100;

//     for(let i = 0; i < count; i++) {
//         loopDisplay.innerText += i + "\n";
//     }

// } // loop

btnCar.addEventListener('click', function() {
    
    let cars = document.getElementsByName("car-1");
    let toppings = document.getElementsByName("toppings");

    for(let i = 0; i < toppings.length; i++) {
        if(toppings[i].checked) {
            alert(toppings[i].value);
        }
    }
    
});