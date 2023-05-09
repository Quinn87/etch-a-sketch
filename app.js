const grid = document.querySelector('#grid');

let gridsize = 16

for (i = 0; i < gridsize; i++) {
    const div = document.createElement('div');
    grid.appendChild(div);

    for (j = 0; j < gridsize; j++){
        const nextDiv = document.createElement('div');
        nextDiv.style.padding = '10px';
        nextDiv.classList.add('cells')
        div.appendChild(nextDiv);
    }
}

const gridCells = document.querySelectorAll('.cells');

gridCells.forEach(cell => cell.addEventListener ('mousemove', function(){
    cell.classList.add('cellsHover')
}));