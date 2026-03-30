const img = document.getElementById('Map-image');
let scale = 1;
const speed = 0.1; // Adjust this to change zoom sensitivity

window.addEventListener('wheel', (event) => {
  console.log("Wheel moved")
  // Prevent the whole page from scrolling when zooming the image
  event.preventDefault();

  if (event.deltaY < 0) {
    // Scrolling up (Zoom In)
    scale += speed;
  } else {
    // Scrolling down (Zoom Out)
    scale -= speed;
  }

  // Set limits so the image doesn't disappear or get too huge
  scale = Math.min(Math.max(0.5, scale), 5);

  // Apply the transformation
  img.style.transform = `scale(${scale})`;
}, { passive: false });