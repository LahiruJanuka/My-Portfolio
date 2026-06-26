import { Button } from "@/components/Button";
import { Download, Github, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { bioData, coreSkills } from "@/data/portfolioData";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden justify-center text-center">
      {/* Premium Aurora Background Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Injecting a safe keyframe style directly to bypass Tailwind config files */}
      <style>{`
        @keyframes customMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
      `}</style>

      {/* Main Content Layout Wrapper */}
      <div className="w-full relative z-10 pt-32 pb-20">
        
        {/* Constrained Profile Content Block */}
        <div className="container mx-auto px-6 max-w-4xl space-y-8 animate-fade-in">
          {/* Institution Tag */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary tracking-wide">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {bioData.department} • {bioData.institution}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm <span className="text-primary glow-text">{bioData.name}</span>
            <br />
            <span className="font-serif italic font-normal text-white/90 text-3xl sm:text-5xl">
              "Always exploring. Always building."
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {bioData.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/CV.pdf" download="Lahiru_Januka_CV.pdf">
              <Button size="lg" className="gap-2">
                Download CV <Download className="w-4 h-4" />
              </Button>
            </a>
            <a href="#projects">
              <AnimatedBorderButton>View Projects</AnimatedBorderButton>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 justify-center pt-4">
            <a href="https://github.com/lahirujanuka" target="_blank" className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/lahirujanuka" target="_blank" className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* FULL WIDTH MARQUEE TRACK SECTION */}
        <div className="mt-24 w-full animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center px-6">
            Technologies I work with
          </p>
          
          {/* 🛠️ PERMANENT VISIBILITY MASK FIX */}
          <div 
            className="relative overflow-hidden w-full py-4 bg-surface/5 border-y border-border/10"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}
          >
            {/* Infinite Horizontal Running Ribbon */}
            <div className="overflow-hidden w-full">
              <div 
                className="inline-flex flex-row flex-nowrap whitespace-nowrap select-none"
                style={{ 
                  animation: 'customMarquee 25s linear infinite',
                  width: 'max-content'
                }}
              >
                {[...coreSkills, ...coreSkills, ...coreSkills].map((skill, idx) => (
                  <div key={idx} className="px-8 inline-block shrink-0">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default select-none">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
