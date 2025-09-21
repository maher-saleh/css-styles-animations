let pixelButtons = document.querySelectorAll('.pixel-btn');
pixelButtons.forEach(btn => {
    let pixelContainer = btn.querySelector('.pixel-container');
    let pixelSize = 10;
    let btnWidth = btn.offsetWidth;
    let btnHeight = btn.offsetHeight;
    let cols = Math.floor(btnWidth / pixelSize);
    let rows = Math.floor(btnHeight / pixelSize);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.left = `${col * pixelSize}px`;
            pixel.style.top = `${row * pixelSize}px`;
            let delay = Math.random();
            pixel.style.transitionDelay = `${delay}s`;
            pixelContainer.append(pixel);
        }
    }
});