import { ArrowUpRight, Github } from "lucide-react";
// 1. Import your raw project data array from an external file
import { projectsList } from "@/data/portfolioData"; 

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Selected <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Creations</span>
          </h2>
          <p className="text-muted-foreground">From architecture to production deployments.</p>
        </div>

        {/* 2. Responsive Auto-adjusting Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsList.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl glass overflow-hidden flex flex-col h-full hover:glow-border transition-all duration-500"
            >
              {/* Card Image */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-muted/20">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
              </div>

              {/* Card Body - flex-grow forces cards to maintain equal heights automatically */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                  
                  {/* Dynamic Tags Wrapper */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                  <a href={project.demo} className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent transition-colors group/link">
                    Live Demo <ArrowUpRight size={14} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all ml-auto">
                    <Github size={16} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};