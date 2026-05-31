// Simple JS app implementing the sketched supermarket UI
const products = [
  { id: 'p1', name: 'Pilze', emoji: '🍄', price: 0.75 },
  { id: 'p2', name: 'Karotten', emoji: '🥕', price: 0.30 },
  { id: 'p3', name: 'Salate', emoji: '🥬', price: 0.90 },
  { id: 'p4', name: 'Zwiebeln', emoji: '🧅', price: 0.50 },
  { id: 'p5', name: 'Äpfel', emoji: '🍎', price: 1.00 },
  { id: 'p6', name: 'Birnen', emoji: '🍐', price: 1.00 },
  { id: 'p7', name: 'Ananas', emoji: '🍍', price: 2.29 },
  { id: 'p8', name: 'Bananen', emoji: '🍌', price: 0.45 },
  { id: 'p9', name: 'Erdbeeren', emoji: '🍓', price: 1.50 },
  { id: 'p10', name: 'Trauben', emoji: '🍇', price: 1.80 },
  { id: 'p11', name: 'Zucchini', emoji: '🥒', price: 0.70 },
  { id: 'p12', name: 'Auberginen', emoji: '🍆', price: 0.80 },
  { id: 'p13', name: 'Paprika', emoji: '🌶️', price: 0.60 },
  { id: 'p14', name: 'Kürbis', emoji: '🎃', price: 1.20 },
  { id: 'p15', name: 'Avocado', emoji: '🥑', price: 1.50 },
  { id: 'p16', name: 'Zitrone', emoji: '🍋', price: 0.40 },
  { id: 'p17', name: 'Limette', emoji: '🍈', price: 0.40 },
  { id: 'p18', name: 'Kokosnuss', emoji: '🥥', price: 1.80 },
  { id: 'p19', name: 'Melone', emoji: '🍉', price: 1.00 },
  { id: 'p20', name: 'Mango', emoji: '🥭', price: 1.50 },
  { id: 'p21', name: 'Pfirsich', emoji: '🍑', price: 1.20 },
  { id: 'p22', name: 'Nektarine', emoji: '🍑', price: 1.20 },
  { id: 'p23', name: 'Kirschen', emoji: '🍒', price: 2.00 },
  { id: 'p24', name: 'Heidelbeeren', emoji: '🫐', price: 1.80 },
  { id: 'p25', name: 'Himbeeren', emoji: '🍓', price: 1.80 },
  { id: 'p26', name: 'Blaubeeren', emoji: '🫐', price: 1.80 },
  { id: 'p27', name: 'Brombeeren', emoji: '🍇', price: 1.80 },
  { id: 'p28', name: 'Johannisbeeren', emoji: '🍇', price: 1.80 },
  { id: 'p29', name: 'Grapefruit', emoji: '🍊', price: 0.90 },
  { id: 'p30', name: 'Orangen', emoji: '🍊', price: 0.80 },
  { id: 'p31', name: 'Mandarinen', emoji: '🍊', price: 0.70 },
  { id: 'p32', name: 'Gurken', emoji: '🥒', price: 0.50 },
  { id: 'p33', name: 'Spargel', emoji: '🥦', price: 1.50 },
  { id: 'p34', name: 'Brokkoli', emoji: '🥦', price: 0.90 },
  { id: 'p35', name: 'Blumenkohl', emoji: '🥦', price: 0.90 },
  { id: 'p36', name: 'Rosenkohl', emoji: '🥦', price: 0.80 },
  { id: 'p37', name: 'Spinat', emoji: '🥬', price: 0.70 },
  { id: 'p38', name: 'Mangold', emoji: '🥬', price: 0.70 },
  { id: 'p39', name: 'Rucola', emoji: '🥬', price: 0.70 },
  { id: 'p40', name: 'Endivien', emoji: '🥬', price: 0.70 },
  { id: 'p41', name: 'Salz', emoji: '🧂', price: 0.70 },
  { id: 'p42', name: 'Pfeffer', emoji: '🧂', price: 0.80 },
  { id: 'p43', name: 'Olivenöl', emoji: '🫒', price: 3.50 },
  { id: 'p44', name: 'Sonnenblumenöl', emoji: '🫒', price: 2.50 },
  { id: 'p45', name: 'Zucker', emoji: '🍬', price: 2.00 },
  { id: 'p46', name: 'Mehl', emoji: '🌾', price: 1.50 },
  { id: 'p47', name: 'Reis', emoji: '🍚', price: 1.80 },
  { id: 'p48', name: 'Kartoffeln', emoji: '🥔', price: 0.60 },
  { id: 'p49', name: 'Nudeln', emoji: '🍝', price: 1.20 },
  { id: 'p50', name: 'Haferflocken', emoji: '🥣', price: 1.50 },
  { id: 'p51', name: 'Müsli', emoji: '🥣', price: 2.00 },
  { id: 'p52', name: 'Kaffee', emoji: '☕', price: 3.00 },
  { id: 'p53', name: 'Tee', emoji: '🍵', price: 2.50 },
  { id: 'p54', name: 'Kakao', emoji: '🍫', price: 2.80 },
  { id: 'p55', name: 'Honig', emoji: '🍯', price: 3.20 },
  { id: 'p56', name: 'Marmelade', emoji: '🍓', price: 2.50 },
  { id: 'p57', name: 'Eier', emoji: '🥚', price: 2.00 },
  { id: 'p58', name: 'Milch', emoji: '🥛', price: 1.20 },
  { id: 'p59', name: 'Joghurt', emoji: '🥛', price: 1.00 },
  { id: 'p60', name: 'Butter', emoji: '🧈', price: 1.80 },
  { id: 'p61', name: 'Käse', emoji: '🧀', price: 2.50 },
  { id: 'p62', name: 'Wurst', emoji: '🥩', price: 2.50 },
  { id: 'p63', name: 'Schinken', emoji: '🥩', price: 2.80 },
  { id: 'p64', name: 'Salami', emoji: '🥩', price: 3.00 },
  { id: 'p65', name: 'Thunfisch', emoji: '🐟', price: 2.50 },
  { id: 'p66', name: 'Lachs', emoji: '🐟', price: 3.50 },
  { id: 'p67', name: 'Garnelen', emoji: '🦐', price: 4.00 },
  { id: 'p68', name: 'Muscheln', emoji: '🦪', price: 3.49 },
  { id: 'p69', name: 'Tofu', emoji: '🍱', price: 1.89 },
  { id: 'p70', name: 'Fisch', emoji: '🐟', price: 3.99 },
  { id: 'p71', name: 'Fleisch', emoji: '🥩', price: 5.99 },
  { id: 'p72', name: 'Wasser', emoji: '💧', price: 0.50 },
  { id: 'p73', name: 'Saft', emoji: '🧃', price: 1.50 },
  { id: 'p74', name: 'Limonade', emoji: '🥤', price: 1.20 },
  { id: 'p75', name: 'Chips', emoji: '🥔', price: 1.80 },
  { id: 'p76', name: 'Schokolade', emoji: '🍫', price: 2.50 },
  { id: 'p77', name: 'Kekse', emoji: '🍪', price: 1.50 },
  { id: 'p78', name: 'Eiscreme', emoji: '🍨', price: 2.00 },
  { id: 'p79', name: 'Gummibärchen', emoji: '🐻', price: 1.29 },
  { id: 'p80', name: 'Bonbons', emoji: '🍬', price: 1.00 },
  { id: 'p81', name: 'Nüsse', emoji: '🥜', price: 2.50 },
  { id: 'p82', name: 'Popcorn', emoji: '🍿', price: 1.80 },
  { id: 'p83', name: 'Klopapier', emoji: '🧻', price: 2.00 },
  { id: 'p84', name: 'Papiertaschentücher', emoji: '🧻', price: 1.50 },
  { id: 'p85', name: 'Seife', emoji: '🧼', price: 1.20 },
  { id: 'p86', name: 'Shampoo', emoji: '🧴', price: 3.00 },
  { id: 'p87', name: 'Duschgel', emoji: '🧴', price: 2.50 },
  { id: 'p88', name: 'Zahnpasta', emoji: '🪥', price: 2.00 },
  { id: 'p89', name: 'Rasierer', emoji: '🪒', price: 2.50 },
  { id: 'p90', name: 'Deodorant', emoji: '🧴', price: 2.80 },
  { id: 'p91', name: 'Sonnencreme', emoji: '🧴', price: 3.50 },
  { id: 'p92', name: 'Insektenspray', emoji: '🧴', price: 2.50 },
  { id: 'p93', name: 'Batterien', emoji: '🔋', price: 3.49 },
  { id: 'p94', name: 'Magazin', emoji: '📰', price: 2.00 },
  { id: 'p95', name: 'Breze', emoji: '🥨', price: 5.00 },
  { id: 'p96', name: 'Croissant', emoji: '🥐', price: 1.50 },
  { id: 'p97', name: 'Brötchen', emoji: '🥖', price: 0.50 },
  { id: 'p98', name: 'Lego Auto', emoji: '🏎️', price: 99.99 },
  { id: 'p99', name: 'Lego Haus', emoji: '🏠', price: 169.99 },
  { id: 'p100', name: 'Lego F1 Auto', emoji: '🏎️', price: 34.99 },
  { id: 'p101', name: 'Lego Bahn', emoji: '🚅', price: 129.99 }
];

let cart = {};

function fmt(n){
  return n.toFixed(2).replace('.',',') + ' €';
}

function getTotal(){
  return Object.keys(cart).reduce((sum,id)=>{
    const prod = products.find(p=>p.id===id);
    return sum + (prod ? prod.price * cart[id] : 0);
  },0);
}

function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="emoji">${p.emoji}</div>
      <div class="name">${p.name}</div>
      <div class="controls">
        <div class="left">${fmt(p.price)}</div>
        <div class="right">
          <button data-id="${p.id}" class="dec">−</button>
          <span class="qty" id="qty-${p.id}">0</span>
          <button data-id="${p.id}" class="inc">+</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // attach listeners
  grid.querySelectorAll('.inc').forEach(btn=>btn.addEventListener('click',e=>{
    const id = e.currentTarget.dataset.id; addToCart(id,1);
  }));
  grid.querySelectorAll('.dec').forEach(btn=>btn.addEventListener('click',e=>{
    const id = e.currentTarget.dataset.id; addToCart(id,-1);
  }));
}

function addToCart(id,delta){
  if(!cart[id]) cart[id]=0;
  cart[id] = Math.max(0, cart[id]+delta);
  if(cart[id]===0) delete cart[id];
  updateUI();
}

function updateUI(){
  // update product qty badges
  products.forEach(p=>{
    const el = document.getElementById('qty-'+p.id);
    if(el) el.textContent = cart[p.id] || 0;
  });

  // render cart list
  const list = document.getElementById('cartList');
  list.innerHTML = '';
  let total = 0;
  Object.keys(cart).forEach(id=>{
    const qty = cart[id];
    const prod = products.find(p=>p.id===id);
    const lineTotal = prod.price * qty;
    total += lineTotal;

    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div class="item-info">
        <div class="emoji">${prod.emoji}</div>
        <div>
          <div class="name">${prod.name}</div>
          <div class="small">${qty}x ${fmt(prod.price)}</div>
        </div>
      </div>
      <div class="item-controls">
        <button data-id="${id}" class="dec">−</button>
        <div class="qty">${qty}</div>
        <button data-id="${id}" class="inc">+</button>
        <div style="min-width:68px;text-align:right;margin-left:8px">${fmt(lineTotal)}</div>
      </div>
    `;
    list.appendChild(li);
  });

  // cart item buttons
  list.querySelectorAll('.inc').forEach(b=>b.addEventListener('click',e=>{
    addToCart(e.currentTarget.dataset.id,1);
  }));
  list.querySelectorAll('.dec').forEach(b=>b.addEventListener('click',e=>{
    addToCart(e.currentTarget.dataset.id,-1);
  }));

  document.getElementById('total').textContent = fmt(total);
}

// --- Cash modal / numpad handling ---
const cashModal = document.getElementById('cashModal');
const barBtn = document.getElementById('barBtn');
const closeCash = document.getElementById('closeCash');
const modalTotal = document.getElementById('modalTotal');
const enteredEl = document.getElementById('entered');
const changeEl = document.getElementById('change');
const numpad = document.getElementById('numpad');
const clearKey = document.getElementById('clearKey');
const confirmCash = document.getElementById('confirmCash');

let entered = '0'; // string input, with dot as decimal separator

function showCashModal(){
  const total = getTotal();
  if(total <= 0){ alert('Warenkorb ist leer'); return; }
  modalTotal.textContent = fmt(total);
  entered = '0';
  updateModalDisplays();
  cashModal.classList.remove('hidden');
  cashModal.setAttribute('aria-hidden','false');
}

function hideCashModal(){
  cashModal.classList.add('hidden');
  cashModal.setAttribute('aria-hidden','true');
}

function parseEntered(){
  // accept comma or dot
  const normalized = entered.replace(',', '.');
  const v = parseFloat(normalized);
  return isNaN(v) ? 0 : v;
}

function updateModalDisplays(){
  const total = getTotal();
  const paid = parseEntered();
  const change = Math.max(0, paid - total);
  enteredEl.textContent = fmt(paid);
  changeEl.textContent = fmt(change);
}

// numpad input
if(numpad){
  numpad.addEventListener('click', e=>{
    const t = e.target;
    if(!t.classList.contains('key')) return;
    const k = t.textContent.trim();
    if(k === 'C') return;
    if(k === '.'){
      if(!entered.includes('.')) entered += '.';
    } else {
      if(entered === '0') entered = k;
      else entered += k;
    }
    updateModalDisplays();
  });
}

if(clearKey) clearKey.addEventListener('click', ()=>{ entered = '0'; updateModalDisplays(); });
if(barBtn) barBtn.addEventListener('click', showCashModal);
if(closeCash) closeCash.addEventListener('click', hideCashModal);

if(confirmCash) confirmCash.addEventListener('click', ()=>{
  const paid = parseEntered();
  const total = getTotal();
  if(paid < total){ alert('Eingegebener Betrag ist kleiner als die Summe'); return; }
  const change = paid - total;
  alert(`Zahlung erhalten. Geld zurück: ${fmt(change)}\n\nDanke!`);
  cart = {};
  updateUI();
  hideCashModal();
});

document.getElementById && (function init(){
  renderProducts();
  updateUI();
    // Open cash numpad modal when the user clicks "Bezahlen"
    const payBtnInit = document.getElementById('payBtn');
    if(payBtnInit) payBtnInit.addEventListener('click', showCashModal);
  })();
// The numpad is shown when the user clicks the main `Bezahlen` button.

