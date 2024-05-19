document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
  
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const messageContainer = document.getElementById('message');
  
      // Regex for validating a Gmail address
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  
      if (username === '' || email === '' || password === '' || confirmPassword === '') {
        messageContainer.textContent = 'All fields are required.';
        messageContainer.style.color = 'red';
      } else if (!gmailRegex.test(email)) {
        messageContainer.textContent = 'Please enter a valid Gmail address.';
        messageContainer.style.color = 'red';
      } else if (password !== confirmPassword) {
        messageContainer.textContent = 'Passwords do not match.';
        messageContainer.style.color = 'red';
      } else {
        // Save user data to local storage
        const user = {
          username: username,
          email: email,
          password: password
        };
        localStorage.setItem('registeredUser', JSON.stringify(user));
  
        // Display success message
        messageContainer.textContent = 'Registration successful!';
        messageContainer.style.color = 'green';
  
        // Optionally, you can reset the form here
        registerForm.reset();
      }
    });
  });
  