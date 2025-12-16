import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import maritimeOpsVideo from "@/assets/maritime-ops-promo.mp4";
import { useTranslation } from "react-i18next";

interface CaseStudyItem {
  id: string;
  name: string;
  description: string;
  link: string;
  video?: string;
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
    },
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card 
                key={study.id} 
                className="overflow-hidden hover:shadow-large transition-all duration-300 animate-slide-up flex flex-col"
              >
                {/* Video/Thumbnail Area */}
                <div className="aspect-video bg-muted relative">
                  {study.video ? (
                    <video 
                      src={study.video} 
                      controls
                      className="w-full h-full object-cover"
                      aria-label={`${study.name} demo video`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-accent mx-auto mb-2 opacity-50" />
                        <span className="text-sm text-muted-foreground">{t("caseStudy.comingSoon")}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{study.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{study.description}</p>
                  
                  <Button 
                    variant="secondary"
                    className="w-full"
                    onClick={() => window.open(study.link, "_blank")}
                  >
                    {t("caseStudy.viewApplication")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
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
