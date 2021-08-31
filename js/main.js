let num1 = 7;
let num2 = 5;

function dzialanie(number1, number2){
    let a =  number1 + number2;
    if(a>0){
        console.log(a);
    } else {
        console.log("Wynik jest nie prawidłowy");
    }
    let b = number1 - number2;
    if(b>0){
        console.log(b);
    } else {
        console.log("Wynik jest nie prawidłowy");
    }
    let c = number1 * number2;
    if(c>0){
        console.log(c);
    } else {
        console.log("Wynik jest nie prawidłowy");
    }
}

dzialanie(num1, num2);
