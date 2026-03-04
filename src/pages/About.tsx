import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield, Lightbulb, TrendingUp } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const team = [
  { name: "Charles Badu", title: "Founder / Business Development" },
  { name: "Evelyn Braithwaite", title: "Co-Founder / Advisor" },
  { name: "Enoch Tetteh Clottei", title: "Head of Credit" },
  { name: "Enoch Alberto Aryee", title: "Marketing" },
  { name: "Bernard Owusu-Dankwah", title: "Tech Lead" },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="pt-32 pb-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-primary-foreground">
          We are <span className="text-primary">Agenda Money</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto opacity-80 leading-relaxed">
          We're on a mission to empower individuals and micro-businesses by providing affordable and easily accessible digital financial services — credit first. We believe one of the keys to unlocking Africa's economic potential is empowering the informal sector through accessible, affordable credit.
        </p>
      </div>
    </section>

    {/* Vision */}
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-heading font-extrabold mb-6">Our <span className="text-primary">Vision</span></h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our goal is to build and manage a loan book of $5 million with 100,000 active customers by 2030.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-extrabold text-center mb-12">Our <span className="text-primary">Values</span></h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Community First", color: "text-primary" },
            { icon: Zap, title: "Speed & Simplicity", color: "text-secondary" },
            { icon: Shield, title: "Trust & Transparency", color: "text-success" },
            { icon: Lightbulb, title: "Innovation", color: "text-warning" },
          ].map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <v.icon className={`mx-auto mb-4 ${v.color}`} size={36} />
              <h3 className="font-heading font-bold">{v.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-extrabold text-center mb-4">The People Behind <span className="text-primary">Agenda Money</span></h2>
        <p className="text-center text-muted-foreground mb-12">Combined 65+ years of experience across Fintech, digital lending, financial inclusion, banking, and social services.</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-primary">{t.name[0]}</span>
              </div>
              <h4 className="font-heading font-bold text-sm">{t.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{t.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Memberships */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-heading font-bold mb-6">Memberships & Affiliations</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="bg-muted rounded-xl px-8 py-4 font-heading font-semibold text-sm border border-border">MCAG Member</div>
          <div className="bg-muted rounded-xl px-8 py-4 font-heading font-semibold text-sm border border-border">G.I.A.C. Portfolio Company</div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { num: "300+", label: "Active Customers", color: "text-primary" },
            { num: "GHS 560K", label: "Total Disbursed", color: "text-secondary" },
            { num: "0.25%", label: "Default Rate", color: "text-success" },
            { num: "95%", label: "Retention Rate", color: "text-primary" },
          ].map((s) => (
            <div key={s.label}>
              <div className={`text-3xl font-heading font-extrabold ${s.color}`}>{s.num}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-center text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-extrabold mb-6 text-primary-foreground">Join our growing community</h2>
        <Link to="/#apply">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 py-6 text-lg font-semibold">
            Apply Now <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default About;
