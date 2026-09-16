/* Contact Form Validation and AJAX Feedback Simulation */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending... <span class="spinner-border spinner-border-sm ms-2" role="status"></span>`;

    // Simulate async submission
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Send Message <i class="bi bi-send ms-2"></i>`;

      alertBox.className = "alert alert-success mt-3 bg-black text-white border-white";
      alertBox.innerHTML = `<i class="bi bi-check-circle me-2"></i> Thank you! Your message has been sent successfully. I will get back to you within 24 hours.`;
      alertBox.classList.remove("d-none");

      form.reset();
      form.classList.remove("was-validated");

      setTimeout(() => {
        alertBox.classList.add("d-none");
      }, 6000);
    }, 1500);
  });
});