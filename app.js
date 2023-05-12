const gridSizeRange = document.querySelector('#gridSizeRange')
let gridSize = 16;

buildGrid(gridSize);

gridSizeRange.addEventListener('change', function (e) {
    const gridCells = document.querySelectorAll('.cells');
    gridCells.forEach(cell => cell.remove());
    gridSize = e.target.valueAsNumber;
    cellSize = 600 / gridSize;
    console.log(gridSize);
    buildGrid(gridSize);
})

function buildGrid(gridSize) {
    const clearButton = document.querySelector('.clear')
    const erase = document.querySelector('.erase')
    const draw = document.querySelector('.draw')
    const grid = document.querySelector('#grid');
    let cellSize = 600 / gridSize;

    for (i = 0; i < Math.pow(gridSize, 2); i++) {
        const cell = document.createElement('div');
        cell.style.height = cellSize + "px";
        cell.style.width = cellSize + "px";
        cell.classList.add('cells')
        grid.appendChild(cell);
    }

    gridCells = document.querySelectorAll('.cells');

    draw.addEventListener('click', function () {
        gridCells.forEach(cell => cell.addEventListener('mousemove', function () {
            cell.classList.add('cellsHover')
        }));
    })

    erase.addEventListener('click', function () {
        gridCells.forEach(cell => cell.addEventListener('mousemove', function () {
            cell.classList.remove('cellsHover')
        }));
    })

    clearButton.addEventListener('click', function () {
        gridCells.forEach(cell => cell.classList.remove('cellsHover'))
    });
}