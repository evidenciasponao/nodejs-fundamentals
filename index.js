//Command Prompt

/*
node --version //saber la version de node desde cmd
*/

//Funciones Matematicas

/*
function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('No se puede dividir por 0');
    } else {
        return x1 / x2;
    }
}
*/

/*
console.log(add(1, 2)); //suma 1 + 2
console.log(substract(1, 2)); //resta 1 - 2
console.log(multiply(1, 2)); //multiplica 1 * 2
console.log(divide(1, 2)); //divide 1 / 2
console.log(divide(1, 0)); //divide 1 / 0 "No se puede dividir por 0"
*/

const math = require('./math.js');//Importando archivo math en la constante math

console.log(math)//como esta importando el archivo math

/*
console.log(math.add(1, 2));//llamando la funcion sumar del archivo math
console.log(math.substract(2, 1));//llamando la funcion restar del archivo math
console.log(math.multiply(1, 0));//llamando la funcion multiplicar del archivo math
console.log(math.divide(1, 0));//llamando la funcion dividir del archivo math
console.log(math.divide(2, 1));//llamando la funcion dividir del archivo math
*/