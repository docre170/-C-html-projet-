// Exemple de script pour des interactions futures

document.addEventListener('DOMContentLoaded', function () {
    // Exemple : Animation d'apparition du titre
    const titre = document.querySelector('h1');
    if (titre) {
        titre.style.opacity = 0;
        titre.style.transition = 'opacity 1s';
        setTimeout(() => {
            titre.style.opacity = 1;
        }, 300);
    }

    // Ajoutez ici d'autres interactions ou animations si besoin
});