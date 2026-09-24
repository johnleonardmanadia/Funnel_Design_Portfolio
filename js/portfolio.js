

/* Portfolio Data & Filtering */
const projectsData = [
  {
    id: "proj1",
    title: "Alpha Growth Sales Page",
    category: "funnel-design",
    categoryLabel: "Funnel Design",
    tools: ["Figma", "ClickFunnels", "Photoshop"],
    shortDesc: "High-ticket consulting sales funnel with custom multi-step checkout.",
    // TODO: replace with the live URL of this project
    url: "#",
    imgPlaceholderText: "Alpha Growth Funnel Mockup"
  },
  {
    id: "proj2",
    title: "SaaS Free-Trial Opt-in Page",
    category: "web-development",
    categoryLabel: "Web Development",
    tools: ["Figma", "Webflow"],
    shortDesc: "Minimalist landing page engineered for developer tool signups.",
    // TODO: replace with the live URL of this project
    url: "#",
    imgPlaceholderText: "SaaS Landing Page"
  },
  {
    id: "proj3",
    title: "Fitness Masterclass Lead Gen",
    category: "funnel-design",
    categoryLabel: "Funnel Design",
    tools: ["Canva", "systeme.io"],
    shortDesc: "Free PDF guide opt-in funnel targeting health-conscious professionals.",
    // TODO: replace with the live URL of this project
    url: "#",
    imgPlaceholderText: "Lead Magnet Funnel"
  },
  {
    id: "proj4",
    title: "E-Com Product Launch Page",
    category: "web-development",
    categoryLabel: "Web Development",
    tools: ["Framer", "Photoshop"],
    shortDesc: "High-end product showcase for a DTC luxury watch brand.",
    // TODO: replace with the live URL of this project
    url: "#",
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
      col.className = "col-md-6 col-lg-4 reveal active";
      col.innerHTML = `
        <div class="project-card h-100 d-flex flex-column">
          <div class="project-img-wrapper">
            <div class="browser-frame-bar">
              <span></span><span></span><span></span>
            </div>
            <div class="browser-frame-scroll">
              <svg class="placeholder-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#161616"/>
                <text x="50%" y="50%" fill="#444" font-size="16" text-anchor="middle" font-family="sans-serif">${p.imgPlaceholderText}</text>
              </svg>
            </div>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1 text-center">
            <h4 class="fw-bold mb-2">${p.title}</h4>
            <a href="${p.url}" target="_blank" rel="noopener" class="btn btn-outline-custom btn-sm mt-auto view-project-btn">View project</a>
          </div>
        </div>
      `;
      grid.appendChild(col);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  renderProjects();
});