generateNewGrid(256);

function generateNewGrid(gridSize) {
    
    const removeOldGrid = document.querySelectorAll('.gridSquare');
        removeOldGrid.forEach(div => {
            div.remove();
        });
    
    const gridContainer = document.querySelector('.grid-container');
    const containerWidth = gridContainer.clientWidth;
    for (let i = 0; i < gridSize; i++) {
        const squareCreator = document.createElement('div');
        squareCreator.classList.add('gridSquare');
        const squareWidth = containerWidth / (Math.sqrt(gridSize));
        squareCreator.style.minWidth = `${squareWidth}px`;
        gridContainer.appendChild(squareCreator);
    }

    applyMouseOver();

}

function applyMouseOver() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('gridSquare')) {
            event.target.style.backgroundColor = getRandomColor();
        }
    });

}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getGridSize () {
    let gridSize = prompt('Please enter a number 1-100');

    while(gridSize > 100 || gridSize < 1) {
        if (gridSize === null) {
            return 0;
        } else {
            alert('Number must be 1 to 100 inclusive');
            gridSize = prompt('Please enter a number 1-100');
        }
        
    }

    gridSize = Math.round(gridSize);
    gridSize = gridSize * gridSize;
    generateNewGrid(gridSize);

}

const newGridButton = document.querySelector('.generate-new-grid');
newGridButton.addEventListener('click', getGridSize);