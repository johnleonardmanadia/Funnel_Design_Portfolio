
/* Portfolio Data, Filtering, and Modal Logic */
const projectsData = [
  {
    id: "proj1",
    title: "Alpha Growth Sales Page",
    category: "sales-funnels",
    categoryLabel: "Sales Funnel",
    tools: ["Figma", "ClickFunnels", "Photoshop"],
    shortDesc: "High-ticket consulting sales funnel with custom multi-step checkout.",
    problem: "Low conversion on cold traffic ad campaigns.",
    solution: "Re-architected the headline stack and simplified value propositions.",
    strategy: "V-S-L -> Lead Capture -> Order Bump -> One-Click Upsell",
    results: "+38% increase in Front-End Conversion",
    imgPlaceholderText: "Alpha Growth Funnel Mockup"
  },
  {
    id: "proj2",
    title: "SaaS Free-Trial Opt-in Page",
    category: "landing-pages",
    categoryLabel: "Landing Page",
    tools: ["Figma", "Webflow"],
    shortDesc: "Minimalist landing page engineered for developer tool signups.",
    problem: "User drop-off at the registration step.",
    solution: "Implemented inline social proof and frictionless single-input forms.",
    strategy: "Direct Product Teaser -> One-field Signup -> Onboarding",
    results: "28% signup conversion rate",
    imgPlaceholderText: "SaaS Landing Page"
  },
  {
    id: "proj3",
    title: "Fitness Masterclass Lead Gen",
    category: "lead-gen",
    categoryLabel: "Lead Generation",
    tools: ["Canva", "systeme.io"],
    shortDesc: "Free PDF guide opt-in funnel targeting health-conscious professionals.",
    problem: "Poor lead quality from social media ads.",
    solution: "Designed a pre-quiz filter before the download step.",
    strategy: "Micro-quiz -> Opt-in -> Thank You / Upsell Pitch",
    results: "4,500+ Qualified Leads generated in 60 Days",
    imgPlaceholderText: "Lead Magnet Funnel"
  },
  {
    id: "proj4",
    title: "E-Com Product Launch Page",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    tools: ["Framer", "Photoshop"],
    shortDesc: "High-end product showcase for a DTC luxury watch brand.",
    problem: "Low engagement with standard shopify store pages.",
    solution: "Designed an interactive, storytelling advertorial funnel page.",
    strategy: "Advertorial Story -> Interactive Feature Showcase -> Checkout",
    results: "+52% Higher Average Order Value (AOV)",
    imgPlaceholderText: "DTC E-Com Funnel"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("portfolioGrid");
  const filterBtns = document.querySelectorAll("#portfolioFilters .btn-filter");

  function renderProjects(filter = "all") {
    grid.innerHTML = "";
    const filtered = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);

    filtered.forEach((p) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-6 reveal active";
      col.innerHTML = `
        <div class="project-card h-100 d-flex flex-column">
          <div class="project-img-wrapper">
            <svg class="placeholder-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#161616"/>
              <text x="50%" y="50%" fill="#444" font-size="16" text-anchor="middle" font-family="sans-serif">${p.imgPlaceholderText}</text>
            </svg>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-secondary text-uppercase extra-small">${p.categoryLabel}</span>
              <span class="extra-small text-secondary">${p.tools.join(" • ")}</span>
            </div>
            <h4 class="fw-bold mb-2">${p.title}</h4>
            <p class="small text-secondary mb-4">${p.shortDesc}</p>
            <button class="btn btn-outline-custom btn-sm mt-auto w-100 open-modal-btn" data-id="${p.id}">View Project</button>
          </div>
        </div>
      `;
      grid.appendChild(col);
    });

    attachModalEvents();
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  renderProjects();

  function attachModalEvents() {
    document.querySelectorAll(".open-modal-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const projId = btn.getAttribute("data-id");
        const proj = projectsData.find((p) => p.id === projId);
        if (proj) openProjectModal(proj);
      });
    });
  }

  function openProjectModal(p) {
    const modalBody = document.getElementById("projectModalBody");
    const modalLabel = document.getElementById("projectModalLabel");
    modalLabel.innerText = p.title;

    modalBody.innerHTML = `
      <div class="row gy-4">
        <div class="col-lg-7">
          <div class="border border-dark rounded overflow-hidden">
            <svg class="placeholder-img" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#181818"/>
              <text x="50%" y="50%" fill="#555" font-size="18" text-anchor="middle">${p.imgPlaceholderText} Full Preview</text>
            </svg>
          </div>
        </div>
        <div class="col-lg-5">
          <span class="badge bg-white text-black text-uppercase mb-2">${p.categoryLabel}</span>
          <h3 class="fw-bold mb-3">${p.title}</h3>
          
          <div class="mb-3">
            <h6 class="fw-bold text-uppercase extra-small text-secondary mb-1">The Problem</h6>
            <p class="small">${p.problem}</p>
          </div>
          <div class="mb-3">
            <h6 class="fw-bold text-uppercase extra-small text-secondary mb-1">Design Solution</h6>
            <p class="small">${p.solution}</p>
          </div>
          <div class="mb-3">
            <h6 class="fw-bold text-uppercase extra-small text-secondary mb-1">Funnel Strategy</h6>
            <p class="small">${p.strategy}</p>
          </div>
          <div class="mb-4">
            <h6 class="fw-bold text-uppercase extra-small text-secondary mb-1">Results / Outcome</h6>
            <p class="fw-bold text-white">${p.results}</p>
          </div>
          <a href="#contact" class="btn btn-primary-custom w-100" data-bs-dismiss="modal">Request Similar Funnel</a>
        </div>
      </div>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById("projectModal"));
    bsModal.show();
  }
});