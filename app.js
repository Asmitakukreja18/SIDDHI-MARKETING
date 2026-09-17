/* ==========================================================================
   SIDDHI MARKETING - ELECTRONICS STORE & DIGITAL VISITING CARD JAVASCRIPT
   ========================================================================== */

// Store Information Data
const STORE_DATA = {
    name: "Siddhi Marketing",
    address: "Gali No. 4, Balaji Mandir Road",
    email: "siddhimarketing2017@gmail.com",
    phonePrimary: "+91 98765 43210",
    phoneSecondary: "+91 91234 56789",
    whatsappNumber: "919876543210"
};

// Electronics Catalog Dataset
const PRODUCTS = [
    {
        id: "p1",
        name: "Samsung 55\" Crystal 4K Ultra HD Smart OLED TV",
        category: "tv",
        categoryLabel: "Smart TV & Audio",
        price: 44990,
        originalPrice: 64900,
        discount: "30% OFF",
        badge: "HOT DEAL",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80",
        specs: ["55 Inch 4K UHD", "Tizen Smart OS", "HDR 10+", "20W Dolby Audio", "3x HDMI / 2x USB"],
        description: "Experience hyper-real 4K picture clarity with Samsung's AirSlim design and built-in voice assistants. Guaranteed official 3-year warranty from Siddhi Marketing."
    },
    {
        id: "p2",
        name: "Voltas 1.5 Ton 5 Star Inverter Split AC (Copper Condenser)",
        category: "ac",
        categoryLabel: "ACs & Air Coolers",
        price: 37990,
        originalPrice: 55990,
        discount: "32% OFF",
        badge: "BEST SELLER",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80",
        specs: ["1.5 Ton Split AC", "5 Star Energy Rating", "100% Copper Coil", "4-in-1 Adjustable Cooling", "Anti-Dust Filter"],
        description: "High ambient cooling up to 52°C. Low power consumption with Inverter tech and instant turbo cooling mode. Free installation support available."
    },
    {
        id: "p3",
        name: "Samsung 324L 3 Star Convertible 5-in-1 Double Door Refrigerator",
        category: "fridge",
        categoryLabel: "Refrigerators",
        price: 34490,
        originalPrice: 47990,
        discount: "28% OFF",
        badge: "POPULAR",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80",
        specs: ["324 Litres Capacity", "Double Door Frost Free", "Digital Inverter", "Convertible 5-in-1 Mode", "20 Year Compressor Warranty"],
        description: "Convert freezer to fridge according to your needs. Smart Connect Inverter technology operates automatically on home inverter during power outages."
    },
    {
        id: "p4",
        name: "LG 7.0 Kg 5 Star Front Load Washing Machine with Steam Wash",
        category: "washing",
        categoryLabel: "Washing Machines",
        price: 29990,
        originalPrice: 41990,
        discount: "28% OFF",
        badge: "ZERO DOWN EMI",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80",
        specs: ["7.0 Kg Capacity", "6 Motion Direct Drive", "Inverter Direct Drive", "Steam Hygiene Clean", "1200 RPM Spin"],
        description: "6 Motion Technology moves the wash drum in multiple directions for ultra clean fabric care. Removes 99.9% allergens with steam hygiene wash."
    },
    {
        id: "p5",
        name: "Sony Bravia 43\" Google Smart 4K Ultra HD LED TV",
        category: "tv",
        categoryLabel: "Smart TV & Audio",
        price: 39990,
        originalPrice: 59900,
        discount: "33% OFF",
        badge: "HIGH RATED",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80",
        specs: ["43 Inch 4K HDR", "Google TV OS", "X1 4K Processor", "Dolby Atmos 20W Sound", "Chromecast Built-in"],
        description: "Vibrant colors with Sony Live Colour technology and X1 Processor. Smooth gaming experience with Motionflow XR 100."
    },
    {
        id: "p6",
        name: "HP Pavilion Laptop 15th Gen Intel Core i5 (16GB RAM / 512GB SSD)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 54990,
        originalPrice: 72990,
        discount: "24% OFF",
        badge: "TECH CHOICE",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80",
        specs: ["Intel Core i5 13th Gen", "16GB DDR5 RAM", "512GB NVMe SSD", "15.6\" FHD IPS Display", "Backlit Keyboard"],
        description: "Ultra-fast multitasking notebook for work, gaming, and study. Includes genuine Windows 11 & MS Office 2021 pre-installed."
    },
    {
        id: "p7",
        name: "OnePlus 12 5G Smartphone (12GB RAM, 256GB Storage)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 64999,
        originalPrice: 69999,
        discount: "7% OFF",
        badge: "FLAGSHIP",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
        specs: ["Snapdragon 8 Gen 3", "50MP Hasselblad Camera", "100W SUPERVOOC Charge", "5400 mAh Battery", "2K 120Hz ProXDR Display"],
        description: "Smooth beyond belief. Hasselblad camera system with 4K Dolby Vision recording. Official Indian warranty with Siddhi Marketing invoice."
    },
    {
        id: "p8",
        name: "JBL Cinema SB271 2.1 Channel Wireless Soundbar with Subwoofer",
        category: "tv",
        categoryLabel: "Smart TV & Audio",
        price: 11990,
        originalPrice: 16999,
        discount: "29% OFF",
        badge: "BASS BOOST",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
        specs: ["220W Peak Output", "Wireless Subwoofer", "Dolby Digital Audio", "Bluetooth 5.1 & HDMI ARC", "Extra Deep Bass"],
        description: "Transform your living room into a movie theatre with 220 Watts of powerful Dolby Digital audio and deep wireless bass."
    },
    {
        id: "p9",
        name: "LG 1.5 Ton 5 Star AI Dual Inverter Split AC (6-in-1 Cooling)",
        category: "ac",
        categoryLabel: "ACs & Air Coolers",
        price: 41990,
        originalPrice: 62990,
        discount: "33% OFF",
        badge: "AI SMART",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80",
        specs: ["1.5 Ton AI Inverter", "5 Star Rating", "6-in-1 Convertible", "HD Filter with Anti-Virus", "Ocean Black Protection"],
        description: "AI Dual Inverter automatically senses room temperature and adjusts cooling capacity. Ultra quiet operation and high energy savings."
    },
    {
        id: "p10",
        name: "Whirlpool 240L Triple Door Frost Free Refrigerator",
        category: "fridge",
        categoryLabel: "Refrigerators",
        price: 26990,
        originalPrice: 35990,
        discount: "25% OFF",
        badge: "NO FROST",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80",
        specs: ["240 Litres 3-Door", "Protton World Series", "6th Sense ActiveFresh", "Moisture Retention Tech", "Separate Active Fresh Zone"],
        description: "Unique 3-door design prevents odor mixing between vegetables and freezer items while keeping veggies fresh for up to 2x longer."
    },
    {
        id: "p11",
        name: "Home Appliance Repair & AC Jet Cleaning Service Desk",
        category: "services",
        categoryLabel: "Repair & Services",
        price: 499,
        originalPrice: 999,
        discount: "50% OFF",
        badge: "DOORSTEP",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
        specs: ["Expert Certified Technicians", "Doorstep Visit in 2 Hours", "Original Spare Parts Used", "30-Day Service Warranty"],
        description: "Complete repair service for all brands of ACs, TVs, Refrigerators, and Washing Machines at Gali No. 4 Balaji Mandir Road and nearby areas."
    },
    {
        id: "p12",
        name: "Smart TV Wall Mounting & Fitting Service",
        category: "services",
        categoryLabel: "Repair & Services",
        price: 299,
        originalPrice: 599,
        discount: "50% OFF",
        badge: "FAST FIT",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80",
        specs: ["Heavy Duty Wall Bracket Included", "Professional Drill & Fitting", "Hide Wire Management", "Safety Load Tested"],
        description: "Professional wall installation for 32 Inch to 75 Inch Smart TVs with heavy gauge tiltable wall mounts."
    }
];

// Global State
let cart = [];
let activeCategory = 'all';

// DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupThemeToggle();
    renderProducts(PRODUCTS);
    setupEventListeners();
    updateCartUI();
    setupInquiryForm();
    setupEmiCalculator();
}

// Theme Toggle Functionality (Light / Dark mode)
function setupThemeToggle() {
    const toggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('siddhi_theme') || 'light';
    setTheme(savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const current = htmlEl.getAttribute('data-theme') || 'light';
            const next = current === 'light' ? 'dark' : 'light';
            setTheme(next);
            localStorage.setItem('siddhi_theme', next);
        });
    }

    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.className = 'fa-solid fa-sun';
                if(toggleBtn) toggleBtn.title = "Switch to Light Theme";
            } else {
                themeIcon.className = 'fa-solid fa-moon';
                if(toggleBtn) toggleBtn.title = "Switch to Dark Theme";
            }
        }
    }
}

// Render Products Grid
function renderProducts(items) {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 15px; color: var(--primary-blue);"></i>
                <h3>No electronics found for your search</h3>
                <p>Try searching for TV, AC, Refrigerator, Mobile or clear your filter.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(product => `
        <div class="product-card" data-id="${product.id}">
            <span class="product-badge ${product.badge.includes('HOT') || product.badge.includes('OFFER') ? 'badge-offer' : product.badge.includes('BEST') ? 'badge-best' : 'badge-hot'}">${product.badge}</span>
            
            <div class="product-img-wrapper" onclick="openProductModal('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>

            <div class="product-details">
                <span class="product-cat">${product.categoryLabel}</span>
                <h3 class="product-name" onclick="openProductModal('${product.id}')" style="cursor:pointer;">${product.name}</h3>
                
                <div class="product-specs">
                    ${product.specs.slice(0, 3).map(s => `<span class="spec-chip">${s}</span>`).join('')}
                </div>

                <div class="product-price-row">
                    <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="save-amount">${product.discount}</span>
                </div>

                <div class="product-card-actions">
                    <button class="btn btn-primary btn-block" onclick="addToCart('${product.id}')">
                        <i class="fa-solid fa-cart-plus"></i> Add to Quote
                    </button>
                    <button class="btn-icon-action" onclick="openProductModal('${product.id}')" title="Quick View Specs">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <a href="https://wa.me/${STORE_DATA.whatsappNumber}?text=Hi%20Siddhi%20Marketing,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}%20(Price:%20₹${product.price})." target="_blank" class="btn-icon-action" style="background:#25d366; border-color:#25d366; color:#fff;" title="Inquire on WhatsApp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Category Filter Function
function filterCategory(cat) {
    activeCategory = cat;
    
    // Update active nav button
    document.querySelectorAll('.nav-cat-btn').forEach(btn => {
        if (btn.dataset.category === cat) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    let filtered = PRODUCTS;
    if (cat !== 'all') {
        filtered = PRODUCTS.filter(p => p.category === cat);
    }
    renderProducts(filtered);
}

// Event Listeners Setup
function setupEventListeners() {
    // Category Nav Click
    document.querySelectorAll('.nav-cat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cat = e.currentTarget.dataset.category;
            filterCategory(cat);
        });
    });

    // Search Bar
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    const handleSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            filterCategory(activeCategory);
            return;
        }
        const results = PRODUCTS.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.categoryLabel.toLowerCase().includes(query) ||
            p.specs.some(s => s.toLowerCase().includes(query))
        );
        renderProducts(results);
    };

    if (searchInput) searchInput.addEventListener('keyup', handleSearch);
    if (searchBtn) searchBtn.addEventListener('click', handleSearch);

    // Sorting Dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            let list = [...PRODUCTS];
            if (activeCategory !== 'all') {
                list = list.filter(p => p.category === activeCategory);
            }

            if (val === 'low-high') {
                list.sort((a, b) => a.price - b.price);
            } else if (val === 'high-low') {
                list.sort((a, b) => b.price - a.price);
            } else if (val === 'rating') {
                list.sort((a, b) => b.rating - a.rating);
            }
            renderProducts(list);
        });
    }

    // Visiting Card Modal Triggers
    const openCardBtn = document.getElementById('openVisitingCardBtn');
    const heroCardBtn = document.getElementById('heroVisitingCardBtn');
    const contactCardBtn = document.getElementById('openCardFromContact');
    const floatCardBtn = document.getElementById('floatingVcardBtn');
    const footerCardLink = document.getElementById('footerVisitingCardLink');
    const closeCardModalBtn = document.getElementById('closeVisitingCardModal');
    const vcardModal = document.getElementById('visitingCardModal');

    const openVcard = (e) => {
        if(e) e.preventDefault();
        vcardModal.classList.add('active');
    };
    const closeVcard = () => vcardModal.classList.remove('active');

    if (openCardBtn) openCardBtn.addEventListener('click', openVcard);
    if (heroCardBtn) heroCardBtn.addEventListener('click', openVcard);
    if (contactCardBtn) contactCardBtn.addEventListener('click', openVcard);
    if (floatCardBtn) floatCardBtn.addEventListener('click', openVcard);
    if (footerCardLink) footerCardLink.addEventListener('click', openVcard);
    if (closeCardModalBtn) closeCardModalBtn.addEventListener('click', closeVcard);

    if (vcardModal) {
        vcardModal.addEventListener('click', (e) => {
            if (e.target === vcardModal) closeVcard();
        });
    }

    // Visiting Card Actions: Print & vCard (.vcf)
    const printBtn = document.getElementById('printCardBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    const downloadVcardBtn = document.getElementById('downloadVcardBtn');
    if (downloadVcardBtn) {
        downloadVcardBtn.addEventListener('click', generateVCardDownload);
    }

    // Product Modal Triggers
    const productModal = document.getElementById('productModal');
    const closeProductModalBtn = document.getElementById('closeProductModal');
    if (closeProductModalBtn) {
        closeProductModalBtn.addEventListener('click', () => {
            productModal.classList.remove('active');
        });
    }
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) productModal.classList.remove('active');
        });
    }

    // Cart Drawer Toggle
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartDrawerOverlay');

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => cartOverlay.classList.add('active'));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartOverlay.classList.remove('active'));
    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) cartOverlay.classList.remove('active');
        });
    }

    // WhatsApp Checkout Button
    const waCheckoutBtn = document.getElementById('whatsappCheckoutBtn');
    if (waCheckoutBtn) waCheckoutBtn.addEventListener('click', sendCartToWhatsApp);

    // Clear Cart Button
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) clearCartBtn.addEventListener('click', () => {
        cart = [];
        updateCartUI();
    });
}

// Generate & Download VCard (.vcf) File
function generateVCardDownload() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Siddhi Marketing
ORG:Siddhi Marketing Electronics
TITLE:Showroom & Technical Service Desk
TEL;TYPE=CELL,VOICE:${STORE_DATA.phonePrimary}
TEL;TYPE=WORK,VOICE:${STORE_DATA.phoneSecondary}
EMAIL:${STORE_DATA.email}
ADR;TYPE=WORK:;;${STORE_DATA.address};;;;
NOTE:Authorized Electronics Showroom - Smart TVs, ACs, Refrigerators, Washing Machines & Repair Services.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Siddhi_Marketing_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Product Modal Popup Renderer
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('productModalBody');
    const modal = document.getElementById('productModal');

    modalBody.innerHTML = `
        <div class="product-modal-grid">
            <div>
                <img src="${product.image}" alt="${product.name}" class="modal-prod-img">
            </div>
            <div>
                <span class="product-cat">${product.categoryLabel}</span>
                <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 10px; color: var(--heading-color);">${product.name}</h2>
                <div style="color: var(--accent-gold); margin-bottom: 12px; font-size: 0.9rem;">
                    <i class="fa-solid fa-star"></i> ${product.rating} / 5.0 (Customer Rating)
                </div>
                <div class="product-price-row">
                    <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="save-amount">${product.discount}</span>
                </div>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">${product.description}</p>
                
                <h4 style="font-size: 0.9rem; margin-bottom: 8px; color: var(--primary-blue);">Key Specifications:</h4>
                <ul style="list-style: disc; margin-left: 20px; font-size: 0.85rem; color: var(--text-main); margin-bottom: 25px;">
                    ${product.specs.map(s => `<li>${s}</li>`).join('')}
                </ul>

                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="addToCart('${product.id}'); document.getElementById('productModal').classList.remove('active');">
                        <i class="fa-solid fa-cart-plus"></i> Add to Quote Cart
                    </button>
                    <a href="https://wa.me/${STORE_DATA.whatsappNumber}?text=Hi%20Siddhi%20Marketing,%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}." target="_blank" class="btn btn-whatsapp">
                        <i class="fa-brands fa-whatsapp"></i> Buy on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// Cart Logic
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    document.getElementById('cartDrawerOverlay').classList.add('active');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const container = document.getElementById('cartItemsContainer');
    const totalPriceEl = document.getElementById('cartTotalPrice');

    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (badge) badge.textContent = totalCount;
    if (totalPriceEl) totalPriceEl.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 10px; color: var(--text-muted);">
                <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; color: var(--primary-blue); margin-bottom: 10px;"></i>
                <p>Your quote cart is empty.</p>
                <p style="font-size: 0.8rem;">Add products from catalog to get direct price quotes!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Qty: ${item.qty} × ₹${item.price.toLocaleString('en-IN')}</div>
            </div>
            <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Send Cart Summary to WhatsApp
function sendCartToWhatsApp() {
    if (cart.length === 0) {
        alert("Your quote cart is empty! Please add products first.");
        return;
    }

    let text = `*New Order Inquiry - Siddhi Marketing*\n`;
    text += `*Store Location:* ${STORE_DATA.address}\n\n`;
    text += `*Selected Products:*\n`;

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        text += `${index + 1}. ${item.name}\n   Qty: ${item.qty} | Price: ₹${itemTotal.toLocaleString('en-IN')}\n`;
    });

    text += `\n*Estimated Total Quote:* ₹${total.toLocaleString('en-IN')}\n`;
    text += `\nPlease confirm availability and delivery timeframe to Gali No. 4, Balaji Mandir Road. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${STORE_DATA.whatsappNumber}?text=${encoded}`, '_blank');
}

// Contact Inquiry Form Handler
function setupInquiryForm() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('inquiryName').value.trim();
        const phone = document.getElementById('inquiryPhone').value.trim();
        const product = document.getElementById('inquiryProduct').value;
        const message = document.getElementById('inquiryMessage').value.trim();

        let text = `*Direct Inquiry for Siddhi Marketing*\n\n`;
        text += `*Customer Name:* ${name}\n`;
        text += `*Mobile:* ${phone}\n`;
        text += `*Interested In:* ${product}\n`;
        if (message) text += `*Message:* ${message}\n`;
        text += `\n*Address Reference:* Gali No. 4, Balaji Mandir Road`;

        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/${STORE_DATA.whatsappNumber}?text=${encoded}`, '_blank');
    });
}

// EMI Calculator Setup
function setupEmiCalculator() {
    const openEmiBtn = document.getElementById('openEmiModalBtn');
    const closeEmiBtn = document.getElementById('closeEmiModal');
    const emiModal = document.getElementById('emiModal');
    const amountInput = document.getElementById('emiAmount');
    const monthsSelect = document.getElementById('emiMonths');
    const resultEl = document.getElementById('emiMonthlyResult');
    const downPayEl = document.getElementById('emiDownPayment');

    if (openEmiBtn && emiModal) {
        openEmiBtn.addEventListener('click', () => emiModal.classList.add('active'));
    }
    if (closeEmiBtn && emiModal) {
        closeEmiBtn.addEventListener('click', () => emiModal.classList.remove('active'));
    }
    if (emiModal) {
        emiModal.addEventListener('click', (e) => {
            if (e.target === emiModal) emiModal.classList.remove('active');
        });
    }

    const calculateEMI = () => {
        const amt = parseFloat(amountInput.value) || 0;
        const months = parseInt(monthsSelect.value) || 6;

        let monthly = Math.round(amt / months);
        if (resultEl) resultEl.textContent = `₹${monthly.toLocaleString('en-IN')} / mo`;
        if (downPayEl) downPayEl.textContent = `₹0 (Zero Down Payment Special)`;
    };

    if (amountInput) amountInput.addEventListener('input', calculateEMI);
    if (monthsSelect) monthsSelect.addEventListener('change', calculateEMI);
}
