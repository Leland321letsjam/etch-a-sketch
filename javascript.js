function initializeGrid() {
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquares');
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(gridSquare);
    }
};

//initializeGrid();

function generateNewGrid() {
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

    const removeOldGrid = document.querySelectorAll('.gridSquares');
    if (removeOldGrid){
        removeOldGrid.forEach(div => {
            div.remove();
        });
    }

    for (let i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquares');
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(gridSquare);
    }

}

const newGridButton = document.querySelector('.generate-new-grid');
newGridButton.addEventListener('click', generateNewGrid);




//testing:

