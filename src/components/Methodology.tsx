import { Card } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, TrendingUp, ArrowRight, CheckCircle, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const Methodology = () => {
  const { t } = useTranslation();

  const phases = [
    {
      icon: Search,
      key: "discover",
      step: 1,
    },
    {
      icon: Lightbulb,
      key: "design",
      step: 2,
    },
    {
      icon: Rocket,
      key: "deliver",
      step: 3,
    },
    {
      icon: TrendingUp,
      key: "scale",
      step: 4,
    },
  ];

  const differentiatorPoints = t("methodology.differentiator.points", { returnObjects: true }) as string[];

  return (
    <section id="method" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t("methodology.title")}
          </h2>
          <p className="text-xl text-center text-accent font-medium mb-4 max-w-3xl mx-auto">
            {t("methodology.subtitle")}
          </p>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t("methodology.intro")}
          </p>

          {/* Differentiator Section */}
          <Card className="mb-16 p-8 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                {t("methodology.differentiator.title")}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentiatorPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* 4 Phases */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Our 4-Phase Approach
            </h3>

            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-[140px] left-[12.5%] right-[12.5%] h-0.5 bg-accent/30" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  <Card
                    className="p-6 hover:shadow-large transition-all duration-300 animate-slide-up h-full"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Step number */}
                    <div className="relative z-10 w-10 h-10 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-accent-foreground">
                        {phase.step}
                      </span>
                    </div>

                    <phase.icon className="h-8 w-8 text-accent mx-auto mb-4" />

                    <h4 className="text-xl font-bold text-center mb-2 text-foreground">
                      {t(`methodology.${phase.key}.title`)}
                    </h4>
                    <p className="text-sm font-medium text-accent text-center mb-3">
                      {t(`methodology.${phase.key}.subtitle`)}
                    </p>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {t(`methodology.${phase.key}.description`)}
                    </p>

                    <ul className="space-y-2">
                      {(t(`methodology.${phase.key}.outputs`, { returnObjects: true }) as string[]).map(
                        (output, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <span className="text-accent mr-2 mt-1">-</span>
                            {output}
                          </li>
                        )
                      )}
                    </ul>
                  </Card>

                  {/* Arrow for mobile */}
                  {index < phases.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-accent rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
