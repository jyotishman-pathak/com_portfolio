"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI GitHub Helper",
    description:
      "AI-powered tool to automate GitHub workflows. Users can input a repository URL to get commit summaries and interact with a LangChain-based assistant that provides context-aware responses using the GitHub API.",
    image: "/github.png",
    tags: ["Next.js", "TypeScript", "LangChain", "GitHub API", "AI Assistant"],
    github: "https://github.com/jyotishman-pathak/Github-Helper",
    demo: "#",
  },
  {
    title: "Attendance Manager",
    description:
      "A full-stack platform for tracking employee or student attendance. Offers analytics dashboards, real-time syncing, and user management. Built with MERN stack and Chart.js for beautiful visualizations.",
    image: "/attend.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    github: "https://github.com/jyotishman-pathak/attendanceManger",
    demo: "#",
  },
  {
    title: "NGO Landing Page",
    description:
      "A clean, responsive landing page for a non-profit environmental NGO. Developed using modern frontend practices with animations powered by Framer Motion, and content managed via Contentful CMS.",
    image: "/ngo.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    github: "https://github.com/jyotishman-pathak/NewAims",
    demo: "#",
  },
  {
    title: "Notion Clone",
    description:
      "A real-time collaborative note-taking app inspired by Notion. Features block editing, markdown support, live sockets, and a Tiptap editor — all wired together with a scalable PostgreSQL backend.",
    image: "/notion.png",
    tags: ["React", "Socket.io", "PostgreSQL", "Prisma", "Tiptap"],
    github: "https://github.com/jyotishman-pathak/Notion-clone",
    demo: "#",
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

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-muted-foreground text-lg">
            We've helped businesses and organizations build powerful digital solutions.
            Here are some of our recent projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: hoveredIndex === index ? -5 : 0
                        }}
                        transition={{ 
                          duration: 0.3, 
                          delay: i * 0.05,
                          y: { duration: 0.2 }
                        }}
                      >
                        <Badge variant="outline" className="font-normal">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}