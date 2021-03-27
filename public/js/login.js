const loginFormHandler = async (event) => {
    event.preventDefault();
}

// Collecting email and passwords entered in to login form
const email = document.querySelector('#email-login').nodeValue.trim();
const password = document.querySelector('#password-login').nodeValue.trim();

if ( email && password) {
    // Send post request to the API endpoint

}