let firstOperand = null;
let selectedOperator = null;
let secondOperand = null;

const digits = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
//const decimalPoint = document.querySelector(".decimal-point");

clear.addEventListener("click", () => {
    firstOperand = null;
    secondOperand = null;
    selectedOperator = null;
    display.textContent = "";
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        selectedOperator = operator.textContent;
    });
});

equals.addEventListener("click", () => {
    display.textContent = operate(selectedOperator, firstOperand, secondOperand);
    firstOperand = null;
    secondOperand = null;
    selectedOperator = null;
    //console.log(operate(selectedOperator, firstOperand, secondOperand));
});

digits.forEach ((digit) => {
    digit.addEventListener("click", () => {
        if (firstOperand === null) {
            firstOperand = parseInt(digit.textContent) ;
            display.textContent = firstOperand;
        }
        else {
            secondOperand = parseInt(digit.textContent);
            display.textContent = secondOperand;
        }
    })
});

// function operate(operator, num1, num2) {
//     switch (operator) {
//         case "+" :
//             add(num1, num2);
//             break;
//         case "-" :
//             subtract(num1, num2);
//             break;
//         case "*" :
//             multiply(num1, num2);
//             break;
//         case "/" :
//             divide(num1, num2);
//             break;
//         default :
//             return "invalid operator";
//     }
// }

function operate(operator, num1, num2) {
    if (operator === "+") {
        //console.log(typeof operator);
        // console.log(add(num1, num2));
        return add(num1, num2);
    }

    else if (operator === "-") {
        return subtract(num1, num2)
    }

    else if (operator === "x") {
        return multiply(num1, num2)
    }

    else if (operator === "/") {
        return divide(num1, num2)
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