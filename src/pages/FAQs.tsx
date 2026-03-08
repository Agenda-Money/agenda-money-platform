import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqImg from "@/assets/ato-aikins-8X_PEkUdsQ4-unsplash.jpg";

const faqSections = [
  {
    title: "About Agenda Money",
    items: [
      { q: "What is Agenda Money?", a: "Agenda Money is an online micro-loan product designed to support individuals and SMEs in times of need." },
      { q: "When did Agenda Money start?", a: "We have been operating since June 2024." },
      { q: "Is Agenda Money registered?", a: "Yes. Agenda Money Limited is a member of the Micro Credit Association of Ghana (MCAG)." },
    ],
  },
  {
    title: "Eligibility & Requirements",
    items: [
      { q: "Who qualifies for a loan?", a: "Any Ghanaian national who is 18 years and above, holds a valid Ghana Card, and has the ability and willingness to repay loans." },
      { q: "What information is needed to apply?", a: "Personal details, a copy of your Ghana Card, a selfie, your loan request details, and a valid Node code." },
    ],
  },
  {
    title: "Nodes & Connections",
    items: [
      { q: "Who is a Node?", a: "Nodes are individuals or businesses profiled by Agenda Money as low-risk customers. They can recommend people in their network using their unique Node code and can apply for loans without restriction." },
      { q: "Who is a Connection?", a: "Connections are people or businesses within a Node's network. They can only apply for a loan using a Node's code." },
      { q: "How do I become a Node?", a: "Connections who successfully repay 5 loans automatically become Nodes. You can also call us on 0558587833 for assessment and registration via other routes." },
    ],
  },
  {
    title: "Loan Details",
    items: [
      { q: "How much can I borrow?", a: "Applicants can access between GHS 50 and GHS 2,000 depending on their qualification and repayment history." },
      { q: "What are the loan durations?", a: "1, 5, 10, 14, and 30 days. You only pay interest for the days you are indebted." },
      { q: "What is the interest rate?", a: "0.5% per day. E.g., 3.5% for 7 days, 7% for 14 days." },
      { q: "What happens if I repay late?", a: "A penal interest of 2% per day applies on any overdue amount." },
      { q: "What happens if I don't repay?", a: "After all recovery measures are exhausted, the borrower is blacklisted and cannot access new loans. The credit record is shared with Ghana's Credit Bureau. Connections within the defaulter's network may also be negatively affected." },
    ],
  },
  {
    title: "Repayment",
    items: [
      { q: "How do I repay my loan?", a: "Via Mobile Money (MTN, Telecel, or AT) to Agenda Money's dedicated MoMo number, using your first name or Node code as reference. Direct debit is also available." },
    ],
  },
  {
    title: "Application Process",
    items: [
      { q: "How do I apply?", a: "Online via our application link. Nodes can apply anytime. Connections require a Node code from their network." },
      { q: "How long does approval take?", a: "Minutes." },
      { q: "Is the process entirely online?", a: "Yes. No branch visit, no queues, no paperwork." },
    ],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const FAQs = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* Hero */}
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left">
            <motion.div variants={fadeUp} className="inline-block bg-white/15 backdrop-blur-sm text-white font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide text-xs uppercase border border-white/10">
              Support Center
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
              Have <br /><span className="text-primary">Questions?</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base lg:text-lg opacity-80 leading-relaxed max-w-lg text-white">
              Everything you need to know about Agenda Money. Find answers to our most common queries.
            </motion.p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10 border border-white/10">
              <img src={faqImg} alt="Agenda Money Support" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* FAQ List */}
    <section className="py-16 lg:py-24 bg-background px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Sidebar */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 h-fit space-y-6 hidden lg:block">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-muted border-b border-border pb-4">Knowledge Base</h3>
            <nav className="space-y-2.5">
              {faqSections.map((section) => (
                <button 
                  key={section.title}
                  onClick={() => {
                    const el = document.getElementById(section.title.replace(/\s+/g, '-').toLowerCase());
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="block text-xs font-semibold text-text-secondary hover:text-primary transition-colors text-left"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {faqSections.map((section, sectionIdx) => (
                <div key={section.title} id={section.title.replace(/\s+/g, '-').toLowerCase()} className="mb-16 last:mb-0">
                  <div className="flex items-end justify-between mb-6 gap-4">
                    <div>
                      <div className="w-8 h-0.5 bg-secondary mb-3" />
                      <motion.h3 variants={fadeUp} className="text-2xl lg:text-3xl font-heading font-bold text-text-primary tracking-tight">
                        {section.title}
                      </motion.h3>
                    </div>
                    <motion.div variants={fadeUp} className="text-[10px] font-semibold uppercase tracking-widest text-text-muted bg-surface px-3 py-1.5 rounded-full border border-border/50 shrink-0">
                      0{sectionIdx + 1}
                    </motion.div>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-3">
                    {section.items.map((item, i) => (
                      <motion.div key={i} variants={fadeUp}>
                        <AccordionItem 
                          value={`${section.title}-${i}`} 
                          className="border border-border/50 rounded-xl px-6 bg-surface-elevated hover:border-primary/20 transition-all data-[state=open]:border-primary/30 data-[state=open]:shadow-sm group"
                        >
                          <AccordionTrigger className="text-base font-heading font-semibold text-text-primary hover:no-underline py-5 text-left group-data-[state=open]:text-primary transition-colors leading-snug">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-text-secondary pb-6 leading-relaxed">
                            <div className="pt-4 border-t border-border/50 flex gap-4">
                              <div className="w-1 h-auto bg-secondary/30 rounded-full shrink-0" />
                              {item.a}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Still have questions */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 bg-surface rounded-2xl p-8 lg:p-12 border border-border/50 text-center">
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">Still have questions?</h3>
          <p className="text-text-secondary text-sm mb-6">Get in touch — our team responds within 24 hours on business days.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href="mailto:support@agendamoney.com" className="inline-flex items-center gap-2 bg-surface-elevated border border-border/50 px-4 py-2.5 rounded-xl text-sm font-semibold text-text-primary hover:border-primary/20 transition-all">
              <Mail size={14} className="text-primary" /> support@agendamoney.com
            </a>
            <a href="tel:0558587833" className="inline-flex items-center gap-2 bg-surface-elevated border border-border/50 px-4 py-2.5 rounded-xl text-sm font-semibold text-text-primary hover:border-secondary/20 transition-all">
              <Phone size={14} className="text-secondary" /> 0558587833
            </a>
            <a href="https://wa.me/233558587833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-success text-success-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
          <Link to="/#apply">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
              Ready to apply? Apply Now <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default FAQs;
