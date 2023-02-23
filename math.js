//Creando Modulos

//const Math = {}; //creando un objeto

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

/*

exportando propiedades de un objeto

exports.add = add; //exportando funcion suma 
exports.substract = substract; //exportando funcion resta
exports.multiply = multiply; //exportando funcion multiplicacion
exports.divide = divide; //exportando funcion divide
*/


/*
//exportando un objeto

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math; //exporta el objeto math
*/


//exportando una funcion

function hello(name) {
    console.log('hola', name);
}

module.exports = hello;
