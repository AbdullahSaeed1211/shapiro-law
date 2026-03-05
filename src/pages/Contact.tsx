import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-3 mb-4">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Ready to fight for your rights? Reach out for a free, confidential consultation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Phone", value: "(970) 742-7476", href: "tel:9707427476" },
                  { icon: Mail, label: "Email", value: "info@shapirothehero.com", href: "mailto:info@shapirothehero.com" },
                  { icon: MapPin, label: "Location", value: "New York, NY", href: null },
                  { icon: Clock, label: "Hours", value: "Available 24/7", href: null },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-foreground text-sm">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-muted-foreground font-sans text-sm hover:text-primary transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground font-sans text-sm">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">No Win, No Fee</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  We work on a contingency basis. You pay absolutely nothing unless we win your case.
                  There's zero risk to you — only the possibility of justice and fair compensation.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-card border border-border rounded-lg p-8 shadow-gold">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send Us a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <select className="w-full bg-secondary border border-border rounded px-4 py-3 text-muted-foreground font-sans focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Type of Case</option>
                    <option>Motor Vehicle Accident</option>
                    <option>Slip/Trip & Fall</option>
                    <option>Construction Accident</option>
                    <option>Workers Compensation</option>
                    <option>Medical Malpractice</option>
                    <option>Wrongful Death</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your case..."
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-gold text-primary-foreground font-sans font-bold py-4 rounded text-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
