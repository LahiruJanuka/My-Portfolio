import { Button } from "@/components/Button";
import { Mail, Send, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData(e.target);
    
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitResult("success");
        e.target.reset();
      } else {
        setSubmitResult("error");
      }
    } catch (error) {
      console.error("Form transmission failed:", error);
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 rounded-3xl glass p-8 md:p-12 items-stretch">
          
          {/* Left Block: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Let's Form a <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Connection</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Looking to engineer a scalable solution or system design? Drop a message below to start the blueprint.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <Mail className="text-accent" size={20} />
                <div>
                  <p className="text-xs text-muted-foreground">Direct Mail</p>
                  <a href="mailto:lahirujanukaob1120@gmail.com" className="text-sm font-semibold hover:text-accent transition-colors">lahirujanukaob1120@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="text-primary" size={20} />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold">Dambulla, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Input Module */}
          <form className="lg:col-span-7 space-y-4 flex flex-col justify-center" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors text-sm" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">Message</label>
              <textarea 
                rows={4} 
                name="message"
                required
                placeholder="Describe your vision..." 
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors text-sm resize-none" 
              />
            </div>

            {/* Response Notifications */}
            {submitResult === "success" && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2 animate-fade-in">
                <CheckCircle2 size={16} /> Transmission dispatched successfully! I will reach out shortly.
              </div>
            )}
            {submitResult === "error" && (
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-fade-in">
                Failed to dispatch transmission. Please try again or reach out directly via email.
              </div>
            )}

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 mt-2 flex items-center justify-center gap-2 group shadow-md shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  Dispatching...
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Dispatch Transmission
                  <Send size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </Button>
          </form>

        </div>

      </div>
    </section>
  );
};