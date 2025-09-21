function animateProgress(el, duration = 1500) {
    // Prevent multiple animations at once
    if (el._isAnimating) return;
    el._isAnimating = true;

    const h3 = el.querySelector("h3");

    // get CSS variable --i (progress value)
    const target = parseInt(getComputedStyle(el).getPropertyValue("--i"), 10);

    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        let value = Math.floor(progress * target);

        // update number
        h3.innerHTML = value + "<span>%</span>";

        // update circle fill (convert percent to degrees)
        el.style.background = `conic-gradient(var(--clr) ${value * 3.6}deg, #444 0deg)`;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            // animation done → allow re-trigger
            el._isAnimating = false;
        }
    }

    requestAnimationFrame(step);
}

// Apply to all .progress elements
document.querySelectorAll(".progress").forEach(el => {
    // Run once on page load
    animateProgress(el);

    // Re-run when hovered
    el.addEventListener("mouseenter", () => {
        animateProgress(el);
    });
});
