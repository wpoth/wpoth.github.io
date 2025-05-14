// color theme swapper
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "default";
  setTheme(savedTheme, true); // Always animate the transition

  const themeSelector = document.querySelector(".theme-selector");
  if (themeSelector) {
    themeSelector.value = savedTheme;

    themeSelector.addEventListener("change", (event) => {
      const selectedTheme = event.target.value;
      setTheme(selectedTheme, true); // Animate the transition
      localStorage.setItem("theme", selectedTheme);
    });
  }
});

function setTheme(theme, animate = true) {
  const glowCircle = document.getElementById("glowCircle");

  const themes = {
    default: "linear-gradient(to bottom, #1e293b 0%, #006f7f 100%)",
    theme2: "linear-gradient(to bottom, #5f4b8b 0%, #1e3a8a 100%)",
    theme3: "linear-gradient(to bottom, #e11d48 0%, #312e81 100%)",
    theme4: "linear-gradient(to bottom, #2f855a 0%, #14b8a6 100%)",
  };

  const bgGradient = themes[theme] || themes.default;

  // Apply the gradient transition
  if (animate && glowCircle) {
    gsap.to(document.body, {
      background: bgGradient,
      duration: 1.5,
      ease: "power2.inOut",
      onStart: () => animateGradientFromCircle(glowCircle),
    });
  } else {
    document.body.style.background = bgGradient;
  }
}

function animateGradientFromCircle(glowCircle) {
  if (!glowCircle) return;

  const rect = glowCircle.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollX = window.scrollX || window.pageXOffset;
  const targetTop = rect.top + scrollY + rect.height / 2;
  const targetLeft = rect.left + scrollX + rect.width / 2;

  gsap.to(glowCircle, {
    top: targetTop,
    left: targetLeft,
    scale: 10,
    opacity: 0.6,
    duration: 1.5,
    ease: "power2.out",
  });
}

// Projects page animations
const glowCircle = document.getElementById("glowCircle");
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    const rect = card.getBoundingClientRect();
    const targetTop = rect.top + window.scrollY + rect.height / 2;
    const targetLeft = rect.left + window.scrollX + rect.width / 2;
    const color = window.getComputedStyle(card).backgroundColor;

    gsap.to(card, {
      scale: 1.05,
      duration: 0.3,
      ease: "back.in(1.7)",
    });

    if (glowCircle) {
      gsap.to(glowCircle, {
        top: targetTop,
        left: targetLeft,
        scale: 0.3,
        opacity: 1,
        backgroundColor: color,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });

    if (glowCircle) {
      gsap.to(glowCircle, {
        opacity: 0,
        scale: 0.7,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  });
});

// Page entrance animations
function animatePageEntrance() {
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
}

// About page animations
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
  stagger: 0.3,
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
  ease: "back.out(1.7)",
});

// Animated text
const animateText = document.querySelector(".animate-text");

if (animateText) {
  const words = animateText.textContent.trim().split(/\s+/);
  animateText.innerHTML = words
    .map((word) => `<span class="reveal-word opacity-0">${word}</span>`)
    .join(" ");

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

// Page transition effect
function handlePageTransition(newPageUrl) {
  gsap.to("main", {
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      window.location.href = newPageUrl;
    },
  });
}

// Run page entrance animation after full load
window.addEventListener("load", () => {
  animatePageEntrance();
});

// Contact page entrance animation
if (document.querySelector(".contact-main")) {
  gsap.from(".contact-heading", {
    y: -50,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
  });

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1.1,
    ease: "power2.out",
  });

  gsap.from(
    ".contact-form input, .contact-form textarea, .contact-form button",
    {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    }
  );

  const form = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".submit-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMessage.classList.remove("opacity-0");
    successMessage.classList.add("opacity-100");

    form.querySelectorAll("input, textarea").forEach((el) => (el.value = ""));

    setTimeout(() => {
      successMessage.classList.remove("opacity-100");
      successMessage.classList.add("opacity-0");
    }, 3000);
  });
}
