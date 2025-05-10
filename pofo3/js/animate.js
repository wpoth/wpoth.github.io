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
