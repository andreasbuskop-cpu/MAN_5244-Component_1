import { Briefcase, GraduationCap, Award, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustBar = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Briefcase,
      value: t("trustBar.experience"),
      label: t("trustBar.experienceDesc"),
    },
    {
      icon: GraduationCap,
      value: t("trustBar.architect"),
      label: t("trustBar.architectDesc"),
    },
    {
      icon: Award,
      value: t("trustBar.education"),
      label: t("trustBar.educationDesc"),
    },
    {
      icon: Building2,
      value: t("trustBar.enterprise"),
      label: t("trustBar.enterpriseDesc"),
    },
  ];

  return (
    <section className="bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <stat.icon className="h-6 w-6 text-accent mb-1" />
              <span className="font-bold text-lg text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
