window.addEventListener('load', () => {
    loadComponent('./buttons/buttons.html', 'container');
});

// mouse move
document.addEventListener('mousemove', e => {
    gsap.to('.text', {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.05
    })
})


function loadComponent(url, containerId) {
    // buttons
    fetch('./buttons/buttons.html')
        .then(res => res.text())
        .then(html => {
            const template = document.createElement('template');
            template.id = 'buttons-container';
            template.innerHTML = html;
            document.getElementById(containerId).appendChild(template.content);
        })

        // pixel buttons
        .then(pixel____buttons => {
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
        })
        .catch(err => console.error(err));

    // cursor
    fetch('./cursor/cursor.html')
        .then(res => res.text())
        .then(html => {
            const template = document.createElement('template');
            template.id = 'cursor-container';
            template.innerHTML = html;
            document.getElementById(containerId).appendChild(template.content);
        })
        .then(c => {
            const cursor = document.getElementById('cursor');
            const textContent = 'MAHER SALEH';

            for (let i = 0; i < textContent.length; i++) {
                let span = document.createElement('span');
                span.classList.add('text');
                span.style.setProperty('--i', i + 1);
                span.style.left = i * 0.6 + 'em';
                span.style.filter = `hue-rotate(${i * 10}deg)`;
                span.textContent = textContent[i];
                cursor.appendChild(span);
            }
        })
        .catch(err => console.error(err));
}