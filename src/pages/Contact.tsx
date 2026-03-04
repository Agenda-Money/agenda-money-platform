import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="pt-32 pb-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-muted-foreground">We'd love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-extrabold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <a href="mailto:support@agendamoney.com" className="flex items-center gap-4 text-sm hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"><Mail size={18} className="text-primary" /></div>
                  support@agendamoney.com
                </a>
                <a href="tel:0558587833" className="flex items-center gap-4 text-sm hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"><Phone size={18} className="text-primary" /></div>
                  0558587833
                </a>
                <a href="https://wa.me/233558587833?text=Hello%20Agenda%20Money%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20loans." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-primary-foreground rounded-full px-6 py-3 font-semibold hover:bg-[#22c55e] transition-colors">
                  <MessageCircle size={20} /> Chat with us on WhatsApp
                </a>
              </div>

              <div className="mt-10">
                <p className="text-sm font-heading font-semibold mb-4">Follow us</p>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-8">Based in Accra, Ghana. Serving the entire nation.</p>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-accent rounded-2xl p-12 text-center border border-primary/20">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-heading font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">We typically respond within 24 hours on business days.</p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <input type="text" required placeholder="Full Name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent" />
                  <input type="tel" required placeholder="Phone Number" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent" />
                  <input type="email" placeholder="Email Address" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent" />
                  <select required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent text-muted-foreground">
                    <option value="">Select Subject</option>
                    <option>General Enquiry</option>
                    <option>Loan Application Help</option>
                    <option>Become a Node</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                  <textarea required placeholder="Your Message" rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent resize-none" />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full py-6 text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              )}
              {!submitted && <p className="text-xs text-muted-foreground mt-4 text-center">We typically respond within 24 hours on business days.</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
