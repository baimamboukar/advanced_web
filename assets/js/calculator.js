function performOperation(operation) {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
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
}

function clearCalculator() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("result").innerText = "";
}
