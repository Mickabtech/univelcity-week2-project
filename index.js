document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  // Toggle nav links and icon when hamburger menu is clicked
  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
      hamburgerMenu.classList.toggle('active');
  });
});


//Contact Us

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errors = [];
  if (name === '') {
      errors.push('Name is required');
  }
  if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address');
  }
  if (message === '') {
      errors.push('Message is required');
  }

  if (errors.length > 0) {
      alert(errors.join('\n'));
  } else {
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
  }
});
