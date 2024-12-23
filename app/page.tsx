import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Abhishek Singh Kushwah</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Senior AI Developer with expertise in ML solutions, NLP, and LLMs
              </p>
              <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Delhi, India
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/abhisheksinghkushwah" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:abhishek18kushwah@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg">
                  With extensive experience in developing end-to-end machine learning solutions and integrating them
                  seamlessly into products, I excel in addressing real-world challenges. Skilled in bootstrapping scalable
                  products from inception to deployment, I handle architecture, design, and client stakeholder management
                  adeptly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <Tabs defaultValue="ml" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="ml">ML & Data Science</TabsTrigger>
              <TabsTrigger value="nlp">NLP/DL/CV</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="mlops">ML OPS</TabsTrigger>
              <TabsTrigger value="llm">LLM</TabsTrigger>
            </TabsList>
            <TabsContent value="ml" className="space-y-2">
              {["R", "NumPy", "Pandas", "Jupyter Notebook", "Scikit-Learn", "Data Visualization", "Machine Learning", "Matplotlib", "Data Analysis"].map((skill) => (
                <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </TabsContent>
            <TabsContent value="nlp" className="space-y-2">
              {["OpenCV", "PyTorch", "TensorFlow", "BERT", "Transformer Networks", "RASA", "SpaCy", "NLTK"].map((skill) => (
                <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </TabsContent>
            <TabsContent value="backend" className="space-y-2">
              {["Python", "Flask", "FastAPI", "Django", "Node.js", "REST APIs"].map((skill) => (
                <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </TabsContent>
            <TabsContent value="mlops" className="space-y-2">
              {["Git", "GCP", "AWS", "Azure", "CI/CD", "Kubernetes", "Docker", "Terraform"].map((skill) => (
                <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </TabsContent>
            <TabsContent value="llm" className="space-y-2">
              {["LangChain", "LlamaIndex", "OpenAI", "Claude", "RAG", "Mixtral", "vLLM", "PEFT", "QLoRA"].map((skill) => (
                <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Senior AI Developer (Freelance)"
              company="Timmermann Group"
              period="Aug 2023 - Present"
              location="Munich (Remote)"
              description={[
                "Developed an AI coach using Multi-Agent Architecture, LLMs, and prompt tuning APIs",
                "Led development leveraging Self-hosted Large Language Models with Multi-Agent Parallel Architecture",
                "Implemented Unstructured RAG systems with Zep in Llama Index and MongoDB",
                "Spearheaded cognitive architecture design, integrating STT and TTS capabilities"
              ]}
            />
            <ExperienceCard
              title="Technical Lead (NLU)"
              company="Reverie Language Technologies (JIO)"
              period="Jan 2022 - Aug 2023"
              description={[
                "Created a cross-platform search for 11 Indian languages",
                "Handled more than a million requests per day for Jio Apps",
                "Led R&D team for improving architecture and client integrations",
                "Created a multilingual SaaS-based chatbot development platform"
              ]}
            />
            <ExperienceCard
              title="Freelance AI Consultant"
              company="Vengage.AI"
              period="Feb 2021 - Dec 2021"
              description={[
                "Designed a conversational agent bridging patients and hospitals",
                "Implemented multi-channel support: Call, WhatsApp, Web, and Mobile App",
                "Developed support for 4 languages: English, Hindi, Kannada, and Malayalam"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Lets Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I am always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="mailto:abhishek18kushwah@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/abhisheksinghkushwah" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  location,
  description
}: {
  title: string
  company: string
  period: string
  location?: string
  description: string[]
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
              <span>{period}</span>
              {location && (
                <>
                  <span>•</span>
                  <span>{location}</span>
                </>
              )}
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

