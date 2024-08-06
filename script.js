
// SETTING UP BUTTONS

const display = document.querySelector('.display p')
const clear = document.querySelector('#ac')
const negpos = document.querySelector('#negpos')
const percent = document.querySelector('#percent')
const decimal = document.querySelector('#decimal')
const add = document.querySelector('#addOperator')
const equalOperator = document.querySelector('#equalOperator') 
const divide = document.querySelector('#divideOperator')
const multiply = document.querySelector('#multiplyOperator')
const subtract = document.querySelector('#subtractOperator')

let equation = ''

// BUTTON EVENTS

const btnNums = ['btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9']

btnNums.forEach((element) => {
    let elementString = element
    element = document.querySelector(`#${element}`)

    element.addEventListener('click', () => {
        if (display.textContent == 'ERROR') {
            display.textContent = ''
        }
        display.textContent += elementString.substring(3, 4)
        equation += elementString.substring(3, 4)
    })
});


clear.addEventListener('click', () => {
    display.textContent = ''
    equation = ''
})

negpos.addEventListener('click', () => {
    if ((Math.sign(+display.textContent)) == 1) {
        display.textContent = "-" + display.textContent
        equation = '-' + equation
    } else {
        display.textContent = display.textContent.substring(1)
        equation = equation.substring(1)
    }
})

percent.addEventListener('click', () => {
    display.textContent = (+display.textContent) / 100
})

decimal.addEventListener('click', () => {
    display.textContent += '.'
    equation += '.'

})



// OPERATOR EVENTS

num1 = 0
num2 = 0

equalOperator.addEventListener('click', () => {
    let Arr = equation.split(" ")
    num1 = +Arr[0]
    operator = Arr[1]
    num2 = +Arr[2]

    if (operator === "+") {
        Add(num1, num2)
    }
    if (operator === "x") {
        Multiply(num1, num2)
    }
    if (operator === '/') {
        Divide(num1, num2)
    }
    if (operator === "-") {
        Subtract(num1, num2)
    }

})

add.addEventListener('click', () => {
    equation += " + "
    display.textContent = ''
})

divide.addEventListener('click', () => {
    equation += " / "
    display.textContent = ''
})

multiply.addEventListener('click', () => {
    equation += " x "
    display.textContent = ''
})

subtract.addEventListener('click', () => {
    equation += " - "
    display.textContent = ''
})

// OPERATOR FUNCTIONS

function Add(number1, number2) {
    sum = number1 + number2
    display.textContent = sum
    num1 = sum
    equation = ''
    equation += num1

}

function Multiply(number1, number2) {
    sum = number1 * number2
    display.textContent = sum
    num1 = sum
    equation = ''
    equation += num1

}

function Divide(number1, number2) {

    if (number1 == 0 || number2 == 0) {
        display.textContent = 'ERROR'
        equation = ''

    } else {
    sum = number1 / number2
    display.textContent = sum
    num1 = sum
    equation = ''
    equation += num1
    }

}
function Subtract(number1, number2) {
    sum = number1 - number2
    display.textContent = sum
    num1 = sum
    equation = ''
    equation += num1

}