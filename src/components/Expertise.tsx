import { Card } from "@/components/ui/card";

const Expertise = () => {
  const technologies = [
    { name: "Python", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "SQLAlchemy", category: "Backend" },
    { name: "JavaScript/ES6+", category: "Frontend" },
    { name: "HTML5/CSS3", category: "Frontend" },
    { name: "Leaflet.js", category: "Frontend" },
    { name: "Google Gemini AI", category: "AI & APIs" },
    { name: "BarentsWatch AIS", category: "AI & APIs" },
    { name: "Open-Meteo", category: "AI & APIs" },
    { name: "SQLite", category: "Database" },
    { name: "Replit", category: "Deployment" },
    { name: "Gunicorn", category: "Deployment" }
  ];

  const domains = [
    {
      title: "Maritime Operations",
      items: [
        "Fleet management and vessel tracking",
        "Route optimization and fuel efficiency",
        "Maritime regulatory environment",
        "Port operations and logistics"
      ]
    },
    {
      title: "Generative AI Integration",
      items: [
        "AI-powered decision support systems",
        "Natural language processing",
        "Real-time data analysis",
        "AI prompt engineering for maritime"
      ]
    },
    {
      title: "Business Development",
      items: [
        "Maritime industry pain point analysis",
        "High-impact AI opportunity identification",
        "Strategic consulting and solution design",
        "ROI analysis and business cases"
      ]
    }
  ];

  const methodology = [
    {
      step: "1. Discovery First",
      description: "Deeply understand your operations, challenges, and objectives before recommending solutions."
    },
    {
      step: "2. Practical Focus",
      description: "Prioritize solutions that deliver measurable ROI and integrate seamlessly with existing operations."
    },
    {
      step: "3. Phased Implementation",
      description: "Roll out AI solutions in phases to minimize disruption and build organizational capability."
    },
    {
      step: "4. Team Augmentation",
      description: "Position AI as a capability multiplier—amplifying expertise and freeing teams for strategy."
    },
    {
      step: "5. Continuous Improvement",
      description: "Monitor performance, gather feedback, and evolve solutions based on real-world results."
    },
    {
      step: "6. Transparency & Partnership",
      description: "Maintain clear communication about capabilities, limitations, and expected outcomes."
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Combining deep maritime domain knowledge with modern AI technologies and proven methodologies
          </p>

          {/* Technology Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <Card 
                  key={index} 
                  className="p-4 text-center hover:shadow-medium transition-shadow"
                >
                  <p className="font-semibold text-sm text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Domain Expertise */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Domain Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {domains.map((domain, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-accent">{domain.title}</h4>
                  <ul className="space-y-2">
                    {domain.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Our Methodology</h3>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {methodology.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-bold text-accent">{item.step}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
