// Menu burger pour mobile
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger) {
  burger.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  });
}

// Soumission simulée du formulaire (à remplacer par un backend)
const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
   alert('Merci ! Votre demande a été envoyée. Nous vous contacterons rapidement.');
    form.reset();
  });
}