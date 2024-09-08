function initializeGrid() {
    for (let i = 0; i < 256; i++) {
        const squareCreator = document.createElement('div');
        squareCreator.classList.add('gridSquare');
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(squareCreator);
    }
};

//initializeGrid();

function generateNewGrid() {
    
    const gridSize = getGridSize();

    const removeOldGrid = document.querySelectorAll('.gridSquare');
    if (removeOldGrid){
        removeOldGrid.forEach(div => {
            div.remove();
        });
    }

    for (let i = 0; i < gridSize; i++) {
        const squareCreator = document.createElement('div');
        squareCreator.classList.add('gridSquare');

        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(squareCreator);
    }

}

function getGridSize () {
    let gridSize = prompt('Please enter a number 1-100');

    while(gridSize > 100 || gridSize < 1) {
        if (gridSize === null) {
            break;
        } else {
            alert('Number must be between 1 and 100');
            gridSize = prompt('Please enter a number 1-100');
        }
        
    }

    gridSize = Math.round(gridSize);
    gridSize = gridSize * gridSize;
    return gridSize;

}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const newGridButton = document.querySelector('.generate-new-grid');
newGridButton.addEventListener('click', generateNewGrid);


const squares = document.querySelectorAll('.gridSquare');
squares.forEach(gridSquare => {
    //set opacity here?
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = getRandomColor();
    });
});





//testing:

// squares.forEach(gridSquare => {
//     gridSquare.addEventListener('mouseover', () => {
//         console.log('moused indeed');
//     })
// });


// const squares = document.querySelectorAll('.gridSquare');
// squares.forEach(gridSquare => {
//     //set opacity here?
//     gridSquare.addEventListener('mouseover', () => {
//         gridSquare.style.backgroundColor = getRandomColor();
//     });
// });