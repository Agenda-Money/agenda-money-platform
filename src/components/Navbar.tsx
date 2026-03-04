import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
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
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolid
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-black/5">
              <img src="/logo.png" alt="Agenda Money Logo" className="h-10 lg:h-12 w-auto rounded-xl" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-bold transition-colors hover:text-primary text-[#1A1A1A] ${location.pathname === l.to ? "text-primary" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/#apply">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/20">
                Apply Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-[70] relative focus:outline-none"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-[#1A1A1A] rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className="w-8 h-1 bg-[#1A1A1A] rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-[#1A1A1A] rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay and drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white z-[65] flex flex-col pt-24 px-6 shadow-2xl"
            >
              
              {/* Logo inside drawer */}
              <div className="mb-12 pl-4">
                <div className="bg-white p-2 rounded-2xl shadow-sm border border-black/5 inline-block">
                  <img src="/logo.png" alt="Agenda Money Logo" className="h-10 w-auto rounded-xl" />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full px-4 py-3 rounded-xl text-lg font-heading font-semibold transition-all duration-200
                      ${location.pathname === l.to
                        ? "bg-primary/10 text-primary" 
                        : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              {/* Action Button */}
              <div className="pb-8 pt-4 border-t border-border/50">
                <Link to="/#apply" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full py-6 text-lg font-semibold shadow-lg shadow-primary/25">
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
