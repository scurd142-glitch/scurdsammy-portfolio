// Circular Skills Animation
document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill-circle');
  skills.forEach(skill => {
    let percent = skill.getAttribute('data-percent');
    let current = 0;
    let interval = setInterval(() => {
      if(current >= percent) clearInterval(interval);
      skill.style.background = `conic-gradient(#4CAF50 ${current * 3.6}deg, #2196F3 0deg)`;
      current++;
    }, 15);
  });
});

// Smooth Scroll for nav
const links = document.querySelectorAll('nav a, .btn');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});