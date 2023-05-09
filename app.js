const container = document.querySelector('#content');

let gridsize = 16

for (i = 0; i < gridsize; i++) {
    const div = document.createElement('div');
    container.appendChild(div);

    for (j = 0; j < gridsize; j++){
        const nextDiv = document.createElement('div');
        nextDiv.style.padding = '10px';
        nextDiv.style.width = '5px';
        nextDiv.style.height = '5px';
        nextDiv.classList.add('cells')
        div.appendChild(nextDiv);
    }
}