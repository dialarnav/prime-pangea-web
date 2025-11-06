import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import officeCleaning1 from "@/assets/office-cleaning-1.jpg";
import officeCleaning2 from "@/assets/office-cleaning-2.jpg";
import officeCleaning3 from "@/assets/office-cleaning-3.jpg";
import dayPorter1 from "@/assets/day-porter-1.jpg";
import dayPorter2 from "@/assets/day-porter-2.jpg";
import dayPorter3 from "@/assets/day-porter-3.jpg";
import covidDisinfection1 from "@/assets/covid-disinfection-1.jpg";
import covidDisinfection2 from "@/assets/covid-disinfection-2.jpg";
import covidDisinfection3 from "@/assets/covid-disinfection-3.jpg";
import postConstruction1 from "@/assets/post-construction-1.jpg";
import postConstruction2 from "@/assets/post-construction-2.jpg";
import postConstruction3 from "@/assets/post-construction-3.jpg";
import junkRemoval1 from "@/assets/junk-removal-1.jpg";
import junkRemoval2 from "@/assets/junk-removal-2.jpg";
import junkRemoval3 from "@/assets/junk-removal-3.jpg";
import residentialCleaning1 from "@/assets/residential-cleaning-1.jpg";
import residentialCleaning2 from "@/assets/residential-cleaning-2.jpg";
import residentialCleaning3 from "@/assets/residential-cleaning-3.jpg";

const galleryData = {
  office: [
    { src: officeCleaning1, title: "Office Space Cleaning", description: "Complete office sanitization" },
    { src: officeCleaning2, title: "Corporate Offices", description: "Professional workspace maintenance" },
    { src: officeCleaning3, title: "Meeting Rooms", description: "Pristine meeting environments" },
  ],
  porter: [
    { src: dayPorter1, title: "Day Porter Service", description: "On-site professional service" },
    { src: dayPorter2, title: "Lobby Maintenance", description: "Continuous care during business hours" },
    { src: dayPorter3, title: "Building Support", description: "Immediate response cleaning" },
  ],
  covid: [
    { src: covidDisinfection1, title: "COVID-19 Disinfection", description: "Hospital-grade sanitization" },
    { src: covidDisinfection2, title: "High-Touch Disinfection", description: "CDC-compliant protocols" },
    { src: covidDisinfection3, title: "Safe Environments", description: "Comprehensive sanitization" },
  ],
  construction: [
    { src: postConstruction1, title: "Post-Construction Clean", description: "Final clean before occupancy" },
    { src: postConstruction2, title: "New Building Prep", description: "Construction debris removal" },
    { src: postConstruction3, title: "Final Touch", description: "Move-in ready spaces" },
  ],
  junk: [
    { src: junkRemoval1, title: "Junk Removal", description: "Efficient debris removal" },
    { src: junkRemoval2, title: "Property Clearing", description: "Complete cleanout services" },
    { src: junkRemoval3, title: "Disposal Service", description: "Eco-friendly waste management" },
  ],
  residential: [
    { src: residentialCleaning1, title: "Home Cleaning", description: "MaidPerfect residential service" },
    { src: residentialCleaning2, title: "Deep Cleaning", description: "Thorough home sanitization" },
    { src: residentialCleaning3, title: "Regular Maintenance", description: "Consistent quality care" },
  ],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("office");

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            See the results of our professional cleaning services
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
            <TabsTrigger value="office">Office</TabsTrigger>
            <TabsTrigger value="porter">Day Porter</TabsTrigger>
            <TabsTrigger value="covid">COVID-19</TabsTrigger>
            <TabsTrigger value="construction">Construction</TabsTrigger>
            <TabsTrigger value="junk">Junk Removal</TabsTrigger>
            <TabsTrigger value="residential">Residential</TabsTrigger>
          </TabsList>

          {Object.entries(galleryData).map(([key, images]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-primary-foreground">
                        <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-primary-foreground/90">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
