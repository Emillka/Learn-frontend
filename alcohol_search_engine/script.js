
const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value.toLowerCase();

    li.forEach(el => {
        const task = el.textContent.toLowerCase();
        if (task.indexOf(text) !== -1) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
}

search.addEventListener('keyup', searchEngine);

// Dodaj poniższy kod, aby obsłużyć przekierowanie do strony głównej
const redirectToHomePage = () => {
    window.location.href = "index.html";
}

// Dodaj nasłuchiwanie na kliknięcie w liście, aby obsłużyć przekierowanie
li.forEach(el => {
    el.addEventListener('click', redirectToHomePage);
});
