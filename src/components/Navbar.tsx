import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-secondary py-2">
        <div className="container flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-sans">New York Personal Injury Attorneys</span>
          <a href="tel:9707427476" className="flex items-center gap-2 text-primary font-semibold font-sans hover:text-gold-light transition-colors">
            <Phone className="w-4 h-4" />
            (970) SHAPIRO
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-serif font-bold text-foreground tracking-tight">SHAPIRO</span>
          <span className="text-xs font-sans text-primary tracking-[0.2em] uppercase">Law Office</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-sans text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:9707427476"
            className="bg-gradient-gold text-primary-foreground font-sans font-semibold text-sm px-6 py-2.5 rounded uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-sans text-lg text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9707427476"
                className="bg-gradient-gold text-primary-foreground font-sans font-semibold text-center py-3 rounded mt-2"
              >
                Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
