import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-sans text-sm mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> All Practice Areas
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold">{service.title}</h1>
            </div>
            <p className="text-muted-foreground font-sans max-w-2xl text-lg">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {service.longDescription.map((para, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground font-sans leading-relaxed mb-6"
                  >
                    {para}
                  </p>
                ))}

                {/* Key Points */}
                <div className="bg-secondary/50 border border-border rounded-lg p-8 mt-8">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-5">
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {service.keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-sans text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-32 space-y-6"
              >
                {/* CTA Card */}
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Free Consultation
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm mb-6">
                    Available 24/7 · No Win, No Fee
                  </p>
                  <a
                    href="tel:9707427476"
                    className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-sans font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity w-full justify-center text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    (970) 742-7476
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                    Other Practice Areas
                  </h3>
                  <div className="flex flex-col gap-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-muted-foreground font-sans text-sm hover:text-primary transition-colors py-1"
                      >
                        <s.icon className="w-4 h-4 text-primary" />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
