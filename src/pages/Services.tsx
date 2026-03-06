import { motion } from "framer-motion";
import { Car, HardHat, Stethoscope, Scale, Zap, AlertTriangle, ShieldAlert, Building, Briefcase, Home, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone } from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    title: "Personal Injury Claims",
    description: "Fighting for the compensation you deserve after unexpected injuries. We handle all types of personal injury cases with aggressive, compassionate representation to get you the maximum recovery.",
  },
  {
    icon: Building,
    title: "Slip and Fall Claims",
    description: "Holding negligent property owners accountable for unsafe conditions. We prove negligence in wet floors, poor lighting, uneven walkways, and other hazardous property conditions.",
  },
  {
    icon: HardHat,
    title: "Worker's Compensation",
    description: "Protecting your rights and lost wages after workplace injuries. We navigate the complex workers' comp system to maximize your benefits and ensure you receive proper medical care.",
  },
  {
    icon: ShieldAlert,
    title: "Premises Liability",
    description: "When property hazards lead to harm, we step in to help. We hold property owners accountable for injuries caused by dangerous or defective conditions on their premises.",
  },
  {
    icon: Scale,
    title: "Product Liability",
    description: "Injured by a defective product? We'll fight for justice. We take on manufacturers, distributors, and retailers who put dangerous products into consumers' hands.",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description: "Pursuing accountability for medical errors and patient harm. Our medical experts reconstruct negligence in cases of surgical errors, misdiagnoses, and birth injuries.",
  },
  {
    icon: Briefcase,
    title: "Catastrophic Injuries",
    description: "Serious injuries demand serious representation — we deliver results. We fight for traumatic brain injuries, spinal cord damage, amputations, and permanent disabilities.",
  },
  {
    icon: Home,
    title: "Real Estate Transactions",
    description: "Clear, efficient, and secure handling of your property matters. We protect your interests in every real estate deal, from residential closings to commercial transactions.",
  },
  {
    icon: Car,
    title: "Motor Vehicle Accidents",
    description: "We fight for victims of reckless drivers, securing compensation for medical bills, lost wages, and pain/suffering. Our attorneys handle collisions involving cars, trucks, motorcycles, and rideshares.",
  },
  {
    icon: ShieldCheck,
    title: "Defense for Rent-A-Car Companies",
    description: "Specialized legal defense for rental car companies facing liability claims. We provide strategic representation to protect your business interests in accident and negligence cases.",
  },
  {
    icon: Zap,
    title: "E-Bike & Scooter Accidents",
    description: "Specialized representation for electric bicycle and scooter crash victims across New York. We understand the unique laws governing these emerging transportation cases.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">
              Injury · Compensation · Justice
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mt-3 mb-4">
              Practice <span className="text-gradient-gold">Areas</span>
            </h1>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto text-lg">
              Shapiro Law Office has you covered. Comprehensive legal representation
              built on trust, experience, and over 30 years fighting for justice in New York.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-gold transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Get The Focused Help <span className="text-gradient-gold">You Deserve</span>
            </h2>
            <p className="text-muted-foreground font-sans mb-2">Available 24/7 · 100% Secure and Confidential</p>
            <a
              href="tel:9707427476"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-sans font-bold px-8 py-4 rounded hover:opacity-90 transition-opacity text-2xl mt-4"
            >
              <Phone className="w-6 h-6" />
              (970) 742-7476
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust section */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Legal Services Built on <span className="text-gradient-gold">Trust, Experience & Results</span>
            </h2>
            <p className="text-lg font-serif italic text-muted-foreground mb-6">
              Focused Advocacy for Injury Victims, Workers, Property Clients & More
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              At Shapiro Law Office, we deliver focused legal representation across personal injury,
              workers' compensation, medical malpractice, real estate, and more. With over 30 years
              of experience, we fight for justice with compassion, urgency, and proven results.
              Consultations are free — and you don't pay unless we win.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8 border-l-4 border-primary pl-6 text-left italic">
              At Shapiro Law Office, we pride ourselves on delivering 5-star service — every case, every client, every time.
              From fast responses to personal attention, we go above and beyond to make your legal journey clear, confident,
              and stress-free. Your case matters. So does your experience.
            </p>
            <a
              href="tel:9707427476"
              className="inline-flex bg-gradient-gold text-primary-foreground font-sans font-bold px-8 py-4 rounded hover:opacity-90 transition-opacity text-lg"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default Services;
