document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('✨ Ваша заявка принята! Я свяжусь с вами в ближайшее время.');
      this.reset();
    });