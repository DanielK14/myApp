let firstNumber = null;
let secondNumber = null;
let mathOperation = null;

function inputKey(number) {
    document.getElementById("calcField").value += number;
}

function opperationCommand(opp) {
    mathOperation = opp;
    if (firstNumber != null){
        chainingFunction();
    } else {
        firstNumber = parseFloat(document.getElementById("calcField").value);
        clearField();
    }
}

function clearField() {
    document.getElementById("calcField").value = "";
}

function calculationFunc() {
    secondNumber = parseFloat(document.getElementById("calcField").value);
    switch(mathOperation) {
        case "+":
            var outcome = firstNumber + secondNumber;
            break;
        case "-":
            var outcome = firstNumber - secondNumber;
            break;
        case "*":
            var outcome = firstNumber * secondNumber;
            break;
        case "/":
            var outcome = firstNumber / secondNumber;
            break;
    }
    firstNumber = null;
    secondNumber = null;
    document.getElementById("calcField").value = outcome;
}

function chainingFunction() {
    secondNumber = parseFloat(document.getElementById("calcField").value);
    switch(mathOperation) {
        case "+":
            var outcome = firstNumber + secondNumber;
            break;
        case "-":
            var outcome = firstNumber - secondNumber;
            break;
        case "*":
            var outcome = firstNumber * secondNumber;
            break;
        case "/":
            var outcome = firstNumber / secondNumber;
            break;
    }
    firstNumber = outcome;
    document.getElementById("calcField").value = "";
}