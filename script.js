document.addEventListener('DOMContentLoaded', () => {

  // ELEMENTOS
 const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');


  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalElements = document.getElementById('modalElements');
    const modalCategory = document.getElementById('modalCategory');
  const closeBtn = document.querySelector('.close');

  /* ==========================
     FILTRO
  ========================== */
  buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach(card => {
      card.style.display =
        filter === 'all' || card.classList.contains(filter)
          ? 'block'
          : 'none';
    });
  });
});

  /* ==========================
     MODAL
  ========================== */
 
cards.forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';

    modalImage.src = card.querySelector('img').src;
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modalElements.textContent = card.dataset.elements;
    modalCategory.textContent = card.dataset.category;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});


});


// animation
const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(section => observer.observe(section));

  // Slider Depoimentos
const track = document.querySelector('.testimonial-track');
const cards = document.querySelectorAll('.testimonial-card');

let index = 0;

function slidesPerView() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function slideTestimonials() {
  const perView = slidesPerView();
  const total = cards.length;

  index += perView;

  if (index >= total) {
    index = 0;
  }

  const move = (100 / perView) * index;
  track.style.transform = `translateX(-${move}%)`;
}

setInterval(slideTestimonials, 4000);

window.addEventListener('resize', () => {
  index = 0;
  track.style.transform = `translateX(0)`;
});
