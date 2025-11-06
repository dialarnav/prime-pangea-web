import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional commercial cleaning services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Commercial Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Providing services for more than 15 years in the NOVA area. We deliver pristine, safe, and healthy commercial environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="#contact">
                Get Free Quote
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary"
            >
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5k+</div>
              <div className="text-sm text-primary-foreground/80">Sq Ft Minimum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
