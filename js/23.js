const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Al pagar por este metodo, primero revisaremos si cuentas con los fondos suficientes');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo, Muchas gracias por tu compra!!!');
        break;
    default:
        console.log('Aun no has pagado, va a comprar o no!!!');
        break;
}