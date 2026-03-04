import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/233558587833?text=Hi%20Agenda%20Money%2C%20I%27d%20like%20to%20know%20more%20about%20your%20loan%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground shadow-lg hover:scale-110 transition-transform"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
