import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import driftLogo from "@/assets/drift-ai-logo.png";
import { useTranslation } from "react-i18next";
import { GB } from "country-flag-icons/react/3x2";
import { NO } from "country-flag-icons/react/3x2";
import { CN } from "country-flag-icons/react/3x2";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t("nav.about"), id: "about" },
    { label: t("nav.services"), id: "services" },
    { label: t("nav.caseStudy"), id: "case-study" },
    { label: t("nav.expertise"), id: "expertise" },
    { label: t("nav.contact"), id: "contact" },
  ];

  const languages = [
    { code: "en", Flag: GB, name: "English" },
    { code: "no", Flag: NO, name: "Norsk" },
    { code: "zh", Flag: CN, name: "中文" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={driftLogo} alt="Drift AI" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Flags */}
            <div className="flex items-center space-x-2">
              {languages.map((lang) => {
                const FlagIcon = lang.Flag;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`hover:scale-110 transition-transform ${
                      i18n.language === lang.code ? "opacity-100" : "opacity-50"
                    }`}
                    title={lang.name}
                  >
                    <FlagIcon className="w-6 h-4 rounded" />
                  </button>
                );
              })}
            </div>

            <Button 
              onClick={() => scrollToSection("contact")}
              variant={isScrolled ? "default" : "secondary"}
              size="sm"
            >
              {t("nav.getStarted")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="flex items-center justify-center space-x-4 px-4 py-3 border-t border-border mt-2">
              {languages.map((lang) => {
                const FlagIcon = lang.Flag;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`hover:scale-110 transition-transform ${
                      i18n.language === lang.code ? "opacity-100" : "opacity-50"
                    }`}
                    title={lang.name}
                  >
                    <FlagIcon className="w-8 h-6 rounded" />
                  </button>
                );
              })}
            </div>

            <div className="px-4 pt-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                {t("nav.getStarted")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
