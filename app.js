const grid = document.querySelector('#grid');

let gridsize = 16;
let cellSize = 600 / gridsize;

for (i = 0; i < gridsize; i++) {
    const div = document.createElement('div');
    grid.appendChild(div);

    for (j = 0; j < gridsize; j++){
        const nextDiv = document.createElement('div');
        nextDiv.style.height = cellSize + "px";
        nextDiv.style.width = cellSize + "px";
        nextDiv.classList.add('cells')
        div.appendChild(nextDiv);
    }
}

const gridCells = document.querySelectorAll('.cells');

gridCells.forEach(cell => cell.addEventListener ('mousemove', function(){
    cell.classList.add('cellsHover')
}));