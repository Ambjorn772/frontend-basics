// --- ЗАВДАННЯ 1: Зміна кольорів ---

// 1. Знаходимо 2-й елемент за ID (Дата народження)
// Вимога: використовувати getElementById()
const birthElement = document.getElementById('birth-date');

// 2. Знаходимо 3-й елемент (наступний)
// Вимога: використовувати querySelector()
const educationElement = document.querySelector('#education');

// Функція для зміни кольорів
function toggleStyle(element) {
    element.classList.toggle('highlighted');
}

// Додаємо слухачі подій (кліки)
if (birthElement) {
    birthElement.onclick = function() {
        toggleStyle(this);
    };
}

if (educationElement) {
    educationElement.onclick = function() {
        toggleStyle(this);
    };
}



const imgContainer = document.getElementById('image-container');
const addBtn = document.getElementById('add-btn');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const removeBtn = document.getElementById('remove-btn');

function getImage() {
    return document.getElementById('city-image');
}

addBtn.onclick = function() {
    if (!getImage()) {
        const newLink = document.createElement('a');
        newLink.href = "https://city-adm.lviv.ua/";
        newLink.target = "_blank";
        
        const newImg = document.createElement('img');
        newImg.id = "city-image";
        newImg.src = "img/Depositphotos_14017349_s-2019.jpg";
        newImg.alt = "Фото міста Львів";
        newImg.width = 600;
        
        newLink.appendChild(newImg);
        imgContainer.appendChild(newLink);
    }
};

increaseBtn.onclick = function() {
    const img = getImage();
    if (img) img.width += 50;
};

decreaseBtn.onclick = function() {
    const img = getImage();
    if (img && img.width > 50) img.width -= 50;
};

removeBtn.onclick = function() {
    const img = getImage();
    if (img) img.parentElement.remove();
};