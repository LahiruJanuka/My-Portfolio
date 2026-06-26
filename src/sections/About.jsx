import { Code2, Cpu, Layout, Sparkles } from "lucide-react";
import { bioData } from "@/data/portfolioData";

const coreSkills = [
  { 
    icon: Layout, 
    title: "Full-Stack Architecture", 
    desc: "Building modular, secure systems with Django REST Framework, React.js, and automated role-based permissions." 
  },
  { 
  icon: Code2, 
  title: "Agentic Systems & Workflows", 
  desc: "Engineering multi-agent frameworks, automated reasoning pipelines, and intelligent orchestration models using Python and scalable backend logic." 
  },
  { 
    icon: Cpu, 
    title: "Engineering Optimization", 
    desc: "Refactoring database interactions and backend aggregations to dramatically reduce query loads and improve latency." 
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Grid: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary font-medium tracking-wider uppercase">
              <Sparkles size={12} /> About Me
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Designing with <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Purpose & Precision
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              An enthusiastic Computer Science and Engineering undergraduate at the University of Moratuwa with a solid foundation in software engineering, system design, and machine learning. I blend top-tier academic excellence with a highly practical approach to building full-stack applications and optimizing system performance. From crafting robust, high-throughput backend APIs to designing intelligent predictive models, I love bridging theoretical computer science with scalable, real-world solutions. Always exploring. Always building.
            </p>
          </div>

          {/* Profile Photo Frame */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto group">
              {/* Vibrant ambient glowing background behind the picture */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/40 to-accent/40 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Frosted Glass Frame Container */}
              <div className="relative glass rounded-3xl p-3 glow-border overflow-hidden">
                <img 
                  src="/profile-photo.jpg"  
                  alt="Lahiru Januka" 
                  className="w-full aspect-[4/5] object-cover rounded-2xl transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Lower Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coreSkills.map((skill, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl glass hover:glow-border transition-all duration-300"
            >
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-accent mb-4">
                <skill.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};