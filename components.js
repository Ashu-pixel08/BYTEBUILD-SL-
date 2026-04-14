const ALL_COMPONENTS = [
  // CPU (5)
  { type:'CPU',          brand:'Intel',         name:'Intel Core i9-13900K',          spec:'24 cores, 5.8 GHz',           price:589,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=75' },
  { type:'CPU',          brand:'AMD',           name:'AMD Ryzen 9 7950X',             spec:'16 cores, 5.7 GHz',           price:549,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=75' },
  { type:'CPU',          brand:'Intel',         name:'Intel Core i5-13600K',          spec:'14 cores, 5.1 GHz',           price:319,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=75' },
  { type:'CPU',          brand:'AMD',           name:'AMD Ryzen 7 7700X',             spec:'8 cores, 5.4 GHz',            price:349,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=75' },
  { type:'CPU',          brand:'Intel',         name:'Intel Core i7-13700K',          spec:'16 cores, 5.4 GHz',           price:409,  img:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=75' },
  // GPU (5)
  { type:'GPU',          brand:'NVIDIA',        name:'NVIDIA RTX 4090',               spec:'24GB GDDR6X',                 price:1599, img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=75' },
  { type:'GPU',          brand:'AMD',           name:'AMD Radeon RX 7900 XTX',        spec:'24GB GDDR6',                  price:999,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=75' },
  { type:'GPU',          brand:'NVIDIA',        name:'NVIDIA RTX 4070 Ti',            spec:'12GB GDDR6X',                 price:799,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=75' },
  { type:'GPU',          brand:'NVIDIA',        name:'NVIDIA RTX 4060 Ti',            spec:'16GB GDDR6',                  price:499,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=75' },
  { type:'GPU',          brand:'AMD',           name:'AMD Radeon RX 7800 XT',         spec:'16GB GDDR6',                  price:499,  img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=75' },
  // RAM (5)
  { type:'RAM',          brand:'Corsair',       name:'Corsair Vengeance DDR5 32GB',   spec:'32GB (2x16GB), 6000MHz',      price:159,  img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=75' },
  { type:'RAM',          brand:'G.Skill',       name:'G.Skill Trident Z5 64GB',       spec:'64GB (2x32GB), 6400MHz',      price:299,  img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=75' },
  { type:'RAM',          brand:'Kingston',      name:'Kingston Fury Beast 16GB',      spec:'16GB (2x8GB), 5200MHz',       price:79,   img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=75' },
  { type:'RAM',          brand:'TeamGroup',     name:'TeamGroup T-Force Delta 32GB',  spec:'32GB (2x16GB), 5600MHz',      price:119,  img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=75' },
  { type:'RAM',          brand:'Crucial',       name:'Crucial Pro DDR5 96GB',         spec:'96GB (2x48GB), 5600MHz',      price:349,  img:'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=75' },
  // Storage (5)
  { type:'Storage',      brand:'Samsung',       name:'Samsung 990 PRO 2TB',           spec:'2TB NVMe, 7450 MB/s',         price:199,  img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=500&q=75' },
  { type:'Storage',      brand:'Western Digital',name:'WD Black SN850X 1TB',          spec:'1TB NVMe, 7300 MB/s',         price:119,  img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=500&q=75' },
  { type:'Storage',      brand:'Crucial',       name:'Crucial P5 Plus 500GB',         spec:'500GB NVMe, 6600 MB/s',       price:69,   img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=500&q=75' },
  { type:'Storage',      brand:'Seagate',       name:'Seagate FireCuda 530 4TB',      spec:'4TB NVMe, 7300 MB/s',         price:329,  img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=500&q=75' },
  { type:'Storage',      brand:'Kingston',      name:'Kingston KC3000 2TB',           spec:'2TB NVMe, 7000 MB/s',         price:149,  img:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=500&q=75' },
  // Motherboard (5)
  { type:'Motherboard',  brand:'ASUS',          name:'ASUS ROG Maximus Z790',         spec:'Intel Z790, DDR5',            price:599,  img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75' },
  { type:'Motherboard',  brand:'MSI',           name:'MSI MAG X670E Tomahawk',        spec:'AMD X670E, DDR5',             price:449,  img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75' },
  { type:'Motherboard',  brand:'Gigabyte',      name:'Gigabyte B650 AORUS Elite',     spec:'AMD B650, DDR5',              price:229,  img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75' },
  { type:'Motherboard',  brand:'ASUS',          name:'ASUS TUF Gaming B660M',         spec:'Intel B660, DDR4/DDR5',       price:179,  img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75' },
  { type:'Motherboard',  brand:'MSI',           name:'MSI MEG Z790 ACE',              spec:'Intel Z790, DDR5, WiFi 6E',  price:699,  img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75' },
  // Power Supply (5)
  { type:'Power Supply', brand:'Corsair',       name:'Corsair RM1000e 1000W',         spec:'1000W, 80+ Gold',             price:189,  img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=500&q=75' },
  { type:'Power Supply', brand:'EVGA',          name:'EVGA SuperNOVA 850W',           spec:'850W, 80+ Platinum',          price:149,  img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=500&q=75' },
  { type:'Power Supply', brand:'Seasonic',      name:'Seasonic FOCUS 750W',           spec:'750W, 80+ Gold',              price:119,  img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=500&q=75' },
  { type:'Power Supply', brand:'be quiet!',     name:'be quiet! Dark Power 13 1000W', spec:'1000W, 80+ Titanium',         price:279,  img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=500&q=75' },
  { type:'Power Supply', brand:'Thermaltake',   name:'Thermaltake Toughpower GF3 650W',spec:'650W, 80+ Gold, ATX 3.0',   price:99,   img:'https://images.unsplash.com/photo-1542393545-10f5b85e14fc?w=500&q=75' },
  // Cabinet (5)
  { type:'Cabinet',      brand:'NZXT',          name:'NZXT H7 Flow',                  spec:'Mid Tower, RGB',              price:149,  img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=75' },
  { type:'Cabinet',      brand:'Lian Li',       name:'Lian Li O11 Dynamic',           spec:'Mid Tower, Tempered Glass',   price:199,  img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=75' },
  { type:'Cabinet',      brand:'Fractal Design',name:'Fractal Design Meshify 2',      spec:'Mid Tower, High Airflow',     price:129,  img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=75' },
  { type:'Cabinet',      brand:'Corsair',       name:'Corsair 4000D Airflow',         spec:'Mid Tower, Tempered Glass',   price:109,  img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=75' },
  { type:'Cabinet',      brand:'Cooler Master', name:'Cooler Master HAF 700 EVO',     spec:'Full Tower, ARGB, Mesh',      price:299,  img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=75' }
];

// tag class map
const TAG_CLASS = {
  'CPU':'tag-cpu','GPU':'tag-gpu','RAM':'tag-ram',
  'Storage':'tag-storage','Motherboard':'tag-motherboard',
  'Power Supply':'tag-psu','Cabinet':'tag-cabinet'
};

// DOM
const grid         = document.getElementById('compGrid');
const resultsCount = document.getElementById('resultsCount');
const searchInput  = document.getElementById('searchInput');
const typeFilter   = document.getElementById('typeFilter');
const brandFilter  = document.getElementById('brandFilter');
const priceFilter  = document.getElementById('priceFilter');
const clearBtn     = document.getElementById('clearFilters');

function getFiltered() {
  const q     = searchInput.value.toLowerCase().trim();
  const type  = typeFilter.value;
  const brand = brandFilter.value;
  const price = priceFilter.value;

  return ALL_COMPONENTS.filter(c => {
    if (q && !c.name.toLowerCase().includes(q) && !c.brand.toLowerCase().includes(q) && !c.spec.toLowerCase().includes(q)) return false;
    if (type  && c.type  !== type)  return false;
    if (brand && c.brand !== brand) return false;
    if (price) {
      const [lo, hi] = price.split('-').map(Number);
      if (c.price < lo || c.price > hi) return false;
    }
    return true;
  });
}

function render() {
  const items = getFiltered();
  resultsCount.textContent = `Showing ${items.length} component${items.length !== 1 ? 's' : ''}`;
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = '<div class="no-results">No components match your filters. Try adjusting your search.</div>';
    return;
  }

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'comp-card';
    card.style.animationDelay = `${i * 0.04}s`;
    card.innerHTML = `
      <div class="comp-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"
             onerror="this.style.display='none'">
      </div>
      <div class="comp-card-body">
        <span class="comp-tag ${TAG_CLASS[item.type]}">${item.type}</span>
        <div class="comp-card-brand">${item.brand}</div>
        <div class="comp-card-name">${item.name}</div>
        <div class="comp-card-spec">${item.spec}</div>
        <div class="comp-card-footer">
          <span class="comp-card-price">$${item.price.toLocaleString()}</span>
          <button class="btn-view">View Details</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Events
searchInput.addEventListener('input', render);
typeFilter.addEventListener('change', render);
brandFilter.addEventListener('change', render);
priceFilter.addEventListener('change', render);
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  typeFilter.value  = '';
  brandFilter.value = '';
  priceFilter.value = '';
  render();
});

// Init
render();