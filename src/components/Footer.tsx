import { Link } from "react-router-dom";
import driftLogo from "@/assets/drift-ai-logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2 mb-6 md:mb-0">
            <img src={driftLogo} alt="Drift AI" className="h-8 w-auto" />
            <p className="text-sm opacity-75">{t("footer.tagline")}</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <Link
              to="/about"
              className="hover:text-accent transition-colors"
            >
              {t("nav.about")}
            </Link>
            <a
              href="mailto:andreas.buskop@gmail.com"
              className="hover:text-accent transition-colors"
            >
              {t("footer.contact")}
            </a>
            <a
              href="https://www.linkedin.com/in/andreasbuskop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {t("footer.linkedin")}
            </a>
            <a
              href="https://maritime-ops-hub-andreasbuskop.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {t("footer.liveDemo")}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm opacity-75 text-center md:text-right">
            <p>© {currentYear} drift.ai</p>
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
