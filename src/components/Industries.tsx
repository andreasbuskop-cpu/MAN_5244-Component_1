import { Card } from "@/components/ui/card";
import { Ship, Zap, Factory, Ruler } from "lucide-react";
import { useTranslation } from "react-i18next";

const Industries = () => {
  const { t } = useTranslation();

  const industries = [
    {
      icon: Ship,
      key: "maritime",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=800&q=80",
    },
    {
      icon: Zap,
      key: "energy",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
    {
      icon: Factory,
      key: "industry",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      icon: Ruler,
      key: "engineering",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t("industries.title")}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t("industries.subtitle")}
          </p>

          {/* Symmetric 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-large transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Real industry image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={industry.image}
                    alt={t(`industries.${industry.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`inline-flex p-2 rounded-lg ${industry.bgColor}`}>
                      <industry.icon className={`h-6 w-6 ${industry.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {t(`industries.${industry.key}.title`)}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {t(`industries.${industry.key}.description`)}
                  </p>

                  <ul className="space-y-2">
                    {(t(`industries.${industry.key}.painPoints`, { returnObjects: true }) as string[]).map(
                      (point, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-accent mr-2">-</span>
                          {point}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
