import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    { 
      title: "Serene Smile",
      image: "./serene.png", // Kept local path dynamic if needed later
      description: "Built for a dental clinic to establish a modern online presence, stream-lining booking workflows.",
      techs: ['React.js', 'TypeScript', 'Express.js', 'OAuth 2.0', 'TailwindCSS', 'MongoDB'],
      liveLink: "https://dental-clinic-website-zeta-opal.vercel.app/",
      caseStudyLink: "#"
    },
    {
      title: "AutoRes",
      image: "./serene.png", 
      description: "An AI-powered customer support automation engine tailored for scaling SaaS companies.",
      techs: ['Next.js', 'TailwindCSS', 'TypeScript', 'OpenAI API'],
      liveLink: "#",
      caseStudyLink: "#"
    },
  ]

  return (
    <section id="portfolio" className="px-4 md:px-10 py-24 lg:py-32 bg-background ">
      {/* Header Container */}
      <div className="max-w-3xl mb-12 lg:mb-20 space-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block">
          Featured Projects
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight ">
          Selected Engineering Work
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          A selection of our recent work, highlighting the strategies,
          technologies, and outcomes behind every project. Each solution is
          thoughtfully crafted to solve real business challenges and deliver
          lasting value.
        </p>
      </div>

      {/* Projects Grid Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-muted-foreground/30 hover:shadow-xl hover:shadow-black/40"
          >
            {/* Visual Anchor (Mockup Wrapper) */}
            <div className="relative overflow-hidden bg-muted/40 p-4 border-b border-border aspect-video flex items-center justify-center">
              <img 
                src={project.image} 
                alt={`${project.title} interface preview`} 
                className="rounded-lg object-cover w-full h-full shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Content Context Block */}
            <div className="flex flex-col grow p-6 lg:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technical Stack Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-muted/60 text-muted-foreground border border-border/60 text-xs font-medium px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex  gap-20 pt-4 mt-auto border-t border-border/50">
                <Button 
                  variant={'default'}                  
                  size="sm"
                  className="gap-2 font-medium"
                >
                  <a href={project.liveLink} target="_blank" className="flex  items-center gap-4" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button 
                  variant={'ghost'}
                  size="sm"
                  className="gap-1 font-medium text-muted-foreground hover:bg-transparent   hover:text-foreground"
                >
                  <a href={project.caseStudyLink} className="flex items-center gap-4  border rounded-2xl p-3">
                    Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}