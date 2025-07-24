// Animación flotante
const elementos = document.querySelectorAll('.personaje, .icono');
elementos.forEach(el => {
  el.animate(
    [
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0px)' }
    ],
    {
      duration: 2000,
      iterations: Infinity
    }
  );
});

// Tilt para el título WORK
const workTitle = document.querySelector('.work-title');
if (workTitle) {
  workTitle.addEventListener('mousemove', (e) => {
    const rect = workTitle.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -1 * (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;
    workTitle.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  workTitle.addEventListener('mouseleave', () => {
    workTitle.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  });
}

// Carrusel funcional
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}
function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}
showSlide(currentSlide);

// Tilt en imágenes
document.querySelectorAll('.tilt-image').forEach(img => {
  img.addEventListener('mousemove', (e) => {
    const bounds = img.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

// Reloj en vivo
function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { hour12: false });
  const date = now.toLocaleDateString("en-GB", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  clock.innerHTML = `${time}<br>${date}<br>LONDON`;
}
setInterval(updateClock, 1000);
updateClock();