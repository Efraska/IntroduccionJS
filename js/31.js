// Notification API
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`) )
})

if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/react.svg',
        body: 'Código con Juan, los mejores tutoriales'
    })
}