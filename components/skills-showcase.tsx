"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart4, Braces, Brain, Cpu } from "lucide-react"
import Image from "next/image"

/* ================= SKILL CATEGORIES ================= */

const skillCategories = [
  {
    id: "fullstack",
    name: "Full Stack Development",
    icon: <Braces className="h-5 w-5" />,
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "NestJS", level: 75 },
      { name: "FastAPI", level: 90 },
    ],
  },
  {
    id: "backend",
    name: "Backend & Databases",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Supabase", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "API Integration", level: 85 },
    ],
  },
  {
    id: "data",
    name: "Data Analysis & BI",
    icon: <BarChart4 className="h-5 w-5" />,
    skills: [
      { name: "Excel", level: 90 },
      { name: "SQL Analytics", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 80 },
      { name: "Data Cleaning", level: 90 },
    ],
  },
  {
    id: "ai",
    name: "AI & Automation",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "RAG Systems", level: 60 },
      { name: "Hugging Face", level: 60 },
      { name: "n8n Automation", level: 70 },
    ],
  },
]

/* ================= TECH ICONS ================= */

const techIcons = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  // { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000" },
 
 
 
 
  // { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg", color: "#E0234E" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  // { name: "Supabase", icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png", color: "#3ECF8E" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
  { name: "n8n", icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4", color: "#EA4B71" },
  { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", color: "#FFD21E" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "#FCC624" },
  { name: "VPS", icon: "https://img.icons8.com/color/96/server.png", color: "#4F46E5" },
  { name: "QGIS", icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Qgis-icon-3.0.png", color: "#589632" },
  { name: "Excel", icon: "https://img.icons8.com/fluency/100/microsoft-excel-2019.png", color: "#217346" },
  { name: "Power BI", icon: "https://img.icons8.com/color/100/power-bi.png", color: "#F2C811" },
  { name: "Tableau", icon: "https://img.icons8.com/color/100/tableau-software.png", color: "#E97627" },
]

/* ================= SKILL BAR ================= */

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition">
        <CardContent className="p-5">
          <div className="flex justify-between mb-2">
            <span className="font-medium">{name}</span>
            <span className="text-amber-500 font-semibold">{level}%</span>
          </div>

          <div className="w-full bg-muted h-2 rounded-full">
            <motion.div
              className="h-2 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${level}%` } : {}}
              transition={{ duration: 1 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

/* ================= TECH ICON ================= */

function TechIcon({ name, icon, color, index }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-2"
        style={{ backgroundColor: `${color}20` }}
      >
        <Image src={icon} alt={name} width={40} height={40} />
      </div>

      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  )
}

/* ================= MAIN COMPONENT ================= */

export default function SkillsShowcase() {
  return (
    <section className="container py-16" id="skills">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Full-stack development with strong backend systems, data analysis experience,
          and growing expertise in AI automation.
        </p>
      </div>

      <Tabs defaultValue="fullstack">

        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-10">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.icon}
              <span className="ml-2 hidden md:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </TabsContent>
        ))}

      </Tabs>

      <div className="mt-24 text-center">

        <h3 className="text-2xl font-bold mb-4">
          Tools & Technologies
        </h3>

        <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {techIcons.map((tech, index) => (
            <TechIcon key={tech.name} {...tech} index={index} />
          ))}
        </div>

      </div>

    </section>
  )
}