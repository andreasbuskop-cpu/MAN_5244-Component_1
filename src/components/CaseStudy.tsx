import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import maritimeOpsVideo from "@/assets/maritime-ops-promo.mp4";
import { useTranslation } from "react-i18next";

const CaseStudy = () => {
  const { t } = useTranslation();
  const features = t("caseStudy.features", { returnObjects: true }) as string[];
  const results = t("caseStudy.resultsItems", { returnObjects: true }) as string[];
  const proofItems = t("caseStudy.proofItems", { returnObjects: true }) as string[];

  const techStack = [
    { category: t("caseStudy.backend"), items: t("caseStudy.backendItems") },
    { category: t("caseStudy.frontend"), items: t("caseStudy.frontendItems") },
    { category: t("caseStudy.aiApis"), items: t("caseStudy.aiApisItems") },
    { category: t("caseStudy.deployment"), items: t("caseStudy.deploymentItems") }
  ];

  return (
    <section id="case-study" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t("caseStudy.title")}
          </h2>
          <h3 className="text-2xl md:text-3xl text-center text-accent mb-16">
            {t("caseStudy.subtitle")}
          </h3>

          {/* Hero Video */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-large">
            <video 
              src={maritimeOpsVideo} 
              controls
              className="w-full h-auto"
              aria-label="Maritime Operations Hub promotional video"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Problem Statement */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">{t("caseStudy.challenge")}</h4>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">{t("caseStudy.challengeItems.visibility")}</strong> {t("caseStudy.challengeItems.visibilityDesc")}</p>
              <p><strong className="text-foreground">{t("caseStudy.challengeItems.decision")}</strong> {t("caseStudy.challengeItems.decisionDesc")}</p>
              <p><strong className="text-foreground">{t("caseStudy.challengeItems.cost")}</strong> {t("caseStudy.challengeItems.costDesc")}</p>
              <p><strong className="text-foreground">{t("caseStudy.challengeItems.operational")}</strong> {t("caseStudy.challengeItems.operationalDesc")}</p>
            </div>
          </Card>

          {/* Solution Overview */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">{t("caseStudy.solution")}</h4>
            <p className="text-lg text-muted-foreground mb-6">
              {t("caseStudy.solutionDesc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">{t("caseStudy.results")}</h4>
            <div className="space-y-3 mb-6">
              {results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h5 className="font-bold mb-3 text-foreground">{t("caseStudy.proofTitle")}</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {proofItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Technology Stack */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">{t("caseStudy.techStack")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div key={index}>
                  <h5 className="font-semibold text-accent mb-2">{tech.category}</h5>
                  <p className="text-muted-foreground">{tech.items}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://maritime-ops-hub-andreasbuskop.replit.app", "_blank")}
            >
              {t("caseStudy.viewDemo")}
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {t("caseStudy.developedIn")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
