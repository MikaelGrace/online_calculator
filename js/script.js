let firstOperand;
let Operator;
let secondOperand;

function operate(Operator, num1, num2) {
    switch (Operator) {
        case "+" :
            return num1 + num2;
            break;
        case "-" :
            return num1 - num2;
            break;
        case "*" :
            return num1 * num2;
            break;
        case "/" :
            return num1 / num2;
            break;
        default :
            return "invalid operator";
    }
}





function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}