import { Building2, Clock, Shield, Construction, Trash2, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import dayPorterImg from "@/assets/day-porter.jpg";
import covidDisinfectionImg from "@/assets/covid-disinfection.jpg";
import postConstructionImg from "@/assets/post-construction.jpg";
import junkRemovalImg from "@/assets/junk-removal.jpg";
import residentialCleaningImg from "@/assets/residential-cleaning.jpg";

const services = [
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Comprehensive office cleaning services to maintain a pristine, productive work environment. We provide the best and most cost-effective DATA CENTER specialized cleaning in the nation.",
    image: officeCleaningImg,
    features: ["Daily/Weekly cleaning", "Floor care", "DATA CENTER cleaning", "Restroom sanitization"]
  },
  {
    icon: Clock,
    title: "Day Porter Service",
    description: "On-site cleaning professionals during business hours to maintain cleanliness and handle immediate needs.",
    image: dayPorterImg,
    features: ["Daytime coverage", "Immediate response", "Continuous maintenance", "Professional appearance"]
  },
  {
    icon: Shield,
    title: "COVID-19 Disinfection",
    description: "EPA-approved disinfection protocols to ensure a safe, sanitized environment for your employees and customers.",
    image: covidDisinfectionImg,
    features: ["CDC compliant", "Hospital-grade products", "High-touch focus", "Safety certified"]
  },
  {
    icon: Construction,
    title: "Post-Construction Cleaning",
    description: "We have cleaned more than 10 million square feet of new constructions in the area, from high-end medical facilities to government facilities. Complete final cleaning from rough to final clean.",
    image: postConstructionImg,
    features: ["10M+ sq ft cleaned", "Medical & government facilities", "Dust & debris removal", "Final inspection ready"]
  },
  {
    icon: Trash2,
    title: "Junk Removal",
    description: "Efficient removal of unwanted items, furniture, and debris from your commercial property.",
    image: junkRemovalImg,
    features: ["Fast service", "Proper disposal", "Heavy lifting", "Eco-friendly practices"]
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "It's not your traditional house cleaning. Customize your request - clean as few as one single restroom, just the family room if expecting guests, or the whole house including exterior. You pick and choose the areas to be cleaned.",
    image: residentialCleaningImg,
    features: ["Fully customizable", "Single room or whole house", "Interior & exterior", "Sister company: MaidPerfect"]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive commercial cleaning solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-start p-6">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
