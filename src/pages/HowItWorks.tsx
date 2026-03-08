import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CheckCircle, Smartphone, TrendingUp, Shield, Zap, HandCoins } from "lucide-react";
import getLoanImg from "@/assets/get-loan.webp";
import customerLoanImg from "@/assets/customer-loan.webp";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const steps = [
  { num: "01", title: "Get a Node Code", desc: "Connect with a trusted Agenda Money Node. Their unique code is your gateway to rapid loan access.", icon: Users, accent: "bg-primary/8 text-primary" },
  { num: "02", title: "Quick Application", desc: "Our 100% digital process takes minutes. Just your details, Ghana Card, and a selfie.", icon: Smartphone, accent: "bg-secondary/8 text-secondary" },
  { num: "03", title: "Real-Time Review", desc: "Our intelligent engine reviews your application instantly. No paperwork, no queues, no stress.", icon: Zap, accent: "bg-warning/10 text-warning" },
  { num: "04", title: "Instant Payout", desc: "Funds hit your MoMo wallet (MTN, Telecel, or AT) immediately upon approval — 24/7.", icon: HandCoins, accent: "bg-success/10 text-success" },
];

const HowItWorks = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* HERO */}
    <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-28 bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left">
            <motion.div variants={fadeUp} className="inline-block bg-primary/8 text-primary font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide text-xs uppercase border border-primary/10">
              Fast. Simple. Digital.
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-5 leading-[1.1] tracking-tight text-text-primary">
              Get your money <br />
              <span className="text-primary">in minutes.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base lg:text-lg text-text-secondary leading-relaxed max-w-lg mb-8">
              We've dismantled the traditional banking hurdles. No visits, no paperwork — just the financial support you need, exactly when you need it.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/#apply">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 group">
                  Apply Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:w-1/2 w-full relative">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[16/10] lg:aspect-[4/5] shadow-2xl shadow-black/10 border border-border/30">
              <img src={getLoanImg} alt="Get a loan instantly" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-overlay/15 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-success text-success-foreground p-3 lg:p-4 rounded-xl shadow-lg flex items-center gap-2">
                <CheckCircle size={16} />
                <span className="font-bold text-xs lg:text-sm">GHS 500 Received</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* STEPS */}
    <section className="py-16 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          
          {/* Left: Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl group">
              <img src={customerLoanImg} alt="Agenda Money customer" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-overlay/50 via-transparent to-transparent" />
            </div>

            <div className="bg-surface-elevated border border-border/50 rounded-2xl p-5 lg:p-7 shadow-lg relative -mt-10 mx-4 lg:mx-6 z-10">
              <p className="text-text-primary text-lg lg:text-xl font-heading font-bold leading-snug mb-3 italic">
                "I applied from my shop while serving customers. The cash arrived before I even finished."
              </p>
              <div className="bg-secondary/8 px-3 py-1.5 rounded-full text-secondary font-bold text-xs uppercase tracking-wider inline-block border border-secondary/10">
                Financial Freedom
              </div>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col justify-center py-4 relative">
            <motion.div variants={fadeUp} className="mb-8 lg:mb-10">
              <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-text-primary mb-3 tracking-tight leading-none">
                The <span className="text-primary">Process.</span>
              </h2>
              <p className="text-base text-text-secondary leading-relaxed max-w-md">
                Designed for modern lives. We've removed every barrier so you can move forward.
              </p>
            </motion.div>

            <div className="space-y-5 lg:space-y-6">
              {steps.map((s) => (
                <motion.div key={s.num} variants={fadeUp} className="group flex gap-4 lg:gap-6 items-start p-1 hover:translate-x-1 transition-transform duration-200">
                  <div className={`${s.accent} w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-border/30`}>
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-heading font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* GROWTH PATH */}
    <section className="py-16 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-10 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4 tracking-tight text-text-primary">
              A smarter way <br /><span className="text-primary">to build your future.</span>
            </h2>
            <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Our automated path rewards your consistency. The more you use Agenda Money responsibly, the more benefits you unlock.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12 text-left">
            {[
              { title: "Higher Limits", desc: "Repay on time to automatically boost your limit up to GHS 2,000.", icon: TrendingUp, accent: "bg-secondary/8 text-secondary" },
              { title: "Lower Rates", desc: "Your interest rate decreases as your credit health improves over time.", icon: Shield, accent: "bg-primary/8 text-primary" },
              { title: "Node Status", desc: "Successfully repay 5 loans to unlock Node status and its benefits.", icon: Users, accent: "bg-warning/10 text-warning" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-surface-elevated p-7 lg:p-9 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-md transition-all group">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${item.accent} border border-border/30`}>
                  <item.icon size={20} />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3 text-text-primary">{item.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            <Link to="/#apply">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 group">
                Start Your Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default HowItWorks;
