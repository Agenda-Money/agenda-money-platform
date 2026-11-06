import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import WhoWeServe from "./pages/WhoWeServe";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Careers from "./pages/Careers";
import Maintenance from "./pages/Maintenance";
import { MAINTENANCE_MODE } from "@/lib/maintenance";
import CookieBanner from "./components/CookieBanner";
import RouteMeta from "./components/RouteMeta";
import { trackPageView } from "@/lib/consent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Maintenance mode: see lib/maintenance.ts (currently ON by default).

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Page views on route changes; gtag only exists once the visitor has
    // accepted analytics (see lib/consent.ts).
    trackPageView();
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // The maintenance page has contact details people will want to copy.
    if (MAINTENANCE_MODE) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
    };
  }, []);

  if (MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteMeta />
          <Analytics />
          <ScrollToTop />
          <CookieBanner />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
