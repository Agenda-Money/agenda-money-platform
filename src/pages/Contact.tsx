import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import contactImg from "@/assets/ali-mkumbwa-WUG0QcXVh0k-unsplash.webp";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    { icon: Mail, title: "Email Support", value: "support@agendamoney.com", href: "mailto:support@agendamoney.com", accent: "bg-primary/8 text-primary" },
    { icon: Phone, title: "Call Center", value: "0558587833", href: "tel:0558587833", accent: "bg-secondary/8 text-secondary" },
    { icon: MapPin, title: "Office Location", value: "Accra, Ghana", href: "#", accent: "bg-success/8 text-success" },
    { icon: Clock, title: "Business Hours", value: "Mon - Fri, 8am - 5pm", href: "#", accent: "bg-warning/10 text-warning" }
  ];

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-overlay text-primary-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-left">
              <motion.div variants={fadeUp} className="inline-block bg-white/8 text-white/70 font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide text-xs uppercase border border-white/10">
                Let's Talk
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-[1.08] tracking-tight">
                Get in <br /><span className="text-primary">Touch.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base lg:text-lg text-white/60 leading-relaxed max-w-md mb-8">
                Have a question or need financial support? Our team is here to help you navigate your journey.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="https://wa.me/233558587833" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 bg-success text-success-foreground rounded-full px-6 py-4 font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-success/20">
                  <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                  WhatsApp Support
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative w-full">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[16/10] lg:aspect-[4/5] shadow-2xl shadow-black/20 border border-white/5">
                <img src={contactImg} alt="Contact Agenda Money" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-14 lg:py-20 bg-background px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Contact cards */}
            <div className="lg:col-span-5 space-y-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-xl lg:text-2xl font-heading font-bold text-text-primary mb-6 text-center lg:text-left">Our Channels</motion.h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {contactMethods.map((method, i) => (
                    <motion.a key={i} href={method.href} variants={fadeUp} className="block p-4 rounded-xl border border-border/50 bg-surface-elevated shadow-sm transition-all group hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg shrink-0 ${method.accent} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                          <method.icon size={18} />
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-widest font-semibold text-text-muted mb-0.5">{method.title}</p>
                          <p className="text-sm font-semibold text-text-primary">{method.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface rounded-2xl p-5 lg:p-10 border border-border/50 relative overflow-hidden">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-14">
                    <div className="bg-success w-16 h-16 rounded-2xl flex items-center justify-center text-success-foreground mx-auto mb-5 shadow-lg shadow-success/20">
                      <Send size={24} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">Message Received!</h3>
                    <p className="text-text-secondary text-sm max-w-xs mx-auto">We'll get back to you within 24 business hours.</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-1">Send us a message</h3>
                    <p className="text-sm text-text-secondary mb-6">Fill the form below and we'll be in touch soon.</p>
                    
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                          <input type="text" required placeholder="Enter your name" className="w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold uppercase tracking-widest text-text-muted ml-1">Phone Number</label>
                          <input type="tel" required placeholder="0XX XXX XXXX" className="w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-text-muted ml-1">Email (Optional)</label>
                        <input type="email" placeholder="email@example.com" className="w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-text-muted ml-1">Subject</label>
                        <select required className="w-full appearance-none rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all cursor-pointer">
                          <option value="">Select a topic</option>
                          <option>General Enquiry</option>
                          <option>Loan Support</option>
                          <option>Node Partner Enquiry</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-text-muted ml-1">Your Message</label>
                        <textarea required placeholder="How can we help you?" rows={4} className="w-full rounded-xl border border-border/50 bg-surface-elevated px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none" />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl py-6 text-base font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 mt-1">
                        Send Message <Send className="ml-2" size={16} />
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
