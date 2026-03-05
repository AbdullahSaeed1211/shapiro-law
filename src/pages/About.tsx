import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import attorneyImg from "@/assets/attorney-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">About Us</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mt-3 mb-6">
                Let's Know <span className="text-gradient-gold">Who We Are</span>
              </h1>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Our firm is a leading provider of comprehensive legal services, renowned for our 
                commitment to excellence and client-centric approach. With a rich history of 
                delivering outstanding results, we offer a diverse range of practice areas and 
                industry expertise to meet the unique needs of our clients.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                At Shapiro Law Office, we pride ourselves on delivering 5-star service — every case, 
                every client, every time. From fast responses to personal attention, we go above 
                and beyond to make your legal journey clear, confident, and stress-free.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Proven Legal Expertise",
                  "Aggressive Case Representation",
                  "Responsive, Reliable Support",
                  "Thorough Case Evaluation",
                  "Maximum Compensation Pursuit",
                  "No Win, No Fee Promise",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-sans text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="tel:9707427476"
                className="inline-flex bg-gradient-gold text-primary-foreground font-sans font-bold px-8 py-4 rounded hover:opacity-90 transition-opacity"
              >
                Book Consultation Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img src={attorneyImg} alt="Attorney Adam Shapiro" className="w-full rounded-lg object-cover h-[600px]" />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 shadow-gold">
                <div className="text-3xl font-serif font-bold text-gradient-gold">30+</div>
                <div className="text-sm text-muted-foreground font-sans">Years of Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Client-First Approach", text: "Every case is handled with personal attention and care." },
              { title: "Strategic Legal Action", text: "We build strong cases that anticipate the opposition." },
              { title: "Fast, Fair Settlements", text: "We push for timely results without compromising value." },
              { title: "Results That Matter", text: "We fight for real outcomes that improve lives." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground font-sans text-sm">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default About;
