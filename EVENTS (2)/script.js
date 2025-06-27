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

  // Specific animation for #innovatia-2025
  const innovatiaSection = document.querySelector('#innovatia-2025');
  const innovatiaImage = innovatiaSection.querySelector('.event-image');
  const innovatiaDescription = innovatiaSection.querySelector('.event-description');

  if (innovatiaSection && innovatiaImage && innovatiaDescription) {
    
    const runAnimation = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: innovatiaSection,
                start: 'top 60%',
                toggleActions: 'play none none none',
            }
        });

        tl.from(innovatiaImage, {
            opacity: 0,
            duration: 1.5,
            ease: 'power2.inOut'
        })
        .from(innovatiaDescription, 
            { 
                xPercent: 110, 
                opacity: 0, 
                duration: 2, 
                ease: 'power3.out' 
            }, 
            "<0.2"
        );
    };

    window.addEventListener('load', runAnimation);
  }
});