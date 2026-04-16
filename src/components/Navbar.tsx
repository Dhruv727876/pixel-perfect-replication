import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import CartSidebar from "./CartSidebar";
import { User, Box, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-10 py-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
      <div className="flex items-center gap-10">
        <Link
          to="/products"
          className="text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          Shop
        </Link>
        <Link
          to="/products?sex=Men"
          className="text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          Men
        </Link>
        <Link
          to="/products?sex=Women"
          className="text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          Women
        </Link>
        <Link
          to="/products?type=trending"
          className="text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          Trending
        </Link>
        <Link
          to="/products?type=summer"
          className="text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          Summer
        </Link>
      </div>

      <Link to="/" className="text-[22px] font-semibold tracking-[0.35em] uppercase" style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>VEXO</Link>

      <div className="flex items-center gap-5">
        <Link
          to="/products?type=all-season"
          className="text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          All Season
        </Link>
        <Link
          to="/products?type=accessories"
          className="text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          Accessories
        </Link>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity">
                Hi, {user.name}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 bg-card/95 backdrop-blur-md border-border/40">
              <DropdownMenuLabel className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border/40" />
              <DropdownMenuItem onClick={() => navigate("/profile")} className="rounded-xl px-3 py-2 cursor-pointer focus:bg-primary focus:text-primary-foreground group transition-all">
                <User size={14} className="mr-2 group-focus:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/profile")} className="rounded-xl px-3 py-2 cursor-pointer focus:bg-primary focus:text-primary-foreground group transition-all">
                <Box size={14} className="mr-2 group-focus:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Order History</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/40" />
              <DropdownMenuItem onClick={logout} className="rounded-xl px-3 py-2 cursor-pointer focus:bg-red-500 focus:text-white group transition-all text-red-500">
                <LogOut size={14} className="mr-2 group-focus:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
          >
            Sign In / Up
          </button>
        )}

        <CartSidebar />
      </div>
    </nav>
  );
};

export default Navbar;
