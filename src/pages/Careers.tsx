import { motion } from "framer-motion";
import { Briefcase, Heart, Zap, Users, Shield } from "lucide-react";
import careersHeroImg from "@/assets/careers-hero.webp";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const values = [
  { icon: Heart, title: "People First", desc: "We put our customers and our team at the centre of everything we do.", color: "bg-primary/10 text-primary" },
  { icon: Zap, title: "Move Fast", desc: "We ship, iterate, and learn quickly. Bureaucracy has no place here.", color: "bg-amber-500/10 text-amber-500" },
  { icon: Shield, title: "Radical Honesty", desc: "Transparency is our currency — internally and externally.", color: "bg-secondary/10 text-secondary" },
  { icon: Users, title: "Team of Builders", desc: "We're a small, high-trust team where your impact is visible from day one.", color: "bg-blue-500/10 text-blue-500" },
];

const Careers = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">

    {/* Hero */}
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 text-white overflow-hidden rounded-b-[3rem] lg:rounded-b-[6rem] shadow-2xl mx-2 lg:mx-8 mt-4">
      {/* Background image + strong dark overlay */}
      <div className="absolute inset-0 z-0">
        <img src={careersHeroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[#0F0F0F]/85" />
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary opacity-5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-6 py-3 rounded-full mb-8 tracking-wide text-sm uppercase">
            Join the Team
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold mb-6 lg:mb-8 leading-[1.05] tracking-tight text-white drop-shadow-lg">
            Be a game changer, <br/>
            <span className="text-primary italic">Challenge the status quo.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow">
            We're on a mission to put credit in the hands of every hardworking African. If that excites you, you're in the right place.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 lg:py-32 bg-background px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#1A1A1A] tracking-tight mb-4">
              Why work at <span className="text-primary italic">Agenda Money?</span>
            </h2>
            <p className="text-lg text-[#6A6A6A] font-medium max-w-xl mx-auto">
              We're building something meaningful — and we do it with a culture we're proud of.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#FAFAFA] border border-black/5 rounded-[2.5rem] p-8 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${v.color} group-hover:scale-110 transition-transform`}>
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-heading font-black text-[#1A1A1A] mb-2">{v.title}</h3>
                <p className="text-sm text-[#6A6A6A] leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Open Roles */}
    <section className="py-16 lg:py-24 bg-accent rounded-[3rem] lg:rounded-[6rem] mx-2 lg:mx-8 mb-12 lg:mb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary opacity-5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-2xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="w-20 h-20 bg-white rounded-[1.75rem] flex items-center justify-center text-primary shadow-xl mx-auto mb-8 border border-black/5">
            <Briefcase size={36} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-black text-[#1A1A1A] tracking-tight mb-4">
            Open Roles
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#6A6A6A] font-medium leading-relaxed mb-6">
            No job openings at the moment.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm text-[#8A8A8A] font-medium">
            Check back later — we're growing fast.
          </motion.p>
        </motion.div>
      </div>
    </section>

  </div>
);

export default Careers;
