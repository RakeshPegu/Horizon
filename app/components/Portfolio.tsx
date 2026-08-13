"use client"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function Portfolio() {
  const router = useRouter()
  const projects = [
    { 
      title: "Serene Smile",
      image: "./serene.png", // Kept local path dynamic if needed later
      description: "Built for a dental clinic to establish a modern online presence, stream-lining booking workflows.",
      techs: ['React.js', 'TypeScript', 'Express.js', 'OAuth 2.0', 'TailwindCSS', 'MongoDB'],
      liveLink: "https://dental-clinic-website-zeta-opal.vercel.app/",
      caseStudyLink: "/project/dental_clinic"
    },
     {
       title: "Horizon",
       image: "./horizon.png", 
       description:"An agency website where businesses can explore services, book a consultation, and find the right digital solution for their needs.",       
      techs: ['Next.js', 'TailwindCSS', 'TypeScript', 'OpenAI API'],
      liveLink: "#",
       caseStudyLink: "/project/2"
     },
  ]
  const handleClickCaseStudy = (href:string)=>{
    router.push(`${href}`)

    
  }
  return (
    <section id="portfolio" className="px-4 md:px-10 py-24 lg:py-32 bg-transparent ">
      {/* Header Container */}
      <div className="max-w-3xl mb-12 lg:mb-20 space-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block">
          Featured Projects
        </span>

        <h2 className="text-4xl lg:text-5xl text-white font-bold tracking-tight ">
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
            className="flex flex-col justify-between overflow-hidden rounded-xl border hover:border-border bg-accent-foreground transition-all duration-300 border-muted-foreground/30 hover:shadow-xl hover:shadow-black/40"
          >
            {/* Visual Anchor (Mockup Wrapper) */}
            <div className="relative overflow-hidden  p-4 border-b border-border aspect-video flex items-center justify-center">
              <img 
                src={project.image} 
                alt={`${project.title} interface preview`} 
                className="rounded-lg object-fill  w-full h-full shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Content Context Block */}
            <div className="flex flex-col grow p-6 lg:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight ">
                  {project.title}
                </h3>
                <p className="text-sm text-muted/70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technical Stack Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-muted text-muted-foreground border border-border/60 text-xs font-medium px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 md:gap-10 lg:gap-20 pt-4 mt-auto border-t border-border/50">
                <Button 
                  variant={'default'}                  
                  size="sm"
                  className="gap-2 border bg-transparent hover:text-muted-foreground border-amber-50 font-medium p-5"
                >
                  <a href={project.liveLink} target="_blank" className="flex  items-center gap-4" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button
                  variant={'default'}                  
                  size="sm"
                  className="gap-2 border bg-transparent hover:text-muted-foreground border-amber-50 font-medium p-5"
                  onClick={()=>handleClickCaseStudy(project.caseStudyLink)}
          
                  
                >             
                  <span>Case Study </span><ArrowRight className="h-4 w-4 hover:text-muted" />                  
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}