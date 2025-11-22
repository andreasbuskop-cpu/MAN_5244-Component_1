import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img src={logo} alt="drift.ai" className="h-10 w-10" />
            <div>
              <p className="font-bold text-lg">drift.ai</p>
              <p className="text-sm opacity-75">Maritime AI Consulting</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <a 
              href="mailto:andreas.buskop@gmail.com"
              className="hover:text-accent transition-colors"
            >
              Contact
            </a>
            <a 
              href="https://www.linkedin.com/in/andreasbuskop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://maritime-ops-hub-andreasbuskop.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Live Demo
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm opacity-75 text-center md:text-right">
            <p>© {currentYear} drift.ai</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
