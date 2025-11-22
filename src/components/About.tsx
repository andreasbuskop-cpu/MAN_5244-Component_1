import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";
import profileImage from "@/assets/profile-andre.jpg";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "16+ Years Experience",
      description: "Maritime & energy sector leadership"
    },
    {
      icon: GraduationCap,
      title: "Naval Architect",
      description: "Deep technical maritime expertise"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Statkraft, VARD, EU & Enova funding"
    },
    {
      icon: Target,
      title: "AI Education",
      description: "Executive Master in Applied AI"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            About drift.ai
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            We understand maritime operations. We leverage generative AI to free your team from 
            routine work and deliver the competitive insights you need to stay ahead.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-medium transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Biography */}
          <Card className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src={profileImage} 
                alt="André Buskop - Chief Architect & Founder of drift.ai"
                className="w-48 h-48 rounded-lg object-cover shadow-medium flex-shrink-0"
              />
              <div className="space-y-6 text-foreground">
                <h3 className="text-2xl font-bold mb-4">André Buskop - Chief Architect & Founder</h3>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  André Buskop is a Senior Business Developer and Naval Architect with 16+ years of experience 
                  bridging technical complexity with commercial viability in the energy and maritime sectors. 
                  Currently pursuing an Executive Master in Management – Applied AI at BI Norwegian Business School, 
                  he combines deep maritime domain expertise with emerging AI capabilities to solve real operational challenges.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  At Statkraft, he led business development for large-scale maritime energy hubs, developing 
                  integrated value chain strategies and leading market expansion initiatives. Previously at VARD, 
                  he transformed traditional engineering into a sustainability-focused innovation hub, positioning 
                  the company as a leader in zero-emission maritime solutions.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  André founded drift.ai to bridge the critical gap between cutting-edge generative AI capabilities 
                  and practical maritime industry needs. By leveraging Python, AI automation, and strategic consulting 
                  expertise, he helps maritime companies reclaim time from routine operations and amplify strategic 
                  decision-making. His approach combines proven commercial acumen, technical depth, and deep maritime 
                  domain knowledge to deliver measurable ROI.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
