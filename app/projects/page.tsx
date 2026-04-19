"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink, Play, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"

// Project data
const projects = [
  {
    id: 1,
    title: "AI-Powered Excel Insight System",
    description:
      "Upload Excel files and instantly analyze trends, detect anomalies, generate visualizations, and chat with your data—powered by Groq API and advanced AI.",
    image: "/Project/28.png?height=600&width=800",
    tags: ["Python", "Excel", "AI", "Data Visualization"],
    categories: ["Excel", "AI"],
    slug: "Excel",
  },
  {
    id: 2,
    title: "Ethiopia Interactive Map Explorer",
    description:
      "An advanced web-based mapping tool that enables users to explore, customize, and export geographic data across all administrative levels of Ethiopia — from regions to zones and woredas.",
    image: "/Project/22.png?height=600&width=800",
    tags: ["SQL", "Excel","Python"],
    categories: ["Excel", "SQL","Python"],
    slug: "ethiopia",
  },
  {
    id: 3,
    title: "Data Jobs Dashbord",
    description: "Created a Power BI dashboard to explore how data job salaries vary by role, region, and required skills.",
    image: "/Project/32.png?height=600&width=800",
    tags: ["Excel", "Data Analysis", "Power BI", "SQL"],
    categories: ["Power BI", "SQL", "Python"],
    slug: "data0",
  },
  {
    id: 7,
    title: "Digital Address Registration System",
    description: "Designed a national address registration system for Ethiopia that allows users to contribute verified location data, from region down to house number, with interactive mapping and approval workflow.",
    image: "/Project/54.png?height=600&width=800",
    tags: ["Python", "SQL"],
    categories: [ "Python", "SQL"],
    slug: "address",
  },


  
  {
    id: 5,
    title: "Agriculture Investment Support System",
    description:
      "Built a system to help investors choose the best places in Ethiopia for Agriculture Investment based on land type, water, and legal information.",
    image: "/Project/41.jpg?height=600&width=800",
    tags: ["Python", "SQL"],
    categories: ["SQL","Python"],
    slug: "agri",
  },
  {
    id: 6,
    title: "Data Jobs Dashboard 2.0",
    description:
      "Created an interactive dashboard using Power BI, Excel, and SQL to analyze job counts, skills, and salaries in data-related roles.",
    image: "/Project/48.png?height=600&width=800",
    tags: ["Power BI", "SQL","Excel"],
    categories: ["Power BI", "SQL","Excel"],
    slug: "data2",
  },
{
    id: 4,
    title: "Highest Paying Job in Data?",
    description:
      "Built an Power BI dashboard to identify the highest paying roles and skills in data-related careers.",
    image: "/Project/36.png?height=600&width=800",
    tags: ["Excel", "Data Analysis", "Power BI", "SQL"],
    categories: ["Excel","Power BI", "SQL"],
    slug: "data",
  },
  // {
  //   id: 8,
  //   title: "Anomaly Detection System",
  //   description:
  //     "Developed a machine learning system to detect anomalies in manufacturing processes, reducing defects by 25%.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["Python", "ML", "Statistical Analysis"],
  //   categories: ["ML", "Python"],
  //   slug: "anomaly-detection-system",
  // },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Filter projects based on search query
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesSearch
    })
    setFilteredProjects(filtered)
    // Set loaded after initial render
    if (!isLoaded) {
      setIsLoaded(true)
    }
  }, [searchQuery, isLoaded])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="container py-16 md:py-24 min-h-screen">
      <style jsx global>{`
        * {
          font-family: 'Times New Roman', Times, serif !important;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-300">
          My Projects
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-12"
      >
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects by title, description or technology..."
            className="pl-10 border-amber-500/20 focus-visible:ring-amber-500/30"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={searchQuery}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="h-full">
                <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-background to-muted/30 flex flex-col">
                  <div className="relative h-64 overflow-hidden group bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                        <Play className="h-5 w-5 text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader className="flex-shrink-0">
                      <CardTitle className="text-xl line-clamp-2 min-h-[3.5rem]">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="bg-muted/50 hover:bg-muted">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base line-clamp-3 min-h-[4.5rem]">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto flex-shrink-0">
                      <Button asChild variant="default" className="bg-amber-500 hover:bg-amber-600 text-black">
                        <Link href={`/projects/${project.slug}`}>
                          View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="rounded-full border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-500 bg-transparent"
                      >
                        <Link href={`/projects/${project.slug}`}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
              <Button
                variant="link"
                className="text-amber-500 mt-2"
                onClick={() => {
                  setSearchQuery("")
                }}
              >
                Clear search
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
