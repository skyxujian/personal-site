document.querySelectorAll('nav a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute('href'));
    if(!target) return;
    window.scrollTo({top:target.offsetTop-70,behavior:'smooth'});
  });
});
