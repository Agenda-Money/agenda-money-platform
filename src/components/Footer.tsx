import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quick: [
      { label: "Home", to: "/" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Who We Serve", to: "/who-we-serve" },
      { label: "FAQs", to: "/faqs" },
    ],
    company: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms-and-conditions" },
    ]
  };

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
  ];

  return (
    <footer className="relative bg-[#0F0F0F] text-white pt-16 lg:pt-24 pb-12 overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] mt-[-3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 lg:mb-8">
              <span className="text-3xl font-heading font-black tracking-tighter">
                Agenda<span className="text-primary italic">Money.</span>
              </span>
            </Link>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-sm font-medium">
              We're redefining access to credit in Africa. Fast, fair, and completely digital micro-loans for the backbone of our economy.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Icon size={18} className="lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation & Company & Legal */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-4 lg:contents">
            <div>
              <h4 className="text-secondary font-heading font-extrabold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-4 lg:mb-8">Navigation</h4>
              <ul className="space-y-3 lg:space-y-4">
                {footerLinks.quick.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/60 hover:text-white text-sm lg:text-base transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-secondary font-heading font-extrabold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-4 lg:mb-8">Company</h4>
              <ul className="space-y-3 lg:space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/60 hover:text-white text-sm lg:text-base transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li key="careers">
                  <Link to="/careers" className="text-white/60 hover:text-white text-sm lg:text-base transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary font-heading font-extrabold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-4 lg:mb-8">Legal</h4>
              <ul className="space-y-3 lg:space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/60 hover:text-white text-sm lg:text-base transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-secondary font-heading font-extrabold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-6 lg:mb-8">Connect With Us</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
              <a href="mailto:support@agendamoney.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Support</p>
                  <p className="text-sm font-bold">support@agendamoney.com</p>
                </div>
              </a>
              <a href="tel:0558587833" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Center</p>
                  <p className="text-sm font-bold">0558587833</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-2">
            <p className="text-white/80 text-xs font-medium tracking-wide text-center lg:text-left">
              © 2025 Agenda Money.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hidden sm:block">Partners</span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span className="text-[10px] font-black tracking-tighter">MTN MoMo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-[10px] font-black tracking-tighter">Telecel Cash</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-[10px] font-black tracking-tighter">AT Money</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} to={link.to} className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
