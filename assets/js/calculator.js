document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to buttons
  document.getElementById("addButton").addEventListener("click", () => {
    performOperation("add");
  });

  document.getElementById("subtractButton").addEventListener("click", () => {
    performOperation("subtract");
  });

  document.getElementById("multiplyButton").addEventListener("click", () => {
    performOperation("multiply");
  });

  document.getElementById("divideButton").addEventListener("click", () => {
    performOperation("divide");
  });

  document
    .getElementById("clearButton")
    .addEventListener("click", clearCalculator);
});

// Perform operation and display result
function performOperation(operation) {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("warning").innerText = "Please enter valid numbers";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
      break;
  }

  document.getElementById("result").innerText = `Result: ${result}`;
  document.getElementById("warning").innerText = "";
}

function clearCalculator() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("warning").innerText = "";
}
