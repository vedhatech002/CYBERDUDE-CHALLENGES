let result;

// get the operator as a input
const operator = prompt("Enter operator ( either +, -, * or / ): ");
if (
  operator === "+" ||
  operator === "-" ||
  operator === "*" ||
  operator === "/"
) {
  // get the operand input
  const number1 = parseFloat(prompt("Enter first number: "));
  const number2 = parseFloat(prompt("Enter second number: "));

  switch (operator) {
    case "+":
      result = number1 + number2;
      console.log(`${number1} + ${number2} = ${result}`);
      break;
    case "-":
      result = number1 - number2;
      console.log(`${number1} - ${number2} = ${result}`);
      break;
    case "*":
      result = number1 * number2;
      console.log(`${number1} * ${number2} = ${result}`);
      break;
    case "/":
      result = number1 / number2;
      console.log(`${number1} / ${number2} = ${result}`);
      break;

    // default:
    //   console.log("Invalid operator");
    //   break;
  }
} else {
  alert("please enter valid operator");
}
