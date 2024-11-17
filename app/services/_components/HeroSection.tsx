// app/services/_components/HeroSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-b from-primary-50 to-white">
      <div className="absolute inset-0">
        <div className="relative w-full h-screen">
          <Image
            src="/images/bg.jpeg"
            alt="Logistics background"
            className="object-cover opacity-10"
            fill
          />
        </div>
      </div>
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            className="heading-1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shipping Solutions for Every Need
          </motion.h1>
          <motion.p
            className="body-large text-secondary-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From express delivery to specialized shipping, we&apos;ve got you covered
            with our comprehensive range of services.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
