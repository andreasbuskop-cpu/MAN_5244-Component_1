import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Code, AlertTriangle, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Compass,
      title: t("services.strategy.title"),
      description: t("services.strategy.description"),
      features: t("services.strategy.features", { returnObjects: true }) as string[]
    },
    {
      icon: Code,
      title: t("services.development.title"),
      description: t("services.development.description"),
      features: t("services.development.features", { returnObjects: true }) as string[]
    },
    {
      icon: AlertTriangle,
      title: t("services.issue.title"),
      description: t("services.issue.description"),
      features: t("services.issue.features", { returnObjects: true }) as string[]
    },
    {
      icon: Database,
      title: t("services.rag.title"),
      description: t("services.rag.description"),
      features: t("services.rag.features", { returnObjects: true }) as string[]
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
            {t("services.title")}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t("services.subtitle")}
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
              {t("services.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
