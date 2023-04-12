function solution(){
    let num1 = Number(prompt("Write a first number:", '')); // first number
    let character = prompt("Write a symbol (+,-,*,/):", ''); // character
    let num2 = Number(prompt("Write a second number:", '')); // second number

    // solution
    if (character === '*'){
        result = num1 * num2;
    }
    else if (character === '+'){
        result = num1 + num2;
    }
    else if (character === '-'){
        result = num1 - num2;
    }
    else if (character === '/'){
        result = num1 / num2;
    }
    else{
        result = "Error! Wrong symbol or something else!";
    }
    return result;
}

alert(solution());