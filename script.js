
// SETTING UP BUTTONS

const display = document.querySelector('.display p')
const clear = document.querySelector('#ac')
const btnNums = ['btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9']
const negpos = document.querySelector('#negpos')
const percent = document.querySelector('#percent')
const decimal = document.querySelector('#decimal')
const add = document.querySelector('#addOperator')

// BUTTON EVENTS

btnNums.forEach((element) => {
    let elementString = element
    element = document.querySelector(`#${element}`)

    element.addEventListener('click', () => {
        display.textContent += elementString.substring(3, 4)
    })
});


clear.addEventListener('click', () => {
    display.textContent = ''
})

negpos.addEventListener('click', () => {
    if ((Math.sign(+display.textContent)) == 1) {
        display.textContent = "-" + display.textContent
    } else {
        display.textContent = display.textContent.substring(1)
    }
})

percent.addEventListener('click', () => {
    display.textContent = (+display.textContent) / 100
})

decimal.addEventListener('click', () => {
    display.textContent += '.'

})

