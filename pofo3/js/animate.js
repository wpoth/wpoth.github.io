// color theme swapper

// Set the selected theme based on localStorage or default theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'default'; // Default to 'default' if no theme is saved
  setTheme(savedTheme);

  // Set the dropdown to match the saved theme
  const themeSelector = document.querySelector('.theme-selector');
  themeSelector.value = savedTheme;

  themeSelector.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    
    // Apply the selected theme
    setTheme(selectedTheme);

    // Save the selected theme in localStorage
    localStorage.setItem('theme', selectedTheme);
  });
});


// Function to apply the theme class to the body
function setTheme(theme) {
  // Remove all theme-related classes
  document.body.classList.remove(
    'bg-gradient-to-b', 'from-slate-800', 'to-cyan-800',
    'from-purple-700', 'to-blue-600',
    'from-pink-600', 'to-indigo-800',
    'from-green-700', 'to-teal-700'
  );
  
  // Set the initial position of the glow circle before applying the gradient
  const glowCircle = document.getElementById("glowCircle");

  // Set different gradients based on the selected theme and animate it with GSAP
  switch (theme) {
    case 'default':
      gsap.to(document.body, {
        background: 'linear-gradient(to bottom, #1e293b 0%, #006f7f 100%)', // custom gradient colors for default
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: () => animateGradientFromCircle(glowCircle),
      });
      break;
    case 'theme2':
      gsap.to(document.body, {
        background: 'linear-gradient(to bottom, #5f4b8b 0%, #1e3a8a 100%)', // custom gradient colors for theme2
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: () => animateGradientFromCircle(glowCircle),
      });
      break;
    case 'theme3':
      gsap.to(document.body, {
        background: 'linear-gradient(to bottom, #e11d48 0%, #312e81 100%)', // custom gradient colors for theme3
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: () => animateGradientFromCircle(glowCircle),
      });
      break;
    case 'theme4':
      gsap.to(document.body, {
        background: 'linear-gradient(to bottom, #2f855a 0%, #14b8a6 100%)', // custom gradient colors for theme4
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: () => animateGradientFromCircle(glowCircle),
      });
      break;
    default:
      gsap.to(document.body, {
        background: 'linear-gradient(to bottom, #1e293b 0%, #006f7f 100%)',
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: () => animateGradientFromCircle(glowCircle),
      });
      break;
  }
}

// Function to animate the gradient transition from the circle
function animateGradientFromCircle(glowCircle) {
  // Calculate the center position of the glow circle
  const rect = glowCircle.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollX = window.scrollX || window.pageXOffset;
  const targetTop = rect.top + scrollY + rect.height / 2;
  const targetLeft = rect.left + scrollX + rect.width / 2;

  // Use GSAP to animate the gradient starting point
  gsap.to(glowCircle, {
    top: targetTop,
    left: targetLeft,
    scale: 10,
    opacity: 0.6,
    duration: 1.5,
    ease: 'power2.out',
  });
}

// Projects page animations

const glow = document.getElementById("glowCircle");
const cards = document.querySelectorAll(".project-card");

const color = "rgba(255,255,255)"; // white glow

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    const rect = card.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;

    const targetTop =
      rect.top + scrollY + rect.height / 2 - glow.offsetHeight / 2;
    const targetLeft = rect.left + scrollX - glow.offsetWidth - 20;

    const rotation = index % 2 === 0 ? 2.0 : -2.0;

    gsap.to(card, {
      scale: 1.05,
      rotate: rotation,
      duration: 0.3,
      ease: "back.in(1.7)",
    });

    gsap.to(glow, {
      top: targetTop,
      left: targetLeft,
      scale: 0.3,
      opacity: 1,
      backgroundColor: color,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });

    gsap.to(glow, {
      opacity: 0,
      scale: 0.7,
      duration: 0.4,
      ease: "power2.out",
    });
  });
});

// Page entrance animations
gsap.from("main", {
  scale: 0.97,
  opacity: 1,
  duration: 0.6,
  ease: "power2.out",
});

gsap.from("#projectsTitle", {
  y: -60,
  opacity: 1,
  duration: 1,
  delay: 0.2,
  ease: "back.out(1.7)",
});

gsap.from("#projectsDesc", {
  y: 30,
  opacity: 1,
  duration: 0.8,
  delay: 0.4,
  ease: "power2.out",
});

gsap.from(".project-card", {
  y: 50,
  opacity: 1,
  duration: 0.9,
  delay: 0.6,
  ease: "power3.out",
  stagger: 0.2,
});

// end projects animation

// start about animations

  gsap.registerPlugin(ScrollTrigger);

  // Intro Section Animation
  gsap.from("section.text-center", {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: "power3.out",
  });

  // Profile Image + Bio Animation
  gsap.from("section.flex > div", {
    scrollTrigger: {
      trigger: "section.flex",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1.1,
    ease: "power2.out",
    stagger: 0.3
  });

  // Skills Cards Animation
  gsap.from("section:last-of-type .bg-slate-800", {
    scrollTrigger: {
      trigger: "section:last-of-type",
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

const animateText = document.querySelector(".animate-text");

if (animateText) {
  const words = animateText.textContent.trim().split(/\s+/);
  animateText.innerHTML = words
    .map((word) => `<span class="reveal-word opacity-0">${word}</span>`)
    .join(" "); // real space between words

  gsap.to(".reveal-word", {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: animateText,
      start: "top 85%",
    },
  });
}
