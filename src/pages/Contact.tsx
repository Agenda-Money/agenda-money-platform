import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Send, ChevronDown, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supportSchema, type SupportValues } from "@/lib/schemas";
import { Alert, AlertDescription } from "@/components/ui/alert";
import contactImg from "@/assets/contact-us.webp";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SupportValues>({
    resolver: zodResolver(supportSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 15000); // Reset after 15 seconds
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const onSubmit = async (data: SupportValues) => {
    try {
      const { API_ENDPOINTS, postRequest } = await import('@/lib/api');
      await postRequest(API_ENDPOINTS.SUPPORT, data);

      setSubmitted(true);
      reset();
    } catch (error) {
      const { toast } = await import('sonner');
      const { ApiError } = await import('@/lib/api');
      if (error instanceof ApiError && error.status === 429) {
        toast.error("Too many submissions, please try again later.");
      } else {
        toast.error(error instanceof Error ? error.message : "Something went wrong. Please check your details and try again.");
      }
    }
  };

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
  ];

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-[#1A1A1A] text-white overflow-hidden rounded-b-[3rem] lg:rounded-b-[6rem] shadow-2xl mx-2 lg:mx-8 mt-4 mb-12 lg:mb-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary opacity-5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-left w-full lg:w-auto">
              <motion.div variants={fadeUp} className="inline-block bg-white/10 backdrop-blur-md text-white font-bold px-6 py-3 rounded-full mb-8 tracking-wide text-sm uppercase">
                Let's Talk
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold mb-6 lg:mb-8 leading-[1.05] tracking-tight text-white">
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
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }} 
              className="relative w-full hidden lg:block"
            >
              <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 lg:border-8 border-white/5">
                <img src={contactImg} alt="Contact Agenda Money" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24 bg-background px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Side: Cards */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-heading font-black text-[#1A1A1A] mb-8 lg:mb-10 text-center lg:text-left">Our Channels</motion.h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
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
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                className="bg-[#FAFAFA] rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 border border-black/5 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-5 rounded-full blur-[80px] pointer-events-none"></div>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 lg:py-20">
                    <div className="bg-emerald-500 w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-white mx-auto mb-6 lg:mb-8 shadow-2xl shadow-emerald-500/30">
                      <Send size={32} className="lg:w-10 lg:h-10" />
                    </div>
                     <h3 className="text-3xl lg:text-4xl font-heading font-black text-[#1A1A1A] mb-3 lg:mb-4">Message Received!</h3>
                    <p className="text-[#6A6A6A] text-lg lg:text-xl max-w-sm mx-auto">We'll get back to you soon. Thank you for reaching out!</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl lg:text-3xl font-heading font-black text-[#1A1A1A] mb-2">Send us a message</h3>
                    <p className="text-base text-[#6A6A6A] font-medium mb-8 lg:mb-10">Fill the form below and we'll be in touch soon.</p>
                    
                    <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
                      {Object.keys(errors).length > 0 && (
                        <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-800 rounded-2xl py-3 mb-2">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="font-medium text-xs">
                            Please check your details to continue.
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Full Name</label>
                          <input 
                            {...register("fullName")}
                            type="text" 
                            placeholder="Enter your name" 
                            className={`w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none ${errors.fullName ? 'ring-2 ring-red-500/50' : ''}`} 
                          />
                          {errors.fullName && <p className="text-[10px] font-bold text-red-500 ml-5">{errors.fullName.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Phone Number</label>
                          <input 
                            {...register("phone")}
                            type="tel" 
                            placeholder="Phone Number" 
                            className={`w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none ${errors.phone ? 'ring-2 ring-red-500/50' : ''}`} 
                          />
                          {errors.phone && <p className="text-[10px] font-bold text-red-500 ml-5">{errors.phone.message}</p>}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Email Address (Optional)</label>
                        <input 
                          {...register("email")}
                          type="email" 
                          placeholder="Email Address" 
                          className={`w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none ${errors.email ? 'ring-2 ring-red-500/50' : ''}`} 
                        />
                        {errors.email && <p className="text-[10px] font-bold text-red-500 ml-5">{errors.email.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Subject</label>
                        <div className="relative">
                          <select 
                            {...register("subject")}
                            className={`w-full appearance-none rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-3.5 lg:py-4 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none cursor-pointer ${errors.subject ? 'ring-2 ring-red-500/50' : ''}`}
                          >
                            <option value="">Select a topic</option>
                            <option>General Enquiry</option>
                            <option>Loan Support</option>
                            <option>Node Code Inquiry</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8A8A8A] pointer-events-none" size={18} />
                        </div>
                        {errors.subject && <p className="text-[10px] font-bold text-red-500 ml-5">{errors.subject.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#8A8A8A] ml-2">Your Message</label>
                        <textarea 
                          {...register("message")}
                          placeholder="How can we help you?" 
                          rows={5} 
                          className={`w-full rounded-[1.25rem] lg:rounded-[1.5rem] border-0 bg-white shadow-sm px-5 lg:px-6 py-4 lg:py-6 text-sm lg:text-base focus:ring-4 focus:ring-primary/20 transition-all outline-none resize-none ${errors.message ? 'ring-2 ring-red-500/50' : ''}`} 
                        />
                        {errors.message && <p className="text-[10px] font-bold text-red-500 ml-5">{errors.message.message}</p>}
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-[1.25rem] lg:rounded-[1.5rem] py-6 lg:py-8 text-lg lg:text-xl font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 mt-2 lg:mt-4 disabled:opacity-70 disabled:grayscale disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg> 
                            Sending...
                          </span>
                        ) : (
                          <>Send Message <Send className="ml-2 w-5 h-5 lg:w-6 lg:h-6" /></>
                        )}
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
