"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-60 pb-60 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg.src} alt="" className="w-full h-full object-cover" />
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
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group block bg-card border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-gold transition-all duration-300 h-full"
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
                </Link>
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

      <CTABanner />
      <Footer />
    </div>
  );
}
