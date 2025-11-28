import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Expertise = () => {
  const { t } = useTranslation();
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
      title: t("expertise.maritime.title"),
      items: t("expertise.maritime.items", { returnObjects: true }) as string[]
    },
    {
      title: t("expertise.ai.title"),
      items: t("expertise.ai.items", { returnObjects: true }) as string[]
    },
    {
      title: t("expertise.business.title"),
      items: t("expertise.business.items", { returnObjects: true }) as string[]
    }
  ];

  const methodology = [
    {
      step: t("expertise.method1"),
      description: t("expertise.method1Desc")
    },
    {
      step: t("expertise.method2"),
      description: t("expertise.method2Desc")
    },
    {
      step: t("expertise.method3"),
      description: t("expertise.method3Desc")
    },
    {
      step: t("expertise.method4"),
      description: t("expertise.method4Desc")
    },
    {
      step: t("expertise.method5"),
      description: t("expertise.method5Desc")
    },
    {
      step: t("expertise.method6"),
      description: t("expertise.method6Desc")
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t("expertise.title")}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t("expertise.subtitle")}
          </p>

          {/* Technology Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">{t("expertise.techStack")}</h3>
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
            <h3 className="text-2xl font-bold mb-8 text-foreground">{t("expertise.domainExpertise")}</h3>
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
            <h3 className="text-2xl font-bold mb-8 text-foreground">{t("expertise.methodology")}</h3>
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
