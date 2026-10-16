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
    },
    {
        id: "p13",
        name: "Apple iPhone 16 (128GB, Dynamic Island)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 69900,
        originalPrice: 89900,
        discount: "₹20,000 OFF",
        badge: "FESTIVE DEAL",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
        specs: ["A18 Chip & Apple Intelligence", "48MP Fusion Camera + Control", "Super Retina XDR OLED", "USB-C MagSafe Fast Charging", "128GB Storage"],
        description: "Experience Apple's latest generation flagship with Camera Control button and Apple Intelligence. Verified authorized showroom rate from Mobile Station."
    },
    {
        id: "p14",
        name: "Apple iPhone 17 Pro Max (256GB Titanium)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 149900,
        originalPrice: 149900,
        discount: "SHOWROOM SPECIAL",
        badge: "PRO MAX",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop&q=80",
        specs: ["6.9\" Super Retina XDR 120Hz", "Grade 5 Titanium & A19 Pro", "48MP Pro Triple Camera", "Periscope Telephoto 5x Zoom", "256GB Fast Storage"],
        description: "The pinnacle of smartphone innovation. Grade 5 titanium chassis, ultra-fast A19 Pro silicon, and industry-leading cinematic 4K Dolby Vision video."
    },
    {
        id: "p15",
        name: "Nothing Phone 3 (5G) (12GB RAM, 256GB)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 79999,
        originalPrice: 89999,
        discount: "₹10,000 OFF",
        badge: "TRUE FLAGSHIP",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
        specs: ["Snapdragon 8s Flagship Chip", "2026 Glyph Matrix LED Interface", "50MP Dual OIS Optics", "12GB RAM + 256GB Storage", "120Hz LTPO OLED Display"],
        description: "Nothing's flagship powerhouse with iconic transparent design and responsive Glyph Matrix lights. Complete brand warranty with authorized dealer invoice."
    },
    {
        id: "p16",
        name: "Nothing CMF Phone 1 (6GB RAM, 128GB)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 15999,
        originalPrice: 19999,
        discount: "20% OFF",
        badge: "MODULAR ICON",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
        specs: ["Interchangeable Back Case", "MediaTek Dimensity 7300 5G", "50MP Sony Ultra-Clear Cam", "120Hz Super AMOLED Screen", "5000 mAh 33W Fast Charge"],
        description: "Unique modular back cover with accessory attachment point. Vibrant 120Hz AMOLED display and powerful 5G MediaTek processing."
    },
    {
        id: "p17",
        name: "Xiaomi Redmi Note 15 Pro+ 5G (12GB/256GB)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 41999,
        originalPrice: 47999,
        discount: "₹6,000 OFF",
        badge: "120W HYPER",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&auto=format&fit=crop&q=80",
        specs: ["120W HyperCharge (19 Mins)", "200MP OIS Camera System", "1.5K 120Hz Curved AMOLED", "12GB RAM + 256GB Storage", "IP68 Water Resistance"],
        description: "Unmatched performance with 120W blazing charge and 200MP detail. Includes official 1-year brand warranty and free tempered glass application."
    },
    {
        id: "p18",
        name: "POCO M8 5G (8GB RAM, 256GB Storage)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 28999,
        originalPrice: 33999,
        discount: "15% OFF",
        badge: "2026 FLAGSHIP",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
        specs: ["2026 M8 Turbo 5G Chipset", "120Hz Fluid AMOLED Display", "64MP OIS Dual Camera", "8GB RAM + 256GB Storage", "67W Fast Turbo Charger"],
        description: "2026 POCO Flagship speed monster with huge storage and vibrant high refresh AMOLED screen. October festive scheme rate."
    },
    {
        id: "p19",
        name: "POCO C75 5G (4GB RAM, 128GB Storage)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 11499,
        originalPrice: 14499,
        discount: "21% OFF",
        badge: "5G POPULAR",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=600&auto=format&fit=crop&q=80",
        specs: ["Fast 5G Dual SIM", "50MP AI Dual Camera", "6.88\" 120Hz Eye-Care Screen", "4GB RAM + 128GB Storage", "5160 mAh Massive Battery"],
        description: "Affordable 5G speed with large immersive display and all-day battery life. Ideal budget smartphone with reliable service support."
    },
    {
        id: "p20",
        name: "Lava Blaze Dragon 5G (6GB RAM, 128GB)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 15499,
        originalPrice: 18499,
        discount: "16% OFF",
        badge: "DRAGON 5G",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80",
        specs: ["Blaze Fast 5G Speed", "Clean Bloatware-Free Android", "50MP AI Clear Night Camera", "6GB RAM + 128GB Storage", "Premium Glass Back Finish"],
        description: "Proudly Indian crafted with zero bloatware and clean pure Android experience. High quality glass finish and smooth performance."
    },
    {
        id: "p21",
        name: "itel Color Pro 5G (6GB RAM, 128GB)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 9999,
        originalPrice: 12499,
        discount: "20% OFF",
        badge: "COLOR PRO 5G",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80",
        specs: ["Color-Changing Sun-Sensitive Back", "Fast 5G Dual Standby", "50MP Ultra Clear Camera", "6GB RAM + 128GB Storage", "18W Fast USB-C Charging"],
        description: "Unique chameleon color-changing back panel under sunlight. Most affordable 6GB+128GB 5G smartphone in town."
    },
    {
        id: "p22",
        name: "Apple 13\" MacBook Air M5 (16GB RAM, 512GB SSD)",
        category: "gadgets",
        categoryLabel: "Mobiles & Laptops",
        price: 149900,
        originalPrice: 149900,
        discount: "M5 SILICON",
        badge: "M5 AIR",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
        specs: ["Apple M5 Silicon Next-Gen", "16GB Unified RAM Memory", "512GB High-Speed SSD", "13.6\" Liquid Retina Display", "18-Hour Battery Life"],
        description: "Powerhouse efficiency in an impossibly thin fanless design. Official Indian billing with Apple India warranty."
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
    setupNavigation();
    setupEntranceAnimations();
    renderProducts(PRODUCTS);
    setupEventListeners();
    updateCartUI();
    setupInquiryForm();
    setupEmiCalculator();
    setupGoogleReviews();
    initPricingSection();
}

// Vesper-Inspired Entrance Animations & Fallback
function setupEntranceAnimations() {
    const appears = document.querySelectorAll('.appear');
    appears.forEach(el => {
        el.addEventListener('animationend', () => {
            el.classList.add('is-in');
        }, { once: true });
    });

    // Fallback check after two rAFs so elements are never invisible if animations don't trigger
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            let anyRunning = false;
            appears.forEach(el => {
                if (typeof el.getAnimations === 'function') {
                    const anims = el.getAnimations();
                    anims.forEach(a => {
                        if (a.playState === 'running' || a.playState === 'finished') {
                            anyRunning = true;
                        }
                    });
                }
            });
            if (!anyRunning) {
                appears.forEach(el => el.classList.add('is-in'));
            }
        });
    });
}

// Navigation Tabs & Mobile Menu Drawer Engine
function setupNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    const toggleMobileMenu = (open) => {
        if (!mobileNavDrawer || !mobileNavOverlay) return;
        if (open) {
            mobileNavDrawer.classList.add('active');
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileNavDrawer.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
    }
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => toggleMobileMenu(false));
    }
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', () => toggleMobileMenu(false));
    }

    // Smooth Scroll & Active Indicator
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetEl = targetId === '#' || targetId === '#mainHeader' 
                    ? document.body 
                    : document.querySelector(targetId);
                
                if (targetEl) {
                    e.preventDefault();
                    toggleMobileMenu(false);
                    targetEl.scrollIntoView({ behavior: 'smooth' });

                    // Set active link
                    const navKey = link.getAttribute('data-nav');
                    document.querySelectorAll(`.nav-link, .mobile-nav-link`).forEach(l => {
                        if (l.getAttribute('data-nav') === navKey) {
                            l.classList.add('active');
                        } else {
                            l.classList.remove('active');
                        }
                    });
                }
            }
        });
    });

    // ScrollSpy to highlight active tab as user scrolls
    const sections = [
        { id: 'mainHeader', nav: 'home' },
        { id: 'aboutSection', nav: 'about' },
        { id: 'productsSection', nav: 'products' },
        { id: 'pricingSection', nav: 'pricing' },
        { id: 'servicesSection', nav: 'services' },
        { id: 'googleReviewsSection', nav: 'reviews' },
        { id: 'contactSection', nav: 'contact' }
    ];

    window.addEventListener('scroll', () => {
        let currentNav = 'home';
        const scrollPos = window.scrollY + 220;

        sections.forEach(sec => {
            const el = document.getElementById(sec.id);
            if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentNav = sec.nav;
                }
            }
        });

        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            if (link.getAttribute('data-nav') === currentNav) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, { passive: true });
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

// Toast Notification System
function showToast(message, icon = 'fa-circle-check', actionLabel = null, actionCallback = null) {
    let container = document.getElementById('siddhiToastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'siddhiToastContainer';
        container.className = 'siddhi-toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'siddhi-toast';
    toast.innerHTML = `
        <i class="fa-solid ${icon} siddhi-toast-icon"></i>
        <span>${message}</span>
        ${actionLabel ? `<button class="siddhi-toast-action">${actionLabel}</button>` : ''}
    `;

    if (actionLabel && actionCallback) {
        const actionBtn = toast.querySelector('.siddhi-toast-action');
        if (actionBtn) {
            actionBtn.addEventListener('click', () => {
                actionCallback();
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 350);
            });
        }
    }

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 350);
    }, 3800);
}

// Event Listeners Setup
function setupEventListeners() {
    // Category Nav Click
    document.querySelectorAll('.nav-cat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cat = e.currentTarget.dataset.category;
            if (cat) {
                filterCategory(cat);
                const prodSec = document.getElementById('productsSection');
                if (prodSec) {
                    const headerOffset = 80;
                    const pos = prodSec.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: pos, behavior: 'smooth' });
                }
            }
        });
    });

    // Search Bar
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    const handleSearch = () => {
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
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
        const prodSec = document.getElementById('productsSection');
        if (prodSec) {
            const headerOffset = 80;
            const pos = prodSec.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    };

    if (searchInput) searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
        else handleSearch();
    });
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
        if (vcardModal) vcardModal.classList.add('active');
    };
    const closeVcard = () => {
        if (vcardModal) vcardModal.classList.remove('active');
    };

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
            if (productModal) productModal.classList.remove('active');
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

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => {
        if (cartOverlay) cartOverlay.classList.add('active');
    });
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => {
        if (cartOverlay) cartOverlay.classList.remove('active');
    });
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
        showToast('Cart cleared', 'fa-trash');
    });

    // Hero Stat Items: Interactive Click & Smooth Scroll
    const heroStats = document.querySelectorAll('.hero-stat');
    if (heroStats.length >= 3) {
        heroStats[0].title = "Click to view customer Google Reviews";
        heroStats[0].addEventListener('click', () => {
            const el = document.getElementById('googleReviewsSection');
            if (el) {
                const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });

        heroStats[1].title = "Click to explore Wholesale Electronics Deals";
        heroStats[1].addEventListener('click', () => {
            const el = document.getElementById('productsSection');
            if (el) {
                const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });

        heroStats[2].title = "Click to view Siddhi Marketing Story & Warranty Details";
        heroStats[2].addEventListener('click', () => {
            const el = document.getElementById('aboutSection');
            if (el) {
                const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    }

    // Hero Feature Glass Pills: Interactive Actions
    const featurePills = document.querySelectorAll('.glass-feature-pill');
    if (featurePills.length >= 4) {
        featurePills[0].title = "Click for Doorstep Delivery & Showroom Location";
        featurePills[0].addEventListener('click', () => {
            const el = document.getElementById('contactSection');
            if (el) {
                const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });

        featurePills[1].title = "Click to Calculate Easy 0% EMI";
        featurePills[1].addEventListener('click', () => {
            const modal = document.getElementById('emiModal');
            if (modal) modal.classList.add('active');
        });

        featurePills[2].title = "Click for Authorized Brand Warranty Details";
        featurePills[2].addEventListener('click', () => {
            const el = document.getElementById('aboutSection');
            if (el) {
                const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });

        featurePills[3].title = "Click for After-Sales Support & Service Desk";
        featurePills[3].addEventListener('click', () => {
            const el = document.getElementById('servicesSection');
            if (el) {
                const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    }

    // Brand Marquee Tags: Click to filter & scroll
    document.querySelectorAll('.brand-tag').forEach(tag => {
        const brandName = tag.textContent.trim();
        tag.title = `Click to view ${brandName} products`;
        tag.addEventListener('click', () => {
            const query = brandName.toLowerCase();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = brandName;
            const results = PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.categoryLabel.toLowerCase().includes(query)
            );
            renderProducts(results.length > 0 ? results : PRODUCTS);
            const prodSec = document.getElementById('productsSection');
            if (prodSec) {
                const pos = prodSec.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
            showToast(`Filtered products for ${brandName}`, 'fa-filter');
        });
    });

    // Universal Smooth Scrolling for all anchor links starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    // Close mobile drawer if active
                    const drawer = document.getElementById('mobileNavDrawer');
                    const overlay = document.getElementById('mobileNavOverlay');
                    if (drawer && overlay) {
                        drawer.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    const headerOffset = 80;
                    const pos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: pos, behavior: 'smooth' });
                }
            }
        });
    });

    // Close all modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active, .cart-drawer-overlay.active, .mobile-nav-drawer.active').forEach(el => {
                el.classList.remove('active');
            });
            const overlay = document.getElementById('mobileNavOverlay');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
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
    showToast("Contact card saved! Open the downloaded .vcf file to add to contacts.", "fa-address-book");
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
                
                <h4 style="font-size: 0.9rem; margin-bottom: 8px; color: var(--primary-red);">Key Specifications:</h4>
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
    let product = PRODUCTS.find(p => p.id === productId);
    
    // Support adding items directly from OFFICIAL_PRICE_LIST_2026 (Mobile Station rate sheets)
    if (!product && typeof OFFICIAL_PRICE_LIST_2026 !== 'undefined') {
        const rateItem = OFFICIAL_PRICE_LIST_2026.find(i => i.id === productId);
        if (rateItem) {
            product = {
                id: rateItem.id,
                name: `${rateItem.model} (${rateItem.specs})`,
                category: rateItem.category || 'gadgets',
                categoryLabel: rateItem.brand,
                price: rateItem.mop,
                originalPrice: rateItem.mrp || rateItem.mop,
                discount: rateItem.mrp > rateItem.mop ? `Save ₹${(rateItem.mrp - rateItem.mop).toLocaleString('en-IN')}` : 'Festive Rate',
                badge: rateItem.badge || 'FESTIVE',
                image: getPricingDeviceImage(rateItem),
                specs: [rateItem.specs, `Scheme: ${rateItem.schemePeriod}`],
                description: `${rateItem.model} - ${rateItem.specs}. Verified October 2026 Festive Showroom Rate Sheet.`
            };
        }
    }

    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`${product.name.slice(0, 30)}... added to quote cart!`, 'fa-cart-plus', 'View Cart', () => {
        const overlay = document.getElementById('cartDrawerOverlay');
        if (overlay) overlay.classList.add('active');
    });
}

function removeFromCart(productId) {
    const item = cart.find(i => i.id === productId);
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    if (item) {
        showToast(`Item removed from quote cart`, 'fa-trash');
    }
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
        showToast(`Item removed from cart`, 'fa-trash');
    }
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
                <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; color: var(--primary-red); margin-bottom: 10px;"></i>
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
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} each</div>
                <div class="cart-qty-ctrls">
                    <button class="cart-qty-btn" onclick="changeQty('${item.id}', -1)" title="Decrease Quantity"><i class="fa-solid fa-minus"></i></button>
                    <span class="cart-qty-val">${item.qty}</span>
                    <button class="cart-qty-btn" onclick="changeQty('${item.id}', 1)" title="Increase Quantity"><i class="fa-solid fa-plus"></i></button>
                    <span style="font-size:0.78rem; color:var(--text-muted); margin-left:6px;">= ₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                </div>
            </div>
            <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove Item">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Send Cart Summary to WhatsApp
function sendCartToWhatsApp() {
    if (cart.length === 0) {
        showToast("Your quote cart is empty! Please add products first.", "fa-triangle-exclamation");
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
    showToast("Opening WhatsApp with your order quote...", "fa-brands fa-whatsapp");
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
        showToast("Sending inquiry on WhatsApp...", "fa-brands fa-whatsapp");
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
    const emiWaBtn = document.querySelector('#emiModal .btn-whatsapp');

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

        if (emiWaBtn) {
            const msg = `Hi Siddhi Marketing, I want to apply for Easy 0% EMI financing for ₹${amt.toLocaleString('en-IN')} for ${months} Months (Estimated EMI: ₹${monthly.toLocaleString('en-IN')}/mo). Please guide me on documentation required.`;
            emiWaBtn.href = `https://wa.me/${STORE_DATA.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        }
    };

    if (amountInput) amountInput.addEventListener('input', calculateEMI);
    if (monthsSelect) monthsSelect.addEventListener('change', calculateEMI);
    calculateEMI();
}

/* ==========================================================================
   GOOGLE REVIEWS DATASET & INTERACTIVE ENGINE
   Tailored specifically for Siddhi Marketing (Electronics & Appliances Showroom)
   ========================================================================== */

let REVIEWS_DATA = [
    {
        id: "rev-1",
        name: "Rameshwar Dayal Verma",
        initial: "R",
        avatarBg: "#1a73e8", // Google Blue
        isGuide: true,
        guideLevel: "Local Guide · 38 reviews",
        rating: 5,
        timeAgo: "2 days ago",
        category: "tv",
        product: "Samsung 55\" Crystal 4K Smart TV",
        text: "Bought Samsung 55-inch Crystal 4K Smart TV from Siddhi Marketing at Gali No. 4, Balaji Mandir Road. Got the best festive discount compared to online marketplace rates. They delivered safely within 3 hours and the installation technician did neat wall mounting without mess. Highly recommended showroom for genuine electronics!",
        ownerReply: {
            text: "Thank you so much Rameshwar ji for your trust! Enjoy the crystal 4K picture and sound with your family. For any query or service, our showroom desk is always at your service!",
            timeAgo: "1 day ago"
        },
        helpfulCount: 18,
        liked: false
    },
    {
        id: "rev-2",
        name: "Pooja Agarwal",
        initial: "P",
        avatarBg: "#e91e63", // Rose
        isGuide: true,
        guideLevel: "Local Guide · 19 reviews",
        rating: 5,
        timeAgo: "1 week ago",
        category: "ac",
        product: "Voltas 1.5 Ton 5 Star Inverter Split AC",
        text: "Purchased a Voltas 1.5 Ton 5-Star Inverter AC for our master bedroom. The store team patiently calculated the power consumption savings for us. The best highlight was the Zero Down Payment EMI approval in under 10 minutes via Bajaj Finserv. Excellent customer treatment!",
        ownerReply: {
            text: "Thank you Pooja ji! Glad our fast 0% EMI process made your AC purchase seamless. Wishing you and your family cool comfort this season!",
            timeAgo: "6 days ago"
        },
        helpfulCount: 14,
        liked: false
    },
    {
        id: "rev-3",
        name: "Sunil K. Prajapati",
        initial: "S",
        avatarBg: "#0f9d58", // Google Green
        isGuide: false,
        guideLevel: "Verified Buyer · 8 reviews",
        rating: 5,
        timeAgo: "2 weeks ago",
        category: "washing",
        product: "Whirlpool 7.5 Kg Fully-Auto Washing Machine",
        text: "Got a Whirlpool 7.5 Kg washing machine and a microwave oven from Siddhi Marketing. Received 100% authentic brand warranty cards, stamp and demo installation next morning. Trustworthy store with genuine wholesale pricing.",
        ownerReply: {
            text: "Thanks a lot Sunil ji! Authentic warranty and speedy after-sales demo are our core promises.",
            timeAgo: "12 days ago"
        },
        helpfulCount: 9,
        liked: false
    },
    {
        id: "rev-4",
        name: "Dr. Manish Choudhary",
        initial: "M",
        avatarBg: "#9c27b0", // Purple
        isGuide: true,
        guideLevel: "Local Guide · 42 reviews",
        rating: 5,
        timeAgo: "3 weeks ago",
        category: "fridge",
        product: "Samsung 324L Convertible Double Door Refrigerator",
        text: "Best showroom for appliances. Upgraded my old refrigerator to Samsung 324L Convertible Double Door under their exchange scheme. They offered a very fair exchange appraisal for the old unit and delivered without a single scratch. 5 stars for honest dealing!",
        ownerReply: {
            text: "Thank you Dr. Manish ji! We are delighted that you liked our appliance exchange program. Always happy to assist!",
            timeAgo: "3 weeks ago"
        },
        helpfulCount: 22,
        liked: false
    },
    {
        id: "rev-5",
        name: "Neha Sharma",
        initial: "N",
        avatarBg: "#d97706", // Google Amber
        isGuide: false,
        guideLevel: "Verified Student Buyer",
        rating: 5,
        timeAgo: "1 month ago",
        category: "gadgets",
        product: "HP 15s Ryzen 5 Laptop & Accessories",
        text: "Bought an HP 15s Ryzen 5 Laptop for college projects and brother's study. The owner personally guided me through processor and SSD differences within my budget. Plus they gifted a laptop backpack and wireless mouse! Great experience.",
        ownerReply: {
            text: "All the best for your studies and career Neha ji! Let us know whenever you need any software or hardware guidance.",
            timeAgo: "1 month ago"
        },
        helpfulCount: 11,
        liked: false
    },
    {
        id: "rev-6",
        name: "Vikram Singh Rathore",
        initial: "V",
        avatarBg: "#ea4335", // Google Red
        isGuide: true,
        guideLevel: "Local Guide · 51 reviews",
        rating: 5,
        timeAgo: "1 month ago",
        category: "tv",
        product: "Sony Bravia 65\" 4K Google TV",
        text: "Sony Bravia 65-inch 4K purchase was top notch. Cinematic picture quality and punchy Dolby Atmos. The staff at Gali No. 4, Balaji Mandir Road is respectful, well-versed with specs, and doesn't rush you. If you want branded electronics with complete peace of mind, visit Siddhi Marketing.",
        ownerReply: {
            text: "Warm regards Vikram ji! Sony Bravia paired with high-definition audio is truly theater-grade. Thank you for your kind recommendation!",
            timeAgo: "1 month ago"
        },
        helpfulCount: 27,
        liked: false
    },
    {
        id: "rev-7",
        name: "Rajesh & Suman Gupta",
        initial: "R",
        avatarBg: "#0284c7", // Cyan/Blue
        isGuide: false,
        guideLevel: "Verified Local Customer",
        rating: 5,
        timeAgo: "2 months ago",
        category: "service",
        product: "Doorstep AC Servicing & Gas Refilling",
        text: "Our Split AC had a sudden gas leakage during extreme peak summer heat. Siddhi Marketing service desk sent an experienced technician within 2 hours. Repaired quickly at very transparent rates without inflated charges. Superb service team!",
        ownerReply: {
            text: "Thank you Rajesh ji! Our quick response repair desk is dedicated to keeping your home appliances running smoothly all year.",
            timeAgo: "2 months ago"
        },
        helpfulCount: 16,
        liked: false
    },
    {
        id: "rev-8",
        name: "Amit Bansal",
        initial: "A",
        avatarBg: "#00897b", // Teal
        isGuide: true,
        guideLevel: "Local Guide · 27 reviews",
        rating: 5,
        timeAgo: "2 months ago",
        category: "fridge",
        product: "LG 260L Smart Inverter Frost Free Refrigerator",
        text: "Purchased LG 260L Smart Inverter Frost Free Refrigerator. Very cordial behavior of store owners and instant same-day delivery. They also explained stabilizer-free operation and energy star ratings in detail. Best electronics shop near Balaji Mandir Road.",
        ownerReply: {
            text: "Thank you Amit ji! We appreciate your patronage and look forward to serving you again!",
            timeAgo: "2 months ago"
        },
        helpfulCount: 13,
        liked: false
    }
];

let activeReviewFilter = 'all';

// Main Google Reviews Initializer
function setupGoogleReviews() {
    renderReviews('all');
    setupReviewFilterChips();
    setupReviewsSlider();
    setupWriteReviewModal();
}

// Render Review Cards
function renderReviews(filter = 'all') {
    const track = document.getElementById('reviewsTrack');
    if (!track) return;

    let filtered = REVIEWS_DATA;
    if (filter !== 'all') {
        filtered = REVIEWS_DATA.filter(r => r.category === filter);
    }

    if (filtered.length === 0) {
        track.innerHTML = `
            <div style="padding: 40px 20px; text-align: center; color: var(--text-muted); width: 100%;">
                <i class="fa-solid fa-comments" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--primary-blue);"></i>
                <p>No reviews found under this category.</p>
            </div>
        `;
        renderReviewDots(0);
        return;
    }

    track.innerHTML = filtered.map(review => {
        const starIcons = Array(review.rating).fill('<i class="fa-solid fa-star"></i>').join('');
        
        let guideBadge = review.isGuide 
            ? `<span class="guide-pill"><i class="fa-solid fa-shield-halved"></i> ${review.guideLevel}</span>`
            : `<span class="guide-pill"><i class="fa-solid fa-circle-check"></i> ${review.guideLevel}</span>`;

        let ownerReplyHtml = '';
        if (review.ownerReply) {
            ownerReplyHtml = `
                <div class="owner-reply-box">
                    <div class="owner-reply-header">
                        <i class="fa-solid fa-reply"></i>
                        <span>Response from Siddhi Marketing</span>
                        <span class="owner-reply-time">${review.ownerReply.timeAgo}</span>
                    </div>
                    <div class="owner-reply-text">${review.ownerReply.text}</div>
                </div>
            `;
        }

        return `
            <div class="review-card" data-review-id="${review.id}">
                <div>
                    <div class="review-card-header">
                        <div class="reviewer-profile">
                            <div class="reviewer-avatar" style="background-color: ${review.avatarBg};">
                                ${review.initial}
                            </div>
                            <div class="reviewer-meta">
                                <h4>
                                    ${review.name}
                                    <i class="fa-solid fa-circle-check verified-icon" title="Google Verified Profile"></i>
                                </h4>
                                ${guideBadge}
                            </div>
                        </div>
                        <svg class="google-mini-logo" viewBox="0 0 24 24" width="18" height="18">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                        </svg>
                    </div>

                    <div class="card-rating-row">
                        <div class="card-stars">${starIcons}</div>
                        <span class="review-time">${review.timeAgo}</span>
                    </div>

                    ${review.product ? `<span class="review-product-pill"><i class="fa-solid fa-tag"></i> Purchased: ${review.product}</span>` : ''}

                    <p class="review-body-text">“${review.text}”</p>

                    ${ownerReplyHtml}
                </div>

                <div class="review-card-footer">
                    <button class="btn-helpful ${review.liked ? 'liked' : ''}" onclick="toggleHelpful('${review.id}')" title="Helpful review">
                        <i class="fa-regular fa-thumbs-up"></i> Helpful (${review.helpfulCount})
                    </button>
                    <span class="review-verified-badge"><i class="fa-solid fa-shield-check"></i> Verified Purchase</span>
                </div>
            </div>
        `;
    }).join('');

    renderReviewDots(filtered.length);
}

// Render Pagination Dots
function renderReviewDots(count) {
    const dotsContainer = document.getElementById('reviewsDots');
    if (!dotsContainer) return;
    
    if (count <= 1) {
        dotsContainer.innerHTML = '';
        return;
    }

    const dotCount = Math.min(count, 6);
    let html = '';
    for (let i = 0; i < dotCount; i++) {
        html += `<span class="review-dot ${i === 0 ? 'active' : ''}" onclick="scrollToReviewCard(${i})"></span>`;
    }
    dotsContainer.innerHTML = html;
}

// Scroll to specific index
function scrollToReviewCard(index) {
    const container = document.getElementById('reviewsTrackContainer');
    if (!container) return;
    const cardWidth = 380 + 24; // width + gap
    container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
    });
    updateActiveDot(index);
}

function updateActiveDot(index) {
    const dots = document.querySelectorAll('.review-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
}

// Setup Slider Buttons
function setupReviewsSlider() {
    const container = document.getElementById('reviewsTrackContainer');
    const prevBtn = document.getElementById('reviewsPrevBtn');
    const nextBtn = document.getElementById('reviewsNextBtn');

    if (!container) return;

    const scrollAmount = 404; // 380 card width + 24 gap

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // Update active dot on scroll
    container.addEventListener('scroll', () => {
        const scrollLeft = container.scrollLeft;
        const index = Math.round(scrollLeft / scrollAmount);
        updateActiveDot(index);
    });
}

// Setup Review Filter Chips
function setupReviewFilterChips() {
    const chips = document.querySelectorAll('.review-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeReviewFilter = chip.dataset.filter;
            renderReviews(activeReviewFilter);

            // Reset container scroll to left
            const container = document.getElementById('reviewsTrackContainer');
            if (container) container.scrollTo({ left: 0, behavior: 'smooth' });
        });
    });
}

// Toggle Review Helpful Count
function toggleHelpful(reviewId) {
    const review = REVIEWS_DATA.find(r => r.id === reviewId);
    if (!review) return;

    if (review.liked) {
        review.liked = false;
        review.helpfulCount -= 1;
    } else {
        review.liked = true;
        review.helpfulCount += 1;
    }

    renderReviews(activeReviewFilter);
}

// Setup Write Review Modal & Interactive Rating
function setupWriteReviewModal() {
    const openBtn = document.getElementById('openWriteReviewBtn');
    const closeBtn = document.getElementById('closeReviewModal');
    const modal = document.getElementById('writeReviewModal');
    const form = document.getElementById('writeReviewForm');
    const starPicker = document.getElementById('starRatingPicker');
    const starFeedback = document.getElementById('starScoreFeedback');

    let selectedRating = 5;

    const ratingDescriptions = {
        1: "1.0 / 5.0 - Poor Experience",
        2: "2.0 / 5.0 - Below Average",
        3: "3.0 / 5.0 - Average Experience",
        4: "4.0 / 5.0 - Very Good Experience",
        5: "5.0 / 5.0 - Excellent Experience"
    };

    if (openBtn && modal) {
        openBtn.addEventListener('click', () => modal.classList.add('active'));
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    // Star Picker Interaction
    if (starPicker) {
        const stars = starPicker.querySelectorAll('i');

        const updateStars = (val) => {
            stars.forEach(star => {
                const sVal = parseInt(star.dataset.val);
                star.classList.toggle('active', sVal <= val);
            });
            if (starFeedback) {
                starFeedback.textContent = ratingDescriptions[val] || `${val}.0 / 5.0`;
            }
        };

        stars.forEach(star => {
            star.addEventListener('mouseenter', () => {
                const hoverVal = parseInt(star.dataset.val);
                stars.forEach(s => {
                    s.classList.toggle('hovered', parseInt(s.dataset.val) <= hoverVal);
                });
            });

            star.addEventListener('mouseleave', () => {
                stars.forEach(s => s.classList.remove('hovered'));
            });

            star.addEventListener('click', () => {
                selectedRating = parseInt(star.dataset.val);
                updateStars(selectedRating);
            });
        });
    }

    // Form Submit Handler
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reviewAuthorName').value.trim();
            const category = document.getElementById('reviewProductCategory').value;
            const item = document.getElementById('reviewItemName').value.trim();
            const comment = document.getElementById('reviewCommentText').value.trim();

            if (!name || !comment) return;

            const avatarColors = ["#1a73e8", "#0f9d58", "#e91e63", "#9c27b0", "#ea4335", "#0284c7"];
            const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

            // Create new review object
            const newReview = {
                id: "rev-user-" + Date.now(),
                name: name,
                initial: name.charAt(0).toUpperCase(),
                avatarBg: randomColor,
                isGuide: true,
                guideLevel: "Verified Local Customer",
                rating: selectedRating,
                timeAgo: "Just now",
                category: category,
                product: item || "Electronics & Appliances",
                text: comment,
                ownerReply: {
                    text: `Thank you so much ${name.split(' ')[0]} ji for choosing Siddhi Marketing! We value your review and are always here for your electronics service needs.`,
                    timeAgo: "Just now"
                },
                helpfulCount: 1,
                liked: true
            };

            // Prepend review to array
            REVIEWS_DATA.unshift(newReview);

            // Re-render and switch to 'all' or that category
            activeReviewFilter = 'all';
            document.querySelectorAll('.review-chip').forEach(c => {
                c.classList.toggle('active', c.dataset.filter === 'all');
            });

            renderReviews('all');

            // Scroll container to start
            const container = document.getElementById('reviewsTrackContainer');
            if (container) container.scrollTo({ left: 0, behavior: 'smooth' });

            // Close modal & reset form
            modal.classList.remove('active');
            form.reset();
            showToast("Thank you! Your Google Review has been published in preview mode.", "fa-star");

            // Smooth scroll page to reviews section
            const reviewsSec = document.getElementById('googleReviewsSection');
            if (reviewsSec) {
                reviewsSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

/* ==========================================================================
   OFFICIAL SHOWROOM BRAND PRICING ENGINE (OCTOBER 2026 FESTIVE RATE SHEETS)
   Mobile Station Authorized Rates Integration for Siddhi Marketing
   ========================================================================== */

let pricingActiveBrand = 'all';
let pricingActiveCategory = 'all';
let pricingSearchQuery = '';
let pricingSort = 'featured';
let pricingViewMode = 'cards'; // 'cards' or 'table'

// Helper for device fallback images based on brand & type
function getPricingDeviceImage(item) {
    const brand = (item.brand || '').toLowerCase();
    const cat = (item.category || '').toLowerCase();
    const model = (item.model || '').toLowerCase();

    if (brand.includes('apple')) {
        if (model.includes('macbook') || model.includes('mbp') || model.includes('mac mini')) {
            return 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80';
        }
        if (model.includes('ipad')) {
            return 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80';
        }
        if (model.includes('watch')) {
            return 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80';
        }
        if (model.includes('airpods')) {
            return 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80';
        }
        return 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80';
    }
    if (brand.includes('nothing') || brand.includes('cmf')) {
        return 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80';
    }
    if (brand.includes('xiaomi') || brand.includes('redmi')) {
        if (cat === 'tablets') {
            return 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80';
        }
        return 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&auto=format&fit=crop&q=80';
    }
    if (brand.includes('poco')) {
        return 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80';
    }
    if (brand.includes('lava')) {
        return 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80';
    }
    if (brand.includes('itel')) {
        if (cat === 'tablets') {
            return 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80';
        }
        return 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80';
    }
    return 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80';
}

function initPricingSection() {
    const container = document.getElementById('pricingDisplayContainer');
    if (!container) return; // Exit gracefully if section is not present

    setupPricingEventListeners();
    renderPricingList();
}

function setupPricingEventListeners() {
    // Brand Filter Buttons
    document.querySelectorAll('.pricing-brand-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pricing-brand-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            pricingActiveBrand = btn.dataset.brand || 'all';
            renderPricingList();
        });
    });

    // Category / Device Type Filter Buttons
    document.querySelectorAll('.pricing-cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pricing-cat-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            pricingActiveCategory = btn.dataset.category || 'all';
            renderPricingList();
        });
    });

    // Search Input
    const searchInput = document.getElementById('pricingSearchInput');
    const searchClear = document.getElementById('pricingSearchClear');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            pricingSearchQuery = e.target.value.trim().toLowerCase();
            if (searchClear) searchClear.style.display = pricingSearchQuery ? 'block' : 'none';
            renderPricingList();
        });
    }
    if (searchClear && searchInput) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            pricingSearchQuery = '';
            searchClear.style.display = 'none';
            searchInput.focus();
            renderPricingList();
        });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('pricingSortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            pricingSort = e.target.value;
            renderPricingList();
        });
    }

    // View Mode Switcher
    const viewCardsBtn = document.getElementById('pricingViewCardsBtn');
    const viewTableBtn = document.getElementById('pricingViewTableBtn');

    if (viewCardsBtn) {
        viewCardsBtn.addEventListener('click', () => {
            pricingViewMode = 'cards';
            viewCardsBtn.classList.add('active');
            if (viewTableBtn) viewTableBtn.classList.remove('active');
            renderPricingList();
        });
    }

    if (viewTableBtn) {
        viewTableBtn.addEventListener('click', () => {
            pricingViewMode = 'table';
            viewTableBtn.classList.add('active');
            if (viewCardsBtn) viewCardsBtn.classList.remove('active');
            renderPricingList();
        });
    }
}

function renderPricingList() {
    const container = document.getElementById('pricingDisplayContainer');
    const countEl = document.getElementById('pricingResultCount');
    if (!container) return;

    if (typeof OFFICIAL_PRICE_LIST_2026 === 'undefined' || !Array.isArray(OFFICIAL_PRICE_LIST_2026)) {
        container.innerHTML = `
            <div class="pricing-empty-state">
                <i class="fa-solid fa-triangle-exclamation" style="font-size:2rem; color:var(--primary-red); margin-bottom:12px;"></i>
                <p>Price list data is currently loading. Please refresh the page.</p>
            </div>
        `;
        return;
    }

    // Filter Items
    let items = OFFICIAL_PRICE_LIST_2026.filter(item => {
        // Brand filter
        if (pricingActiveBrand !== 'all') {
            const b = (item.brand || '').toLowerCase();
            const target = pricingActiveBrand.toLowerCase();
            if (target === 'apple' && !b.includes('apple')) return false;
            if (target === 'nothing' && !(b.includes('nothing') || (item.subBrand && item.subBrand.toLowerCase().includes('cmf')))) return false;
            if (target === 'xiaomi' && !(b.includes('xiaomi') || b.includes('redmi'))) return false;
            if (target === 'poco' && !b.includes('poco')) return false;
            if (target === 'lava' && !b.includes('lava')) return false;
            if (target === 'itel' && !b.includes('itel')) return false;
        }

        // Category filter
        if (pricingActiveCategory !== 'all') {
            const cat = (item.category || '').toLowerCase();
            if (pricingActiveCategory === 'smartphones' && cat !== 'smartphones') return false;
            if (pricingActiveCategory === 'laptops' && cat !== 'laptops') return false;
            if (pricingActiveCategory === 'tablets' && cat !== 'tablets') return false;
            if (pricingActiveCategory === 'audio-wearables' && !(cat === 'wearables' || cat === 'audio')) return false;
        }

        // Search Query
        if (pricingSearchQuery) {
            const text = `${item.brand} ${item.subBrand || ''} ${item.model} ${item.specs} ${item.badge || ''}`.toLowerCase();
            if (!text.includes(pricingSearchQuery)) return false;
        }

        return true;
    });

    // Sorting
    if (pricingSort === 'price-low') {
        items.sort((a, b) => a.mop - b.mop);
    } else if (pricingSort === 'price-high') {
        items.sort((a, b) => b.mop - a.mop);
    } else if (pricingSort === 'savings') {
        items.sort((a, b) => ((b.mrp || b.mop) - b.mop) - ((a.mrp || a.mop) - a.mop));
    }

    // Update count display
    if (countEl) {
        countEl.innerHTML = `Showing <strong>${items.length}</strong> of <strong>${OFFICIAL_PRICE_LIST_2026.length}</strong> verified devices`;
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div class="pricing-empty-state">
                <i class="fa-solid fa-magnifying-glass" style="font-size:2.4rem; color:var(--text-muted); margin-bottom:12px;"></i>
                <h4>No matching devices found</h4>
                <p>Try searching with another keyword (e.g. "iPhone", "Note 15", "5G", "128GB") or reset filters.</p>
                <button class="btn btn-primary" onclick="resetPricingFilters()" style="margin-top:14px;">
                    <i class="fa-solid fa-rotate-left"></i> Reset All Filters
                </button>
            </div>
        `;
        return;
    }

    if (pricingViewMode === 'table') {
        renderPricingTable(items, container);
    } else {
        renderPricingCards(items, container);
    }
}

function renderPricingCards(items, container) {
    container.innerHTML = `
        <div class="pricing-cards-grid">
            ${items.map(item => {
                const savings = (item.mrp || item.mop) - item.mop;
                const monthlyEmi = Math.round(item.mop / 6);
                const img = getPricingDeviceImage(item);
                const brandClass = item.brand.toLowerCase().replace(/[^a-z0-9]/g, '-');
                
                return `
                    <div class="pricing-device-card" data-id="${item.id}">
                        <div class="device-card-header">
                            <span class="device-brand-badge brand-${brandClass}">${item.brand}</span>
                            <span class="device-scheme-pill"><i class="fa-solid fa-calendar-check"></i> ${item.schemePeriod.includes('Festive') ? 'Festive Scheme' : 'Oct Rate Sheet'}</span>
                        </div>

                        <div class="device-card-visual" onclick="openEmiWithAmount(${item.mop})" title="Click to calculate 0% EMI">
                            <img src="${img}" alt="${item.model}" class="device-img" loading="lazy">
                            ${item.badge ? `<span class="device-badge-tag">${item.badge}</span>` : ''}
                        </div>

                        <div class="device-card-body">
                            <h3 class="device-model-name">${item.model}</h3>
                            <div class="device-specs-chip"><i class="fa-solid fa-microchip"></i> ${item.specs}</div>

                            <div class="device-pricing-box">
                                <div class="device-mop-wrap">
                                    <span class="mop-label">SHOWROOM MOP</span>
                                    <span class="mop-amount">₹${item.mop.toLocaleString('en-IN')}</span>
                                </div>
                                ${item.mrp && item.mrp > item.mop ? `
                                    <div class="device-mrp-wrap">
                                        <span class="mrp-strikethrough">MRP ₹${item.mrp.toLocaleString('en-IN')}</span>
                                        <span class="savings-tag">Save ₹${savings.toLocaleString('en-IN')}</span>
                                    </div>
                                ` : `
                                    <div class="device-mrp-wrap">
                                        <span class="savings-tag official-rate-tag">Official Brand MOP</span>
                                    </div>
                                `}
                            </div>

                            <div class="device-emi-calc-pill" onclick="openEmiWithAmount(${item.mop})" title="Click for EMI breakdown">
                                <i class="fa-solid fa-calculator text-red"></i>
                                <span>Zero-Down EMI from <strong>₹${monthlyEmi.toLocaleString('en-IN')}/mo</strong></span>
                            </div>

                            <div class="device-actions-row">
                                <button class="btn btn-primary btn-block" onclick="addToCart('${item.id}')" title="Add to Siddhi Marketing Quote Cart">
                                    <i class="fa-solid fa-cart-plus"></i> Add to Quote
                                </button>
                                <button class="btn btn-whatsapp-icon" onclick="inquirePricingWhatsApp('${item.id}')" title="Inquire on WhatsApp">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </button>
                                <button class="btn btn-icon-glass" onclick="openEmiWithAmount(${item.mop})" title="Calculate 0% EMI">
                                    <i class="fa-solid fa-calculator"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderPricingTable(items, container) {
    container.innerHTML = `
        <div class="pricing-table-wrapper">
            <table class="pricing-rate-table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Device Model & Variant</th>
                        <th>Key Specifications</th>
                        <th>Showroom MOP</th>
                        <th>MRP</th>
                        <th>Scheme Period</th>
                        <th>Zero-Down EMI</th>
                        <th style="text-align:center;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map(item => {
                        const monthlyEmi = Math.round(item.mop / 6);
                        const savings = (item.mrp || item.mop) - item.mop;
                        return `
                            <tr class="pricing-table-row">
                                <td>
                                    <span class="table-brand-pill">${item.brand}</span>
                                </td>
                                <td>
                                    <div class="table-model-wrap">
                                        <strong>${item.model}</strong>
                                        ${item.badge ? `<span class="table-badge-mini">${item.badge}</span>` : ''}
                                    </div>
                                </td>
                                <td>
                                    <span class="table-specs-text">${item.specs}</span>
                                </td>
                                <td>
                                    <span class="table-mop-price">₹${item.mop.toLocaleString('en-IN')}</span>
                                </td>
                                <td>
                                    ${item.mrp && item.mrp > item.mop ? `
                                        <div class="table-mrp-group">
                                            <span class="table-mrp-strike">₹${item.mrp.toLocaleString('en-IN')}</span>
                                            <span class="table-save-tag">-₹${savings.toLocaleString('en-IN')}</span>
                                        </div>
                                    ` : `<span class="text-muted">₹${item.mop.toLocaleString('en-IN')}</span>`}
                                </td>
                                <td>
                                    <span class="table-scheme-badge"><i class="fa-solid fa-clock"></i> ${item.schemePeriod}</span>
                                </td>
                                <td>
                                    <button class="table-emi-btn" onclick="openEmiWithAmount(${item.mop})">
                                        ₹${monthlyEmi.toLocaleString('en-IN')}/mo
                                    </button>
                                </td>
                                <td>
                                    <div class="table-actions-cell">
                                        <button class="table-btn-quote" onclick="addToCart('${item.id}')" title="Add to Quote Cart">
                                            <i class="fa-solid fa-cart-plus"></i> Quote
                                        </button>
                                        <button class="table-btn-wa" onclick="inquirePricingWhatsApp('${item.id}')" title="Inquire on WhatsApp">
                                            <i class="fa-brands fa-whatsapp"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function resetPricingFilters() {
    pricingActiveBrand = 'all';
    pricingActiveCategory = 'all';
    pricingSearchQuery = '';
    pricingSort = 'featured';

    const searchInput = document.getElementById('pricingSearchInput');
    const searchClear = document.getElementById('pricingSearchClear');
    const sortSelect = document.getElementById('pricingSortSelect');

    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    if (sortSelect) sortSelect.value = 'featured';

    document.querySelectorAll('.pricing-brand-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.brand === 'all');
    });
    document.querySelectorAll('.pricing-cat-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.category === 'all');
    });

    renderPricingList();
}

function openEmiWithAmount(amt) {
    const emiModal = document.getElementById('emiModal');
    const amountInput = document.getElementById('emiAmount');
    if (amountInput) {
        amountInput.value = amt;
        // Trigger calculate
        amountInput.dispatchEvent(new Event('input'));
    }
    if (emiModal) {
        emiModal.classList.add('active');
    }
}

function inquirePricingWhatsApp(itemId) {
    if (typeof OFFICIAL_PRICE_LIST_2026 === 'undefined') return;
    const item = OFFICIAL_PRICE_LIST_2026.find(i => i.id === itemId);
    if (!item) return;

    const msg = `Hello Siddhi Marketing,\n\nI want to inquire about the official festive pricing from your rate sheet:\n` +
        `📱 *Device:* ${item.model}\n` +
        `⚙️ *Specifications:* ${item.specs}\n` +
        `🏷️ *Brand:* ${item.brand}\n` +
        `💰 *Official MOP:* ₹${item.mop.toLocaleString('en-IN')}\n` +
        (item.mrp && item.mrp > item.mop ? `🏷️ *MRP:* ₹${item.mrp.toLocaleString('en-IN')} (Festive Saving: ₹${(item.mrp - item.mop).toLocaleString('en-IN')})\n` : ``) +
        `📅 *Scheme Period:* ${item.schemePeriod}\n\n` +
        `Please confirm available colors, zero-down EMI options, and delivery to Gali No. 4, Balaji Mandir Road. Thank you!`;

    window.open(`https://wa.me/${STORE_DATA.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ==========================================================================
// EXPOSE ALL INTERACTIVE HANDLERS GLOBALLY ON WINDOW
// Ensures 100% interoperability with inline HTML onclick handlers & modules
// ==========================================================================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;
window.openProductModal = openProductModal;
window.closeProductModal = () => document.getElementById('productModal')?.classList.remove('active');
window.filterCategory = filterCategory;
window.toggleHelpful = toggleHelpful;
window.scrollToReviewCard = scrollToReviewCard;
window.openVisitingCard = () => document.getElementById('visitingCardModal')?.classList.add('active');
window.closeVisitingCard = () => document.getElementById('visitingCardModal')?.classList.remove('active');
window.openEmiModal = () => document.getElementById('emiModal')?.classList.add('active');
window.closeEmiModal = () => document.getElementById('emiModal')?.classList.remove('active');
window.openCart = () => document.getElementById('cartDrawerOverlay')?.classList.add('active');
window.closeCart = () => document.getElementById('cartDrawerOverlay')?.classList.remove('active');
window.openWriteReview = () => document.getElementById('writeReviewModal')?.classList.add('active');
window.closeWriteReview = () => document.getElementById('writeReviewModal')?.classList.remove('active');
window.sendCartToWhatsApp = sendCartToWhatsApp;
window.showToast = showToast;
window.initPricingSection = initPricingSection;
window.renderPricingList = renderPricingList;
window.resetPricingFilters = resetPricingFilters;
window.openEmiWithAmount = openEmiWithAmount;
window.inquirePricingWhatsApp = inquirePricingWhatsApp;



