(function(){
  const cache = new Map();

  async function loadInclude(el){
    const path = el.getAttribute('data-include');
    if(!path) return;
    try{
      let text;
      if(cache.has(path)){
        text = cache.get(path);
      } else {
        const res = await fetch(path, {cache: "no-store"});
        if(!res.ok) throw new Error('Failed to fetch ' + path);
        text = await res.text();
        cache.set(path, text);
      }
      el.innerHTML = text;
      el.dispatchEvent(new CustomEvent('include:loaded', { bubbles: true }));
    } catch(err){
      console.error(err);
      el.innerHTML = '<!-- include failed: ' + path + ' -->';
    }
  }

  function init(){
    const includes = Array.from(document.querySelectorAll('[data-include]'));
    includes.forEach(loadInclude);
  }

  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }
})();
