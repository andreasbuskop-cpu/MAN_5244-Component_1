import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Spacer for fixed nav */}
      <div className="h-20" />
      <About />
      <Expertise />
      <Footer />
    </div>
  );
};

export default AboutPage;
