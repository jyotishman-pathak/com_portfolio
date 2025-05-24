"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-background/50 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[30rem] h-[30rem] rounded-full bg-chart-1/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[30rem] h-[30rem] rounded-full bg-chart-2/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">CodeOrbit</span>
              <span className="block mt-2 text-primary">
                Building Web Apps, AI Tools, and Digital Experiences
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A freelance tech agency , delivering modern digital solutions
              with a focus on quality, innovation, and client satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button size="lg" className="px-8" asChild>
              <Link href="#contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1 h-2 bg-muted-foreground rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}