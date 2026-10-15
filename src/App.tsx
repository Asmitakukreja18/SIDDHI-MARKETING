import { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Star, ShieldCheck, Truck, CreditCard, Wrench, Contact2, Printer, Download, MessageSquareShare, Calculator } from 'lucide-react';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [vcardOpen, setVcardOpen] = useState(false);
  const [emiOpen, setEmiOpen] = useState(false);
  const [emiAmount, setEmiAmount] = useState(35000);
  const [emiTenure, setEmiTenure] = useState(6);

  const calculatedMonthly = Math.round(emiAmount / emiTenure);

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Siddhi Marketing
ORG:Siddhi Marketing Electronics
TITLE:Showroom & Technical Service Desk
TEL;TYPE=CELL,VOICE:+91 98765 43210
TEL;TYPE=WORK,VOICE:+91 91234 56789
EMAIL:siddhimarketing2017@gmail.com
ADR;TYPE=WORK:;;Gali No. 4, Balaji Mandir Road;;;;
NOTE:Authorized Electronics Showroom - Smart TVs, ACs, Refrigerators, Washing Machines & Repair Services.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Siddhi_Marketing_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#07090e] text-white font-sans overflow-x-hidden selection:bg-[#d6001c] selection:text-white">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#090c12] via-[#1a080a] to-[#090c12] text-xs py-2 px-4 border-b border-[#d6001c]/40 text-center text-[#e2e8f0] flex flex-wrap justify-between items-center gap-2">
        <div className="mx-auto flex items-center gap-2 font-medium">
          <span className="text-[#ff334b]">⚡ FESTIVAL SPECIAL OFFERS LIVE:</span>
          <span>Get Up to 40% OFF + Easy Zero Down Payment EMI at Showroom</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-white/70">
          <a href="tel:+919876543210" className="hover:text-white flex items-center gap-1 transition-colors">
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
            <button onClick={() => setVcardOpen(true)} className="hover:text-white transition-colors flex items-center gap-1">
              <Contact2 className="w-3.5 h-3.5 text-[#ff4d6d]" /> Visiting Card
            </button>
            <button onClick={() => setEmiOpen(true)} className="hover:text-white transition-colors flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5 text-[#ff4d6d]" /> EMI Calculator
            </button>
            <a href="#productsSection" className="hover:text-white transition-colors">Products</a>
            <a href="#aboutSection" className="hover:text-white transition-colors">About Us</a>
            <a href="https://maps.google.com/?q=Siddhi+Marketing+Gali+No.+4+Balaji+Mandir+Road" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
              Reviews <span className="bg-[#d6001c] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full">4.9★</span>
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setVcardOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold px-3.5 py-2 rounded-full transition-all"
            >
              <Contact2 className="w-3.5 h-3.5 text-[#ff4d6d]" />
              <span>Digital Card</span>
            </button>

            <a
              href="https://wa.me/919876543210?text=Hello%20Siddhi%20Marketing,%20I%20have%20an%20inquiry%20regarding%20electronics."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25d366] to-[#1eb956] text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(37,211,102,0.3)] hover:brightness-110 transition-all"
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
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 text-sm font-medium z-50">
            <a href="#heroSection" onClick={() => setMobileOpen(false)} className="text-[#ff334b] py-2 border-b border-white/5">Home</a>
            <button onClick={() => { setMobileOpen(false); setVcardOpen(true); }} className="text-left hover:text-[#ff334b] py-2 border-b border-white/5 flex items-center justify-between">
              <span>Digital Visiting Card</span>
              <Contact2 className="w-4 h-4 text-[#ff4d6d]" />
            </button>
            <button onClick={() => { setMobileOpen(false); setEmiOpen(true); }} className="text-left hover:text-[#ff334b] py-2 border-b border-white/5 flex items-center justify-between">
              <span>0% EMI Calculator</span>
              <Calculator className="w-4 h-4 text-[#ff4d6d]" />
            </button>
            <a href="tel:+919876543210" className="hover:text-[#ff334b] py-2 border-b border-white/5 flex items-center justify-between">
              <span>Call Helpline</span>
              <Phone className="w-4 h-4 text-[#ff4d6d]" />
            </a>
            <a href="https://maps.google.com/?q=Siddhi+Marketing+Gali+No.+4+Balaji+Mandir+Road" target="_blank" rel="noreferrer" className="hover:text-[#ff334b] py-2 flex items-center justify-between">
              <span>Customer Reviews</span>
              <span className="bg-[#d6001c] text-white text-xs px-2 py-0.5 rounded-full">4.9★</span>
            </a>
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
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d6001c] via-[#200408] to-black border border-[#d6001c]/50 text-xs sm:text-sm font-medium text-white shadow-[0_4px_20px_rgba(214,0,28,0.35)]">
            <Star className="w-3.5 h-3.5 text-white fill-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            <span>Authorized Multi-Brand Retailer • Gali No. 4, Balaji Mandir Road</span>
          </div>

          {/* Masked Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            <span>Upgrade <em className="italic font-serif font-normal text-[#e2e8f0] drop-shadow-[0_0_16px_rgba(255,51,75,0.4)]">Smart Living</em> with</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f8fafc] to-[#ffccd3]">
              Siddhi Marketing Electronics.
            </span>
          </h1>

          {/* Subtitle / Lede */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#cbd5e1] leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Discover authentic 4K Smart OLED TVs, 5-Star Inverter ACs, frost-free Refrigerators, Washing Machines &amp; Mobiles at Wholesale Showroom Prices. Guaranteed brand warranty with same-day doorstep delivery.
          </p>

          {/* Action Buttons (Red Theme Liquid & Glass) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full sm:w-auto">
            <a
              href="https://wa.me/919876543210?text=Hello%20Siddhi%20Marketing,%20send%20me%20your%20current%20electronics%20catalog."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-white via-[#ffe4e6] to-[#ffccd3] text-[#b80017] font-bold text-sm px-6 py-3 rounded-lg shadow-[0_4px_20px_rgba(214,0,28,0.45)] hover:shadow-[0_0_28px_rgba(214,0,28,0.65)] hover:-translate-y-0.5 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Electronics</span>
            </a>

            <button
              onClick={() => setVcardOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md font-semibold text-sm px-6 py-3 rounded-lg hover:-translate-y-0.5 transition-all"
            >
              <Contact2 className="w-4 h-4 text-[#ff4d6d]" />
              <span>Digital Business Card</span>
            </button>

            <a
              href="https://wa.me/919876543210?text=Hello%20Siddhi%20Marketing,%20I%20want%20to%20inquire%20about%20electronics%20deals."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d6001c]/40 hover:bg-[#d6001c]/60 text-white border border-[#d6001c]/70 backdrop-blur-md font-semibold text-sm px-6 py-3 rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <MessageSquareShare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3 Stats Row in Siddhi Red & Metallic Accent */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl mb-8">
            <a
              href="https://maps.google.com/?q=Siddhi+Marketing+Gali+No.+4+Balaji+Mandir+Road"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 py-1 group cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
              title="Click to view Google Reviews"
            >
              <div className="w-8 h-8 rounded-full bg-[#d6001c]/20 border border-[#d6001c]/40 flex items-center justify-center text-[#ff334b] font-bold">✓</div>
              <div className="text-left">
                <div className="text-base font-bold text-white leading-tight group-hover:text-[#ff4d6d] transition-colors">25,000+</div>
                <div className="text-xs text-[#94a3b8]">Happy Homes &amp; Deliveries</div>
              </div>
            </a>

            <div
              onClick={() => setEmiOpen(true)}
              className="flex items-center justify-center gap-3 py-1 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 group cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
              title="Click to calculate wholesale EMI"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">%</div>
              <div className="text-left">
                <div className="text-base font-bold text-white leading-tight group-hover:text-[#ff4d6d] transition-colors">Up to 40% OFF</div>
                <div className="text-xs text-[#94a3b8]">Wholesale Showroom Pricing</div>
              </div>
            </div>

            <button
              onClick={() => setVcardOpen(true)}
              className="flex items-center justify-center gap-3 py-1 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 group cursor-pointer hover:bg-white/5 rounded-lg transition-colors text-left"
              title="Click to view Visiting Card"
            >
              <div className="w-8 h-8 rounded-full bg-[#d6001c] text-white flex items-center justify-center font-bold text-xs shadow-[0_0_10px_rgba(214,0,28,0.5)]">S</div>
              <div>
                <div className="text-base font-bold text-white leading-tight group-hover:text-[#ff4d6d] transition-colors">9+ Years</div>
                <div className="text-xs text-[#94a3b8]">Trusted Electronics Partner</div>
              </div>
            </button>
          </div>

          {/* 4 Core Value Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-medium text-[#e2e8f0]">
            <a
              href="https://maps.google.com/?q=Gali+No.+4+Balaji+Mandir+Road"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm cursor-pointer transition-colors"
            >
              <Truck className="w-3.5 h-3.5 text-[#ff4d6d]" /> Free Doorstep Delivery
            </a>

            <button
              onClick={() => setEmiOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#d6001c]/20 border border-white/10 hover:border-[#d6001c]/50 backdrop-blur-sm cursor-pointer transition-colors text-white"
            >
              <CreditCard className="w-3.5 h-3.5 text-[#ff4d6d]" /> 0% Instant EMI
            </button>

            <button
              onClick={() => setVcardOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm cursor-pointer transition-colors text-white"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff4d6d]" /> 100% Brand Warranty
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%20Siddhi%20Marketing,%20I%20need%20repair/service%20for%20my%20electronics."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm cursor-pointer transition-colors"
            >
              <Wrench className="w-3.5 h-3.5 text-[#ff4d6d]" /> Certified After-Sales Support
            </a>
          </div>
        </div>
      </section>

      {/* Quick Access Anchor to full catalog */}
      <section className="bg-[#090c12] border-t border-white/10 py-12 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Visit Our Showroom Today</h2>
          <p className="text-sm text-[#94a3b8] mb-6">Gali No. 4, Balaji Mandir Road • Open all 7 days from 10:00 AM to 9:30 PM</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setVcardOpen(true)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all text-sm"
            >
              <Contact2 className="w-4 h-4 text-[#ff4d6d]" />
              <span>Digital Visiting Card</span>
            </button>
            <a
              href="https://wa.me/919876543210?text=Hi%20Siddhi%20Marketing,%20send%20me%20your%20current%20deal%20catalog."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#d6001c] hover:bg-[#b80017] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-red-900/50 transition-all text-sm"
            >
              Request Full Product Catalog on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Digital Visiting Card Modal */}
      {vcardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#0f141f] border border-[#d6001c]/50 rounded-2xl p-6 shadow-2xl text-left">
            <button
              onClick={() => setVcardOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3.5 mb-5 border-b border-white/10 pb-4">
              <img src="assets/siddhimarketing.jpeg" alt="Logo" className="w-12 h-12 rounded-full border border-[#d6001c]/60 object-cover" />
              <div>
                <h3 className="font-extrabold text-lg text-white">SIDDHI MARKETING</h3>
                <span className="text-[11px] text-[#ff4d6d] tracking-wider uppercase font-semibold">Electronics &amp; Home Appliances</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#cbd5e1] mb-6">
              <div className="flex items-start gap-2.5">
                <span className="text-white/60 text-xs w-20">Address:</span>
                <span className="text-white font-medium">Gali No. 4, Balaji Mandir Road</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-white/60 text-xs w-20">Phone:</span>
                <a href="tel:+919876543210" className="text-white font-medium hover:text-[#ff4d6d]">+91 98765 43210</a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-white/60 text-xs w-20">Email:</span>
                <a href="mailto:siddhimarketing2017@gmail.com" className="text-white font-medium hover:text-[#ff4d6d]">siddhimarketing2017@gmail.com</a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-white/60 text-xs w-20">Hours:</span>
                <span className="text-white font-medium">10:00 AM - 9:30 PM (All Days)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white/10 hover:bg-white/15 rounded-lg text-xs font-semibold text-white border border-white/10 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff4d6d]" /> Call Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Siddhi%20Marketing,%20saved%20your%20digital%20card."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25d366] hover:bg-[#1eb956] rounded-lg text-xs font-semibold text-white transition-all"
              >
                <MessageSquareShare className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <button
                onClick={downloadVCard}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white/10 hover:bg-white/15 rounded-lg text-xs font-semibold text-white border border-white/10 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#ff4d6d]" /> Save Contact (.vcf)
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white/10 hover:bg-white/15 rounded-lg text-xs font-semibold text-white border border-white/10 transition-all"
              >
                <Printer className="w-3.5 h-3.5 text-[#ff4d6d]" /> Print Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EMI Calculator Modal */}
      {emiOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#0f141f] border border-[#d6001c]/50 rounded-2xl p-6 shadow-2xl text-left">
            <button
              onClick={() => setEmiOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-[#ff4d6d] font-bold text-lg">
              <Calculator className="w-5 h-5" />
              <span>Instant 0% EMI Calculator</span>
            </div>
            <p className="text-xs text-[#94a3b8] mb-5">Calculate your monthly installments with zero down payment financing</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">Product Amount (₹)</label>
                <input
                  type="number"
                  value={emiAmount}
                  onChange={(e) => setEmiAmount(Number(e.target.value) || 0)}
                  min={5000}
                  max={300000}
                  step={1000}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d6001c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">Tenure (Months)</label>
                <select
                  value={emiTenure}
                  onChange={(e) => setEmiTenure(Number(e.target.value))}
                  className="w-full bg-[#1a2233] border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d6001c]"
                >
                  <option value={3}>3 Months (0% No-Cost EMI)</option>
                  <option value={6}>6 Months (0% No-Cost EMI)</option>
                  <option value={9}>9 Months</option>
                  <option value={12}>12 Months</option>
                  <option value={18}>18 Months</option>
                  <option value={24}>24 Months</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#94a3b8]">Estimated Monthly EMI:</span>
                  <div className="text-xl font-extrabold text-[#ff4d6d]">₹{calculatedMonthly.toLocaleString('en-IN')} / mo</div>
                </div>
                <div className="text-right text-[11px] text-green-400 font-semibold">
                  <div>Zero Down Payment</div>
                  <div>Instant Approval</div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Siddhi Marketing, I want to apply for Easy EMI for ₹${emiAmount.toLocaleString('en-IN')} for ${emiTenure} Months (Estimated: ₹${calculatedMonthly.toLocaleString('en-IN')}/mo).`)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25d366] hover:bg-[#1eb956] text-white font-bold rounded-lg text-sm transition-all"
            >
              <MessageSquareShare className="w-4 h-4" />
              <span>Apply for EMI on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
