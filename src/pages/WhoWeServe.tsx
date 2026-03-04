import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const personas = [
  { name: "Adiza", role: "Hairstylist", story: "Adiza uses Agenda Money loans to purchase hair kits and braiding materials for her clients. She's saving toward opening her own salon in Madina market.", emoji: "💇‍♀️" },
  { name: "Alex", role: "Taxi Driver", story: "Alex accesses quick loans when fuel prices spike. The fast turnaround means his taxi never stops running — keeping his family fed and his passengers moving.", emoji: "🚕" },
  { name: "Kofi", role: "Poultry Farmer", story: "Kofi manages a 500-crate-a-day egg operation in Nsawam. He uses AM loans to purchase feed on time and maintain consistent production.", emoji: "🐔" },
  { name: "Beatrice", role: "Seamstress", story: "Fresh out of dressmaking school, Beatrice uses Agenda Money to buy fabrics and accessories. She's already built a loyal customer base in her community.", emoji: "🧵" },
  { name: "Osman", role: "MoMo Agent", story: "Osman's Mobile Money business depends on having enough float. AM loans keep his e-cash topped up so he never has to turn customers away.", emoji: "📱" },
  { name: "Aku", role: "Market Trader", story: "A single mother of three, Aku relies on AM loans for medical emergencies and to restock her market stall with provisions every week.", emoji: "🛒" },
  { name: "Kweku", role: "Carpenter", story: "Kweku takes on furniture orders using AM loans to buy wood and finishing materials. Each completed project pays back the loan and grows his workshop.", emoji: "🪚" },
  { name: "Fatima", role: "Food Vendor", story: "Fatima runs a popular waakye joint in Nima. She uses AM loans to buy bulk ingredients at the start of each week to keep her business going.", emoji: "🍛" },
];

const WhoWeServe = () => (
  <div>
    <section className="pt-32 pb-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
          Empowering the <span className="text-primary">Backbone</span> of Ghana's Economy
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Ghana's informal sector employs 80% of the workforce but contributes only 27% to GDP — we're here to change that.</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-heading font-extrabold mb-6">The Market <span className="text-primary">Opportunity</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-8">The SME credit gap in Sub-Saharan Africa exceeds US$330 billion. In Ghana alone, that gap is over US$5 billion. Agenda Money is here to close it — one loan at a time.</p>
        <div className="bg-accent rounded-2xl p-8 border border-primary/20">
          <p className="text-lg font-heading font-bold text-primary">Nationwide Access</p>
          <p className="text-sm text-muted-foreground mt-2">Based in Accra. Serving all 16 regions of Ghana — 100% online.</p>
        </div>
        <div className="mt-10">
          <Link to="/#apply">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold">
              Apply Now <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default WhoWeServe;
