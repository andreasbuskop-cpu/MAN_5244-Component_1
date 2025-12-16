import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Methodology from "@/components/Methodology";
import CaseStudy from "@/components/CaseStudy";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Industries />
      <Methodology />
      <CaseStudy />
      <Blog />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
