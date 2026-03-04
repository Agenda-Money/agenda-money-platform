import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, HandCoins } from "lucide-react";

import beatriceImg from "@/assets/beatrice.jpg";
import osmanImg from "@/assets/osman.jpg";
import akuImg from "@/assets/aku.jpg";
import owusuImg from "@/assets/owusu.jpg";
import mrAmuzuImg from "@/assets/mr amuzu.jpg";
import aliImg from "@/assets/ali-received.jpg";
import backboneImg from "@/assets/backbone.webp";
import iphoneImg from "@/assets/iPhone 3_.png";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// Full list of personas for this page (excluding the 3 on Home to avoid duplication if desired, or showing all. Let's show the remaining 5 as requested)
const personas = [
  { name: "Beatrice", role: "Seamstress", story: "Fresh out of dressmaking school, Beatrice uses Agenda Money to buy fabrics and accessories. She's already built a loyal customer base in her community.", image: beatriceImg },
  { name: "Osman", role: "MoMo Agent", story: "Osman's Mobile Money business depends on having enough float. AM loans keep his e-cash topped up so he never has to turn customers away.", image: osmanImg },
  { name: "Aku", role: "Market Trader", story: "A single mother of three, Aku relies on AM loans for medical emergencies and to restock her market stall with provisions every week.", image: akuImg },
  { name: "Owusu", role: "Fan Milk Seller", story: "Riding in the hot sun all day is not fun for Owusu the Fan Milk seller but he’s not giving up on his dream to rent a studio flat this year. He uses AM loans to augment his working capital while saving for his accommodation.", image: owusuImg },
  { name: "Mr. Amuzu", role: "Parent", story: "Mr. Amuzu relies on AM loans to buy stationery for his son Kojo, a pupil of Awoyo L/A primary school. Kojo dreams of being a pilot one day and flying his family around the world.", image: mrAmuzuImg },
  { name: "Ali", role: "Carpenter", story: "Ali runs a busy carpentry shop. When large lumber orders come in, he depends on Agenda Money for quick, hassle-free capital. These loans ensure he always has the materials to meet his deadlines on time.", image: aliImg },
];

const WhoWeServe = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* HERO SECTION */}
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-primary text-primary-foreground overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl mx-4 lg:mx-8 mt-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={backboneImg} alt="Backbone of Ghana" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="inline-block bg-white/20 backdrop-blur-md text-white font-bold px-6 py-3 rounded-full mb-8 tracking-wide text-sm uppercase">
            Real Stories. Real Impact.
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 leading-[1.1] tracking-tight">
            Empowering the <br/>
            <span className="text-secondary">Backbone</span> of Ghana
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            Ghana's informal sector employs 80% of the workforce but contributes only 27% to GDP — we're here to change that narrative.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* PERSONAS GRID */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-32 md:mb-40">
           <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-[#1A1A1A]">Meet our <span className="text-primary">Champions</span></motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32 max-w-7xl mx-auto">
          {personas.map((p) => (
            <motion.div key={p.name} variants={fadeUp} className="relative bg-[#FAFAFA] border border-black/5 rounded-[3rem] p-8 md:p-10 pt-28 md:pt-36 shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center">
              <div className="absolute -top-24 md:-top-28 left-1/2 -translate-x-1/2">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-primary to-secondary shadow-2xl shadow-primary/20">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full rounded-full object-cover border-[6px] border-white"
                  />
                </div>
              </div>
              <h3 className="font-heading font-black text-3xl text-[#1A1A1A] mb-2">{p.name}</h3>
              <p className="inline-block bg-white text-secondary font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5 text-sm">{p.role}</p>
              <p className="text-[#6A6A6A] text-lg leading-relaxed flex-grow">{p.story}</p>
              <div className="mt-8 flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* SPLIT LAYOUT: MARKET OPPORTUNITY (Fido Score Style) */}
    <section className="py-24 lg:py-32 bg-accent/50 border-t border-primary/10 rounded-t-[3rem] lg:rounded-t-[5rem] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center max-w-[90rem] mx-auto relative">
          
          {/* Left: Giant Text Anchors (4 cols) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-4 lg:pr-12">
            <motion.div variants={fadeUp} className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase text-sm">The Gap</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
              Closing the <br/><span className="text-secondary font-black">$5 Billion</span> <br/>Credit Gap.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg lg:text-xl text-[#6A6A6A] leading-relaxed mb-10">
              The SME credit gap in Sub-Saharan Africa exceeds US$330 billion. In Ghana alone, that gap is over US$5 billion. Agenda Money is here to close it — one sustainable micro-loan at a time.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/#apply">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-white rounded-full px-12 py-8 text-xl font-bold shadow-xl shadow-primary/30 transition-transform hover:-translate-y-1">
                  Join the Movement <ArrowRight className="ml-2" size={24} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Middle: Floating Info Cards (5 cols) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-5 relative">
             {/* Decorative background blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-[60px] pointer-events-none"></div>

             <div className="grid sm:grid-cols-1 gap-6 relative">
               <motion.div variants={fadeUp} className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-2xl shadow-black/5 border border-black/5 flex flex-col relative z-20 hover:-translate-y-2 transition-transform h-full">
                 <div className="bg-secondary/10 w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-full flex items-center justify-center text-secondary mb-6 lg:mb-8">
                   <TrendingUp size={28} className="lg:w-10 lg:h-10" />
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-heading font-black text-[#1A1A1A] mb-3 lg:mb-4">Financial Inclusion</h3>
                 <p className="text-[#6A6A6A] text-base lg:text-lg leading-relaxed flex-grow">We provide capital to ambitious Ghanaians who are locked out of the traditional banking system due to lack of collateral or formal histories.</p>
               </motion.div>

               <motion.div variants={fadeUp} className="bg-primary text-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-2xl shadow-primary/30 flex flex-col relative z-20 hover:-translate-y-2 transition-transform h-full">
                 <div className="bg-white/20 w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-full flex items-center justify-center text-white mb-6 lg:mb-8">
                   <HandCoins size={28} className="lg:w-10 lg:h-10" />
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-heading font-black mb-3 lg:mb-4">Nationwide Access</h3>
                 <p className="text-white/90 text-base lg:text-lg leading-relaxed flex-grow">Based in Accra, we serve all 16 regions of Ghana. Our 100% online platform ensures distance is never a barrier to opportunity.</p>
               </motion.div>
             </div>
          </motion.div>

          {/* Right: iPhone Mockup (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
            className="lg:col-span-3 hidden xl:flex items-center justify-center relative group"
          >
             <div className="relative w-full max-w-[280px] aspect-[1/2] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
               <img src={iphoneImg} alt="Agenda Money Mobile App" className="w-full h-full object-contain" />
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
             
             {/* Decorative blurred rings behind phone */}
             <div className="absolute inset-0 -z-10 bg-primary/5 rounded-full blur-3xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>

        </div>
      </div>
    </section>

  </div>
);

export default WhoWeServe;
