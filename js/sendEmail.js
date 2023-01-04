const btn = document.getElementById('buttonEmail');

        document.getElementById('form')
         .addEventListener('submit', function(event) {
           event.preventDefault();

           btn.value = 'Sending...';

           const serviceID = 'default_service';
           const templateID = 'template_mi9z9l9';

           emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              btn.value = 'Send Email';
              alert('You Email Was Sent!');
            }, (err) => {
              btn.value = 'Send Email';
              alert(JSON.stringify(err));
            });
        });



        // Run function when a submit event is registered
        document.addEventListener("submit", function(event) {
          // Prevent default form submit
          event.preventDefault()

          // Clear all form fields
          event.target.reset()
        })