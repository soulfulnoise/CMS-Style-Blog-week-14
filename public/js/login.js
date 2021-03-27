const loginFormHandler = async (event) => {
    event.preventDefault();
}

// Collecting email and passwords entered in to login form
const email = document.querySelector('#email-login').nodeValue.trim();
const password = document.querySelector('#password-login').nodeValue.trim();

if ( email && password) {
    // Send post request to the API endpoint
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }};
