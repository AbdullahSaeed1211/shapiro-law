"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lance Becker",
    text: "I have used this law firm multiple times. Their advice was spot on. They executed on their promises to handle my claim to settlement. I had no complaints and would recommend this firm to others.",
    rating: 5,
  },
  {
    name: "Eric Rosenbaum",
    text: "Adam Shapiro is a terrific lawyer. He knows his stuff, is tough, and helps guide you through the process. He really is focused on getting the absolute best outcome for you as possible.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "After my construction accident, Shapiro Law got me the compensation I deserved. They were responsive, professional, and truly cared about my case. Highly recommend.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
            Real Reviews From <span className="text-gradient-gold">Real Clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-sans text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-sans font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-sans">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
