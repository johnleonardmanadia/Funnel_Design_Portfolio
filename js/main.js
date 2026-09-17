
/* General Website Functionality (Scroll Progress, Active Nav, Cursor, Modals) */
document.addEventListener("DOMContentLoaded", () => {
  // Scroll Progress & Navbar Toggle
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (scrollProgressBar) scrollProgressBar.style.width = progress + "%";

    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile Nav Auto-close on link click
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarContent");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // Active Link Highlighter on Scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      const navLink = document.querySelector('.navbar-nav a[href="#' + sectionId + '"]');
      if (!navLink) return; // section has no nav link (e.g. removed from the menu)

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  });

  // Custom Cursor
  const cursor = id("customCursor");
  const follower = id("cursorFollower");

  if (window.innerWidth > 991 && cursor && follower) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      setTimeout(() => {
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
      }, 40);
    });
  }

  // Certificate Modal Trigger
  document.querySelectorAll(".view-cert-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-cert-title");
      id("certModalTitle").innerText = title;
      id("certModalName").innerText = title;
      const certModal = new bootstrap.Modal(id("certModal"));
      certModal.show();
    });
  });

  function id(name) { return document.getElementById(name); }
});