import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Smartphone, Shield, CheckCircle, ArrowRight, ArrowUp, Users, TrendingUp, Clock, Star } from "lucide-react";
import customerLoanImg from "@/assets/customer-loan.webp";
import adizaImg from "@/assets/adizs.jpg";
import alexImg from "@/assets/alex.jpg";
import kofiImg from "@/assets/kofi.jpg";
import iphone3Img from "@/assets/iPhone 3_.webp";
import nodeConImg from "@/assets/node-con.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const personas = [
  { name: "Adiza", role: "Hairstylist", story: "Uses Agenda Money loans to buy hair kits for her clients while saving toward her own salon.", image: adizaImg, pos: "center top" },
  { name: "Alex", role: "Taxi Driver", story: "Accesses quick loans to buy fuel and lubricants to keep his taxi running daily.", image: alexImg, pos: "center top" },
  { name: "Kofi", role: "Poultry Farmer", story: "Funds his farm feed purchases through Agenda Money to keep his 500-crate-a-day operation going.", image: kofiImg, pos: "right center" },
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
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left z-10">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold tracking-wide uppercase mb-8">
                <Zap size={18} /> Instant Loans in Ghana
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] mb-6 tracking-tight text-[#1A1A1A]">
                Giving credit <br/>
                <span className="text-primary">where it's due.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl opacity-80 mb-10 leading-relaxed max-w-lg text-[#4A4A4A]">
                Fast, simple, affordable micro-loans for individuals and small businesses. No collateral. Just cash when you need it.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/#apply">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-12 py-8 text-xl font-bold shadow-xl shadow-secondary/20 transition-all hover:-translate-y-1">
                    Apply Now <ArrowRight className="ml-2" size={24} />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="rounded-full px-10 py-8 text-lg font-bold border-2 text-[#1A1A1A] hover:bg-black/5 transition-all">
                    How it works
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 w-full relative">
               <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl">
                 <img src={customerLoanImg} alt="Customer Loan" className="w-full h-full object-cover" loading="lazy" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
               </div>
               
               {/* Floating Badges */}
        <div className="absolute -bottom-4 lg:-bottom-8 -left-2 lg:-left-12 bg-white p-3 lg:p-6 rounded-2xl lg:rounded-[2rem] shadow-2xl border border-black/5 flex items-center gap-3 lg:gap-5">
                 <div className="bg-secondary/20 p-2 lg:p-4 rounded-full text-secondary">
                   <Smartphone size={20} className="lg:w-7 lg:h-7" />
                 </div>
                 <div>
                   <p className="font-heading font-bold text-base lg:text-xl text-[#1A1A1A]">100% Mobile</p>
                   <p className="text-[10px] lg:text-sm text-[#4A4A4A] font-medium">Apply from anywhere</p>
                 </div>
               </div>

               <div className="absolute -top-4 lg:-top-8 -right-2 lg:-right-8 bg-white p-3 lg:p-5 rounded-2xl lg:rounded-[2rem] shadow-2xl border border-black/5 flex items-center gap-2 lg:gap-4">
                 <div className="bg-primary/20 p-2 lg:p-3 rounded-full text-primary">
                   <CheckCircle size={18} className="lg:w-6 lg:h-6" />
                 </div>
                 <div>
                   <p className="font-heading font-bold text-sm lg:text-lg text-[#1A1A1A]">Approved in</p>
                   <p className="text-primary font-black text-base lg:text-xl">Mins</p>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REFINED FULL-WIDTH TICKER */}
      <div className="bg-[#0A0A0A] text-white py-6 overflow-hidden border-y border-white/5 relative z-20">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-ticker whitespace-nowrap flex items-center gap-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="flex items-center gap-4 text-xs lg:text-sm font-black tracking-[0.3em] uppercase text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> GHS 50 - 2,000 Available
              </span>
              <span className="flex items-center gap-4 text-xs lg:text-sm font-black tracking-[0.3em] uppercase text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> No Collateral Required
              </span>
              <span className="flex items-center gap-4 text-xs lg:text-sm font-black tracking-[0.3em] uppercase text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Instant MoMo Payouts
              </span>
              <span className="flex items-center gap-4 text-xs lg:text-sm font-black tracking-[0.3em] uppercase text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> 0.5% Daily Interest
              </span>
              <span className="flex items-center gap-4 text-xs lg:text-sm font-black tracking-[0.3em] uppercase text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Serving All of Ghana
              </span>
            </div>
          ))}
        </div>
      </div>


      {/* WHAT IS AGENDA MONEY */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden rounded-[3rem] lg:rounded-[5rem] mx-4 lg:mx-8 shadow-2xl shadow-primary/30 mt-8 mb-10 lg:mb-14">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 leading-[1.1]">
                Emergency cash. <br/>Working capital. <br/><span className="text-secondary">Real impact.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg opacity-90 leading-relaxed mb-10 max-w-lg">
                Agenda Money is an online micro-loan platform built for individuals and micro-entrepreneurs who need fast, affordable financial support — without the typical bank queues, paperwork, or collateral.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                {["No Collateral", "Paperless", "Cashless", "Branchless", "24/7 Access", "Nationwide"].map((p) => (
                  <span key={p} className="bg-white/20 backdrop-blur-md text-white font-bold px-6 py-3 rounded-full text-sm tracking-wide">
                    {p}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-12 lg:p-16 text-center shadow-2xl relative">
              <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground w-24 h-24 rounded-full flex items-center justify-center font-heading font-black text-2xl shadow-xl transform rotate-12">
                FAST
              </div>
              <div className="w-full h-48 lg:h-64 mb-8 flex items-center justify-center">
                <img src={iphone3Img} alt="Agenda Money App" className="h-full object-contain drop-shadow-2xl" loading="lazy" />
              </div>
              <p className="text-3xl font-heading font-black text-[#1A1A1A] mb-4">100% Mobile</p>
              <p className="text-[#6A6A6A] text-lg max-w-sm mx-auto">Apply, get approved, and receive cash instantly — all from the comfort of your phone.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16 lg:mb-20">
            <motion.div variants={fadeUp} className="inline-block bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase text-sm">Simple. Fast. Yours.</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#1A1A1A] tracking-tight">Get your loan in 3 easy steps</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              { num: "1", title: "Apply Online", desc: "Provide basic information, add a Node code and snap a selfie.", icon: "📝", color: "bg-[#FAFAFA]" },
              { num: "2", title: "Get Approved", desc: "Our smart system reviews your request in minutes. No paperwork needed.", icon: "🚀", color: "bg-[#FAFAFA]" },
              { num: "3", title: "Receive Cash", desc: "Funds land instantly in your MTN, Telecel, or AT Mobile Money wallet.", icon: "💸", color: "bg-[#FAFAFA]" },
            ].map((s) => (
              <motion.div key={s.num} variants={fadeUp} className={`${s.color} rounded-[3rem] p-10 lg:p-12 text-center shadow-lg shadow-black/5 relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 p-8 text-8xl font-heading font-black text-black/[0.03] group-hover:scale-110 transition-transform duration-500 pointer-events-none -mt-4 -mr-4">{s.num}</div>
                <div className="text-6xl mb-8">{s.icon}</div>
                <h3 className="text-2xl font-heading font-black text-[#1A1A1A] mb-4 relative z-10">{s.title}</h3>
                <p className="text-[#6A6A6A] text-lg leading-relaxed relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link to="/#apply">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white rounded-full px-12 py-8 text-xl font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1">
                Apply Now <ArrowRight className="ml-2" size={24} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LOAN DETAILS SECTION */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] border-y border-black/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
             <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
               Fast, Flexible, Affordable.
             </motion.h2>
             <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-lg text-[#6A6A6A] leading-relaxed max-w-2xl mx-auto">
               We've designed our loans to be as transparent as possible. Choose your term, know your interest, and get funded instantly.
             </motion.p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-black/5 border border-black/5 flex flex-col justify-center min-h-[300px]">
               <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center text-primary mb-8"><TrendingUp size={40} /></div>
               <h3 className="text-3xl font-heading font-black text-[#1A1A1A] mb-4">0.5% Daily Rate</h3>
               <p className="text-[#6A6A6A] text-lg font-medium leading-relaxed">Interest is calculated and applied daily. Earlier repayment reduces your cost of borrowing.</p>
             </motion.div>
             <motion.div variants={fadeUp} className="bg-primary text-white rounded-[2.5rem] p-10 shadow-xl shadow-primary/30 flex flex-col justify-center min-h-[300px]">
               <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center text-white mb-8"><Clock size={40} /></div>
               <h3 className="text-3xl font-heading font-black mb-4">Flexible Terms</h3>
               <p className="text-white/90 text-lg font-medium leading-relaxed">Repay in 1, 5, 10, or 14 days. You're in complete control.</p>
             </motion.div>
             <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-black/5 border border-black/5 flex flex-col justify-center min-h-[300px]">
               <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center text-secondary mb-8"><ArrowUp size={40} /></div>
               <h3 className="text-3xl font-heading font-black text-[#1A1A1A] mb-4">Flat Fees</h3>
               <p className="text-[#6A6A6A] text-lg font-medium leading-relaxed">You pay a fixed processing fee no matter the amount you borrow. Your cost of borrowing reduces as you unlock higher loan amounts.</p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 lg:mb-16">
            <motion.div variants={fadeUp} className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase text-sm">Real People. Real Impact.</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#1A1A1A] tracking-tight mb-8">Built for everyday People</motion.h2>
            <motion.div variants={fadeUp}>
              <Link to="/who-we-serve" className="inline-flex items-center text-secondary font-bold hover:text-secondary/80 transition-colors text-lg">
                View stories from our champions <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {personas.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="group relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/15 hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Full-bleed image with zoom */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  style={{ objectPosition: p.pos }}
                />

                {/* Multi-stop gradient — deep at bottom, clear at top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Subtle colour tint on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                {/* Top role badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {p.role}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="overflow-hidden">
                    <h3 className="font-heading font-black text-2xl lg:text-3xl text-white mb-1 leading-tight drop-shadow-lg">{p.name}</h3>
                    <div className="w-10 h-[3px] bg-primary rounded-full mb-3 group-hover:w-20 transition-all duration-500" />
                  </div>
                  <p className="text-white/75 text-sm font-medium leading-relaxed line-clamp-3">{p.story}</p>
                </div>

                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] ring-0 group-hover:ring-2 group-hover:ring-primary/70 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NODES & CONNECTIONS SECTION */}
      <section className="py-16 lg:py-32 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="inline-block bg-white/10 text-white font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase text-sm">Grow Together</motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-10 leading-tight">
                The Power of Trust — <span className="text-primary block mt-2">Our Node system.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8">
                  <h4 className="font-heading font-black text-2xl text-primary mb-3">Node 🌟</h4>
                  <p className="text-lg opacity-80 leading-relaxed">A trusted Agenda Money customer with a verified repayment record. Nodes hold a unique code and unlock higher loan limits, lower rates, and priority processing — while extending access to everyone in their network.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8">
                  <h4 className="font-heading font-black text-2xl text-secondary mb-3">Connection 🤝</h4>
                  <p className="text-lg opacity-80 leading-relaxed">A borrower who enters through a Node's referral code. Connections get a fast-tracked application, immediate trust uplift, and access to Agenda Money's full loan range — no guarantors, no collateral.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-12">
                <Link to="/#apply">
                  <Button className="bg-secondary hover:bg-white text-black rounded-full px-10 py-8 font-bold text-xl transition-colors">
                    Get Your Node Code <ArrowRight className="ml-2" size={24} />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* node-con animated image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <motion.img
                src={nodeConImg}
                alt="Node and Connections diagram"
                className="w-full max-w-md rounded-3xl mix-blend-screen"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16 lg:mb-20">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#1A1A1A] tracking-tight mb-4">Trusted by thousands for fast, fair, and reliable financial support.</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border border-black/5 shadow-xl shadow-black/5 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 mb-6">{[...Array(5)].map((_, j) => <Star key={j} size={20} className="text-yellow-400 fill-yellow-400" />)}</div>
                  <p className="text-lg lg:text-xl font-medium leading-relaxed text-[#1A1A1A] mb-8">"{t.quote}"</p>
                </div>
                <div className="bg-[#FAFAFA] px-6 py-4 rounded-full inline-block self-start border border-black/5">
                  <p className="text-sm font-black text-primary uppercase tracking-wide">{t.name}</p>
                  <p className="text-xs text-[#6A6A6A] font-bold mt-1">{t.loc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION & FORM */}
      <section className="py-16 lg:py-32 bg-primary relative overflow-hidden px-2 lg:px-8">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
           <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-white/[0.04] rounded-full blur-[80px] origin-center -rotate-12 pointer-events-none"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[120%] bg-black/[0.04] rounded-full blur-[80px] origin-center rotate-45 pointer-events-none"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center bg-white rounded-[2.5rem] lg:rounded-[4rem] p-6 lg:p-16 shadow-2xl mx-2 lg:mx-0">
            
            {/* CTA Text */}
            <div className="lg:col-span-3 lg:pr-12 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#1A1A1A] mb-6 lg:mb-8 leading-tight lg:leading-[1.1]">
                Ready to apply? <br/><span className="text-primary lg:block">We're ready to fund.</span>
              </h2>
              <p className="text-lg lg:text-xl text-[#6A6A6A] mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                It takes minutes. No collateral, no branch visit, no wahala. 
                Instant disbursement to MTN, Telecel, and AirtelTigo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-black/10 text-[#1A1A1A] rounded-full px-8 lg:px-10 py-6 lg:py-8 text-lg font-bold hover:bg-[#FAFAFA] transition-all">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>

            {/* Apply Form */}
            <div id="apply" className="lg:col-span-2 bg-[#FAFAFA] rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 border border-black/5 shadow-inner">
              <h3 className="text-2xl font-heading font-black text-[#1A1A1A] mb-2">Loan Enquiry</h3>
              <p className="text-[#6A6A6A] font-medium mb-6 lg:mb-8 text-sm lg:text-base">Fill to express interest.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
                <input type="text" required placeholder="Full Name" className="w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:outline-none focus:ring-4 focus:ring-primary/20 transition-shadow" />
                <input type="tel" required placeholder="Mobile Number" className="w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:outline-none focus:ring-4 focus:ring-primary/20 transition-shadow" />
                <div className="relative">
                  <select required className="appearance-none w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:outline-none focus:ring-4 focus:ring-primary/20 transition-shadow text-[#6A6A6A] cursor-pointer">
                    <option value="">Select Region</option>
                    <option>Greater Accra</option>
                    <option>Ashanti</option>
                    <option>Western</option>
                    <option>Western North</option>
                    <option>Central</option>
                    <option>Eastern</option>
                    <option>Volta</option>
                    <option>Oti</option>
                    <option>Bono</option>
                    <option>Bono East</option>
                    <option>Ahafo</option>
                    <option>Northern</option>
                    <option>Savannah</option>
                    <option>North East</option>
                    <option>Upper East</option>
                    <option>Upper West</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-primary">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <label className="flex items-start gap-3 bg-white rounded-[1.25rem] px-5 py-4 shadow-sm cursor-pointer group">
                  <input type="checkbox" required className="mt-0.5 w-5 h-5 rounded accent-primary cursor-pointer flex-shrink-0" />
                  <span className="text-sm text-[#4A4A4A] font-medium leading-snug">I have a valid Ghana Card</span>
                </label>
                <label className="flex items-start gap-3 bg-white rounded-[1.25rem] px-5 py-4 shadow-sm cursor-pointer group">
                  <input type="checkbox" required className="mt-0.5 w-5 h-5 rounded accent-primary cursor-pointer flex-shrink-0" />
                  <span className="text-sm text-[#4A4A4A] font-medium leading-snug">I am a Ghanaian, 18 years &amp; above</span>
                </label>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-[1.25rem] lg:rounded-[1.5rem] py-6 lg:py-8 text-lg lg:text-xl font-bold shadow-xl shadow-primary/30 transition-transform hover:-translate-y-1 mt-2 lg:mt-4">
                  Submit Enquiry <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
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
