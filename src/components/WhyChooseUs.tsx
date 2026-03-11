"use client";

import Image from "next/image";
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

export default function WhyChooseUs() {
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl glow-gold group">
              <Image
                src={attorneyImg}
                alt="Attorney Adam Shapiro"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-3xl font-serif font-bold text-foreground">Adam L. Shapiro</h3>
                  <p className="text-primary font-sans text-lg font-medium tracking-wide">Founder & Lead Attorney</p>
                </motion.div>
              </div>
            </div>
            {/* Decorative gold line */}
            <div className="absolute -left-6 top-10 bottom-10 w-1.5 bg-gradient-gold rounded-full hidden lg:block" />
            <div className="absolute -right-6 -bottom-6 w-32 h-32 border-r-4 border-b-4 border-primary/20 rounded-br-2xl hidden lg:block" />
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
}
