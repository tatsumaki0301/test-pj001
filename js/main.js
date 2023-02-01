const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
  const flore = document.getElementById("floor");
  flore.classList.toggle('out');
});