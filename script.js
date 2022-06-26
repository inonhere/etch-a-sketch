color = 'white'

function rojo() {
    color = 'red';
}

function azul() {
    color ='blue'
}

function crearGrid4() {
    for (let i = 0; i < 16; i++) {
        p = document.querySelector('p');
        p.classList.remove('container', 'container6');
        p.classList.add('container');
        const container = document.querySelector('#especialito');
        const grid = document.createElement('div');
        grid.classList.add('cuadrado');
        container.appendChild(grid);
        const elementos = document.getElementsByClassName('cuadrado');
    for (const elemento of elementos) {
        elemento.style.background = 'black';
        const varios = document.getElementsByClassName('cuadrado');
    for (const solo of varios) {
        solo.addEventListener("mouseenter", function(event) {
        event.target.style.background = color;
    })
}}}}

function crearGrid6() {
    for (let i = 0; i < 36; i++) {
        p = document.querySelector('p');
        p.classList.remove('container', 'container6');
        p.classList.add('container6');
        const grid = document.createElement('div');
        const container = document.querySelector('#especialito');
        grid.classList.add('cuadrado');
        container.appendChild(grid);
        const elementos = document.getElementsByClassName('cuadrado');
    for (const elemento of elementos) {
        elemento.style.background = 'black';
        const varios = document.getElementsByClassName('cuadrado');
    for (const solo of varios) {
        solo.addEventListener("mouseenter", function(event) {
        event.target.style.background = color;
    })
}}}}

function borrarGrid() {
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
    }

/*
for (let i = 0; i < 1; i++) {
    const container = document.querySelector('.container');
    const grid = document.createElement('div');
    grid.classList.add('cuadrado');
    container.appendChild(grid);
    }


const pruebas = document.getElementsByClassName('cuadrado');
for (const prueba of pruebas) {
prueba.style.background = 'green';
}

const pruebita = document.getElementsByClassName('cuadrado');
for (const prueba of pruebita) {
prueba.addEventListener("mouseenter", function(event) {
    event.target.style.background = 'black';
})
}

*/