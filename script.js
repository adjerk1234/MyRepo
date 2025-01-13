// Initialize Typed.js for the dynamic typing effect
const dynamicText = document.querySelector("#dynamic-text");
if (dynamicText) {
  new Typed("#dynamic-text", {
    strings: ["Panchal Nayak", "Web Developer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });
}

// Add scroll-triggered animations for timeline
const timelineItems = document.querySelectorAll(".timeline-item");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.3 }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
} else {
  // Fallback for unsupported browsers: make all items visible
  timelineItems.forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  });
}

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000, // Animation duration
  easing: 'ease-in-out', // Easing function
  once: true, // Trigger animation only once
});

// Particles Background for Projects Section
particlesJS("tsparticles", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// Scroll-triggered animations for projects section
const projectCards = document.querySelectorAll('.project-card');
if ('IntersectionObserver' in window) {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.3 }
  );

  projectCards.forEach((item) => {
    projectObserver.observe(item);
  });
} else {
  // Fallback: Make all projects visible by default
  projectCards.forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  });
}
