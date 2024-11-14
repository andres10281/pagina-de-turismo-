// Evento para manejar el formulario de Reservar Viaje
document.getElementById('viajeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fecha = document.getElementById('fecha').value;
    const destino = document.getElementById('destino').value;
  
    if (fecha && destino) {
      alert(`¡Reserva realizada para ${destino} el día ${fecha}!`);
    } else {
      alert('Por favor completa todos los campos.');
    }
  });