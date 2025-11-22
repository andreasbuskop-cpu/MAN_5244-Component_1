import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-maritime-ai.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Maritime AI Technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Reclaim your time,<br />
          <span className="text-accent">amplify your decisions</span><br />
          with maritime AI
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Expert generative AI consulting tailored for maritime operations. 
          Free your team from routine work and gain the competitive insights you need to stay ahead.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 shadow-large hover:shadow-medium transition-all"
            onClick={() => scrollToSection("services")}
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={() => scrollToSection("contact")}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
