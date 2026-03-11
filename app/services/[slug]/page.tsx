"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

interface ServiceDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  const { slug } = use(params); // ✅ unwrap params correctly

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <p className="text-center mt-32">Service not found.</p>;
  }

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg.src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-sans text-sm mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> All Practice Areas
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold">
                {service.title}
              </h1>
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
                        <span className="text-muted-foreground font-sans text-sm">
                          {point}
                        </span>
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
                {/* CTA */}
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Free Consultation
                  </h3>

                  <p className="text-muted-foreground font-sans text-sm mb-6">
                    Available 24/7 · No Win, No Fee
                  </p>

                  <a
                    href="tel:9707427476"
                    className="block w-full bg-gradient-gold text-primary-foreground font-sans font-bold py-3 rounded hover:opacity-90 transition-opacity mb-3"
                  >
                    (970) 742-7476
                  </a>

                  <a
                    href="mailto:info@shapirothehero.com"
                    className="block w-full bg-secondary text-foreground font-sans font-semibold py-3 rounded hover:bg-secondary/80 transition-colors text-sm"
                  >
                    Email Us
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                    Other Practice Areas
                  </h3>

                  <div className="space-y-3">
                    {otherServices.slice(0, 5).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-3 group hover:text-primary transition-colors"
                      >
                        <span className="text-primary mt-1 group-hover:translate-x-1 transition-transform">
                          →
                        </span>

                        <span className="text-sm font-sans text-muted-foreground group-hover:text-foreground transition-colors">
                          {s.title}
                        </span>
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
}