r = Math.floor(Math.random() * 255)
g = Math.floor(Math.random() * 255)
b = Math.floor(Math.random() * 255)
color = `rgb(${r}, ${g}, ${b})`

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

function random() {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    color = `rgb(${r}, ${g}, ${b})`
}


unico = document.getElementById('especialito');
unico.addEventListener("mouseenter", function(event) {
    event.target.style.background = color;
})


function crearGrid4() {
    p = document.querySelector('p');
    p.classList.remove('container', 'container6', 'container8', 'container16');
    p.classList.add('container');
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)}
    for (let i = 0; i < 16; i++) {
        const container = document.querySelector('#especialito');
        const grid = document.createElement('div');
        grid.classList.add('cuadrado');
        container.appendChild(grid);}
        const elementos = document.getElementsByClassName('cuadrado');
    for (const elemento of elementos) {
        elemento.style.background = 'black';
        elemento.style.border = '1px solid gray';
        const varios = document.getElementsByClassName('cuadrado');
    for (const solo of varios) {
        solo.addEventListener("mouseenter", function(event) {
        event.target.style.background = color;
    })
}}}

function crearGrid6() {
    p = document.querySelector('p');
    p.classList.remove('container', 'container6', 'container8', 'container16');
    p.classList.add('container6');
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)}
    for (let i = 0; i < 36; i++) {
        const grid = document.createElement('div');
        const container = document.querySelector('#especialito');
        grid.classList.add('cuadrado');
        container.appendChild(grid);}
        const elementos = document.getElementsByClassName('cuadrado');
    for (const elemento of elementos) {
        elemento.style.background = 'black';
        elemento.style.border = '1px solid gray';
        const varios = document.getElementsByClassName('cuadrado');
    for (const solo of varios) {
        solo.addEventListener("mouseenter", function(event) {
        event.target.style.background = color;
    })
}}}

function crearGrid8() {
    p = document.querySelector('p');
    p.classList.remove('container', 'container6', 'container8', 'container16');
    p.classList.add('container8');
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)}
    for (let i = 0; i < 64; i++) {
        const grid = document.createElement('div');
        const container = document.querySelector('#especialito');
        grid.classList.add('cuadrado');
        container.appendChild(grid);}
        const elementos = document.getElementsByClassName('cuadrado');
    for (const elemento of elementos) {
        elemento.style.background = 'black';
        elemento.style.border = '1px solid gray';
        const varios = document.getElementsByClassName('cuadrado');
    for (const solo of varios) {
        solo.addEventListener("mouseenter", function(event) {
        event.target.style.background = color;
    })
}}}

function crearGrid16() {
    p = document.querySelector('p');
    p.classList.remove('container', 'container6', 'container8', 'container16');
    p.classList.add('container16');
    
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)}

const container = document.querySelector('#especialito');
    for (let i = 0; i < 256; i++) {
        const grid = document.createElement('div');
        grid.classList.add('cuadrado');
        container.appendChild(grid);}

const elementos = document.getElementsByClassName('cuadrado');
    for (const elemento of elementos) {
        elemento.style.background = 'black';
        elemento.style.border = '1px solid gray';
        const varios = document.getElementsByClassName('cuadrado');
    for (const solo of varios) {
        solo.addEventListener("mouseenter", function(event) {
        event.target.style.background = color;
    })
}}}


function borrarGrid() {
    const contenedor = document.querySelector('#especialito');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
    }

