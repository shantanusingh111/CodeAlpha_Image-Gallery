// Select elements
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

/* Open Lightbox */
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
}

/* Close Lightbox */
function closeLightbox() {
  lightbox.style.display = "none";
}

/* Next / Previous Image */
function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;
}

/* Filter Images + Active Button */
function filterImages(category, button) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });

  document.querySelectorAll(".filters button").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

/* Close lightbox when clicking outside image */
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

/* Keyboard Support (Bonus) */
document.addEventListener("keydown", function (e) {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeLightbox();
  }
});
