import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle, HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

import faqImg from "@/assets/ato-aikins-8X_PEkUdsQ4-unsplash.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const FAQs = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-secondary text-secondary-foreground overflow-hidden rounded-b-[4rem] lg:rounded-b-[6rem] shadow-2xl mx-4 lg:mx-8 mt-4 mb-20">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left">
            <motion.div variants={fadeUp} className="inline-block bg-white/20 backdrop-blur-md text-white font-bold px-6 py-3 rounded-full mb-8 tracking-wide text-sm uppercase">
              Support Center
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 leading-[1.05] tracking-tight text-white">
              Have <br/>
              <span className="text-primary italic">Questions?</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl opacity-90 leading-relaxed max-w-xl text-white/80 font-medium">
              Everything you need to know about Agenda Money. Find answers to our most common queries and learn how we can help you grow.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-[4rem] overflow-hidden aspect-[4/3] shadow-2xl border-8 border-white/10">
              <img src={faqImg} alt="Agenda Money Support" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* FAQ List - Bespoke Category Layout */}
    <section className="py-24 bg-background px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 overflow-visible">
          
          {/* Sidebar / Category Quick Links */}
          <div className="lg:col-span-3 lg:sticky lg:top-32 h-fit space-y-8 hidden lg:block">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#8A8A8A] border-b border-black/5 pb-6">Knowledge Base</h3>
            <nav className="space-y-4">
              {faqSections.map((section) => (
                <button 
                  key={section.title}
                  onClick={() => {
                    const el = document.getElementById(section.title.replace(/\s+/g, '-').toLowerCase());
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="block text-sm font-black text-[#1A1A1A] opacity-40 hover:opacity-100 hover:text-primary transition-all text-left uppercase tracking-widest"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Main FAQ Content */}
          <div className="lg:col-span-9 space-y-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {faqSections.map((section, sectionIdx) => (
                <div key={section.title} id={section.title.replace(/\s+/g, '-').toLowerCase()} className="mb-24 last:mb-0">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
                    <div>
                      <motion.div variants={fadeUp} className="w-12 h-1 bg-secondary mb-6"></motion.div>
                      <motion.h3 variants={fadeUp} className="text-3xl lg:text-4xl font-heading font-black text-[#1A1A1A] tracking-tight">
                        {section.title.split(' ')[0]} <br/>
                        <span className="text-primary italic">{section.title.split(' ').slice(1).join(' ')}</span>
                      </motion.h3>
                    </div>
                    <motion.div variants={fadeUp} className="text-xs font-black uppercase tracking-[0.2em] text-[#8A8A8A] bg-[#FAFAFA] px-6 py-3 rounded-full border border-black/5">
                      Section 0{sectionIdx + 1}
                    </motion.div>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-6">
                    {section.items.map((item, i) => (
                      <motion.div key={i} variants={fadeUp}>
                        <AccordionItem 
                          value={`${section.title}-${i}`} 
                          className="border border-black/5 rounded-[2.5rem] px-10 bg-white shadow-xl shadow-black/[0.02] hover:border-secondary/30 transition-all data-[state=open]:border-primary data-[state=open]:shadow-primary/5 group"
                        >
                          <AccordionTrigger className="text-xl font-heading font-black text-[#1A1A1A] hover:no-underline py-8 text-left group-data-[state=open]:text-primary transition-colors leading-snug">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-lg text-[#6A6A6A] pb-10 leading-relaxed font-medium">
                            <div className="pt-8 border-t border-black/5 flex gap-6 italic">
                               <div className="w-1.5 h-auto bg-secondary rounded-full opacity-50 shrink-0"></div>
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
      </div>
    </section>

  </div>
);

export default FAQs;
