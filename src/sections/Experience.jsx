import { educationTimeline } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Timeline & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-muted-foreground">Academic foundations, computational labs, and engineering tracks.</p>
        </div>

        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12">
          {educationTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[37px] md:-left-[45px] top-1 p-1.5 rounded-full bg-background border border-primary text-primary">
                <GraduationCap size={14} />
              </div>
              
              <div className="p-8 rounded-2xl glass hover:bg-white/[0.02] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.role}</h3>
                    <p className="text-accent text-sm font-medium">{item.company}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5 h-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-muted-foreground border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};