import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, HandCoins } from "lucide-react";

import beatriceImg from "@/assets/beatrice.jpg";
import osmanImg from "@/assets/osman.jpg";
import akuImg from "@/assets/aku.jpg";
import owusuImg from "@/assets/owusu.jpg";
import mrAmuzuImg from "@/assets/mr amuzu.jpg";
import aliImg from "@/assets/ali-received.webp";
import backboneImg from "@/assets/backbone.webp";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const personas = [
  { name: "Beatrice", role: "Seamstress", story: "Fresh out of dressmaking school, Beatrice uses Agenda Money to buy fabrics and accessories. She's already built a loyal customer base in her community.", image: beatriceImg },
  { name: "Osman", role: "MoMo Agent", story: "Osman's Mobile Money business depends on having enough float. AM loans keep his e-cash topped up so he never has to turn customers away.", image: osmanImg },
  { name: "Aku", role: "Market Trader", story: "A single mother of three, Aku relies on AM loans for medical emergencies and to restock her market stall with provisions every week.", image: akuImg },
  { name: "Owusu", role: "Fan Milk Seller", story: "Riding in the hot sun all day is not fun for Owusu but he's not giving up on his dream. He uses AM loans to augment his working capital while saving for accommodation.", image: owusuImg },
  { name: "Mr. Amuzu", role: "Parent", story: "Mr. Amuzu relies on AM loans to buy stationery for his son Kojo, a pupil of Awoyo L/A primary school. Kojo dreams of being a pilot one day.", image: mrAmuzuImg },
  { name: "Ali", role: "Carpenter", story: "Ali runs a busy carpentry shop. When large lumber orders come in, he depends on Agenda Money for quick, hassle-free capital to meet deadlines.", image: aliImg },
];

const WhoWeServe = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* HERO */}
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={backboneImg} alt="Backbone of Ghana" className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="inline-block bg-white/15 backdrop-blur-sm text-white font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide text-xs uppercase border border-white/10">
            Real Stories. Real Impact.
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight">
            Empowering the <br /><span className="text-secondary">Backbone</span> of Ghana
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg opacity-85 leading-relaxed max-w-xl mx-auto">
            Ghana's informal sector employs 80% of the workforce but contributes only 27% to GDP — we're here to change that.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* PERSONAS */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-24 md:mb-32">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary">Meet our <span className="text-primary">Champions</span></motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-28 max-w-6xl mx-auto">
          {personas.map((p) => (
            <motion.div key={p.name} variants={fadeUp} className="relative bg-surface border border-border/50 rounded-2xl lg:rounded-3xl p-6 md:p-8 pt-24 md:pt-28 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="absolute -top-20 md:-top-24 left-1/2 -translate-x-1/2">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-primary/15">
                  <img src={p.image} alt={p.name} className="w-full h-full rounded-full object-cover border-4 border-background" loading="lazy" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl text-text-primary mb-1">{p.name}</h3>
              <p className="inline-block bg-surface-elevated text-secondary font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 border border-border/50 text-xs">{p.role}</p>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">{p.story}</p>
              <div className="mt-5 flex gap-0.5">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-warning fill-warning" />)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* MARKET OPPORTUNITY */}
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-5">
            <motion.div variants={fadeUp} className="inline-block bg-primary/8 text-primary font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase text-xs border border-primary/10">The Gap</motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-text-primary leading-[1.1] tracking-tight mb-6">
              Closing the <br /><span className="text-secondary">$5 Billion</span> <br />Credit Gap.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-text-secondary leading-relaxed mb-8">
              The SME credit gap in Sub-Saharan Africa exceeds US$330 billion. In Ghana alone, that gap is over US$5 billion. Agenda Money is here to close it — one sustainable micro-loan at a time.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/#apply">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
                  Join the Movement <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div variants={fadeUp} className="bg-surface-elevated rounded-2xl p-7 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="bg-secondary/8 w-12 h-12 rounded-xl flex items-center justify-center text-secondary mb-5">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-3">Financial Inclusion</h3>
                <p className="text-text-secondary text-sm leading-relaxed">We provide capital to Ghanaians locked out of traditional banking due to lack of collateral or formal histories.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-primary text-primary-foreground rounded-2xl p-7 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">
                <div className="bg-white/15 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5">
                  <HandCoins size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Nationwide Access</h3>
                <p className="text-white/80 text-sm leading-relaxed">Based in Accra, we serve all 16 regions. Our online platform ensures distance is never a barrier.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default WhoWeServe;
