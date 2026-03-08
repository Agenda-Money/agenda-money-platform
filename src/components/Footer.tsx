import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";

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
      { label: "Careers", to: "#" },
    ],
    legal: [
      { label: "Privacy Policy", to: "#" },
      { label: "Terms & Conditions", to: "#" },
      { label: "Cookie Policy", to: "#" },
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
    <footer className="relative bg-overlay text-primary-foreground pt-14 lg:pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <span className="text-2xl font-heading font-black tracking-tight">
                Agenda<span className="text-primary">Money.</span>
              </span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Redefining credit accessibility in Ghana. Fast, fair, and completely digital micro-loans for the backbone of our economy.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-secondary font-heading font-bold text-[10px] uppercase tracking-[0.15em] mb-5">Navigation</h4>
              <ul className="space-y-2.5">
                {footerLinks.quick.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/50 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-secondary font-heading font-bold text-[10px] uppercase tracking-[0.15em] mb-5">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/50 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-secondary font-heading font-bold text-[10px] uppercase tracking-[0.15em] mb-5">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:support@agendamoney.com" className="flex items-center gap-3 group p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/15 transition-all">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/35 font-semibold">Email</p>
                  <p className="text-xs font-semibold text-white/80">support@agendamoney.com</p>
                </div>
              </a>
              <a href="tel:0558587833" className="flex items-center gap-3 group p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-secondary/15 transition-all">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/35 font-semibold">Phone</p>
                  <p className="text-xs font-semibold text-white/80">0558587833</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="text-white/25 text-[11px] font-medium">
              © {currentYear} Agenda Money Limited. Registered Micro Credit Institution.
            </p>
            <p className="text-white/15 text-[9px] font-semibold uppercase tracking-widest mt-1">
              Member of the Micro Credit Association of Ghana (MCAG)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 opacity-40">
            {[
              { name: "MTN MoMo", color: "bg-warning" },
              { name: "Telecel Cash", color: "bg-destructive" },
              { name: "AT Money", color: "bg-secondary" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${p.color}`} />
                <span className="text-[9px] font-bold tracking-tight">{p.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} to={link.to} className="text-[9px] font-semibold uppercase tracking-widest text-white/25 hover:text-white/60 transition-colors">
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
