import { CheckCircle2, Award, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver the highest quality cleaning services with attention to every detail.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Fully licensed, bonded, and insured for your complete peace of mind.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Our trained and vetted professionals treat your property with utmost care.",
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Consistent, dependable service that you can count on, every single time.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Prime Pangea</h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in commercial cleaning excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-center text-lg text-foreground mb-8">
              Since our founding over 15 years ago, Prime Pangea Contracting has been the go-to choice for 
              businesses seeking professional, reliable commercial cleaning services. We specialize in properties 
              5,000 square feet and larger, bringing expertise and dedication to every project.
            </p>
            <p className="text-center text-lg text-foreground">
              Our commitment to excellence, combined with eco-friendly practices and cutting-edge cleaning 
              technology, ensures your commercial space is not just clean—it's pristine, safe, and welcoming.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Commercial Properties 5,000+ Square Feet</h3>
          <p className="text-xl text-primary-foreground/90 mb-6">
            We specialize in larger commercial spaces, providing comprehensive cleaning solutions 
            tailored to your facility's unique needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Offices</span>
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Warehouses</span>
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Retail Spaces</span>
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Medical Facilities</span>
            <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">Educational Institutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
