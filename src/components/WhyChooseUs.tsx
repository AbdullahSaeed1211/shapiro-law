import { motion } from "framer-motion";
import { Award, Clock, DollarSign, Users, MessageSquare, Shield } from "lucide-react";
import attorneyImg from "@/assets/attorney-portrait.jpg";

const features = [
  { icon: Award, title: "Licenses & Memberships", text: "Active member of respected legal associations with multiple licenses." },
  { icon: Users, title: "High Profile Cases", text: "Experience with complex litigation and media-sensitive legal matters." },
  { icon: Shield, title: "Client-First Philosophy", text: "Aggressive representation, honest communication, and individualized strategies." },
  { icon: Clock, title: "Always Accessible", text: "Reach Attorney Shapiro directly — availability and responsiveness guaranteed." },
  { icon: DollarSign, title: "No Win, No Fee", text: "You pay nothing unless we win your case. Zero risk to you." },
  { icon: MessageSquare, title: "Proven Results", text: "Positive client testimonials and peer endorsements across New York." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img src={attorneyImg} alt="Attorney Adam Shapiro" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-serif font-bold text-foreground">Adam L. Shapiro</h3>
                <p className="text-primary font-sans text-sm">Founder & Lead Attorney</p>
              </div>
            </div>
            {/* Decorative gold line */}
            <div className="absolute -left-4 top-8 bottom-8 w-1 bg-gradient-gold rounded-full hidden lg:block" />
          </motion.div>

          {/* Content side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
                Your New York{" "}
                <span className="text-gradient-gold">Personal Injury</span> Lawyer
              </h2>
              <p className="text-muted-foreground font-sans mb-10 leading-relaxed">
                Over 30 years of delivering outstanding results with a client-centric approach. 
                We offer comprehensive legal services tailored to your unique needs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground text-sm">{f.title}</h4>
                    <p className="text-muted-foreground font-sans text-xs mt-1 leading-relaxed">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
