let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOutput(operator, resultBefore, afterResult) {
  const calcDes = `${resultBefore} ${operator} ${afterResult}`;
  outputResult(currentResult, calcDes);
}

function writeToLog(
  operationIdentifier,
  previousResult,
  numberIdentifier,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: previousResult,
    number: numberIdentifier,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNum = parseInt(userInput.value);
  if (
    calculationType !== "add" &&
    calculationType !== "substract" &&
    calculationType !== "multiply" &&
    calculationType !== "divide" ||
    !enteredNum
  ) {
    return;
  }

  
  initialResult = currentResult;
  let mathOperator;
  if (calculationType === "add") {
    currentResult += enteredNum;
    mathOperator = "+";
  } else if (calculationType === "substract") {
    currentResult -= enteredNum;
    mathOperator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= enteredNum;
    mathOperator = "*";
  } else if (calculationType === "divide") {
    currentResult /= enteredNum;
    mathOperator = "/";
  }

  

  createAndWriteOutput(mathOperator, initialResult, enteredNum);
  writeToLog(calculationType, initialResult, enteredNum, currentResult);
}

function add() {
  calculateResult("add");
}
function subtract() {
  calculateResult("substract");
}
function multiply() {
  calculateResult("multiply");
}
function divide() {
  calculateResult("divide");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);



