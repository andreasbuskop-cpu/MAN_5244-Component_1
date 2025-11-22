import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Maritime Operations?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let's discuss how drift.ai can help you reclaim time and amplify decisions with AI.
          </p>

          <Card className="p-8 md:p-12 bg-card text-card-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:andreas.buskop@gmail.com"
                      className="text-accent hover:underline"
                    >
                      andreas.buskop@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Linkedin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">LinkedIn</p>
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
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">Porsgrunn, Norway</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="text-left bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Availability</h3>
                <p className="text-muted-foreground mb-6">
                  Currently accepting new consulting engagements and strategic partnerships with 
                  maritime companies looking to implement transformative AI solutions.
                </p>
                <Button 
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = "mailto:andreas.buskop@gmail.com?subject=Maritime AI Consulting Inquiry"}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Open to discussing maritime AI opportunities, custom development projects, 
                and strategic partnerships.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
