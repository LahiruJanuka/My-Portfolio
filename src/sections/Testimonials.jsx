import { Quote } from "lucide-react";
import { clientFeedback } from "@/data/portfolioData";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Kind Words From <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Collaborators</span>
          </h2>
          <p className="text-muted-foreground">Feedbacks from peers and clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {clientFeedback.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl glass relative flex flex-col justify-between overflow-hidden group hover:glow-border transition-all duration-300">
              <Quote className="absolute right-6 top-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={56} />
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4 mt-auto">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-bold text-sm text-foreground">{item.author}</h4>
                  <p className="text-[11px] text-accent">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};