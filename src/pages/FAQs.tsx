import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
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
      { q: "How much can I borrow?", a: "First-time applicants can access between GHS 50 ($5) and GHS 300 ($30). The limit grows up to GHS 2,000 ($200) over time based on repayment history." },
      { q: "What are the loan durations?", a: "1, 5, 10, and 14 days. A 30-day option is available on merit. You only pay interest for the days you are indebted." },
      { q: "What is the interest rate?", a: "0.5% per day. This reduces as your credit score increases. E.g., 3.5% for 7 days, 7% for 14 days." },
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
      { q: "How long does approval take?", a: "Under 2 minutes." },
      { q: "Is the process entirely online?", a: "Yes. No branch visit, no queues, no paperwork." },
    ],
  },
];

const FAQs = () => (
  <div>
    <section className="pt-32 pb-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to know about Agenda Money.</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {faqSections.map((section) => (
          <div key={section.title} className="mb-10">
            <h3 className="text-lg font-heading font-bold text-primary mb-4">{section.title}</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {section.items.map((item, i) => (
                <AccordionItem key={i} value={`${section.title}-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:border-primary data-[state=open]:bg-accent">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>

    {/* Still have questions */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-heading font-extrabold mb-8">Still have questions?</h3>
        <div className="bg-accent border border-primary/20 rounded-2xl p-8 max-w-md mx-auto space-y-4">
          <a href="mailto:support@agendamoney.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors"><Mail size={18} className="text-primary" /> support@agendamoney.com</a>
          <a href="tel:0558587833" className="flex items-center gap-3 text-sm hover:text-primary transition-colors"><Phone size={18} className="text-primary" /> 0558587833</a>
          <a href="https://wa.me/233558587833" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"><MessageCircle size={18} className="text-secondary" /> Chat on WhatsApp</a>
        </div>
        <div className="mt-10">
          <Link to="/#apply">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold">
              Ready to apply? Apply Now <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default FAQs;
