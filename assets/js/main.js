(function(){
  function initNav(){
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-navigation');

    if(toggle && nav){
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if(!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('open')){
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const navLinks = document.querySelectorAll('[data-nav]');
    const path = location.pathname.replace(/\/+$/, '') || '/';
    navLinks.forEach(a => {
      const href = a.getAttribute('href').replace(/\/+$/, '') || '/';
      if(href === path){
        a.setAttribute('aria-current', 'page');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  function init(){
    document.querySelectorAll('[data-include]')
      .forEach(el => el.addEventListener('include:loaded', () => {
        initNav();
      }));

    initNav();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
