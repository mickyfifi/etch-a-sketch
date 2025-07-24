const CONTAINER_WIDTH_PX = 800;
const CONTAINER_HEIGHT_PX = 600;
let gridCount = 16;

const containerElement = document.querySelector('#container');
const setupButton = document.querySelector('#setup');
containerElement.style.width = `${CONTAINER_WIDTH_PX}px`;
containerElement.style.height = `${CONTAINER_HEIGHT_PX}px`;

setupButton.addEventListener('click', () => {
    input = prompt('Number of grid?');
    if (input > 100) {
        alert('Maximum only of 100');
        return;
    }
    gridCount = input;
    setupNew(containerElement, gridCount);
});

function addGrid(containerElement, gridCount) {
    const boxWidthPx = CONTAINER_WIDTH_PX / gridCount;
    const boxHeightPx = CONTAINER_HEIGHT_PX / gridCount;

    for (let row = 0; row < gridCount; row++) {
        for (let col = 0; col < gridCount; col++) {
            const boxElement = document.createElement('div');
            boxElement.id = `box-r${row + 1}-c${col + 1}`;
            boxElement.classList.add('box');
            boxElement.style.width = `${boxWidthPx}px`;
            boxElement.style.height = `${boxHeightPx}px`;

            boxElement.addEventListener('mouseover', () => {
                if (boxElement.style.backgroundColor) {
                    boxElement.style.opacity = Number(boxElement.style.opacity) + 0.10;
                    return;
                }

                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);

                boxElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                boxElement.style.opacity = 0.10;
            });

            containerElement.appendChild(boxElement);
        }
    }
}

function setupNew(containerElement, gridCount) {
    containerElement.replaceChildren();
    addGrid(containerElement, gridCount);
}

addGrid(containerElement, gridCount);