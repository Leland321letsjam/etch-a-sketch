function initializeGrid() {
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(gridSquare);
    }
};

initializeGrid();