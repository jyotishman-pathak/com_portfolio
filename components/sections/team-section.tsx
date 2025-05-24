"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
 {
  "name": "Jyotishman Pathak",
  "role": "Full Stack Web Developer | Deployment & Scalability Specialist",
  "bio": "Skilled full stack developer with expertise in React, Node.js, and AI integration. Dedicated to delivering scalable, high-performance solutions and deploying robust applications tailored to solve complex challenges.",
  "avatar": "/jyotishman.png",
  "github": "#",
  "linkedin": "#",
  "email": "jyotishmanpathak28@gmail.com"
}
,
  {
  "name": "Saptarishi Borkataky",
  "role": "UX/UI Designer | Machine Learning & Python API Developer",
  "bio": "Experienced designer specializing in crafting intuitive and aesthetically compelling user interfaces. Skilled in integrating machine learning solutions and developing robust Python APIs to enhance product functionality and user engagement.",
  "avatar": "/sapta.jpg",
  "github": "#",
  "linkedin": "#"
}


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

export function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Meet the talented individuals behind CodeOrbit. We are dedicated  engineers, 
            designers, and AI builders to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 "
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item} >
              <Card className="h-full hover:shadow-md transition-shadow ">
                <CardHeader className="flex flex-col items-center text-center p-6 pb-2">
                  <Avatar className="h-44 w-34 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center p-6 pt-2">
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    {member.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                    )}
                    {member.email && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`mailto:${member.email}`}>
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </Button>
                    )}
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