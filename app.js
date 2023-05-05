$(document).ready(function () {
    // your custom JavaScript code goes here
});

fetch('https://644d30d8cfdddac9709f3a9d.mockapi.io/AYF/icons')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomData = data[randomIndex];
        const avatarUrl = randomData.avatar;
        const img = document.getElementById('avatar');
        img.src = avatarUrl;
    })
    .catch(error => console.error(error));

//validation
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('Username');
const passwordIpnut = document.getElementById('password');
const errorAlert = document.getElementById('errorAlert');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch('https://644d30d8cfdddac9709f3a9d.mockapi.io/AYF/users')
        .then(response => response.json())
        .then(data => {
            const username = usernameInput.value.trim();
            const password = passwordIpnut.value.trim();
            const user = data.find(users => users.username === username && users.password === password);

            if (user) {
                // Login success, redirect to homepage
                window.location.href = 'index.html';
            } else {
                // alert("Incorrect username or password. Please try again.")
                // Login failed, show error message
                // const errorMessage = document.createElement('div');
                // errorMessage.classList.add('alert', 'alert-danger');
                errorAlert.textContent = 'Incorrect username or password. Please try again.';
                errorAlert.classList.remove("d-none");
                // form.appendChild(errorMessage);
            }
        })
        .catch(error => console.error(error));
});

// get references to the password input field and the show/hide password button
var passwordField = document.getElementById("password");
var passwordToggle = document.getElementById("password-toggle");

// add a click event listener to the show/hide password button
passwordToggle.addEventListener("click", function () {
    // toggle the input field's type between "password" and "text"
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        passwordField.type = "password";
        passwordToggle.innerHTML = '<i class="bi bi-eye"></i>';
    }
});