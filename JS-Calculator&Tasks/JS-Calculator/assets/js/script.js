//Getting Elements
const buttons = document.querySelectorAll(".input");
const display = document.querySelector(".display");
const clearButton = document.getElementById("clear");
const resultButton = document.getElementById("result");
const mathOperators = document.querySelectorAll(".math");
//Array for calculation.
let resultArr = [];
let val = " ";
//Setting up the button functionality and display
buttons.forEach(item => item.addEventListener('click', () => {
    display.innerText += item.innerText;
    val += item.innerText;
}));

//Clear Button
clearButton.addEventListener('click', () => {
    display.innerText = "";
    resultArr = [];
    val = " ";
});

//Result Button
resultButton.addEventListener('click', () => {
    resultArr.push(val);
    calculate(resultArr);
    console.log(resultArr)
    display.innerText = resultArr[0];
    val = resultArr[0];
    resultArr = [];

});

//Math Operators
mathOperators.forEach(item => item.addEventListener('click', () => {
    resultArr.push(val);

    if (val == "") {
        return;
    }
    val = "";
    resultArr.push(item.innerText);
    display.innerText += item.innerText;



}));

//Calculation Method
//This variable is for doing the operation and inserting it in array.
//for example: ["a","+","b","-","c"] => newVal = a+b => splice method => [newVal,"-", "c"] , 
let newVal;

function calculate(arr) {
    while (arr.length >= 3) {
        if (arr.indexOf('*') != -1 || arr.indexOf('/') != -1) {
            if ((arr.indexOf('*') < arr.indexOf('/') && arr.indexOf('*') != -1) || arr.indexOf('/') < 0) {
                newVal = (arr[arr.indexOf('*') - 1] * arr[arr.indexOf('*') + 1]);
                arr.splice(Number(arr.indexOf('*') - 1), 3, newVal);
            } else {
                newVal = (arr[arr.indexOf('/') - 1] / arr[arr.indexOf('/') + 1]);
                arr.splice(Number(arr.indexOf('/') - 1), 3, newVal);
            }
        } else {
            if (arr.indexOf('+') != -1 || arr.indexOf('-') != -1) {
                if ((arr.indexOf('+') < arr.indexOf('-') && arr.indexOf('+') != -1) || arr.indexOf('-') < 0) {
                    newVal = (Number(arr[arr.indexOf('+') - 1]) + Number(arr[arr.indexOf('+') + 1]));
                    arr.splice(Number(arr.indexOf('+') - 1), 3, newVal);
                } else {
                    newVal = (Number(arr[arr.indexOf('-') - 1]) - Number(arr[arr.indexOf('-') + 1]));
                    arr.splice(Number(arr.indexOf('-') - 1), 3, newVal);
                }
            }
        }
    }

}