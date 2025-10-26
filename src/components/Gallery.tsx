import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import dayPorterImg from "@/assets/day-porter.jpg";
import covidDisinfectionImg from "@/assets/covid-disinfection.jpg";
import postConstructionImg from "@/assets/post-construction.jpg";
import junkRemovalImg from "@/assets/junk-removal.jpg";
import residentialCleaningImg from "@/assets/residential-cleaning.jpg";

const galleryData = {
  office: [
    { src: officeCleaningImg, title: "Office Space Cleaning", description: "Complete office sanitization" },
    { src: officeCleaningImg, title: "Corporate Offices", description: "Professional workspace maintenance" },
    { src: officeCleaningImg, title: "Meeting Rooms", description: "Pristine meeting environments" },
  ],
  porter: [
    { src: dayPorterImg, title: "Day Porter Service", description: "On-site professional service" },
    { src: dayPorterImg, title: "Lobby Maintenance", description: "Continuous care during business hours" },
    { src: dayPorterImg, title: "Building Support", description: "Immediate response cleaning" },
  ],
  covid: [
    { src: covidDisinfectionImg, title: "COVID-19 Disinfection", description: "Hospital-grade sanitization" },
    { src: covidDisinfectionImg, title: "High-Touch Disinfection", description: "CDC-compliant protocols" },
    { src: covidDisinfectionImg, title: "Safe Environments", description: "Comprehensive sanitization" },
  ],
  construction: [
    { src: postConstructionImg, title: "Post-Construction Clean", description: "Final clean before occupancy" },
    { src: postConstructionImg, title: "New Building Prep", description: "Construction debris removal" },
    { src: postConstructionImg, title: "Final Touch", description: "Move-in ready spaces" },
  ],
  junk: [
    { src: junkRemovalImg, title: "Junk Removal", description: "Efficient debris removal" },
    { src: junkRemovalImg, title: "Property Clearing", description: "Complete cleanout services" },
    { src: junkRemovalImg, title: "Disposal Service", description: "Eco-friendly waste management" },
  ],
  residential: [
    { src: residentialCleaningImg, title: "Home Cleaning", description: "MaidPerfect residential service" },
    { src: residentialCleaningImg, title: "Deep Cleaning", description: "Thorough home sanitization" },
    { src: residentialCleaningImg, title: "Regular Maintenance", description: "Consistent quality care" },
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
