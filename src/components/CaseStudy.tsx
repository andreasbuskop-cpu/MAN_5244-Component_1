import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, CheckCircle, Quote, Download } from "lucide-react";
import maritimeOpsVideo from "@/assets/maritime-ops-promo.mp4";
import softfundingDashboard from "@/assets/softfunding-dashboard.png";
import { useTranslation } from "react-i18next";

interface CaseStudyItem {
  id: string;
  name: string;
  description: string;
  link: string;
  video?: string;
  image?: string;
  presentationUrl?: string;
}

const CaseStudy = () => {
  const { t } = useTranslation();

  const caseStudies: CaseStudyItem[] = [
    {
      id: "maritime",
      name: t("caseStudy.maritime.name"),
      description: t("caseStudy.maritime.description"),
      link: "https://maritime.driftai.no",
      video: maritimeOpsVideo,
    },
    {
      id: "softfunding",
      name: t("caseStudy.softfunding.name"),
      description: t("caseStudy.softfunding.description"),
      link: "https://funding.driftai.no",
      image: softfundingDashboard,
      presentationUrl: "/docs/251220_Soft-Funding-and-Finance-Copilot.pdf",
    },
  ];

  const anonymizedResults = t("caseStudy.anonymized.results", { returnObjects: true }) as string[];

  return (
    <section id="case-study" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t("caseStudy.title")}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t("caseStudy.subtitle")}
          </p>

          {/* Anonymized Strategy Case */}
          <Card className="mb-12 overflow-hidden border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-accent text-accent-foreground">
                  {t("caseStudy.anonymized.badge")}
                </Badge>
                <h3 className="text-2xl font-bold text-foreground">
                  {t("caseStudy.anonymized.name")}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-muted-foreground mb-6">
                    {t("caseStudy.anonymized.challenge")}
                  </p>

                  <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-muted-foreground">
                    {t("caseStudy.anonymized.solution")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">Results</h4>
                  <ul className="space-y-3">
                    {anonymizedResults.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-accent/20">
                <div className="flex items-start gap-3">
                  <Quote className="h-6 w-6 text-accent flex-shrink-0" />
                  <p className="text-lg italic text-muted-foreground">
                    {t("caseStudy.anonymized.insight")}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Demos */}
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technical Demos
          </h3>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="overflow-hidden hover:shadow-large transition-all duration-300 animate-slide-up"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {/* Left: Description */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{study.name}</h3>
                    <p className="text-muted-foreground">{study.description}</p>
                  </div>

                  {/* Right: Video or Image */}
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    {study.video ? (
                      <video
                        src={study.video}
                        controls
                        className="w-full h-full object-cover"
                        aria-label={`${study.name} demo video`}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : study.image ? (
                      <img
                        src={study.image}
                        alt={`${study.name} dashboard`}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20">
                        <div className="text-center">
                          <Play className="h-12 w-12 text-accent mx-auto mb-2 opacity-50" />
                          <span className="text-sm text-muted-foreground">{t("caseStudy.comingSoon")}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Buttons below */}
                <div className="px-6 pb-6 flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    className="w-full md:w-auto"
                    onClick={() => window.open(study.link, "_blank")}
                  >
                    {t("caseStudy.testDemo")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  {study.presentationUrl && (
                    <Button
                      variant="outline"
                      className="w-full md:w-auto"
                      onClick={() => window.open(study.presentationUrl, "_blank")}
                    >
                      {t("caseStudy.downloadPresentation")}
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
