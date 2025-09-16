// Theme toggle functionality
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// FAQ collapsible functionality
document.querySelectorAll('.faq-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const answer = btn.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// Add to Cart button functionality
document.querySelectorAll('.add-cart').forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.textContent = 'Added!';
        btn.style.background = '#ff9800';
        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.style.background = '';
        }, 1200);
    });
});

// Form validation
document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name.length < 2) {
        valid = false;
        document.getElementById('name-error').textContent = 'Name must be at least 2 characters.';
    } else {
        document.getElementById('name-error').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        valid = false;
        document.getElementById('message-error').textContent = 'Message must be at least 10 characters.';
    } else {
        document.getElementById('message-error').textContent = '';
    }

    // If valid, show success
    if (valid) {
        alert('Thank you for contacting us!');
        document.getElementById('user-form').reset();
    }
});