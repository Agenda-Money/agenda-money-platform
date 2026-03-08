import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Smartphone, Shield, CheckCircle, ArrowRight, ArrowUp, Users, TrendingUp, Clock, Star } from "lucide-react";
import heroAccra from "@/assets/hero-accra.jpg";
import adizaImg from "@/assets/adizs.jpg";
import alexImg from "@/assets/alex.jpg";
import kofiImg from "@/assets/kofi.jpg";
import iphone3Img from "@/assets/iPhone 3_.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const personas = [
  { name: "Adiza", role: "Hairstylist", story: "Uses AM loans to buy hair kits for her clients while saving toward her own salon.", image: adizaImg },
  { name: "Alex", role: "Taxi Driver", story: "Accesses quick loans to buy fuel and lubricants to keep his taxi running daily.", image: alexImg },
  { name: "Kofi", role: "Poultry Farmer", story: "Funds his farm feed purchases through AM to keep his 500-crate-a-day operation going.", image: kofiImg },
];

const testimonials = [
  { quote: "I needed GHS 200 for a medical emergency and Agenda Money came through in less than 5 minutes. No stress, no wahala!", name: "Kwame A.", loc: "Accra" },
  { quote: "The whole process is online — I didn't have to go anywhere. Applied on my phone and got the money instantly.", name: "Abena M.", loc: "Kumasi" },
  { quote: "I've been able to grow my shop from one table to a full kiosk, all thanks to Agenda Money loans.", name: "Yusif D.", loc: "Tamale" },
  { quote: "They actually reward you for paying on time. My interest rate keeps dropping — I love it!", name: "Esi K.", loc: "Cape Coast" },
];

const Index = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      
      {/* ===== HERO ===== */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-surface overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left z-10">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6 border border-primary/10">
                <Zap size={14} /> Ghana's Micro-Loan Platform
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-[1.08] mb-5 tracking-tight text-text-primary">
                Giving credit <br />
                <span className="text-primary">where it's due.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-8 leading-relaxed max-w-md">
                Fast, simple, affordable micro-loans for individuals and small businesses. No collateral. Just cash when you need it.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link to="/#apply">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
                    Apply Now <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg font-semibold border-2 border-border text-text-primary hover:bg-surface transition-all">
                    How it works
                  </Button>
                </Link>
              </motion.div>
              {/* Trust row */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-muted font-medium">
                <span className="flex items-center gap-1.5"><Zap size={12} className="text-primary" /> 2-Min Approval</span>
                <span className="flex items-center gap-1.5"><Smartphone size={12} className="text-secondary" /> 100% Online</span>
                <span className="flex items-center gap-1.5"><Shield size={12} className="text-success" /> Safe & Secure</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={12} className="text-primary" /> MCAG Member</span>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:w-1/2 w-full relative">
              <div className="relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl shadow-black/10">
                <img src={heroAccra} alt="Accra market scene" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 lg:-bottom-6 left-2 lg:-left-6 bg-surface-elevated p-3 lg:p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3">
                <div className="bg-secondary/10 p-2.5 rounded-xl text-secondary">
                  <Smartphone size={18} />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-text-primary">100% Mobile</p>
                  <p className="text-[10px] text-text-muted font-medium">Apply from anywhere</p>
                </div>
              </div>

              <div className="absolute -top-4 lg:-top-6 right-2 lg:-right-4 bg-surface-elevated p-3 lg:p-4 rounded-2xl shadow-xl border border-border flex items-center gap-2.5">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-text-primary">Approved in</p>
                  <p className="text-primary font-black text-base">Minutes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div className="bg-overlay text-primary-foreground py-4 overflow-hidden relative z-20">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-overlay to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-overlay to-transparent z-10 pointer-events-none" />
        <div className="animate-ticker whitespace-nowrap flex items-center gap-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {["GHS 50 - 2,000 Available", "No Collateral Required", "Instant MoMo Payouts", "0.5% Daily Interest", "Serving All of Ghana"].map((text, j) => (
                <span key={j} className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase opacity-70">
                  <span className={`w-1 h-1 rounded-full ${j % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} /> {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHAT IS AGENDA MONEY ===== */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden rounded-3xl lg:rounded-[3rem] mx-3 lg:mx-6 shadow-xl shadow-primary/20 mt-6 mb-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-[1.1]">
                Emergency cash. <br />Working capital. <br /><span className="text-secondary">Real impact.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base lg:text-lg opacity-85 leading-relaxed mb-8 max-w-lg">
                Agenda Money is an online micro-loan platform built for Ghanaians who need fast, affordable financial support — without the bank queues, paperwork, or collateral. 
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
                {["No Collateral", "Paperless", "Cashless", "Branchless", "24/7 Access", "Nationwide"].map((p) => (
                  <span key={p} className="bg-white/15 backdrop-blur-md text-white font-semibold px-4 py-2 rounded-full text-xs tracking-wide border border-white/10">
                    {p}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-elevated rounded-3xl p-8 lg:p-12 text-center shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-black text-xs shadow-lg rotate-6">
                FAST
              </div>
              <div className="w-full h-40 lg:h-56 mb-6 flex items-center justify-center">
                <img src={iphone3Img} alt="Agenda Money App" className="h-full object-contain drop-shadow-xl" loading="lazy" />
              </div>
              <p className="text-2xl font-heading font-black text-text-primary mb-2">100% Mobile</p>
              <p className="text-text-secondary text-sm max-w-xs mx-auto">Apply, get approved, and receive cash instantly — all from your phone.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 lg:mb-16">
            <motion.div variants={fadeUp} className="inline-block bg-secondary/8 text-secondary font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase text-xs border border-secondary/10">Simple. Fast. Yours.</motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary tracking-tight">Get your loan in 3 easy steps</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { num: "1", title: "Apply Online", desc: "Provide basic details and snap a selfie. Have a Node code? Enter it to speed things up.", icon: "📝" },
              { num: "2", title: "Get Approved", desc: "Our smart system reviews your request in minutes. No paperwork needed.", icon: "🚀" },
              { num: "3", title: "Receive Cash", desc: "Funds land instantly in your MTN, Telecel, or AT Mobile Money wallet.", icon: "💸" },
            ].map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="bg-surface rounded-2xl lg:rounded-3xl p-8 lg:p-10 text-center border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-4 right-6 text-6xl font-heading font-black text-text-primary/[0.03] pointer-events-none">{s.num}</div>
                <div className="text-5xl mb-6">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-3">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/#apply">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
                Apply Now <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LOAN DETAILS ===== */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary mb-4 tracking-tight">
              Fast, Flexible, Affordable.
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
              Transparent loans designed around you. Choose your term, know your interest, and get funded instantly.
            </motion.p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="bg-surface-elevated rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-sm border border-border/50">
              <div className="bg-primary/8 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6"><TrendingUp size={28} /></div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">0.5% Daily</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Pay only for the days you borrow. No hidden fees, no application costs.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-primary text-primary-foreground rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-lg shadow-primary/20">
              <div className="bg-white/15 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6"><Clock size={28} /></div>
              <h3 className="text-2xl font-heading font-bold mb-3">Flexible Terms</h3>
              <p className="text-white/85 text-sm leading-relaxed">Repay in 1, 5, 10, 14, or 30 days. You're in complete control.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-24 md:mb-32">
            <motion.div variants={fadeUp} className="inline-block bg-primary/8 text-primary font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase text-xs border border-primary/10">Real People. Real Impact.</motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary tracking-tight mb-6">Built for everyday Ghanaians</motion.h2>
            <motion.div variants={fadeUp}>
              <Link to="/who-we-serve" className="inline-flex items-center text-secondary font-bold hover:text-secondary/80 transition-colors text-sm">
                View all our champions <ArrowRight className="ml-1.5" size={16} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-28">
            {personas.map((p) => (
              <motion.div key={p.name} variants={fadeUp} className="relative bg-surface-elevated border border-border/50 rounded-2xl lg:rounded-3xl p-6 md:p-8 pt-24 md:pt-28 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="absolute -top-20 md:-top-24 left-1/2 -translate-x-1/2">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-primary/15">
                    <img src={p.image} alt={p.name} className="w-full h-full rounded-full object-cover border-4 border-surface-elevated" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary mb-1">{p.name}</h3>
                <p className="inline-block bg-surface text-text-muted text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">{p.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{p.story}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NODES & CONNECTIONS ===== */}
      <section className="py-20 lg:py-28 bg-overlay text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="inline-block bg-white/8 text-white/70 font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase text-xs border border-white/10">Grow Together</motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-8 leading-tight">
                The Power of Trust — <span className="text-primary block mt-1">Our Node system.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4">
                <div className="bg-white/5 border border-white/8 rounded-2xl p-6">
                  <h4 className="font-heading font-bold text-lg text-primary mb-2">Node 🌟</h4>
                  <p className="text-sm opacity-75 leading-relaxed">A trusted Agenda Money customer with a clean repayment history. Nodes recommend people in their network to unlock faster approvals.</p>
                </div>
                <div className="bg-white/5 border border-white/8 rounded-2xl p-6">
                  <h4 className="font-heading font-bold text-lg text-secondary mb-2">Connection 🤝</h4>
                  <p className="text-sm opacity-75 leading-relaxed">Anyone in a Node's network. Using a Node's code speeds up your application and boosts trust immediately.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <Link to="/#apply">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 font-bold text-base transition-all hover:-translate-y-0.5">
                    Get Your Node Code <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Node visualization */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center items-center">
              <div className="relative w-full max-w-sm aspect-square bg-white/[0.03] rounded-full border border-white/8 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary rounded-full shadow-[0_0_40px_rgba(238,27,133,0.3)] flex items-center justify-center font-heading font-black text-lg relative z-10 border-4 border-overlay">
                  NODE
                </div>
                <div className="absolute inset-6 border border-white/8 rounded-full animate-[spin_60s_linear_infinite]">
                  {["-top-6 left-1/2 -translate-x-1/2", "-bottom-6 left-1/2 -translate-x-1/2", "top-1/2 -left-6 -translate-y-1/2", "top-1/2 -right-6 -translate-y-1/2"].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} w-12 h-12 bg-secondary text-overlay font-bold text-[10px] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,184,168,0.25)]`}>CONN</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 lg:mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary tracking-tight mb-3">Trusted by thousands</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-primary font-semibold">Trusted by Ghanaians for fast and reliable financial support.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-surface-elevated border border-border/50 shadow-sm rounded-2xl p-6 lg:p-7 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                <div>
                  <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-warning fill-warning" />)}</div>
                  <p className="text-sm font-medium leading-relaxed text-text-primary mb-6">"{t.quote}"</p>
                </div>
                <div className="bg-surface px-4 py-2.5 rounded-full inline-block self-start border border-border/50">
                  <p className="text-xs font-bold text-primary">{t.name}</p>
                  <p className="text-[10px] text-text-muted font-medium">{t.loc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA & APPLY FORM ===== */}
      <section className="py-12 lg:py-24 bg-primary relative overflow-hidden px-3 lg:px-6">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[130%] bg-white/[0.03] rounded-full blur-[60px] -rotate-12" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6 items-center bg-surface-elevated rounded-2xl lg:rounded-3xl p-5 lg:p-12 shadow-xl">
            
            <div className="lg:col-span-3 lg:pr-8 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary mb-4 lg:mb-6 leading-tight">
                Ready to apply? <br /><span className="text-primary">We're ready to fund.</span>
              </h2>
              <p className="text-sm lg:text-base text-text-secondary mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                It takes minutes. No collateral, no branch visit, no wahala. Instant disbursement to MTN, Telecel, and AirtelTigo.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-border text-text-primary rounded-full px-8 py-6 text-base font-semibold hover:bg-surface transition-all">
                  Contact Support
                </Button>
              </Link>
            </div>

            <div id="apply" className="lg:col-span-2 bg-surface rounded-2xl p-5 lg:p-8 border border-border/50">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-1">Loan Enquiry</h3>
              <p className="text-text-muted text-xs font-medium mb-5">Fill to express interest.</p>
              
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
                <input type="text" required placeholder="Full Name" className="w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                <input type="tel" required placeholder="Phone Number" className="w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                <input type="text" placeholder="Node Code (Optional)" className="w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                <div className="relative">
                  <select className="appearance-none w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all cursor-pointer text-text-primary">
                    <option value="">Select Amount</option>
                    <option value="50-300">GHS 50 – 300</option>
                    <option value="300-500">GHS 300 – 500</option>
                    <option value="500-2000">GHS 500 – 2,000</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                    <svg className="fill-current h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl py-6 text-base font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 mt-1">
                  Submit Enquiry <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
