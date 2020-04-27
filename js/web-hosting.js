
var menu = document.getElementById('menu');
var menu = document.getElementById('nav');
var menu = document.getElementById('exit');

menu.addEventListener('click', function(e) {
  nav.classList.toggle('hide-mobile');
  e.preventDefault();
});

exit.addEventListener('click', function(e) {
  nav.classList.add('hide-mobile');
  e.preventDefault();
});
