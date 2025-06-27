gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Animate all event rows EXCEPT innovatia
  gsap.utils.toArray('.event-row:not(#innovatia-2025)').forEach(row => {
    const isLeft = row.classList.contains('left-event');
    
    gsap.from(row, {
      x: isLeft ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: row,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
  });
});