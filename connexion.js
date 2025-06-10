for (let i = 0; i < 100; i++) {
    let raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.body.appendChild(raindrop);
}