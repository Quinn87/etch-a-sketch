const container = document.querySelector('#container');


// container.appendChild(div);

for (i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.style.border = 'solid';
    div.style.padding = '10px';
    div.style.margin = '10px';
    div.style.width = '5px';
    div.style.height = '5px';
    container.appendChild(div);
    console.log(i);
}