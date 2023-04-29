$(document).ready(function () {
    // your custom JavaScript code goes here
});

fetch('https://644d30d8cfdddac9709f3a9d.mockapi.io/AYF/icons')
    .then(response => response.json())
    .then(data => {
        const avatarUrl = data[0].avatar;
        const img = document.getElementById('avatar');
        img.src = avatarUrl;
    })
    .catch(error => console.error(error));