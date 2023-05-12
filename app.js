const grid = document.querySelector('#grid');
const clearButton = document.querySelector('.clear')
const gridSizeRange = document.querySelector('#gridSizeRange')
const erase = document.querySelector('.erase')
const draw = document.querySelector('.draw')

let gridSize = 70;
let cellSize = 600 / gridSize;

for (i = 0; i < Math.pow(gridSize, 2)  ; i++) {
    const cell = document.createElement('div');
    cell.style.height = cellSize + "px";
    cell.style.width = cellSize + "px";
    cell.classList.add('cells')
    grid.appendChild(cell);
}

const gridCells = document.querySelectorAll('.cells');

draw.addEventListener('click', function (){
    gridCells.forEach(cell => cell.addEventListener ('mousemove', function(){
        cell.classList.add('cellsHover')
    }));
})

erase.addEventListener('click', function (){
    gridCells.forEach(cell => cell.addEventListener ('mousemove', function(){
        cell.classList.remove('cellsHover')
    }));
})

clearButton.addEventListener('click', function (){
    gridCells.forEach(cell => cell.classList.remove('cellsHover'))
});

// gridSizeRange.addEventListener('change', function(e){
//     gridCells.forEach(cell => cell.remove());
//     div.remove();
//     gridSize = e.target.valueAsNumber;
//     cellSize = 600 / gridSize;
//     console.log(gridSize);
//     for (i = 0; i < gridSize; i++) {
//         const div = document.createElement('div');
//         grid.appendChild(div);
    
//         for (j = 0; j < gridSize; j++){
//             const nextDiv = document.createElement('div');
//             nextDiv.style.height = cellSize + "px";
//             nextDiv.style.width = cellSize + "px";
//             nextDiv.classList.add('cells')
//             div.appendChild(nextDiv);
//         }
//     }
// })