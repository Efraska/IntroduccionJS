// Funciones con parametros y argumentos
function sumar(numero1 = 0, numero2 = 0) { //numero1, numero2 son parametros
    console.log( numero1 + numero2);
}
sumar(10, 5); // Argumetos o los valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1);

const sumar2 = function(n1, n2) {
    console.log(n1 + n2)
}
sumar(5, 10);
