const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-menu');
  const navLinks = document.querySelectorAll('.main-menu li');

  burger.addEventListener('click', () => {
      // toggle nav
    nav.classList.toggle('nav-active');
    // animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
        }
    });

    burger.classList.toggle('toggle');
  });

  navLinks.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

}

navSlide();