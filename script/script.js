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
    alert();
});


// function loops() {
//     loopDisplay.innerHTML = "";
//     let count = parseInt(loopText.value);

//     if(count > 100) count = 100;

//     for(let i = 0; i < count; i++) {
//         loopDisplay.innerText += i + "\n";
//     }

// } // loop

// btnCar.addEventListener('click', function() {
//     let cars = document.getElementsByName("car-1");
//     for(let i = 0; i < cars.length; i++) {
//         if(cars[i].checked) {
//             alert(cars[i].value);
//             return;
//         }
//     }
    
// });