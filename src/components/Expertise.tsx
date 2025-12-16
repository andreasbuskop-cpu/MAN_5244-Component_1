import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Expertise = () => {
  const { t } = useTranslation();

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

          {/* Domain Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
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
      </div>
    </section>
  );
};

export default Expertise;
