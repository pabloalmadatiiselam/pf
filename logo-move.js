document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.navbar-brand');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
      let offsetY = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          offsetY = index * 10;
        }
      });
      logo.style.transform = `translateY(${offsetY}px)`;
    });
  });
  