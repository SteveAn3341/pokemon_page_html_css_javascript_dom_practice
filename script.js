



document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the email and password values
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate email
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Regex for password validation (at least 8 characters, including one number and one letter)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Validate password
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
        return;
    }

    // If both are valid, you can proceed with form submission
    alert('Login successful!');
    // Here you can submit the form if using a backend
    // this.submit();
});

