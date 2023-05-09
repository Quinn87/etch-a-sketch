const container = document.querySelector('#content');


// container.appendChild(div);

for (i = 0; i < 16; i++) {
    const div = document.createElement('div');
    // div.style.border = 'solid';
    // div.style.padding = '10px';
    // div.style.margin = '10px';
    // div.style.width = '5px';
    // div.style.height = '5px';
    // div.classList.add('horizontal')
    container.appendChild(div);
    console.log(div);

    for (j = 0; j < 16; j++){
        const nextDiv = document.createElement('div');
        // nextDiv.style.border = '1px solid gray';
        nextDiv.style.padding = '10px';
        // nextDiv.style.margin = '10px';
        nextDiv.style.width = '5px';
        nextDiv.style.height = '5px';
        nextDiv.classList.add('cells')
        div.appendChild(nextDiv);
        console.log(nextDiv);   
    }
}