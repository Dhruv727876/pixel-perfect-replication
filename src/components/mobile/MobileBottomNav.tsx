import { Home, FlaskConical, Shirt, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home", path: "/" },
    { icon: <FlaskConical className="w-6 h-6" />, label: "Lab", path: "/lab" },
    { icon: <Shirt className="w-6 h-6" />, label: "Collections", path: "/collections" },
    { icon: <User className="w-6 h-6" />, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <nav className="flex items-center justify-around bg-white/80 backdrop-blur-xl border border-white/20 rounded-full h-16 shadow-2xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <div className={isActive ? "text-primary" : "opacity-70"}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileBottomNav;
