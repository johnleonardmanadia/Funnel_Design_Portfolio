/* Infinite Smooth Tools Carousel JS */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("toolsTrack");
  if (!track) return;

  // Duplicate children for continuous looping
  const cards = Array.from(track.children);
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  let speed = 1; // Pixels per frame
  let position = 0;
  let isPaused = false;

  function animate() {
    if (!isPaused) {
      position -= speed;
      // Reset position when half elements pass
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
  }

  track.addEventListener("mouseenter", () => (isPaused = true));
  track.addEventListener("mouseleave", () => (isPaused = false));

  // Touch Support
  track.addEventListener("touchstart", () => (isPaused = true));
  track.addEventListener("touchend", () => (isPaused = false));

  requestAnimationFrame(animate);
});