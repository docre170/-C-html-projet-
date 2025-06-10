function generateBalloons() {
    const balloonContainer = document.querySelector('.balloon-container');
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.bottom = -Math.random() * 150 - 50 + 'px';
        balloon.style.animationDuration = (Math.random() * 3 + 3) + 's';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        balloonContainer.appendChild(balloon);
        
        // Add floating animation
        balloon.style.animationName = 'float';
        balloon.style.animationTimingFunction = 'ease-in-out';
        balloon.style.animationIterationCount = 'infinite';
        balloon.style.animationDirection = 'alternate';
         balloon.style.transform = translateY($Math.random() * -20);
    }
}

function generateConfetti() {
    for (let i = 0; i < 200; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
    }
}

window.onload = function() {
    generateBalloons();
    generateConfetti();
}