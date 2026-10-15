import { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Star, ShieldCheck, Truck, CreditCard, Wrench } from 'lucide-react';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#07090e] text-white font-sans overflow-x-hidden selection:bg-[#d6001c] selection:text-white">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#090c12] via-[#1a080a] to-[#090c12] text-xs py-2 px-4 border-b border-[#d6001c]/40 text-center text-[#e2e8f0] flex flex-wrap justify-between items-center gap-2">
        <div className="mx-auto flex items-center gap-2 font-medium">
          <span className="text-[#ff334b]">⚡ FESTIVAL SPECIAL OFFERS LIVE:</span>
          <span>Get Up to 40% OFF + Easy Zero Down Payment EMI at Showroom</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-white/70">
          <a href="tel:+919876543210" className="hover:text-white flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#ff334b]" /> +91 98765 43210
          </a>
          <span>|</span>
          <span>Gali No. 4, Balaji Mandir Road</span>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 px-5 md:px-10 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d6001c]/60 shadow-[0_0_12px_rgba(214,0,28,0.4)] flex-shrink-0 bg-black">
              <img src="assets/siddhimarketing.jpeg" alt="Siddhi Marketing Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 font-extrabold tracking-tight text-lg leading-tight">
                <span className="text-[#d6001c] drop-shadow-[0_0_8px_rgba(214,0,28,0.5)]">SIDDHI</span>
                <span className="text-white">MARKETING</span>
              </div>
              <span className="text-[10px] tracking-widest text-[#94a3b8] font-medium uppercase">Your Electronic Partner</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#cbd5e1]">
            <a href="#heroSection" className="text-[#ff334b] font-semibold flex items-center gap-1.5 transition-colors">Home</a>
            <a href="#aboutSection" className="hover:text-white transition-colors">About Us</a>
            <a href="#productsSection" className="hover:text-white transition-colors">Products</a>
            <a href="#servicesSection" className="hover:text-white transition-colors">Services &amp; EMI</a>
            <a href="#reviewsSection" className="hover:text-white flex items-center gap-1 transition-colors">
              Reviews <span className="bg-[#d6001c] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full">4.9★</span>
            </a>
            <a href="#contactSection" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hello%20Siddhi%20Marketing,%20I%20have%20an%20inquiry%20regarding%20electronics."
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#25d366] to-[#1eb956] text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(37,211,102,0.3)] hover:brightness-110 transition-all"
            >
              <span>WhatsApp Chat</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#ff334b]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 text-sm font-medium z-50 anim-fade-down">
            <a href="#heroSection" onClick={() => setMobileOpen(false)} className="text-[#ff334b] py-2 border-b border-white/5">Home</a>
            <a href="#aboutSection" onClick={() => setMobileOpen(false)} className="hover:text-[#ff334b] py-2 border-b border-white/5">About Us</a>
            <a href="#productsSection" onClick={() => setMobileOpen(false)} className="hover:text-[#ff334b] py-2 border-b border-white/5">Products Catalog</a>
            <a href="#servicesSection" onClick={() => setMobileOpen(false)} className="hover:text-[#ff334b] py-2 border-b border-white/5">Services &amp; EMI</a>
            <a href="#reviewsSection" onClick={() => setMobileOpen(false)} className="hover:text-[#ff334b] py-2 border-b border-white/5 flex items-center justify-between">
              Customer Reviews <span className="bg-[#d6001c] text-white text-xs px-2 py-0.5 rounded-full">4.9★</span>
            </a>
            <a href="#contactSection" onClick={() => setMobileOpen(false)} className="hover:text-[#ff334b] py-2">Showroom Location &amp; Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section - Red Themed Cinematic Video Background */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden px-5 py-20" id="heroSection">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black pointer-events-none">
          <video
            className="w-full h-full object-cover opacity-80"
            autoPlay
            loop
            muted
            playsInline
            poster="assets/hero_banner.jpg"
          >
            <source src="assets/hero_video.mp4" type="video/mp4" />
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4" type="video/mp4" />
          </video>
          {/* Radial & Linear Scrim Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/70 via-transparent to-[#07090e] pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d6001c] via-[#200408] to-black border border-[#d6001c]/50 text-xs sm:text-sm font-medium text-white shadow-[0_4px_20px_rgba(214,0,28,0.35)] anim-fade-up">
            <Star className="w-3.5 h-3.5 text-white fill-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            <span>Authorized Multi-Brand Retailer • Gali No. 4, Balaji Mandir Road</span>
          </div>

          {/* Masked Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] anim-fade-up">
            <span>Upgrade <em className="italic font-serif font-normal text-[#e2e8f0] drop-shadow-[0_0_16px_rgba(255,51,75,0.4)]">Smart Living</em> with</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f8fafc] to-[#ffccd3]">
              Siddhi Marketing Electronics.
            </span>
          </h1>

          {/* Subtitle / Lede */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#cbd5e1] leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] anim-fade-up">
            Discover authentic 4K Smart OLED TVs, 5-Star Inverter ACs, frost-free Refrigerators, Washing Machines &amp; Mobiles at Wholesale Showroom Prices. Guaranteed brand warranty with same-day doorstep delivery.
          </p>

          {/* Action Buttons (Red Theme Liquid & Glass) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full sm:w-auto anim-fade-up">
            <a
              href="#productsSection"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-white via-[#ffe4e6] to-[#ffccd3] text-[#b80017] font-bold text-sm px-6 py-3 rounded-lg shadow-[0_4px_20px_rgba(214,0,28,0.45)] hover:shadow-[0_0_28px_rgba(214,0,28,0.65)] hover:-translate-y-0.5 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Electronics</span>
            </a>

            <a
              href="https://wa.me/919876543210?text=Hello%20Siddhi%20Marketing,%20I%20want%20to%20inquire%20about%20electronics%20deals."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d6001c]/30 hover:bg-[#d6001c]/50 text-white border border-[#d6001c]/70 backdrop-blur-md font-semibold text-sm px-6 py-3 rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3 Stats Row in Siddhi Red & Metallic Accent */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl mb-8 anim-fade-up">
            <div className="flex items-center justify-center gap-3 py-1">
              <div className="w-8 h-8 rounded-full bg-[#d6001c]/20 border border-[#d6001c]/40 flex items-center justify-center text-[#ff334b] font-bold">✓</div>
              <div className="text-left">
                <div className="text-base font-bold text-white leading-tight">25,000+</div>
                <div className="text-xs text-[#94a3b8]">Happy Homes &amp; Deliveries</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-1 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">%</div>
              <div className="text-left">
                <div className="text-base font-bold text-white leading-tight">Up to 40% OFF</div>
                <div className="text-xs text-[#94a3b8]">Wholesale Showroom Pricing</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-1 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4">
              <div className="w-8 h-8 rounded-full bg-[#d6001c] text-white flex items-center justify-center font-bold text-xs shadow-[0_0_10px_rgba(214,0,28,0.5)]">S</div>
              <div className="text-left">
                <div className="text-base font-bold text-white leading-tight">9+ Years</div>
                <div className="text-xs text-[#94a3b8]">Trusted Electronics Partner</div>
              </div>
            </div>
          </div>

          {/* 4 Core Value Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-medium text-[#e2e8f0]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Truck className="w-3.5 h-3.5 text-[#ff4d6d]" /> Free Doorstep Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <CreditCard className="w-3.5 h-3.5 text-[#ff4d6d]" /> 0% Instant EMI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff4d6d]" /> 100% Brand Warranty
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Wrench className="w-3.5 h-3.5 text-[#ff4d6d]" /> Certified After-Sales Support
            </span>
          </div>
        </div>
      </section>

      {/* Quick Access Anchor to full catalog */}
      <section className="bg-[#090c12] border-t border-white/10 py-12 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Visit Our Showroom Today</h2>
          <p className="text-sm text-[#94a3b8] mb-6">Gali No. 4, Balaji Mandir Road • Open all 7 days from 10:00 AM to 9:30 PM</p>
          <a
            href="https://wa.me/919876543210?text=Hi%20Siddhi%20Marketing,%20send%20me%20your%20current%20deal%20catalog."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#d6001c] hover:bg-[#b80017] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-red-900/50 transition-all text-sm"
          >
            Request Full Product Catalog on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
