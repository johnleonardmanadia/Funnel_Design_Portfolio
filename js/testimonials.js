/* Testimonial Carousel JS */
const testimonialsData = [
  {
    name: "Marcus Vance",
    company: "CEO, Vance Media Agency",
    text: "The funnel redesigned for our high-ticket offer doubled our opt-in conversion rate overnight. Clean, strategic, and hyper-focused on results.",
    rating: 5
  },
  {
    name: "Elena Rostova",
    company: "Founder, SaaSFlow",
    text: "Exceeded all expectations! The typography, spacing, and conversion flow gave our product launch the premium feel it deserved.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Marketing Director, EduLearn",
    text: "Incredible understanding of buyer psychology. Not just pretty visuals—actual sales engineering.",
    rating: 5
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("testimonialSlider");
  const indicatorsContainer = document.getElementById("testimonialIndicators");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  if (!container) return;
  let currentIndex = 0;

  function renderTestimonials() {
    container.innerHTML = "";
    indicatorsContainer.innerHTML = "";

    testimonialsData.forEach((t, i) => {
      const card = document.createElement("div");
      card.className = `testimonial-card ${i === currentIndex ? "d-block" : "d-none"}`;
      
      let stars = "";
      for (let s = 0; s < t.rating; s++) {
        stars += `<i class="bi bi-star-fill text-white me-1"></i>`;
      }

      card.innerHTML = `
        <div class="mb-3">${stars}</div>
        <p class="fs-5 fst-italic mb-4">"${t.text}"</p>
        <div class="d-flex align-items-center gap-3">
          <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-black fw-bold" style="width:48px; height:48px;">
            ${t.name.charAt(0)}
          </div>
          <div>
            <h6 class="fw-bold mb-0">${t.name}</h6>
            <span class="small text-secondary">${t.company}</span>
          </div>
        </div>
      `;
      container.appendChild(card);

      // Indicator
      const ind = document.createElement("span");
      ind.style.cssText = `width: 10px; height: 10px; border-radius: 50%; background: ${i === currentIndex ? "#fff" : "#333"}; cursor: pointer; display: inline-block;`;
      ind.addEventListener("click", () => goTo(i));
      indicatorsContainer.appendChild(ind);
    });
  }

  function goTo(index) {
    currentIndex = index;
    renderTestimonials();
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    renderTestimonials();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
    renderTestimonials();
  });

  renderTestimonials();
});