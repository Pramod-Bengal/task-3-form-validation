function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('age ').value;
      const branch = document.getElementById('branch').value;

      let errorMessages = '';

      if (!/^[A-Za-z]+$/.test(name)) {
        errorMessages += 'Name must contain only alphabet characters.<br>';
      }

      if (!email.includes('@')) {
        errorMessages += 'Email must contain @.<br>';
      }

      if (!/^[0-9]+$/.test(age)) {
        errorMessages += 'Age must be a numeric value.<br>';
      }

      if (branch === '') {
        errorMessages += 'Please select your branch.<br>';
      }

      const errorContainer = document.getElementById('errorMessages');
      errorContainer.innerHTML = errorMessages;

      if (errorMessages === '') {
        alert('Form is submitted successfull! ');
             
      }
    }
