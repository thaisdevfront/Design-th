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
