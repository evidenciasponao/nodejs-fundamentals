const os = require('os');

console.log(os.platform()); //muestra el sistema en que se ejecuta
console.log(os.release()); //muestra la version del sistema
console.log('free mem: ', os.freemem(), ' bytes'); //muestra la memoria libre
console.log('total mem: ', os.totalmem(), ' bytes'); //muestra la memoria total