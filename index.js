// Affiche/masque le menu sur mobile
  document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('nav .center').classList.toggle('active');
  });

  // Optionnel : referme le menu quand on clique sur un lien
  document.querySelectorAll('nav .center a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('nav .center').classList.remove('active');
    });
  });
  function f(){
    // gestion de Date
    d=new Date();
    // pour afficher
    console.log("c'est l 'annee " + d.getFullYear());
    // pour le mois 
    console.log(d.getMonth());
     // getDate pour le jour
    // getDay
    // getHours
    // getMinutes
    // getSeconds
    // getMilliseconds
    // getTime
    setTimeout("f()", 1000);
    e=new Date();
    h=e.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    if(s%2==0)
      sep=":";
    else
      sep="-";
    if (h<10)  h="0"+h;
    if (m<10)  m="0"+m;
    if (s<10)  s="0"+s;
        // pour clignoter 
    document.fo.horloge.value=h+sep+m+sep+s;
  }
// si on survol l'image
function over(){
  // changer la source
  document.images[1].src="C:\html projet\photo\IMG-20250418-WA0001.jpg";
}
function out(){
  document.images[0].src="../IMG_20250418_121851_234.jpg"
}
  

