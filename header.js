const menuButton = document.querySelector('.menu');
const navLinksForPhone = document.querySelector('.nav_links_for_phone');

// Toggle display on menu button click
menuButton.addEventListener('click', () => {
  if (navLinksForPhone.style.display === 'none' || navLinksForPhone.style.display === '') {
    navLinksForPhone.style.display = 'block';
  } else {
    navLinksForPhone.style.display = 'none';
  }
});
