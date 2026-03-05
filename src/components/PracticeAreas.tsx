import { motion } from "framer-motion";
import { Car, HardHat, Stethoscope, Scale, Zap, AlertTriangle, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    icon: Car,
    title: "Motor Vehicle Accidents",
    description: "We fight for victims of reckless drivers, securing compensation for medical bills, lost wages, and pain/suffering.",
  },
  {
    icon: AlertTriangle,
    title: "Slip/Trip & Fall",
    description: "When property owners neglect safety, we hold them accountable for fractures, head trauma, and spinal injuries.",
  },
  {
    icon: HardHat,
    title: "Construction Accidents",
    description: "Construction sites are dangerous workplaces. We fight for workers injured due to preventable accidents.",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description: "We sue for surgical errors, misdiagnoses, and birth injuries. Our medical experts reconstruct negligence.",
  },
  {
    icon: Scale,
    title: "Wrongful Death",
    description: "For families devastated by negligence, we seek justice through funeral expense coverage and loss-of-support damages.",
  },
  {
    icon: ShieldAlert,
    title: "Workers Compensation",
    description: "Protecting your rights and lost wages after workplace injuries with aggressive legal representation.",
  },
  {
    icon: Zap,
    title: "E-Bike & Scooter Accidents",
    description: "Specialized representation for electric bicycle and scooter crash victims across New York.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="section-padding bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
            Practice <span className="text-gradient-gold">Areas</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Comprehensive legal representation across all major personal injury categories in New York.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="group block bg-card border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-gold transition-all duration-300 h-full"
              >
                <area.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{area.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
