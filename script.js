 for (let i = 0; i < 16; i++) {
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