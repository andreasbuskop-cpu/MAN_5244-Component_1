import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Briefcase, GraduationCap, Target, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-andre.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const highlights = [
    {
      icon: Briefcase,
      title: t("about.experience"),
      description: t("about.experienceDesc")
    },
    {
      icon: GraduationCap,
      title: t("about.architect"),
      description: t("about.architectDesc")
    },
    {
      icon: Award,
      title: t("about.track"),
      description: t("about.trackDesc")
    },
    {
      icon: Target,
      title: t("about.education"),
      description: t("about.educationDesc")
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t("about.title")}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-medium transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Biography */}
          <Card className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src={profileImage} 
                alt="Andreas Buskop - Chief Architect & Founder of drift.ai"
                className="w-48 h-48 rounded-lg object-cover shadow-medium flex-shrink-0"
              />
              <div className="space-y-6 text-foreground">
                <h3 className="text-2xl font-bold mb-4">{t("about.founderTitle")}</h3>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("about.bio1")}
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("about.bio2")}
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t("about.bio3")}
                </p>

                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => window.open("https://www.linkedin.com/in/andreasbuskop/", "_blank")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  {t("about.linkedinCta")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
