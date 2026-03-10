import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield, Lightbulb, TrendingUp, Target, Heart } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

import aboutImg from "@/assets/business-partners-shaking-hands-agreement.webp";

const About = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* Hero Section */}
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-[#1A1A1A] text-white overflow-hidden rounded-b-[3rem] lg:rounded-b-[6rem] shadow-2xl mx-2 lg:mx-8 mt-4">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left">
            <motion.div variants={fadeUp} className="inline-block bg-primary/20 text-primary font-bold px-6 py-3 rounded-full mb-8 tracking-wide text-sm uppercase">
              Our Story
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 leading-[1.05] tracking-tight">
              <span className="text-primary italic">We are</span> <br/>
              <span className="text-white">Agenda Money.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg font-medium">
              We're on a mission to empower individuals and micro-businesses by providing affordable and easily accessible digital financial services — credit first.
            </motion.p>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 lg:border-8 border-white/5">
              <img src={aboutImg} alt="Agenda Money Team" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge — hidden on mobile to prevent clipping */}
            <div className="hidden lg:flex absolute -bottom-8 -left-8 bg-white p-6 lg:p-8 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border border-black/5 items-center gap-4 lg:gap-6 text-black">
              <div className="bg-primary/20 p-3 lg:p-5 rounded-xl lg:rounded-2xl text-primary">
                <TrendingUp size={24} className="lg:w-8 lg:h-8" />
              </div>
              <div>
                <p className="font-heading font-black text-xl lg:text-2xl tracking-tighter">2030 Vision</p>
                <p className="text-[10px] lg:text-sm font-bold opacity-60">1M Active Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Vision Section */}
    <section className="py-16 lg:py-32 bg-accent relative overflow-hidden rounded-[3rem] lg:rounded-[6rem] mx-2 lg:mx-8 my-8 lg:my-12 shadow-inner">
       <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[100%] bg-primary opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
       </div>
       
       <div className="container mx-auto px-6 max-w-5xl relative z-10">
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-8">
             <motion.div variants={fadeUp} className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10">
               <Target size={40} />
             </motion.div>
             <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#1A1A1A] mb-10 tracking-tight leading-[1.1]">
               Our North Star <br/>
               <span className="text-primary italic">is Impact.</span>
             </motion.h2>
             <motion.p variants={fadeUp} className="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] leading-[1.3] font-medium italic border-l-4 border-secondary pl-8">
               "To build and manage a loan book of <span className="text-primary font-black">$5 million</span> for <span className="text-[#1A1A1A] font-black underline decoration-secondary decoration-8 underline-offset-8">100,000 active customers</span> by 2030."
             </motion.p>
           </div>
           
           <motion.div variants={fadeUp} className="lg:col-span-4 hidden lg:block">
              <div className="bg-white px-10 py-10 rounded-[3rem] shadow-2xl border border-black/5 rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col gap-3">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#BABABA]">2030 Vision</div>
                <div className="text-[5.5rem] font-heading font-black text-primary leading-none">1M</div>
                <div className="w-8 h-[2px] bg-primary/30 rounded-full"></div>
                <div className="text-sm font-black uppercase tracking-[0.2em] text-[#8A8A8A]">Active Customers</div>
              </div>
           </motion.div>
         </motion.div>
       </div>
    </section>

    {/* Philosophy (De-AIed Values) */}
    <section className="py-16 lg:py-32 bg-background relative px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-12">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-black text-[#1A1A1A] tracking-tight leading-[1.1]">
              The Agenda <br/>
              <span className="text-primary italic">Philosophy.</span>
            </motion.h2>
            
            <div className="space-y-10">
              {[
                { icon: Users, title: "Community at the Core", desc: "We don't just lend; we build networks. Every loan is an investment in an African's future.", color: "bg-primary" },
                { icon: Zap, title: "Digital-First Simplicity", desc: "Financial services shouldn't be a chore. We strip away the paperwork and focus on speed.", color: "bg-secondary" },
                { icon: Shield, title: "Unwavering Integrity", desc: "Transparency is our currency. We operate with radical honesty in every transaction.", color: "bg-black" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4 lg:gap-8 group">
                  <div className={`shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl ${item.color} flex items-center justify-center text-white shadow-xl shadow-black/10 group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} className="lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-black text-[#1A1A1A] mb-1 lg:mb-2">{item.title}</h3>
                    <p className="text-base lg:text-lg text-[#6A6A6A] leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-secondary/5 rounded-[4rem] p-12 lg:p-16 border border-secondary/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

               <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-lg">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-heading font-black text-[#1A1A1A]">Deep Innovation.</h3>
                  <p className="text-xl text-[#4A4A4A] leading-relaxed font-medium">
                    For the real economy of Africa, from the ground up.
                  </p>
                  <p className="text-base text-[#6A6A6A] leading-relaxed">
                    We believe access to credit is a fundamental right, not a privilege. That's why we've rebuilt the lending experience from scratch — removing every barrier between a hardworking African and the capital they need to thrive. No branch visits. No paperwork. No waiting.
                  </p>
                  <ul className="space-y-4 pt-2 text-sm font-black uppercase tracking-widest text-[#8A8A8A]">
                    <li className="flex items-center gap-4"><span className="w-2 h-2 bg-primary rounded-full"></span> Zero Paperwork</li>
                    <li className="flex items-center gap-4"><span className="w-2 h-2 bg-secondary rounded-full"></span> 2-Minute Approvals</li>
                    <li className="flex items-center gap-4"><span className="w-2 h-2 bg-black rounded-full"></span> 100% Digital</li>
                  </ul>
               </div>
            </div>

            {/* Decorative Pulse */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>



  </div>
);

export default About;
