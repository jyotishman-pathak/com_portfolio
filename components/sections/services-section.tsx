"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CodeIcon, Layout, Database, Brain } from "lucide-react";

const services = [
  {
    title: "Landing Page Development",
    description: "Beautiful, conversion-optimized landing pages that make a great first impression.",
    price: "₹10,000–₹15,000",
    icon: <Layout className="h-10 w-10" />,
    features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Analytics"],
  },
  {
    title: "NGO/Standard Sites",
    description: "Full-featured websites for organizations, businesses, and non-profits.",
    price: "₹35,000–₹49,000",
    icon: <CodeIcon className="h-10 w-10" />,
    features: ["Multiple Pages", "CMS Integration", "Contact Forms", "Donation Systems"],
  },
  {
    title: "Full-Stack Applications",
    description: "Custom web applications with robust backends and beautiful frontends.",
    price: "₹70,000–₹1,50,000+",
    icon: <Database className="h-10 w-10" />,
    features: ["User Authentication", "Database Integration", "API Development", "Admin Dashboards"],
  },
  {
    title: "AI Tools & Integration",
    description: "Cutting-edge AI solutions to automate processes and deliver intelligent experiences.",
    price: "₹80,000–₹2,50,000+",
    icon: <Brain className="h-10 w-10" />,
    features: ["Custom ML Models", "LLM Integration", "Data Analytics", "AI Chatbots"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer a range of development services tailored to meet your specific needs and budget.
            From simple landing pages to complex AI solutions, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}