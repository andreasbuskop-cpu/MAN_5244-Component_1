import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Code, Route, AlertTriangle, BarChart3, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Compass,
      title: "AI Strategy Consulting for Maritime Operations",
      description: "We assess your maritime operations and identify high-impact AI implementation opportunities through strategic consultation.",
      features: [
        "Operational assessment and opportunity identification",
        "Feasibility analysis for AI solutions",
        "Implementation roadmap with phased approach",
        "ROI projections and business case development"
      ]
    },
    {
      icon: Code,
      title: "Custom AI Application Development",
      description: "We design and build tailored generative AI applications for your specific maritime workflows—purpose-built, not generic.",
      features: [
        "Full-stack application development",
        "AI model integration and optimization",
        "API integration with maritime data sources",
        "Production deployment and monitoring"
      ]
    },
    {
      icon: Route,
      title: "Route Optimization & Fuel Efficiency Analysis",
      description: "Leverage AI-powered analysis to optimize vessel routes, reduce fuel consumption, and identify cost-saving opportunities.",
      features: [
        "Route optimization with cost/benefit analysis",
        "Fuel efficiency recommendations",
        "Savings projections and tracking",
        "Real-time weather integration"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Operational Issue Analysis & Impact Assessment",
      description: "When operational issues arise, our AI-powered analysis quickly assesses impact, estimates costs, and recommends mitigation strategies.",
      features: [
        "Rapid issue impact analysis",
        "Cost and timeline impact assessment",
        "Risk level determination",
        "Recommended mitigation actions"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-Time Fleet Visibility & Analytics Dashboard",
      description: "Gain complete visibility into your fleet operations with a unified dashboard integrating live tracking, weather, and analytics.",
      features: [
        "Interactive fleet tracking dashboard",
        "Real-time weather and operational alerts",
        "Fleet performance analytics",
        "Role-based access control"
      ]
    },
    {
      icon: Database,
      title: "Local RAG Models & Engineering Data Intelligence",
      description: "Consolidate fragmented design and engineering data with local AI models that give you complete control and unlock value.",
      features: [
        "Local RAG model for data sovereignty",
        "Integration with design tools (CAD, analysis)",
        "AI co-pilot for engineers and designers",
        "Knowledge capture and institutional memory"
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            What We Offer
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Our consulting services combine maritime domain expertise with cutting-edge generative AI 
            to solve your most pressing operational challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-large transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Ready to transform your operations? Schedule a consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
