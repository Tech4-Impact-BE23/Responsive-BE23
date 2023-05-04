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

const apiUrl = 'https://644d30d8cfdddac9709f3a9d.mockapi.io/AYF/users';

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Display up to 5 questions
        for (let i = 0; i < Math.min(data.length, 5); i++) {
            const question = data[i];

            // Clone the question card template
            const questionCard = document.querySelector('.question-card').cloneNode(true);

            // Update the card with the question data
            questionCard.querySelector('.country').textContent = question.country;
            questionCard.querySelector('.question').textContent = question.question;
            questionCard.querySelector('.name').textContent = question.name;
            questionCard.querySelector('.date').textContent = question.date;
            questionCard.querySelector('#avatar').textContent = question.avatar;

            // Show the card
            questionCard.style.display = '';

            // Add the card to the questions container
            document.querySelector('#questions-container').appendChild(questionCard);
        }
    });