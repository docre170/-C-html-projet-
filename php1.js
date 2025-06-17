document.addEventListener('DOMContentLoaded', function() {
    // Animation pour les paragraphes du main
    const paragraphs = document.querySelectorAll('main p');
    
    paragraphs.forEach((p, index) => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
        p.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Effet hover pour les liens du footer
    const footerLinks = document.querySelectorAll('.footer-column a');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.fontWeight = 'bold';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.fontWeight = 'normal';
        });
    });
    
    // Changement de couleur du header au scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#1a252f';
            header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        } else {
            header.style.backgroundColor = '#2c3e50';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
    
    // Affichage de l'année actuelle dans le copyright
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace('2023', currentYear);
    }
});