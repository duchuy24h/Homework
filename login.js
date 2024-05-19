document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const messageContainer = document.getElementById('message');
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  
      // Retrieve the registered user from local storage
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
  
      if (!registeredUser) {
        messageContainer.textContent = 'No Email found. Please register first.';
        messageContainer.style.color = 'red';
      } else if (!gmailRegex.test(email)) {
        messageContainer.textContent = 'Please enter a valid Gmail address.';
        messageContainer.style.color = 'red';
      }else if (email === registeredUser.email && password === registeredUser.password) {
        messageContainer.textContent = 'Login successful!';
        messageContainer.style.color = 'green';
      } else {
        messageContainer.textContent = 'Incorrect email or password.';
        messageContainer.style.color = 'red';
      }
    });
  });
