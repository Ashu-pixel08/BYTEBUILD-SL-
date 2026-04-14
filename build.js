// ── COMPONENT DATA ──────────────────────────────────────────
const COMPONENTS = {
  cpu: [
    { id:'cpu-1', brand:'Intel',  name:'Intel Core i9-13900K',   spec:'24 cores, 5.8 GHz',         price:589,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80' },
    { id:'cpu-2', brand:'AMD',    name:'AMD Ryzen 9 7950X',       spec:'16 cores, 5.7 GHz',         price:549,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80' },
    { id:'cpu-3', brand:'Intel',  name:'Intel Core i5-13600K',   spec:'14 cores, 5.1 GHz',         price:319,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80' },
    { id:'cpu-4', brand:'AMD',    name:'AMD Ryzen 7 7700X',       spec:'8 cores, 5.4 GHz',          price:349,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80' },
    { id:'cpu-5', brand:'Intel',  name:'Intel Core i7-13700K',   spec:'16 cores, 5.4 GHz',         price:409,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80' }
  ],
  gpu: [
    { id:'gpu-1', brand:'NVIDIA', name:'NVIDIA RTX 4090',         spec:'24GB GDDR6X',               price:1599, img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80' },
    { id:'gpu-2', brand:'AMD',    name:'AMD Radeon RX 7900 XTX',  spec:'24GB GDDR6',                price:999,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80' },
    { id:'gpu-3', brand:'NVIDIA', name:'NVIDIA RTX 4070 Ti',      spec:'12GB GDDR6X',               price:799,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80' },
    { id:'gpu-4', brand:'NVIDIA', name:'NVIDIA RTX 4060 Ti',      spec:'16GB GDDR6',                price:499,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80' },
    { id:'gpu-5', brand:'AMD',    name:'AMD Radeon RX 7800 XT',   spec:'16GB GDDR6',                price:499,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80' }
  ],
  ram: [
    { id:'ram-1', brand:'Corsair',   name:'Corsair Vengeance DDR5 32GB',    spec:'32GB (2x16GB), 6000MHz', price:159, img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&q=80' },
    { id:'ram-2', brand:'G.Skill',   name:'G.Skill Trident Z5 64GB',        spec:'64GB (2x32GB), 6400MHz', price:299, img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&q=80' },
    { id:'ram-3', brand:'Kingston',  name:'Kingston Fury Beast 16GB',       spec:'16GB (2x8GB), 5200MHz',  price:79,  img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&q=80' },
    { id:'ram-4', brand:'TeamGroup', name:'TeamGroup T-Force Delta 32GB',   spec:'32GB (2x16GB), 5600MHz', price:119, img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&q=80' },
    { id:'ram-5', brand:'Crucial',   name:'Crucial Pro DDR5 96GB',          spec:'96GB (2x48GB), 5600MHz', price:349, img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&q=80' }
  ],
  storage: [
    { id:'sto-1', brand:'Samsung',        name:'Samsung 990 PRO 2TB',         spec:'2TB NVMe, 7450 MB/s',  price:199, img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=600&q=80' },
    { id:'sto-2', brand:'Western Digital',name:'WD Black SN850X 1TB',         spec:'1TB NVMe, 7300 MB/s',  price:119, img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=600&q=80' },
    { id:'sto-3', brand:'Crucial',        name:'Crucial P5 Plus 500GB',       spec:'500GB NVMe, 6600 MB/s',price:69,  img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=600&q=80' },
    { id:'sto-4', brand:'Seagate',        name:'Seagate FireCuda 530 4TB',    spec:'4TB NVMe, 7300 MB/s',  price:329, img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=600&q=80' },
    { id:'sto-5', brand:'Kingston',       name:'Kingston KC3000 2TB',         spec:'2TB NVMe, 7000 MB/s',  price:149, img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=600&q=80' }
  ],
  motherboard: [
    { id:'mob-1', brand:'ASUS',     name:'ASUS ROG Maximus Z790',      spec:'Intel Z790, DDR5',            price:599, img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
    { id:'mob-2', brand:'MSI',      name:'MSI MAG X670E Tomahawk',     spec:'AMD X670E, DDR5',             price:449, img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
    { id:'mob-3', brand:'Gigabyte', name:'Gigabyte B650 AORUS Elite',  spec:'AMD B650, DDR5',              price:229, img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
    { id:'mob-4', brand:'ASUS',     name:'ASUS TUF Gaming B660M',      spec:'Intel B660, DDR4/DDR5',       price:179, img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
    { id:'mob-5', brand:'MSI',      name:'MSI MEG Z790 ACE',           spec:'Intel Z790, DDR5, WiFi 6E',  price:699, img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' }
  ],
  psu: [
    { id:'psu-1', brand:'Corsair',      name:'Corsair RM1000e 1000W',              spec:'1000W, 80+ Gold',     price:189, img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=600&q=80' },
    { id:'psu-2', brand:'EVGA',         name:'EVGA SuperNOVA 850W',                spec:'850W, 80+ Platinum',  price:149, img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=600&q=80' },
    { id:'psu-3', brand:'Seasonic',     name:'Seasonic FOCUS 750W',                spec:'750W, 80+ Gold',      price:119, img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=600&q=80' },
    { id:'psu-4', brand:'be quiet!',    name:'be quiet! Dark Power 13 1000W',      spec:'1000W, 80+ Titanium', price:279, img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=600&q=80' },
    { id:'psu-5', brand:'Thermaltake',  name:'Thermaltake Toughpower GF3 650W',    spec:'650W, 80+ Gold, ATX 3.0', price:99, img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=600&q=80' }
  ],
  cabinet: [
    { id:'cab-1', brand:'NZXT',          name:'NZXT H7 Flow',                  spec:'Mid Tower, RGB',               price:149, img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' },
    { id:'cab-2', brand:'Lian Li',       name:'Lian Li O11 Dynamic',           spec:'Mid Tower, Tempered Glass',    price:199, img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' },
    { id:'cab-3', brand:'Fractal Design',name:'Fractal Design Meshify 2',      spec:'Mid Tower, High Airflow',      price:129, img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' },
    { id:'cab-4', brand:'Corsair',       name:'Corsair 4000D Airflow',         spec:'Mid Tower, Tempered Glass',    price:109, img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' },
    { id:'cab-5', brand:'Cooler Master', name:'Cooler Master HAF 700 EVO',     spec:'Full Tower, ARGB, Mesh',       price:299, img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' }
  ]
};

// ── STATE ─────────────────────────────────────────────────────
const state = {
  activeCategory: 'cpu',
  selected: {
    cpu: null, gpu: null, ram: null,
    storage: null, motherboard: null, psu: null, cabinet: null
  }
};

// ── DOM REFS ──────────────────────────────────────────────────
const componentGrid   = document.getElementById('componentGrid');
const totalPriceEl    = document.getElementById('totalPrice');
const selectedCountEl = document.getElementById('selectedCount');
const completeBuildBtn= document.getElementById('completeBuildBtn');
const modalOverlay    = document.getElementById('modalOverlay');
const modalSummary    = document.getElementById('modalSummary');
const modalTotal      = document.getElementById('modalTotal');
const modalClose      = document.getElementById('modalClose');
const modalReset      = document.getElementById('modalReset');

// ── RENDER CARDS ──────────────────────────────────────────────
function renderCards(category) {
  const items = COMPONENTS[category];
  componentGrid.innerHTML = '';

  items.forEach((item, i) => {
    const isSelected = state.selected[category]?.id === item.id;

    const card = document.createElement('div');
    card.className = 'component-card' + (isSelected ? ' selected' : '');
    card.style.animationDelay = `${i * 0.07}s`;

    card.innerHTML = `
      <div class="card-image">
        <img src="${item.img}" alt="${item.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'card-image-placeholder\\'>[Component Image]</div><div class=\\'card-check\\'>✓</div>'">
        <div class="card-check">✓</div>
      </div>
      <div class="card-body">
        <div class="card-brand">${item.brand}</div>
        <div class="card-name">${item.name}</div>
        <div class="card-spec">${item.spec}</div>
        <div class="card-footer">
          <span class="card-price">$${item.price.toLocaleString()}</span>
          <button class="btn-select" data-id="${item.id}" data-category="${category}">
            ${isSelected ? 'Selected ✓' : 'Select'}
          </button>
        </div>
      </div>
    `;

    componentGrid.appendChild(card);
  });
}

// ── SELECT COMPONENT ──────────────────────────────────────────
function selectComponent(category, id) {
  const items = COMPONENTS[category];
  const item = items.find(i => i.id === id);
  if (!item) return;
  state.selected[category] = (state.selected[category]?.id === id) ? null : item;
  renderCards(category);
  updateSummary();
}

// ── UPDATE SUMMARY ────────────────────────────────────────────
function updateSummary() {
  let total = 0, count = 0;

  ['cpu','gpu','ram','storage','motherboard','psu','cabinet'].forEach(cat => {
    const el = document.querySelector(`.summary-item[data-slot="${cat}"] .slot-value`);
    if (!el) return;
    const item = state.selected[cat];
    if (item) {
      el.textContent = item.name;
      el.classList.add('filled');
      total += item.price;
      count++;
    } else {
      el.textContent = 'Not selected';
      el.classList.remove('filled');
    }
  });

  totalPriceEl.classList.remove('price-pop');
  void totalPriceEl.offsetWidth;
  totalPriceEl.classList.add('price-pop');
  totalPriceEl.textContent = '$' + total.toLocaleString();

  selectedCountEl.textContent = `${count} / 7`;
  completeBuildBtn.disabled = count < 7;
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal() {
  const labels = { cpu:'CPU', gpu:'GPU', ram:'RAM', storage:'Storage', motherboard:'Motherboard', psu:'Power Supply', cabinet:'Cabinet' };
  let total = 0, html = '';

  Object.entries(labels).forEach(([cat, label]) => {
    const item = state.selected[cat];
    if (item) {
      total += item.price;
      html += `<div class="modal-summary-row">
        <span class="label">${label}</span>
        <span class="value">${item.name} — $${item.price.toLocaleString()}</span>
      </div>`;
    }
  });

  modalSummary.innerHTML = html;
  modalTotal.textContent = 'Total: $' + total.toLocaleString();
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function resetBuild() {
  Object.keys(state.selected).forEach(k => state.selected[k] = null);
  closeModal();
  renderCards(state.activeCategory);
  updateSummary();
}

// ── EVENTS ────────────────────────────────────────────────────
document.getElementById('categoryTabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  state.activeCategory = tab.dataset.category;
  renderCards(state.activeCategory);
});

componentGrid.addEventListener('click', e => {
  const btn = e.target.closest('.btn-select');
  if (!btn) return;
  selectComponent(btn.dataset.category, btn.dataset.id);
});

completeBuildBtn.addEventListener('click', () => { if (!completeBuildBtn.disabled) openModal(); });
modalClose.addEventListener('click', closeModal);
modalReset.addEventListener('click', resetBuild);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── INIT ──────────────────────────────────────────────────────
renderCards('cpu');
updateSummary();