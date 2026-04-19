"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Plant & Equipment Management System",
    description:
      "Enterprise-grade asset and operations management system developed for the Ethiopian Construction Works Corporation. The platform tracks heavy equipment status, manages project-level operations, and digitizes daily timesheet reporting across multiple construction sites, improving visibility, accountability, and operational efficiency.",
    image: "/Project/pems.png",
    link: "http://196.189.151.125:8085/",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "S3", "VPS", "SMTP"],
  },
  {
    id: 2,
    title: "Cropin Grow Agricultural Intelligence Platform",
    description:
      "Worked in collaboration with Cropin Grow and the Ministry of Agriculture to manage and analyze over 75,000 farmer profiles across 6 Ethiopian regions. The system enabled agricultural data collection, geospatial mapping, crop monitoring, and advisory optimization to improve farmer productivity and decision-making.",
    image: "/Project/cropin.png",
    link: "https://www.cropin.com/",
    tags: ["Excel", "SQL", "NumPy", "Pandas", "Tableau", "Cropin APK"],
  },
  {
    id: 3,
    title: "National Agricultural GIS Mapping System",
    description:
      "Designed a multi-layer geospatial intelligence system for Ethiopia’s Ministry of Agriculture using Region, Zone, and Woreda structures. The platform visualizes land usage, crop distribution, pest outbreaks, climate conditions, and agricultural performance using advanced GIS analytics and spatial data processing.",
    image: "/Project/moa map.png",
    link: "https://map-eight-swart.vercel.app/",
    tags: ["Shapefile", "PostGIS", "Next.js", "QGIS", "GeoJSON", "SQL"],
  },
  {
    id: 4,
    title: "BukariTech Corporate Digital Presence",
    description:
      "Developed a modern, high-performance corporate landing page for BukariTech, designed to showcase services, projects, and company identity. Focused on clean UI/UX design, responsiveness, branding consistency, and optimized performance for client acquisition.",
    image: "/Project/bu.png",
    link: "https://www.bukaritech.com/",
    tags: ["Next.js", "shadcn/ui", "Figma"],
  },
  {
    id: 5,
    title: "ECWC Smart Bus Route & Tracking System",
    description:
      "Built an intelligent transportation system enabling users to view bus routes, schedules, driver information, and service availability. The platform supports offline route access and is currently evolving into a real-time GPS tracking system for live bus location monitoring and improved commuter experience.",
    image: "/Project/ecwc bus r.png",
    link: "https://ecwc-bus-route.vercel.app/",
    tags: ["Next.js", "Leaflet", "API", "PostgreSQL"],
  },
]
export function FeaturedProjects() {
  return (
    <section className="container py-24 relative" id="featured-projects">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-amber-500 mb-6" />
        <p className="text-muted-foreground max-w-2xl">
          Real-world systems across agriculture, GIS mapping, enterprise asset management, and transportation.
        </p>
      </div>

      <div className="flex flex-col space-y-20">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isImageLeft = index % 2 === 0

  const itemVariants = {
    hidden: (left: boolean) => ({
      x: left ? -60 : 60,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      custom={isImageLeft}
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-10 items-center`}
    >
      {/* IMAGE (FIXED - NO CUTTING) */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden group bg-black/5 flex items-center justify-center">

          <div className="absolute top-4 right-4 z-20 bg-amber-500 text-black px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Featured</span>
          </div>

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
            <div className="text-white">
              <h4 className="text-lg font-bold">{project.title}</h4>
              <p className="text-sm text-white/80 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full lg:w-1/2">

        {/* TECH STACK BACK ABOVE TITLE (FIXED) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-amber-500/10 text-amber-500"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-6">
          {project.description}
        </p>

        {/* LIVE DEMO ONLY */}
        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
          <Link href={project.link} target="_blank">
            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}