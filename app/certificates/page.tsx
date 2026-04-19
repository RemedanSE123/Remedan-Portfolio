"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

// Certificate data
const certificates = [
  {
    id: 100,
    title: "KUKUNET DIGITAL",
    issuer: "Professional Certificate",
    date: "2026",
    categories: ["Certificate"],
    pdfUrl: "/Certificate/knd.pdf",
  },
  {
    id: 101,
    title: "Department of CSE",
    issuer: "Professional Certificate",
    date: "2026",
    categories: ["Certificate"],
    pdfUrl: "/Certificate/dep.pdf",
  },
 
  {
    id: 2,
    title: "Business Analyst Certificate",
    issuer: "Agile Enterprise ",
    date: "2025",
    categories: ["Data Analysis"],

    image: "/Certificate/bs.png?height=600&width=600",

  },
 

  {
    id: 6,
    title: "N8N: AI Agent Creation",
    issuer: "Udemy",
    date: "2025",
    image: "/Certificate/4.png?height=400&width=600",
    categories: ["AI"],
  },
 
   
 
  {
    id: 8,
    title: "Data Analysis",
    issuer: "Udacity",
    date: "2024",
    image: "/Certificate/19.png?height=400&width=600",
    categories: ["Data Analysis"],
  },

   {
    id: 12,
    title: "Deep Learning Python Project",
    issuer: "Udemy",
    date: "2025",
    image: "/Certificate/10.png?height=400&width=600",
    categories: ["Python"],
  },
   
   {
    id: 13,
    title: " Data Science Mastery",
    issuer: "Udemy",
    date: "2025",
    image: "/Certificate/11.png?height=400&width=600",
    categories: ["Data Science/ ML","Python"],
  }, 
 {
    id: 14,
    title: "Artificial Intelligence",
    issuer: "UDACITY",
    date: "2024",
    image: "/Certificate/20.png?height=400&width=600",
    categories: [ "AI"],
  },

   {
    id: 15,
    title: "SQL and PostgreSQL",
    issuer: "Udemy",
    date: "2025",
    image: "/Certificate/13.png?height=400&width=600",
    categories: ["SQL/Database"],
  },
 

 
  
]

export default function CertificatesPage() {
  const [selectedCertificateId, setSelectedCertificateId] = useState<number | null>(null)
  const certificateViewRef = useRef<HTMLDivElement>(null)

  // Scroll to certificate view when selected
  useEffect(() => {
    if (selectedCertificateId && certificateViewRef.current) {
      setTimeout(() => {
        certificateViewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }, [selectedCertificateId])

  const toggleCertificateView = (id: number) => {
    if (selectedCertificateId === id) {
      setSelectedCertificateId(null)
    } else {
      setSelectedCertificateId(id)
    }
  }

  const selectedCertificate = certificates.find((cert) => cert.id === selectedCertificateId)

  return (
    <div className="container py-16 md:py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-300"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            My Certificates
          </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  Professional certifications and courses I've completed to strengthen my expertise in
  Full-Stack Development, Backend Systems, AI Integration, and building intelligent
  software platforms using modern technologies.
</p>
      </motion.div>

      {/* Certificate Viewer (when a certificate is selected) */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            ref={certificateViewRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full mb-12 relative"
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40"
                onClick={() => setSelectedCertificateId(null)}
              >
                <X className="h-4 w-4 text-white" />
              </Button>
            </div>
            <div className="w-full bg-black rounded-xl overflow-hidden">
              <div className="relative w-full aspect-[3/2] max-h-[90vh]">
                {selectedCertificate.pdfUrl ? (
                  <iframe
                    src={selectedCertificate.pdfUrl}
                    title={selectedCertificate.title}
                    className="h-full w-full"
                  />
                ) : (
                  <Image
                    src={selectedCertificate.image || "/Certificate/"}
                    alt={selectedCertificate.title}
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              layout
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Card
                className={`overflow-hidden h-full border border-amber-500/10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-background to-muted/30 cursor-pointer ${
                  selectedCertificateId === certificate.id ? "ring-2 ring-amber-500" : ""
                }`}
                onClick={() => toggleCertificateView(certificate.id)}
              >
                <div className="relative aspect-[3/2] overflow-hidden group">
                  {certificate.image ? (
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : certificate.pdfUrl ? (
                    <iframe
                      src={`${certificate.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      title={certificate.title}
                      className="h-full w-full pointer-events-none bg-white"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-black/40">
                      <p className="text-amber-100 text-sm font-medium">PDF Certificate</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{certificate.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-sm">
                    <span className="font-medium">{certificate.issuer}</span>
                    <span className="text-muted-foreground">•</span>
                    <span>{certificate.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {certificate.categories.map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/50"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
