function initializeGrid() {
    for (let i = 0; i < 256; i++) {
        const squareCreator = document.createElement('div');
        squareCreator.classList.add('gridSquare');
        squareCreator.addEventListener('mouseover', () => {
            squareCreator.style.backgroundColor = getRandomColor();
        });
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(squareCreator);
    }
};

//initializeGrid();

function generateNewGrid() {
    
    const gridSize = getGridSize();

    const removeOldGrid = document.querySelectorAll('.gridSquare');  //Should keep old grid if cancelled
        removeOldGrid.forEach(div => {
            div.remove();
        });
    

    for (let i = 0; i < gridSize; i++) {
        const squareCreator = document.createElement('div');
        squareCreator.classList.add('gridSquare');
        //squareCreator.style.opacity = 1.0; //Move this to css?
        squareCreator.addEventListener('mouseover', () => {
            squareCreator.style.backgroundColor = getRandomColor();
            //squareCreator.style.opacity -= 0.1; // set opacity here?
        });
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(squareCreator);
    }

}

function getGridSize () {
    let gridSize = prompt('Please enter a number 1-100');

    while(gridSize > 100 || gridSize < 1) {
        if (gridSize === null) {
            return 0;
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