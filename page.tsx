import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { ExperienceTimeline } from "./components/experience-timeline"
import { SkillsSection } from "./components/skills-section"
import { ProjectsShowcase } from "./components/projects-showcase"
import { ContactSection } from "./components/contact-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-32 h-32 border-4 border-primary">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Abhishek Singh Kushwah" />
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold mb-4">Abhishek Singh Kushwah</h1>
            <h2 className="text-2xl text-muted-foreground mb-4">Senior AI Developer & ML Engineer</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Delhi, India
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Phone className="w-4 h-4 mr-1" />
                +91 9584020882
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Mail className="w-4 h-4 mr-1" />
                abhishek18kushwah@gmail.com
              </Badge>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/abhisheksinghkushwah" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              With extensive experience in developing end-to-end machine learning solutions and integrating them seamlessly
              into products, I excel in addressing real-world challenges. Skilled in bootstrapping scalable products from
              inception to deployment, I handle architecture, design, and client stakeholder management adeptly.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="flex items-center gap-2">
                <Badge>ML Solutions</Badge>
                <span className="text-sm text-muted-foreground">
                  End-to-end machine learning solutions and product integration
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>NLP Expert</Badge>
                <span className="text-sm text-muted-foreground">
                  Specializing in LLMs and Unstructured RAG systems
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>Full Stack AI</Badge>
                <span className="text-sm text-muted-foreground">
                  Python backend development and robust data engineering
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

