import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react'

export default function UpworkProfile() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Senior AI Developer | LLM Expert | MLOps Engineer</CardTitle>
          <a href="https://www.upwork.com/freelancers/abhisheksinghkushwah" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
            Upwork Profile <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </CardHeader>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Services Offered</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            As a Senior AI Developer with 6+ years of experience, I specialize in delivering end-to-end AI solutions. Here are the key services I offer:
          </p>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{index + 1}. {service.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 font-semibold">
            Ready to leverage AI for your business? Lets discuss how my services can help you achieve your goals with cutting-edge AI solutions.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Projects & Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.company}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
                <div className="mt-2">
                  <span className="font-semibold">Technologies:</span> {project.technologies}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skillCategory, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Me?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {reasons.map((reason, index) => (
              <li key={index}>
                <span className="font-semibold">{reason.title}:</span> {reason.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

const services = [
  {
    title: "Large Language Model (LLM) Implementation",
    items: [
      "Custom LLM development and fine-tuning",
      "Implementation of Retrieval-Augmented Generation (RAG) systems",
      "Multi-agent AI system architecture",
      "Prompt engineering and optimization"
    ]
  },
  {
    title: "Natural Language Processing (NLP) Solutions",
    items: [
      "Multilingual NLP systems development (supporting 11+ languages)",
      "Custom NLP model creation for specific industry needs",
      "Sentiment analysis and entity extraction pipelines",
      "Conversational AI and chatbot development"
    ]
  },
  {
    title: "MLOps & Production AI Systems",
    items: [
      "End-to-end machine learning pipeline design and implementation",
      "Scalable AI infrastructure setup on cloud platforms (AWS, GCP, Azure)",
      "Model monitoring, versioning, and maintenance systems",
      "CI/CD implementation for machine learning workflows"
    ]
  },
  {
    title: "AI-Powered Search and Recommendation Systems",
    items: [
      "Large-scale, multi-language search engine development",
      "Personalized recommendation algorithms",
      "Content categorization and tagging systems"
    ]
  },
  {
    title: "AI Consulting and Architecture Design",
    items: [
      "AI strategy development for businesses",
      "Technical architecture design for AI projects",
      "AI feasibility studies and proof-of-concept development"
    ]
  },
  {
    title: "Custom AI Solution Development",
    items: [
      "Tailored AI solutions for specific business problems",
      "Integration of AI capabilities into existing products",
      "Performance optimization of AI models and systems"
    ]
  }
]

const projects = [
  {
    title: "AI Coaching Platform",
    company: "Timmermann Group",
    achievements: [
      "Architected a sophisticated AI coach using Multi-Agent Architecture and LLMs",
      "Implemented self-hosted Large Language Models with parallel processing",
      "Developed Retrieval-Augmented Generation (RAG) systems using Zep and MongoDB",
      "Integrated real-time Speech-to-Text and Text-to-Speech capabilities"
    ],
    technologies: "LangChain, LlamaIndex, PyTorch, FastAPI, Docker"
  },
  {
    title: "Multilingual Search Engine",
    company: "Jio",
    achievements: [
      "Built cross-platform search supporting 11 Indian languages",
      "Scaled system to handle 1M+ daily requests across Jio Apps",
      "Led R&D team for architecture optimization"
    ],
    technologies: "Elasticsearch, Kubernetes, FastAPI, TensorFlow"
  },
  {
    title: "Healthcare AI Assistant",
    company: "Vengage.AI",
    achievements: [
      "Designed conversational AI for patient-hospital communication",
      "Implemented multi-channel support: Call, WhatsApp, Web, Mobile",
      "Developed support for 4 languages with dynamic conversation flows"
    ],
    technologies: "RASA, Twilio, AWS, FastAPI"
  }
]

const skills = [
  {
    category: "AI/ML Technologies",
    skills: ["LangChain", "LlamaIndex", "OpenAI", "Claude", "PyTorch", "TensorFlow", "BERT", "Transformers", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "SpaCy", "NLTK", "Hugging Face"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "GitLab CI", "GitHub Actions", "Prometheus", "Grafana"]
  },
  {
    category: "Backend Development",
    skills: ["Python", "Node.js", "Shell", "FastAPI", "Flask", "Django", "MongoDB", "Redis", "Elasticsearch", "Kafka", "RabbitMQ"]
  }
]

const reasons = [
  {
    title: "Comprehensive AI Expertise",
    description: "I offer end-to-end AI solutions, from initial concept and data engineering to model development and production deployment."
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered complex AI projects for startups and enterprises, consistently meeting deadlines and exceeding expectations."
  },
  {
    title: "Cutting-Edge Technology Focus",
    description: "Deep expertise in state-of-the-art AI technologies, particularly in LLMs and NLP, with a focus on building production-ready, scalable solutions."
  },
  {
    title: "Effective Communication",
    description: "Strong communication skills and experience in stakeholder management ensure smooth project execution and alignment with business goals."
  },
  {
    title: "Customized Solutions",
    description: "I tailor AI solutions to your specific business needs, ensuring maximum value and ROI from AI implementation."
  }
]

