import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-primary-foreground p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-80">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <Button onClick={accept} className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-8 whitespace-nowrap">
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
