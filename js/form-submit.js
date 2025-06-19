// Initialize EmailJS
(function() {
  emailjs.init('8_PYSsKoNhElLoVio'); // Replace with your EmailJS public key
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const successMsg = document.querySelector('.submit-success');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_od5azmt', 'template_cvp637d', form)
      .then(function() {
        successMsg.style.opacity = 1;
        form.reset();
        setTimeout(() => {
          successMsg.style.opacity = 0;
        }, 4000);
      }, function(error) {
        alert('Failed to send message. Please try again later.');
      });
  });
});