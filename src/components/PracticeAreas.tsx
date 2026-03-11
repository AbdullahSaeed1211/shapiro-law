"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const areas = services.slice(0, 7);

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="section-padding bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">
            Practice <span className="text-gradient-gold">Areas</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Comprehensive legal representation across all major personal injury categories in New York.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/services/${area.slug}`}
                className="group block bg-card border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-gold transition-all duration-300 h-full"
              >
                <area.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{area.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
