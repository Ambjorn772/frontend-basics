const btn = document.getElementById('downloadBtn');
const container = document.getElementById('resultsContainer');

btn.addEventListener('click', () => {
    fetch('https://randomuser.me/api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];
            displayUser(user);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function displayUser(user) {
    // ВАРІАНТ 2: Поля 1, 3, 4, 5, 6
    // 1. Picture
    // 3. Cell
    // 4. City
    // 5. Country
    // 6. Postcode

    const card = document.createElement('div');
    card.className = 'user-card';

    card.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <div class="user-info">
            <p><strong>Cell:</strong> ${user.cell}</p>
            <p><strong>City:</strong> ${user.location.city}</p>
            <p><strong>Country:</strong> ${user.location.country}</p>
            <p><strong>Postcode:</strong> ${user.location.postcode}</p>
        </div>
    `;

    container.appendChild(card);
}