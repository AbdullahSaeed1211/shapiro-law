import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold text-foreground">SHAPIRO</span>
            <p className="text-xs text-primary tracking-[0.2em] uppercase font-sans">Law Office</p>
            <p className="text-sm text-muted-foreground font-sans mt-4 leading-relaxed">
              Over 30 years fighting for injury victims across New York. Your law firm in the courtroom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "About Us", "Contact"].map((l) => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground font-sans text-sm hover:text-primary transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Practice Areas</h4>
            <div className="flex flex-col gap-2">
              {["Motor Vehicle", "Slip & Fall", "Construction", "Medical Malpractice", "Workers Comp"].map((a) => (
                <Link key={a} to="/services" className="text-muted-foreground font-sans text-sm hover:text-primary transition-colors">
                  {a}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm font-sans text-muted-foreground">
              <a href="tel:9707427476" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> (970) 742-7476
              </a>
              <a href="mailto:info@shapirothehero.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@shapirothehero.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" /> New York, NY
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground font-sans">
          <span>© 2026 Shapiro Law Office. All rights reserved.</span>
          <span>Personal Injury Attorneys · New York</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
