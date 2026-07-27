// Fade-in animation for sections as they scroll into view
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Click-to-copy for contact links (email & phone)
const contactLinks = document.querySelectorAll('.contact-link');

contactLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const textToCopy = link.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
      const original = link.textContent;
      link.textContent = 'Copied!';
      setTimeout(() => {
        link.textContent = original;
      }, 1200);
    });
  });
});
