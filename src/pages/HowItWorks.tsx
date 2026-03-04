import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const steps = [
  { num: "1", title: "Get a Node Code", desc: "Find someone in your network who is already an Agenda Money Node. They'll share their unique code with you.", icon: "🔗" },
  { num: "2", title: "Fill the Application", desc: "Visit our online form and enter your personal details, Ghana Card information, and upload a selfie.", icon: "📋" },
  { num: "3", title: "Enter Your Node Code", desc: "Add the Node code from your trusted contact to link your application to their network.", icon: "🔑" },
  { num: "4", title: "Get Verified", desc: "Our team reviews your application in under 2 minutes using our smart trust-based scoring system.", icon: "✅" },
  { num: "5", title: "Receive Your Cash", desc: "Once approved, your loan is disbursed instantly to your MTN, Telecel, or AT Mobile Money wallet.", icon: "📲" },
  { num: "6", title: "Repay & Grow", desc: "Repay on time via Mobile Money. Build your credit score, unlock higher limits, and lower interest rates.", icon: "📈" },
];

const HowItWorks = () => (
  <div>
    {/* Hero */}
    <section className="pt-32 pb-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
          How It <span className="text-primary">Works</span>
        </motion.h1>
        <p className="text-muted-foreground max-w-xl mx-auto">From application to cash in your wallet — here's everything you need to know.</p>
      </div>
    </section>

    {/* Steps */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
          {steps.map((s) => (
            <motion.div key={s.num} variants={fadeUp} className="flex gap-6 items-start bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="text-3xl font-heading font-extrabold text-primary/30 min-w-[3rem] text-center">{s.num}</div>
              <div>
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Loan Terms */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-extrabold text-center mb-12">Loan Terms <span className="text-primary">Breakdown</span></h2>
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-heading font-semibold">Duration</th>
                <th className="text-left py-3 px-4 font-heading font-semibold">Interest</th>
                <th className="text-left py-3 px-4 font-heading font-semibold">Late Penalty</th>
                <th className="text-left py-3 px-4 font-heading font-semibold">Repayment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 day", "0.5%", "2%/day", "Mobile Money"],
                ["5 days", "2.5%", "2%/day", "Mobile Money"],
                ["10 days", "5%", "2%/day", "Mobile Money"],
                ["14 days", "7%", "2%/day", "Mobile Money / Direct Debit"],
                ["30 days (merit)", "15%", "2%/day", "Mobile Money / Direct Debit"],
              ].map(([d, i, p, r]) => (
                <tr key={d} className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">{d}</td>
                  <td className="py-3 px-4 text-primary font-semibold">{i}</td>
                  <td className="py-3 px-4 text-destructive">{p}</td>
                  <td className="py-3 px-4 text-muted-foreground">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Requirements */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-extrabold mb-10">What you need to <span className="text-primary">apply</span></h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {["Valid Ghana Card", "Selfie / Photo", "Personal details", "A Node code", "Mobile Money wallet"].map((r) => (
            <div key={r} className="flex items-center gap-2 bg-accent rounded-full px-6 py-3 border border-primary/20">
              <CheckCircle size={16} className="text-success" />
              <span className="text-sm font-medium">{r}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
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

export default HowItWorks;
