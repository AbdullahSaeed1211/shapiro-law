"use client";

import { motion } from "framer-motion";
import { Phone, Clock, ShieldCheck } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-gold opacity-10" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Injured? <span className="text-gradient-gold">Call Shapiro Now</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg mb-8">
            Free Consultation · No Win, No Fee · Available 24/7
          </p>

          <a
            href="tel:9707427476"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-sans font-bold text-2xl px-10 py-5 rounded hover:opacity-90 transition-opacity"
          >
            <Phone className="w-6 h-6" />
            (970) 742-7476
          </a>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm font-sans text-muted-foreground">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Available 24/7</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> 100% Confidential</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Free Case Review</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
