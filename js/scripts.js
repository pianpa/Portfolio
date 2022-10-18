
// Selección de Modo - Dark o Blanco
const body = document.querySelector("body");
const toggle2 = document.getElementById("toggle");
const toggle = document.querySelector("i");
const logo = document.getElementById("logo");
toggle.onclick = function () {
    toggle2.classList.toggle("dark");
    body.classList.toggle("dark");
    logo.classList.toggle("dark");
};


// Selección de idioma
const idioma = document.querySelectorAll('.flags__item')
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
    idioma.forEach(
        (item) =>
            item.classList.remove('active')
    )
    e.target.parentElement.classList.add('active')
});


// Selección de Colores
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;
const color = document.querySelectorAll('.colors__item')

toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
    color.forEach(
        (item) =>
            item.classList.remove('active')
    )
    e.target.classList.add('active')
});

// Barra de Navegacion lateral
const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
menuToggle.onclick = function () {
    navigation.classList.toggle('open')
}
const list = document.querySelectorAll('.list')

function activarLink() {
    list.forEach(
        (item) =>
            item.classList.remove('active')
    )
    this.classList.add('active')
}

list.forEach(
    (item) =>
        item.addEventListener('click', activarLink)
)