
export function concatToInput(input, inputToAdd)
{
    return input.concat(inputToAdd)
}


export function doOperation(firstInput, secondInput, operation)
{

    if(firstInput === "")
    {
        firstInput = 0;
    }

    firstInput = parseInt(firstInput);
    secondInput = parseInt(secondInput);


    switch(operation)
    {
        case "+":
            console.log("check");
            return firstInput + secondInput;
        case "-":
            return secondInput - firstInput;
        case "*":
            return secondInput * firstInput;
        case "/":
            if(firstInput === 0)
            {
                return "Error: Divided by zero"
            }
            return secondInput / firstInput;
        case "sin":
            return Math.sin(firstInput);
        case "cos":
            return Math.cos(firstInput);
        case "tan":
            return Math.tan(firstInput);
        default:
            return "operation didn't work"
    }
}