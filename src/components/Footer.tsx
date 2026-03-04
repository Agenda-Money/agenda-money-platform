import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-heading font-extrabold">
              Agenda<span className="text-secondary">Money</span>
            </span>
            <p className="mt-4 text-sm opacity-70 leading-relaxed">
              Empowering individuals and micro-businesses across Ghana with fast, affordable micro-loans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "How It Works", to: "/how-it-works" },
                { label: "Who We Serve", to: "/who-we-serve" },
                { label: "FAQs", to: "/faqs" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">Legal</h4>
            <ul className="space-y-3">
              <li><span className="text-sm opacity-70">Privacy Policy</span></li>
              <li><span className="text-sm opacity-70">Terms & Conditions</span></li>
              <li><span className="text-sm opacity-70">Cookie Policy</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:support@agendamoney.com" className="text-sm opacity-70 hover:opacity-100 hover:text-secondary">support@agendamoney.com</a></li>
              <li><a href="tel:0558587833" className="text-sm opacity-70 hover:opacity-100 hover:text-secondary">0558587833</a></li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="opacity-50 hover:opacity-100 hover:text-secondary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50 text-center md:text-left">
            © 2025 Agenda Money Limited. A member of the Micro Credit Association of Ghana (MCAG).
          </p>
          <div className="flex gap-6 text-xs opacity-50">
            <span>MTN MoMo</span>
            <span>Telecel Cash</span>
            <span>AirtelTigo Money</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
