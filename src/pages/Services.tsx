import { motion } from "framer-motion";
import { Car, HardHat, Stethoscope, Scale, Zap, AlertTriangle, ShieldAlert, Building, Briefcase, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Car,
    title: "Motor Vehicle Accidents",
    description: "We fight for victims of reckless drivers, securing compensation for medical bills, lost wages, and pain/suffering. Our attorneys handle collisions involving cars, trucks, motorcycles, and rideshares.",
  },
  {
    icon: AlertTriangle,
    title: "Slip/Trip & Fall",
    description: "When property owners neglect safety, we hold them accountable for fractures, head trauma, and spinal injuries. We prove negligence in wet floors, poor lighting, and uneven walkway cases.",
  },
  {
    icon: HardHat,
    title: "Construction Accidents",
    description: "Construction sites are some of the most dangerous workplaces in the country. We fight for workers injured each year due to preventable accidents on job sites.",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description: "Doctors must meet standards — we sue for surgical errors, misdiagnoses, and birth injuries. Our medical experts reconstruct negligence while you focus on recovery.",
  },
  {
    icon: Scale,
    title: "Wrongful Death",
    description: "For families devastated by negligence, we seek justice through funeral expense coverage and loss-of-support damages. We make responsible parties pay.",
  },
  {
    icon: ShieldAlert,
    title: "Workers Compensation",
    description: "Protecting your rights and lost wages after workplace injuries. We navigate the complex workers' comp system to maximize your benefits.",
  },
  {
    icon: Zap,
    title: "E-Bike & Scooter Accidents",
    description: "Specialized representation for electric bicycle and scooter crash victims across New York. We understand the unique laws governing these cases.",
  },
  {
    icon: Building,
    title: "Premises Liability",
    description: "When property hazards lead to harm, we step in to help. We hold property owners accountable for injuries caused by unsafe conditions.",
  },
  {
    icon: Briefcase,
    title: "Catastrophic Injuries",
    description: "Serious injuries demand serious representation. We deliver results for traumatic brain injuries, spinal cord damage, and permanent disabilities.",
  },
  {
    icon: Home,
    title: "Real Estate Transactions",
    description: "Clear, efficient, and secure handling of your property matters. We protect your interests in every real estate deal.",
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
            <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">What We Do</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mt-3 mb-4">
              Our <span className="text-gradient-gold">Legal Services</span>
            </h1>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto text-lg">
              Comprehensive legal representation built on trust, experience, and results.
              Over 30 years fighting for justice in New York.
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
              Legal Services Built on <span className="text-gradient-gold">Trust & Results</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              At Shapiro Law Office, we deliver focused legal representation across personal injury,
              workers' compensation, medical malpractice, real estate, and more. With over 30 years
              of experience, we fight for justice with compassion, urgency, and proven results.
              Consultations are free — and you don't pay unless we win.
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
