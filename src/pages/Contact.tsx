import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import contactImg from "@/assets/ali-mkumbwa-WUG0QcXVh0k-unsplash.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    { 
      icon: Mail, 
      title: "Email Support", 
      value: "support@agendamoney.com", 
      href: "mailto:support@agendamoney.com",
      color: "bg-primary/10 text-primary",
      borderColor: "hover:border-primary/30"
    },
    { 
      icon: Phone, 
      title: "Call Center", 
      value: "0558587833", 
      href: "tel:0558587833",
      color: "bg-secondary/10 text-secondary",
      borderColor: "hover:border-secondary/30"
    },
    { 
      icon: MapPin, 
      title: "Office Location", 
      value: "Accra, Ghana", 
      href: "#",
      color: "bg-emerald-500/10 text-emerald-500",
      borderColor: "hover:border-emerald-500/30"
    },
    { 
      icon: Clock, 
      title: "Business Hours", 
      value: "Mon - Fri, 8am - 5pm", 
      href: "#",
      color: "bg-orange-500/10 text-orange-500",
      borderColor: "hover:border-orange-500/30"
    }
  ];

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#1A1A1A] text-white overflow-hidden rounded-b-[4rem] lg:rounded-b-[6rem] shadow-2xl mx-4 lg:mx-8 mt-4 mb-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary opacity-5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-left w-full lg:w-auto">
              <motion.div variants={fadeUp} className="inline-block bg-white/10 backdrop-blur-md text-white font-bold px-6 py-3 rounded-full mb-8 tracking-wide text-sm uppercase">
                Let's Talk
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 leading-[1.05] tracking-tight text-white">
                Get in <br/>
                <span className="text-primary italic">Touch.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-white/70 leading-relaxed max-w-lg mb-10">
                Have a question or need financial support? Our team is here to help you navigate your journey with ease.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/233558587833" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-3 bg-[#25D366] text-white rounded-full px-8 py-5 font-bold hover:scale-105 transition-all shadow-xl shadow-green-500/20"
                >
                  <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                  WhatsApp Support
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }} 
              animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 0.8 }} 
              className="relative w-full"
            >
              <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden aspect-[16/10] lg:aspect-[4/5] shadow-2xl border-4 lg:border-8 border-white/5">
                <img src={contactImg} alt="Contact Agenda Money" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-24 bg-background px-2 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Side: Cards */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-heading font-black text-[#1A1A1A] mb-8 lg:mb-10 px-4 lg:px-0 text-center lg:text-left">Our Channels</motion.h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 px-4 lg:px-0">
                  {contactMethods.map((method, i) => (
                    <motion.a 
                      key={i}
                      href={method.href}
                      variants={fadeUp}
                      className={`block p-5 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-black/[0.02] transition-all group ${method.borderColor} hover:-translate-y-1`}
                    >
                      <div className="flex items-center gap-4 lg:gap-6">
                        <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl shrink-0 ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <method.icon size={24} className="lg:w-7 lg:h-7" />
                        </div>
                        <div>
                          <p className="text-[9px] lg:text-[10px] uppercase tracking-widest font-black text-[#8A8A8A] mb-1">{method.title}</p>
                          <p className="text-base lg:text-lg font-bold text-[#1A1A1A]">{method.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div variants={fadeUp} className="mt-10 lg:mt-12 pt-10 lg:pt-12 border-t border-black/5 px-4 lg:px-0 text-center lg:text-left">
                  <p className="font-heading font-black text-[10px] lg:text-xs uppercase tracking-widest text-[#8A8A8A] mb-6">Stay Connected</p>
                  <div className="flex gap-4 justify-center lg:justify-start">
                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-black/5 flex items-center justify-center text-[#6A6A6A] hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <Icon size={18} className="lg:w-5 lg:h-5" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                className="bg-[#FAFAFA] rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 border border-black/5 shadow-2xl relative overflow-hidden mx-2 lg:mx-0"
              >
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-5 rounded-full blur-[80px] pointer-events-none"></div>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 lg:py-20">
                    <div className="bg-emerald-500 w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-white mx-auto mb-6 lg:mb-8 shadow-2xl shadow-emerald-500/30">
                      <Send size={32} className="lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-heading font-black text-[#1A1A1A] mb-3 lg:mb-4">Message Received!</h3>
                    <p className="text-[#6A6A6A] text-lg lg:text-xl max-w-sm mx-auto">We'll get back to you within 24 business hours. Thank you for reaching out!</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl lg:text-3xl font-heading font-black text-[#1A1A1A] mb-2">Send us a message</h3>
                    <p className="text-base text-[#6A6A6A] font-medium mb-8 lg:mb-10">Fill the form below and we'll be in touch soon.</p>
                    
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Full Name</label>
                          <input type="text" required placeholder="Enter your name" className="w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Phone Number</label>
                          <input type="tel" required placeholder="0XX XXX XXXX" className="w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Email (Optional)</label>
                        <input type="email" placeholder="email@example.com" className="w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Subject</label>
                        <select required className="w-full appearance-none rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none cursor-pointer">
                          <option value="">Select a topic</option>
                          <option>General Enquiry</option>
                          <option>Loan Support</option>
                          <option>Node Partner Enquiry</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Your Message</label>
                        <textarea required placeholder="How can we help you?" rows={5} className="w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-4 lg:py-6 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none resize-none" />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-[1.25rem] lg:rounded-[1.5rem] py-6 lg:py-8 text-lg lg:text-xl font-bold shadow-xl shadow-primary/30 transition-transform hover:-translate-y-1 mt-2 lg:mt-4">
                        Send Message <Send className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
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
