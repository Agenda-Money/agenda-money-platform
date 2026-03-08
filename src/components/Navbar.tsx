import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "About Us", to: "/about" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-[4.5rem] px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-surface-elevated p-1.5 rounded-xl shadow-sm border border-border">
              <img src="/logo.png" alt="Agenda Money Logo" className="h-9 lg:h-10 w-auto rounded-lg" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === l.to 
                    ? "text-primary bg-primary/5" 
                    : "text-text-primary hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/#apply">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 py-5 text-sm font-bold shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5">
                Apply Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[70] relative focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-text-primary rounded-full block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -16 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-text-primary rounded-full block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-text-primary rounded-full block"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-overlay/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280, mass: 0.8 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-background z-[65] flex flex-col pt-20 px-5 shadow-2xl border-l border-border"
            >
              <div className="mb-8 pl-2">
                <div className="bg-surface-elevated p-1.5 rounded-xl shadow-sm border border-border inline-block">
                  <img src="/logo.png" alt="Agenda Money Logo" className="h-8 w-auto rounded-lg" />
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full px-4 py-3 rounded-xl text-base font-heading font-semibold transition-all duration-200
                      ${location.pathname === l.to
                        ? "bg-primary/8 text-primary" 
                        : "text-text-primary hover:bg-surface hover:text-primary"
                      }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="pb-8 pt-4 border-t border-border">
                <Link to="/#apply" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full py-5 text-base font-bold shadow-md shadow-primary/15">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
