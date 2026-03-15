import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, HandCoins } from "lucide-react";

import beatriceImg from "@/assets/beatrice.webp";
import osmanImg from "@/assets/osman.png";
import akuImg from "@/assets/aku.webp";
import owusuImg from "@/assets/owusu.jpg";
import fanmilkImg from "@/assets/fanmilk.jpg";
import mrAmuzuImg from "@/assets/mr amuzu.webp";
import aliImg from "@/assets/ali-received.webp";
import backboneImg from "@/assets/backbone.webp";
import { InclusionIcon, AfricaIcon } from "@/components/icons";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// Full list of personas for this page (excluding the 3 on Home to avoid duplication if desired, or showing all. Let's show the remaining 5 as requested)
const personas = [
  { name: "Aku", role: "Market Trader", story: "A single mother of three who relies on Agenda Money for emergencies and weekly restocking of her shop.", image: akuImg, pos: "center top" },
  { name: "Ali", role: "Carpenter", story: "Relies on Agenda Money for quick capital when large lumber orders arrive, keeping deadlines on track.", image: aliImg, pos: "center top" },
  { name: "Mr. Amuzu", role: "Parent", story: "Funds school supplies for his son Kojo through Agenda Money — nurturing tomorrow's leaders today.", image: mrAmuzuImg, pos: "center top" },
  { name: "Beatrice", role: "Seamstress", story: "Uses Agenda Money to buy fabrics and grow her loyal clientele — one stitch at a time.", image: beatriceImg, pos: "70% top" },
  { name: "Osman", role: "MoMo Agent", story: "Keeps his Mobile Money float topped up with Agenda Money loans so no customer is ever turned away.", image: osmanImg, pos: "center top" },
  { name: "Owusu", role: "Fan Milk Seller", story: "Supplements his working capital with Agenda Money loans while saving toward his own accommodation.", image: fanmilkImg, pos: "center top" },
];

const WhoWeServe = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* HERO SECTION */}
    <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 bg-[#FAFAFA] overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem] shadow-sm border-b border-black/5 mx-2 lg:mx-8 mt-4 mb-4 lg:mb-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={backboneImg} alt="Backbone of Africa" className="w-full h-full object-cover opacity-50" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="inline-block bg-white/20 backdrop-blur-md text-white font-bold px-6 py-3 rounded-full mb-8 tracking-wide text-sm uppercase">
            Real Stories. Real Impact.
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            Empowering the <br/>
            <span className="text-secondary">Backbone</span> of Africa
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto text-white">
            Across Sub-Saharan Africa, the informal sector employs over 85% of the workforce — yet contributes only 41% to GDP. We're here to change the narrative.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* PERSONAS GRID */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-12 lg:mb-16">
           <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-[#1A1A1A]">Meet our <span className="text-primary">Champions</span></motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {personas.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="group relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/15 hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                style={{ objectPosition: p.pos }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {p.role}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-heading font-black text-2xl lg:text-3xl text-white mb-1 leading-tight drop-shadow-lg">{p.name}</h3>
                <div className="w-10 h-[3px] bg-primary rounded-full mb-3 group-hover:w-20 transition-all duration-500" />
                <p className="text-white/75 text-sm font-medium leading-relaxed line-clamp-3">{p.story}</p>
              </div>
              <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] ring-0 group-hover:ring-2 group-hover:ring-primary/70 transition-all duration-500 pointer-events-none" />
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
              Closing the <br/><span className="text-secondary font-black">$5 Billion</span> <br/>Credit Gap
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg lg:text-xl text-[#6A6A6A] leading-relaxed mb-10">
              The SME credit gap in Sub-Saharan Africa exceeds US$330 billion. Agenda Money is here to close it — one sustainable microloan at a time.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/#apply">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-white rounded-full px-12 py-8 text-xl font-bold shadow-xl shadow-primary/30 transition-transform hover:-translate-y-1">
                  Join the Movement <ArrowRight className="ml-2" size={24} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Info Cards (8 cols) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-8 relative">
             {/* Decorative background blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-[60px] pointer-events-none"></div>

             <div className="grid md:grid-cols-2 gap-8 relative">
               <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 border border-black/5 flex flex-col relative z-20 hover:-translate-y-2 transition-transform h-full">
                 <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center text-secondary mb-8">
                   <InclusionIcon size={40} />
                 </div>
                 <h3 className="text-3xl font-heading font-black text-[#1A1A1A] mb-4">Financial Inclusion</h3>
                 <p className="text-[#6A6A6A] text-lg leading-relaxed flex-grow">We provide capital to ambitious individuals who are locked out of the traditional banking system due to lack of collateral or financial histories.</p>
               </motion.div>

                <motion.div variants={fadeUp} className="bg-primary text-white rounded-[2.5rem] p-10 shadow-xl shadow-primary/30 flex flex-col relative z-20 hover:-translate-y-2 transition-transform h-full">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center text-white mb-8">
                    <AfricaIcon size={40} />
                  </div>
                  <h3 className="text-3xl font-heading font-black mb-4">Pan African Access</h3>
                  <p className="text-white/90 text-lg leading-relaxed flex-grow">Headquartered in Ghana, we are building Africa’s most accessible digital lending platform to give credit where it’s due. Our goal is to empower the REAL economy of Africa to realize its true potential</p>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>

  </div>
);

export default WhoWeServe;
