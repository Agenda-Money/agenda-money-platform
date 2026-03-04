import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "FAQs", to: "/faqs" },
  { label: "About Us", to: "/about" },
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
            <span className={`text-2xl font-heading font-extrabold tracking-tight transition-colors ${showSolid ? "text-primary" : "text-primary-foreground"}`}>
              Agenda<span className="text-secondary">Money</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  showSolid ? "text-foreground" : "text-primary-foreground"
                } ${location.pathname === l.to ? "text-primary font-semibold" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/#apply">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 font-semibold">
                Apply Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${showSolid ? "text-foreground" : "text-primary-foreground"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col pt-20 px-6">
          <div className="flex flex-col gap-6 flex-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-lg font-heading font-semibold text-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="pb-8">
            <Link to="/#apply">
              <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full py-6 text-lg font-semibold">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
