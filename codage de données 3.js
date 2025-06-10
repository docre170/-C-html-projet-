  // Menu hamburger JS
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');
  function checkWidth() {
      if (window.innerWidth <= 700) {
          menuToggle.style.display = 'inline-block';
          nav.classList.add('mobile');
      } else {
          menuToggle.style.display = 'none';
          nav.classList.remove('mobile');
          nav.style.display = '';
      }
  }
  menuToggle && menuToggle.addEventListener('click', function () {
      if (nav.style.display === 'block') {
          nav.style.display = '';
      } else {
          nav.style.display = 'block';
      }
  });
  window.addEventListener('resize', checkWidth);
  window.addEventListener('DOMContentLoaded', checkWidth);