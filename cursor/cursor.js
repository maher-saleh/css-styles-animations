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

// mouse move
document.addEventListener('mousemove', e => {
    gsap.to('.text', {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.05
    })
})