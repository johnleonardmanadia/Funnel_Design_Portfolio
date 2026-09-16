/* Intersection Observer for Scroll Reveal & Counters */
document.addEventListener("DOMContentLoaded", () => {
  // Preloader Logic
  const preloader = document.getElementById("preloader");
  const progressBar = document.querySelector(".preloader-progress");
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
      }, 300);
    } else {
      width += 10;
      if (progressBar) progressBar.style.width = width + "%";
    }
  }, 50);

  // Scroll Reveal Observer
  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => revealObserver.observe(el));

  // Counter Animations
  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 30;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 40);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((c) => counterObserver.observe(c));
});