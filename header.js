document.querySelector('.menu').addEventListener('click', function() {
    const links = document.querySelector('.nav_links_for_phone .links');
    links.style.visibility = links.style.visibility === 'visible' ? 'hidden' : 'visible';
  });
  