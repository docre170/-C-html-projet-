 // Mise à jour automatique de l'année du copyright
 document.getElementById('year').textContent = new Date().getFullYear();
        
 // Animation au scroll
 const modules = document.querySelectorAll('.module');
 
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = 1;
             entry.target.style.transform = 'translateY(0)';
         }
     });
 }, { threshold: 0.1 });
 
 modules.forEach(module => {
     observer.observe(module);
 });
 
 // Effet de survol amélioré
 modules.forEach(module => {
     module.addEventListener('mouseenter', () => {
         module.style.borderLeftColor = '#ffd43b';
     });
     
     module.addEventListener('mouseleave', () => {
         module.style.borderLeftColor = '#3776ab';
     });
 });