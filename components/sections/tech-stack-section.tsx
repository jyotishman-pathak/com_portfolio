"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type TechCategory = "frontend" | "backend" | "aiml" | "infra";

interface TechStack {
  name: string;
  category: TechCategory;
  description: string;
  level: "expert" | "advanced" | "intermediate";
  icon:string
}

const techStacks: TechStack[] = [
  // Frontend
  { name: "Next.js", category: "frontend", description: "React framework for production", level: "expert", icon: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
  { name: "React", category: "frontend", description: "JavaScript library for user interfaces", level: "expert", icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
  { name: "TypeScript", category: "frontend", description: "Typed JavaScript", level: "expert", icon: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
  { name: "Tailwind CSS", category: "frontend", description: "Utility-first CSS framework", level: "expert", icon: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" },
  { name: "Framer Motion", category: "frontend", description: "Production-ready animation library", level: "advanced", icon: "https://img.shields.io/badge/Framer_Motion-EF4777?style=for-the-badge&logo=framer&logoColor=white" },
  { name: "Redux", category: "frontend", description: "State management library", level: "advanced", icon: "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" },
  { name: "React Query", category: "frontend", description: "Data fetching library", level: "advanced", icon: "https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" },
  { name: "Storybook", category: "frontend", description: "UI component explorer", level: "intermediate", icon: "https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" },

  // Backend
  { name: "Node.js", category: "backend", description: "JavaScript runtime", level: "expert", icon: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
  { name: "Express", category: "backend", description: "Web framework for Node.js", level: "expert", icon: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
  { name: "Prisma", category: "backend", description: "Next-generation ORM", level: "advanced", icon: "https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" },
  { name: "GraphQL", category: "backend", description: "API query language", level: "advanced", icon: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
  { name: "MongoDB", category: "backend", description: "NoSQL database", level: "advanced", icon: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
  { name: "PostgreSQL", category: "backend", description: "Relational database", level: "advanced", icon: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" },
  { name: "Firebase", category: "backend", description: "App development platform", level: "intermediate", icon: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
  { name: "Django", category: "backend", description: "Python web framework", level: "intermediate", icon: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },

  // AI/ML
  { name: "LangChain", category: "aiml", description: "LLM application framework", level: "advanced", icon: "https://img.shields.io/badge/LangChain-000000?style=for-the-badge&logo=chainlink&logoColor=white" },
  // { name: "TensorFlow", category: "aiml", description: "Machine learning framework", level: "intermediate", icon: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
  // { name: "PyTorch", category: "aiml", description: "Machine learning framework", level: "intermediate", icon: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
  { name: "Hugging Face", category: "aiml", description: "AI model hub and tools", level: "advanced", icon: "https://img.shields.io/badge/HuggingFace-FFD21F?style=for-the-badge&logo=huggingface&logoColor=black" },
  { name: "OpenAI API", category: "aiml", description: "GPT and other AI models", level: "expert", icon: "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" },
  // { name: "scikit-learn", category: "aiml", description: "Machine learning library", level: "intermediate", icon: "https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" },
  // { name: "Pandas", category: "aiml", description: "Data analysis library", level: "advanced", icon: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
  // { name: "Computer Vision", category: "aiml", description: "Image recognition and processing", level: "intermediate", icon: "https://img.shields.io/badge/Computer_Vision-0078D7?style=for-the-badge&logo=opencv&logoColor=white" },

  // Infrastructure
  { name: "Docker", category: "infra", description: "Containerization platform", level: "advanced", icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
  { name: "Kubernetes", category: "infra", description: "Container orchestration", level: "intermediate", icon: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
  { name: "AWS", category: "infra", description: "Cloud computing services", level: "advanced", icon: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" },
  { name: "Vercel", category: "infra", description: "Deployment and hosting platform", level: "expert", icon: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" },
  { name: "GitHub Actions", category: "infra", description: "CI/CD workflow automation", level: "advanced", icon: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" },
  { name: "Terraform", category: "infra", description: "Infrastructure as code", level: "intermediate", icon: "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" },
  { name: "Nginx", category: "infra", description: "Web server and reverse proxy", level: "intermediate", icon: "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" },
  { name: "Cloudflare", category: "infra", description: "CDN and security services", level: "advanced", icon: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" },
];


const getBadgeVariant = (level: string) => {
  switch (level) {
    case "expert":
      return "default";
    case "advanced":
      return "secondary";
    case "intermediate":
      return "outline";
    default:
      return "outline";
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};


export function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TechCategory>("frontend");
  const filteredStacks = techStacks.filter((tech) => tech.category === activeTab);

  return (
    <section className="py-12">
      <Tabs 
  value={activeTab} 
  onValueChange={(val: string) => setActiveTab(val as TechCategory)}
>
  <TabsList className="flex justify-center gap-4 mb-8 flex-wrap">
    <TabsTrigger value="frontend">Frontend</TabsTrigger>
    <TabsTrigger value="backend">Backend</TabsTrigger>
    <TabsTrigger value="aiml">AI / ML</TabsTrigger>
    <TabsTrigger value="infra">Infrastructure</TabsTrigger>
  </TabsList>
</Tabs>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredStacks.map((tech) => (
            <motion.div
              key={tech.name} // Using unique name instead of index
              variants={item}
              exit={{ opacity: 0, y: 10 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 space-y-3">
                  <img 
                    src={tech.icon} // Removed unnecessary type assertion
                    alt={tech.name} 
                    className="w-full h-8 object-contain" 
                  />
                  <div className="text-lg font-semibold">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {tech.description}
                  </div>
                  <Badge variant={getBadgeVariant(tech.level)}>
                    {tech.level}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}