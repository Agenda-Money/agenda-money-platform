import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield, TrendingUp, Target, Heart } from "lucide-react";
import aboutImg from "@/assets/business-partners-shaking-hands-agreement.webp";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const About = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* Hero */}
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-overlay text-primary-foreground overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left">
            <motion.div variants={fadeUp} className="inline-block bg-primary/15 text-primary font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide text-xs uppercase border border-primary/10">
              Our Story
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-[1.08] tracking-tight">
              <span className="text-primary">We are</span> <br />Agenda Money.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed mb-8 max-w-lg">
              We're on a mission to empower individuals and micro-businesses by providing affordable and easily accessible digital financial services — credit first.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/#apply">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-secondary/20 transition-all hover:-translate-y-0.5">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:w-1/2 w-full relative">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/20 border border-white/5">
              <img src={aboutImg} alt="Agenda Money Team" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-4 lg:-bottom-6 left-2 lg:-left-6 bg-surface-elevated p-3 lg:p-5 rounded-2xl shadow-xl border border-border flex items-center gap-3 text-text-primary">
              <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                <TrendingUp size={18} />
              </div>
              <div>
                <p className="font-heading font-bold text-base tracking-tight">2030 Vision</p>
                <p className="text-[10px] font-medium text-text-muted">100K Active Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Vision */}
    <section className="py-20 lg:py-28 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
          <motion.div variants={fadeUp} className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto">
            <Target size={28} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary mb-8 tracking-tight leading-[1.1]">
            Our North Star <span className="text-primary">is Impact.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium border-l-4 border-secondary pl-6 text-left max-w-2xl mx-auto">
            "To build and manage a loan book of <span className="text-primary font-bold">$5 million</span> for <span className="font-bold underline decoration-secondary decoration-4 underline-offset-4">100,000 active customers</span> by 2030."
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary tracking-tight leading-[1.1]">
              The Agenda <span className="text-primary">Philosophy.</span>
            </motion.h2>
            
            <div className="space-y-6">
              {[
                { icon: Users, title: "Community at the Core", desc: "We don't just lend; we build networks. Every loan is an investment in a Ghanaian's future.", color: "bg-primary text-primary-foreground" },
                { icon: Zap, title: "Digital-First Simplicity", desc: "Financial services shouldn't be a chore. We strip away the paperwork and focus on speed.", color: "bg-secondary text-secondary-foreground" },
                { icon: Shield, title: "Unwavering Integrity", desc: "Transparency is our currency. We operate with radical honesty in every transaction.", color: "bg-overlay text-primary-foreground" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4 group">
                  <div className={`shrink-0 w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="bg-surface rounded-2xl p-8 lg:p-10 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-5">
                <div className="w-11 h-11 bg-surface-elevated rounded-xl flex items-center justify-center text-secondary shadow-sm border border-border/50">
                  <Target size={22} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary">Deep Innovation.</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  We're not just digitizing existing processes. We're rethinking how finance works for the backbone of Ghana.
                </p>
                <ul className="space-y-2.5 pt-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Zero Paperwork</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary rounded-full" /> 2-Minute Approvals</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-overlay rounded-full" /> Nationwide Reach</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Affiliations */}
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h3 variants={fadeUp} className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-8">Memberships & Affiliations</motion.h3>
          <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">
            <div className="bg-surface-elevated border border-border/50 rounded-2xl px-8 py-4 font-heading font-bold text-base text-text-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              MCAG <span className="text-primary">Member</span>
            </div>
            <div className="bg-surface-elevated border border-border/50 rounded-2xl px-8 py-4 font-heading font-bold text-base text-text-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              G.I.A.C. <span className="text-secondary">Portfolio</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden text-primary-foreground">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <Heart className="mx-auto mb-6 text-white/50" size={40} />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 tracking-tight leading-tight">
            Join our growing <br /><span className="text-secondary">financial community.</span>
          </h2>
          <Link to="/#apply">
            <Button size="lg" className="bg-surface-elevated hover:bg-secondary text-primary hover:text-secondary-foreground rounded-full px-12 py-8 text-xl font-bold shadow-xl transition-all hover:scale-105">
              Apply Now <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
