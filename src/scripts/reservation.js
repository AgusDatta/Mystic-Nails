// src/scripts/reservation.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservationForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = `Hola, soy ${name}. Me gustaría reservar una cita para el día ${date} a las ${time} para poder hacerme las uñas, tenes lugar?`;
    const whatsappUrl = `https://wa.me/5491126320824?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
});
