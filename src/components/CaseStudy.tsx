import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import maritimeOpsImage from "@/assets/maritime-ops-hub.jpg";

const CaseStudy = () => {
  const features = [
    "Real-Time Vessel Tracking with Interactive Map - Live AIS data for 4,300+ vessels",
    "AI-Powered Route Optimization Engine - Fuel efficiency with detailed cost analysis",
    "Comprehensive Weather Integration - 3-day forecasts for vessels and 25 ports",
    "Intelligent Issue Reporting & Analysis - AI impact assessment with mitigation strategies",
    "AI Chatbot for Maritime Queries - Natural language processing for operational planning",
    "Fleet Management & Assignment System - Complete vessel categorization and tracking"
  ];

  const results = [
    "Reduced route planning from hours to instant AI recommendations",
    "Clear visibility into fuel consumption (5-15% typical savings)",
    "Faster response to operational challenges with real-time analysis",
    "Real-time competitive positioning for strategic decisions",
    "AI handles complex analysis, freeing team for strategic focus"
  ];

  const techStack = [
    { category: "Backend", items: "Python, Flask, SQLAlchemy, Gunicorn" },
    { category: "Frontend", items: "HTML5, CSS3, JavaScript, Leaflet.js" },
    { category: "AI & APIs", items: "Google Gemini, BarentsWatch AIS, Open-Meteo" },
    { category: "Deployment", items: "Replit, SQLite with WAL mode" }
  ];

  return (
    <section id="case-study" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Featured Project
          </h2>
          <h3 className="text-2xl md:text-3xl text-center text-accent mb-16">
            Maritime Operations Hub: Real-Time AI-Powered Fleet Management
          </h3>

          {/* Hero Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-large">
            <img 
              src={maritimeOpsImage} 
              alt="Maritime Operations Hub Dashboard" 
              className="w-full h-auto"
            />
          </div>

          {/* Problem Statement */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h4>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">Visibility Gap:</strong> Difficulty tracking multiple vessels in real-time, leading to coordination inefficiencies.</p>
              <p><strong className="text-foreground">Decision Speed:</strong> Manual route planning consuming significant time, delaying time-sensitive decisions.</p>
              <p><strong className="text-foreground">Cost Opacity:</strong> Lack of clear visibility into fuel consumption and optimization opportunities.</p>
              <p><strong className="text-foreground">Operational Responsiveness:</strong> Slow response times due to manual impact analysis.</p>
            </div>
          </Card>

          {/* Solution Overview */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">The Solution</h4>
            <p className="text-lg text-muted-foreground mb-6">
              A comprehensive, AI-enhanced web platform combining real-time vessel tracking with intelligent 
              AI analysis to transform maritime fleet management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">Results & Impact</h4>
            <div className="space-y-3 mb-6">
              {results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h5 className="font-bold mb-3 text-foreground">Proof of Concept Metrics:</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li>• 4,300+ real vessel positions integrated</li>
                <li>• 25 Northern European ports analyzed</li>
                <li>• Real-time weather data processing</li>
                <li>• AI recommendations in &lt;5 seconds</li>
                <li>• Multi-user role-based access</li>
                <li>• Production-ready deployment</li>
              </ul>
            </div>
          </Card>

          {/* Technology Stack */}
          <Card className="p-8 md:p-12 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-foreground">Technology Stack</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div key={index}>
                  <h5 className="font-semibold text-accent mb-2">{tech.category}</h5>
                  <p className="text-muted-foreground">{tech.items}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://maritime-ops-hub-andreasbuskop.replit.app", "_blank")}
            >
              View Live Demo
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Developed in 7-9 hours as proof-of-concept
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
