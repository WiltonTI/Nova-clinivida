const bookBtn = document.getElementById('bookBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancel');
const bookForm = document.getElementById('bookForm');
const waLink = document.getElementById('waLink');
const whBtn = document.getElementById('whBtn');

function openModal(){
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  const first = modal.querySelector('input,select,button');
  if(first) first.focus();
}
function close(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

bookBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
cancelBtn.addEventListener('click', close);
modal.addEventListener('click', (e)=>{ if(e.target===modal) close(); });

bookForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(bookForm);
  const nome = fd.get('nome') || '';
  const tel = fd.get('telefone') || '';
  const esp = fd.get('especialidade') || '';
  const text = `Olá, meu nome é ${nome}. Gostaria de agendar uma consulta em ${esp}. Meu contato: ${tel}`;
  const url = `https://wa.me/558821320052?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  close();
  bookForm.reset();
});

// quick whatsapp button
whBtn.addEventListener('click', ()=> window.open(waLink.href, '_blank'));