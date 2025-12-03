// ================= ЗАВДАННЯ 1: ВАЛІДАЦІЯ ФОРМИ =================
const form = document.getElementById('userForm');
const patterns = {
    fullname: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    variant: /^\d{2}$/,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    faculty: /^[А-ЯІЇЄҐA-Z]{4}$/,
    address: /^м\.\s[А-ЯІЇЄҐа-яіїєґ\s\d]+$/
};

if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let hasError = false;
        let outputData = "<h3>Введені дані:</h3><ul>";
        for (let fieldId in patterns) {
            const input = document.getElementById(fieldId);
            if(input) {
                const value = input.value;
                if (patterns[fieldId].test(value)) {
                    input.classList.remove('error');
                    outputData += `<li><strong>${fieldId}:</strong> ${value}</li>`;
                } else {
                    input.classList.add('error');
                    hasError = true;
                }
            }
        }
        outputData += "</ul>";
        const resultDiv = document.getElementById('result');
        if (resultDiv) {
            resultDiv.innerHTML = hasError ? 
                "<p style='color:red'>Виправте помилки!</p>" : outputData;
        }
    });
}

// ================= ЗАВДАННЯ 2: ТАБЛИЦЯ =================

const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');
const TARGET_CELL_NUMBER = 2; 

if (table) {
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement('td');
            cell.textContent = counter;
            
            if (counter === TARGET_CELL_NUMBER) {
                cell.style.border = "3px solid blue"; 
                setupEvents(cell);
            }
            
            row.appendChild(cell);
            counter++;
        }
        table.appendChild(row);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setupEvents(cell) {
    console.log("Події додано до клітинки №" + cell.textContent);

    cell.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomColor();
        console.log("Hover: Колір змінено");
    });

    cell.addEventListener('click', function() {
        const selectedColor = colorPicker.value;
        this.style.backgroundColor = selectedColor;
        console.log("Click: Встановлено колір " + selectedColor);
    });

    cell.addEventListener('dblclick', function() {
        console.log("Double Click: Фарбуємо стовпець");
        
        const selectedColor = colorPicker.value;
        const colIndex = this.cellIndex;
        const allRows = table.rows;      

        for (let i = 0; i < allRows.length; i++) {
            const cellInColumn = allRows[i].cells[colIndex];
            cellInColumn.style.backgroundColor = selectedColor;
        }
    });
}

const resetBtn = document.getElementById('resetBtn');

if (resetBtn) {
    resetBtn.addEventListener('click', function() {

        const allCells = document.querySelectorAll('#myTable td');

        allCells.forEach(cell => {
            cell.style.backgroundColor = ''; 

        });
        
        console.log("Таблицю очищено!");
    });
}