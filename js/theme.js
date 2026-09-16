/* Dark/Light Theme Switching with localStorage persistence */
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const darkIcon = document.querySelector(".dark-icon");
  const lightIcon = document.querySelector(".light-icon");
  const htmlTag = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlTag.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });

  function setTheme(theme) {
    htmlTag.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      darkIcon.classList.add("d-none");
      lightIcon.classList.remove("d-none");
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else {
      lightIcon.classList.add("d-none");
      darkIcon.classList.remove("d-none");
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    }
  }
});