import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Smartphone, Shield, CheckCircle, ArrowRight, ArrowUp, Users, TrendingUp, Clock, Star } from "lucide-react";
import heroImg from "@/assets/hero-accra.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const personas = [
  { name: "Adiza", role: "Hairstylist", story: "Uses AM loans to buy hair kits for her clients while saving toward her own salon.", emoji: "💇‍♀️" },
  { name: "Alex", role: "Taxi Driver", story: "Accesses quick loans to buy fuel and lubricants to keep his taxi running daily.", emoji: "🚕" },
  { name: "Kofi", role: "Poultry Farmer", story: "Funds his farm feed purchases through AM to keep his 500-crate-a-day operation going.", emoji: "🐔" },
  { name: "Beatrice", role: "Seamstress", story: "A recent dressmaking graduate who uses AM loans to buy materials for her growing business.", emoji: "🧵" },
  { name: "Osman", role: "MoMo Agent", story: "Uses AM loans to top up his e-cash float and grow his Mobile Money business.", emoji: "📱" },
  { name: "Aku", role: "Market Trader", story: "A single mother of three who relies on AM loans for medical emergencies and stock purchases.", emoji: "🛒" },
];

const testimonials = [
  { quote: "I needed GHS 200 for a medical emergency and Agenda Money came through in less than 5 minutes. No stress, no wahala!", name: "Kwame A.", loc: "Accra" },
  { quote: "The whole process is online — I didn't have to go anywhere. Applied on my phone and got the money instantly.", name: "Abena M.", loc: "Kumasi" },
  { quote: "I've been able to grow my shop from one table to a full kiosk, all thanks to Agenda Money loans.", name: "Yusif D.", loc: "Tamale" },
  { quote: "They actually reward you for paying on time. My interest rate keeps dropping — I love it!", name: "Esi K.", loc: "Cape Coast" },
];

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Accra Central Market" className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              Ghana's Micro-Loan Platform
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Who's your guy?<br />
              <span className="text-primary">We've got you.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
              Fast, simple, affordable micro-loans for individuals and small businesses across Ghana. No collateral. No queues. Just cash when you need it.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/#apply">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg font-semibold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  How It Works
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <span className="flex items-center gap-2"><Zap size={16} className="text-primary" /> 2-Minute Approval</span>
              <span className="flex items-center gap-2"><Smartphone size={16} className="text-secondary" /> 100% Online</span>
              <span className="flex items-center gap-2"><Shield size={16} className="text-success" /> Safe & Secure</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Member of MCAG</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-block text-sm font-medium tracking-wide">
              &nbsp;&nbsp;GHS 50 - GHS 2,000 Available &nbsp;·&nbsp; No Collateral Required &nbsp;·&nbsp; Instant Mobile Money Disbursement &nbsp;·&nbsp; 0.5% Per Day Interest &nbsp;·&nbsp; 95% Customer Retention Rate &nbsp;·&nbsp; Available 24/7 &nbsp;·&nbsp; Serving All of Ghana &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "GHS 560K+", label: "Total Disbursed", icon: TrendingUp, color: "text-primary" },
              { num: "95%", label: "Customer Retention", icon: Users, color: "text-secondary" },
              { num: "<1%", label: "Default Rate", icon: Shield, color: "text-success" },
              { num: "2 Min", label: "Avg. Approval Time", icon: Clock, color: "text-primary" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all">
                <s.icon className={`mx-auto mb-4 ${s.color}`} size={28} />
                <div className={`text-3xl md:text-4xl font-heading font-extrabold ${s.color} mb-2`}>{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT IS AGENDA MONEY */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
                Emergency cash. Working capital. <span className="text-primary">Real impact.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
                Agenda Money is an online micro-loan platform built for Ghanaians who need fast, affordable financial support — without the bank queues, paperwork, or collateral. Whether you're a trader, driver, artisan, or student — we've got you.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {["No Collateral", "Paperless", "Cashless", "Branchless", "24/7 Access", "Nationwide"].map((p) => (
                  <span key={p} className="bg-accent text-primary text-sm font-medium px-4 py-2 rounded-full border border-primary/20">{p}</span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-accent rounded-3xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <Smartphone className="mx-auto text-primary mb-4" size={64} />
                <p className="text-lg font-heading font-semibold text-foreground">100% Mobile</p>
                <p className="text-muted-foreground text-sm mt-2">Apply, get approved, and receive cash — all from your phone.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Simple. Fast. Yours.</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold">Get your loan in 3 easy steps</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: "1", title: "Apply Online", desc: "Fill out a simple form with your Ghana Card details and selfie. Get a Node code from a trusted contact.", icon: "📋" },
              { num: "2", title: "Get Approved", desc: "Our team reviews your application in under 2 minutes using our smart trust-based system.", icon: "✅" },
              { num: "3", title: "Receive Your Cash", desc: "Loan is disbursed instantly to your Mobile Money wallet — MTN, Telecel, or AT.", icon: "📲" },
            ].map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-xl hover:border-primary/30 transition-all group">
                <div className="text-5xl font-heading font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-2">{s.num}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/#apply">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold">
                Apply Now <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LOAN DETAILS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold">Simple, transparent loans <span className="text-primary">built for you</span></motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Loan Amount", desc: "First-time borrowers start from GHS 50 ($5). Grow your limit up to GHS 2,000 ($200) as you build trust.", icon: "💰" },
              { title: "Loan Duration", desc: "Choose from 1, 5, 10, 14 or 30 days. You only pay interest for the days you borrow.", icon: "📅" },
              { title: "Interest Rate", desc: "0.5% per day — reducing as your credit score grows. The more you borrow and repay, the better your rate.", icon: "📉" },
            ].map((c) => (
              <motion.div key={c.title} variants={fadeUp} className="bg-muted rounded-2xl p-8 hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-xs text-muted-foreground text-center mt-8">A penal rate of 2%/day applies on overdue amounts. Subject to change based on prevailing market rates.</p>
        </div>
      </section>

      {/* LOAN LADDER */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold">The more you repay, the more you <span className="text-primary">unlock</span></motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">Agenda Money rewards good repayment behaviour. As you climb the loan ladder, your loan limit increases and your interest rate decreases.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-md mx-auto space-y-4">
            {[
              { step: "Step 3", range: "GHS 500 – 2,000", rate: "Lower rate", color: "bg-success text-success-foreground" },
              { step: "Step 2", range: "GHS 100 – 500", rate: "Medium rate", color: "bg-warning text-warning-foreground" },
              { step: "Step 1", range: "GHS 50 – 100", rate: "Starting rate", color: "bg-primary/80 text-primary-foreground" },
            ].map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} className={`${s.color} rounded-2xl p-6 flex items-center justify-between`}>
                <div>
                  <div className="font-heading font-bold text-lg">{s.step}</div>
                  <div className="text-sm opacity-90">{s.range}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{s.rate}</div>
                  {i < 2 && <ArrowUp size={16} className="ml-auto mt-1" />}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-sm font-heading font-semibold text-primary mt-8">Repay on time → Unlock next level</p>
          <p className="text-center text-muted-foreground text-sm mt-2">Build your credit. Unlock your potential.</p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Real People. Real Impact.</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold">Built for everyday Ghanaians</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((p) => (
              <motion.div key={p.name} variants={fadeUp} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="font-heading font-bold text-lg">{p.name}</h3>
                <p className="text-secondary text-sm font-medium mb-3">{p.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.story}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NODES & CONNECTIONS */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold mb-8">The Power of Trust — <span className="text-primary">How our Node system works</span></motion.h2>
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Node</h4>
                  <p className="text-sm text-muted-foreground">A trusted, verified Agenda Money customer. Nodes have a clean repayment history and can recommend people in their network for loans using their unique Node Code.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading font-bold text-secondary mb-2">Connection</h4>
                  <p className="text-sm text-muted-foreground">Anyone in a Node's network. Connections use their Node's code to apply and unlock access to Agenda Money loans.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading font-bold text-success mb-2">Becoming a Node</h4>
                  <p className="text-sm text-muted-foreground">Repay 5 loans successfully and you automatically become a Node — or call us to fast-track your registration.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <Link to="/#apply">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 font-semibold">
                    Get Your Node Code <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            {/* Network illustration */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-full max-w-sm">
                {/* Connection lines */}
                <line x1="150" y1="150" x2="80" y2="60" stroke="hsl(220,13%,91%)" strokeWidth="2" />
                <line x1="150" y1="150" x2="240" y2="80" stroke="hsl(220,13%,91%)" strokeWidth="2" />
                <line x1="150" y1="150" x2="60" y2="200" stroke="hsl(220,13%,91%)" strokeWidth="2" />
                <line x1="150" y1="150" x2="250" y2="220" stroke="hsl(220,13%,91%)" strokeWidth="2" />
                <line x1="150" y1="150" x2="150" y2="270" stroke="hsl(220,13%,91%)" strokeWidth="2" />
                {/* Node (center) */}
                <circle cx="150" cy="150" r="30" fill="#EE1B85" />
                <text x="150" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">NODE</text>
                {/* Connections */}
                {[[80,60],[240,80],[60,200],[250,220],[150,270]].map(([x,y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="20" fill="#00B8A8" />
                    <text x={x} y={y+4} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">CONN</text>
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">What Our Customers Say</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground">Trusted by thousands</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-warning fill-warning" />)}</div>
                <p className="text-sm leading-relaxed opacity-90 mb-4">"{t.quote}"</p>
                <p className="text-xs font-semibold text-primary">{t.name} — {t.loc}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center mt-10 text-primary font-heading font-bold text-lg">95% of customers return for a second loan.</p>
        </div>
      </section>

      {/* MOBILE MONEY PARTNERS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-heading font-bold mb-8">Receive your loan via</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {["MTN Mobile Money", "Telecel Cash", "AirtelTigo Money"].map((p) => (
              <div key={p} className="bg-muted rounded-xl px-8 py-4 font-heading font-semibold text-foreground border border-border">
                {p}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">Instant disbursement to any major Mobile Money wallet in Ghana.</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">Ready to apply? We've got you.</h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">It takes less than 2 minutes. No collateral, no branch visit, no wahala.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/#apply">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 py-6 text-lg font-semibold">
                Apply Now <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-10 py-6 text-lg font-semibold">
                Talk to Us
              </Button>
            </Link>
          </div>
          <p className="text-sm opacity-70">You'll need a valid Ghana Card, selfie, and a Node code to get started.</p>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-heading font-extrabold text-center mb-2">Loan Enquiry</h2>
          <p className="text-center text-muted-foreground mb-10">Fill in your details and we'll get back to you.</p>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch."); }}>
            <input type="text" required placeholder="Full Name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent" />
            <input type="tel" required placeholder="Phone Number" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent" />
            <input type="text" placeholder="Node Code (if you have one)" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent" />
            <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent text-muted-foreground">
              <option>Loan Amount</option>
              <option>GHS 50 – 100</option>
              <option>GHS 100 – 300</option>
              <option>GHS 300 – 500</option>
              <option>GHS 500 – 1,000</option>
              <option>GHS 1,000 – 2,000</option>
            </select>
            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full py-6 text-lg font-semibold">
              Submit Enquiry <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
