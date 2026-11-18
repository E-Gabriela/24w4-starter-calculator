let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null

function updateDisplay() {
  const display = document.getElementById('display')
  display.innerText = displayValue
}

function appendNumber(number) {
  if (displayValue === '0' || displayValue === 'Error') {
    displayValue = number.toString()
  } else {
    displayValue += number.toString()
  }
  updateDisplay()
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate()
  }
  firstOperand = parseFloat(displayValue)
  currentOperator = operator
  displayValue = '0'
}

function calculate() {
  secondOperand = parseFloat(displayValue)
  if (currentOperator === '+') {
    displayValue = (firstOperand + secondOperand).toString()
  } else if (currentOperator === '-') {
    displayValue = (firstOperand - secondOperand).toString()
  } else if (currentOperator === '*') {
    displayValue = (firstOperand * secondOperand).toString()
  } else if (currentOperator === '/') {
    displayValue = (firstOperand / secondOperand).toString()
  }
  updateDisplay()
  firstOperand = null
  secondOperand = null
  currentOperator = null
}

function calculateSquareRoot() {
  // Use the number currently shown on screen (after pressing an operator,
  // displayValue is reset to '0' while the screen still shows the old number)
  const display = document.getElementById('display')
  const value = parseFloat(display.innerText)

  if (isNaN(value) || value < 0) {
    displayValue = 'Error'
  } else {
    displayValue = Math.sqrt(value).toString()
  }
  updateDisplay()
}

function clearDisplay() {
  displayValue = '0'
  firstOperand = null
  secondOperand = null
  currentOperator = null
  updateDisplay()
}

updateDisplay()
