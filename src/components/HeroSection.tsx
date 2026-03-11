"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Shield, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={heroBg} alt="New York City skyline" className="w-full h-full object-cover" fill />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-primary font-sans text-sm uppercase tracking-[0.2em] mb-6">
                <Shield className="w-4 h-4" />
                New York's Trusted Injury Attorneys
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6"
            >
              Need a Lawyer?{" "}
              <span className="text-gradient-gold">Call Shapiro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground font-sans max-w-lg mb-8 leading-relaxed"
            >
              Over 30 years fighting for accident victims in New York. No win, no fee.
              We secure the compensation you deserve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:9707427476"
                className="bg-gradient-gold text-primary-foreground font-sans font-semibold px-8 py-4 rounded flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now — It's Free
              </a>
              <a
                href="#practice-areas"
                className="border border-primary/30 text-primary font-sans font-medium px-8 py-4 rounded flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-border"
            >
              {[
                { number: "30+", label: "Years Experience" },
                { number: "$100M+", label: "Recovered" },
                { number: "5,000+", label: "Cases Won" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-serif font-bold text-gradient-gold">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-sans mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass border border-primary/20 rounded-2xl p-10 shadow-gold glow-gold"
            >
              <h3 className="text-3xl font-serif font-bold text-foreground mb-2">Book Free Consultation</h3>
              <p className="text-muted-foreground font-sans text-base mb-8">Get expert legal advice — no obligation</p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-foreground font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-foreground font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-muted-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                  <option>Type of Case</option>
                  <option>Motor Vehicle Accident</option>
                  <option>Slip/Trip & Fall</option>
                  <option>Construction Accident</option>
                  <option>Workers Compensation</option>
                  <option>Medical Malpractice</option>
                  <option>Wrongful Death</option>
                </select>
                <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-muted-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                  <option>Preferred Time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-primary-foreground font-sans font-bold py-5 rounded-lg text-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                >
                  Book Appointment
                </button>
              </form>

              <p className="text-center text-sm text-muted-foreground font-sans mt-6">
                100% Secure & Confidential
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
