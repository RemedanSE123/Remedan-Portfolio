"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Search, Database, BarChart3, Code, Target } from "lucide-react"

const workflowSteps = [
  {
    step: "01",
    title: "Problem Analysis & System Planning",
    tool: "Product Thinking • System Architecture",
    description:
      "Every system begins with understanding the real business challenge. I translate operational problems into scalable technical architecture by defining system components, user roles, workflows, and data flows that ensure the product solves real-world needs.",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    step: "02",
    title: "Backend System & API Development",
    tool: "FastAPI • NestJS • PostgreSQL",
    description:
      "Design scalable backend services and APIs that power applications. Implement authentication systems, role-based access control, business logic, and optimized database queries to support high-performance and reliable platforms.",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    step: "03",
    title: "Frontend Product Development",
    tool: "Next.js • React • TypeScript • Shadcn UI",
    description:
      "Build modern, responsive web applications with intuitive user interfaces. Connect frontend components to backend services to deliver dashboards, platforms, and tools that provide real-time interaction and seamless user experiences.",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    step: "04",
    title: "AI & RAG Integration",
    tool: "OpenAI • Hugging Face • Vector Search",
    description:
      "Enhance applications with intelligent capabilities using Large Language Models and Retrieval-Augmented Generation (RAG). Integrate AI features such as smart assistants, semantic search, document processing, and automated insights directly into business systems.",
    icon: Brain,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    step: "05",
    title: "Automation & Smart Workflows",
    tool: "n8n • APIs • Event Systems",
    description:
      "Design automated pipelines and integrations between systems using event-driven workflows. Build smart automation that connects services, triggers actions, sends notifications, and reduces manual operational tasks.",
    icon: Search,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    step: "06",
    title: "Deployment & Production Infrastructure",
    tool: "Linux • VPS • Docker • Monitoring",
    description:
      "Deploy production-ready applications on VPS or cloud infrastructure. Configure Linux servers, manage environments, optimize performance, and ensure systems remain secure, scalable, and reliable in real-world production environments.",
    icon: BarChart3,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
]

export function Timeline() {
  return (
    <section className="container py-8 md:py-16 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          My Full-Stack Development Workflow
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-1 md:h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg"
        />

        <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
          A structured workflow I follow when building modern full-stack platforms — from
          understanding the business problem to building scalable applications, integrating AI
          capabilities, and deploying intelligent systems into production.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Desktop timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-indigo-500 to-amber-500 rounded-full opacity-40" />

        {/* Mobile timeline line */}
        <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full opacity-50" />

        <div className="space-y-6 md:space-y-16">
          {workflowSteps.map((item, index) => {
            const IconComponent = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Desktop layout */}
                <div className={`hidden md:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="flex-1" />

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-background border shadow-xl flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center`}>
                      <IconComponent className={`h-5 w-5 ${item.color}`} />
                    </div>
                  </div>

                  <div className="flex-1 max-w-lg">
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg font-bold">
                          <IconComponent className={`h-5 w-5 mr-2 ${item.color}`} />
                          {item.title}
                        </CardTitle>

                        <CardDescription className="font-medium text-sm">
                          {item.tool}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-center">
                  <div className="absolute left-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border flex items-center justify-center">
                    <IconComponent className={`h-4 w-4 ${item.color}`} />
                  </div>

                  <div className="flex-1 ml-14">
                    <Card className="shadow-md">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-base font-bold">
                          <IconComponent className={`h-4 w-4 mr-2 ${item.color}`} />
                          {item.title}
                        </CardTitle>

                        <CardDescription className="text-xs font-medium">
                          {item.tool}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}