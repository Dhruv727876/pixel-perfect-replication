import { SignupPage } from "@/components/ui/sign-up-page";
import { useEffect, useState } from "react";
import MobileAuthDesign from "@/components/mobile/MobileAuthDesign";

const Auth = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileAuthDesign />;
  }

  return <SignupPage />;
};

export default Auth;

