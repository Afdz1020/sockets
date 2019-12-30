var socket = io();
socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
  console.log('Perdimos la conexión al servidor');
});

//Enviar información
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Andres Diaz',
    mensaje: 'Hola Mundo'
  },
  function(resp) {
    console.log('Respuesta del servidor', resp);
  }
);

//Escuchar información

socket.on('enviarMensaje', function(mensaje) {
  console.log(mensaje);
});
