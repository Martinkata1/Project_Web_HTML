(function(){
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  function openDrawer(){
    drawer.classList.add('open');
    overlay.classList.add('show');
    drawer.setAttribute('aria-hidden','false');
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    drawer.setAttribute('aria-hidden','true');
  }

  hamburger.addEventListener('click', ()=>{
    if(drawer.classList.contains('open')) closeDrawer(); else openDrawer();
  });
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeDrawer(); });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el){ el.scrollIntoView({behavior:'smooth',block:'start'}); }
        // close drawer on small screens
        if(window.innerWidth < 768) closeDrawer();
      }
    });
  });

  // Contact form basic handler
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      // Placeholder: normally you'd send to server.
      formMsg.textContent = 'Thanks — your message was sent (demo).';
      form.reset();
    });
  }
})();
