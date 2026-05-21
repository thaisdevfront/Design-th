 const items = document.querySelectorAll(".scroll-item");

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.95;
  const triggerTop = window.innerHeight * 0.2;

  items.forEach(item => {
    const box = item.getBoundingClientRect();

    // ENTRADA
    if (box.top < triggerBottom && box.bottom > triggerTop) {
      item.classList.add("show");
      item.classList.remove("hide");
    }

    // SAÍDA
    else if (box.top <= triggerTop) {
      item.classList.remove("show");
      item.classList.add("hide");
    }

    else {
      item.classList.remove("show", "hide");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

//whatsapp
function abrirWhatsApp() {
const telefone = "5512981021517"; // DDI + DDD + número
const mensagem = "Olá! Gostaria de mais informações";


const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
window.open(url, "_blank");
}

// Form submission to WhatsApp
        document.getElementById("contact-form").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const product = document.getElementById("product").value;
            const message = document.getElementById("message").value;
            
            const whatsappMessage = `Olá, vim do site ThMariano-design e gostaria de solicitar um orçamento!\n\nNome: ${name}\nWhatsApp: ${phone}\nE-mail: ${email}\nProduto: ${product}\nMensagem: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/5512981021517?text=${encodedMessage}`, "_blank");
            
            // Reset form
            this.reset();
            
            // Show success message (you can customize this)
            alert("Seu pedido foi enviado! Entraremos em contato em breve.");
        });


// naav
const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// scroll header
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 80);
});

// abrir / fechar menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// fechar menu ao clicar em um link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});



// portfólio
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


// lógica do “Ver mais”
const btnMais = document.querySelector(".btn-mais");
const maisPort = document.querySelector(".maisport");

btnMais.addEventListener("click", () => {
  maisPort.classList.toggle("aberto");

  btnMais.innerText = maisPort.classList.contains("aberto")
    ? "Ver menos"
    : "Ver mais";
});


// Bloquear tecla Print Screen
document.addEventListener('keydown', function (e) {
  if (e.key === 'PrintScreen') {
    e.preventDefault();
    alert('Captura de tela bloqueada');
  }
});

// Bloquear Ctrl + P
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key === 'p') {
    e.preventDefault();
    alert('Impressão desativada');
  }
});

// Desativar botão direito (copiar / salvar)
document.addEventListener('contextmenu', e => e.preventDefault());