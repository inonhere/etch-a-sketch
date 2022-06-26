color = 'white'

function rojo() {
    color = 'red';
}

function azul() {
    color =' blue';
}

function green() {
    color = 'green';
}

function amarillo() {
    color = 'yellow';
}

function borrador() {
    color = 'white'
}


function crearGrid4() {
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)}
    for (let i = 0; i < 16; i++) {
        p = document.querySelector('p');
        p.classList.remove('container', 'container6', 'container8');
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
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)}
    for (let i = 0; i < 36; i++) {
        p = document.querySelector('p');
        p.classList.remove('container', 'container6', 'container8');
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

