import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-xl mb-12 opacity-90">
            {t("contact.subtitle")}
          </p>

          <Card className="p-8 md:p-12 bg-card text-card-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold mb-6">{t("contact.getInTouch")}</h3>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t("contact.email")}</p>
                    <a 
                      href="mailto:andreas.buskop@driftai.no"
                      className="text-accent hover:underline"
                    >
                      andreas.buskop@driftai.no
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Linkedin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t("contact.linkedin")}</p>
                    <a 
                      href="https://www.linkedin.com/in/andreasbuskop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      linkedin.com/in/andreasbuskop
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t("contact.location")}</p>
                    <p className="text-muted-foreground">{t("contact.locationValue")}</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="text-left bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">{t("contact.availability")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("contact.availabilityText")}
                </p>
                <Button 
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = "mailto:andreas.buskop@driftai.no?subject=Maritime AI Consulting Inquiry"}
                >
                  {t("contact.scheduleConsultation")}
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                {t("contact.additionalInfo")}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
