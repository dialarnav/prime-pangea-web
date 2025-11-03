import { Trash2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import junkRemovalImg from "@/assets/junk-removal.jpg";

const JunkRemovalPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={junkRemovalImg}
              alt="Junk Removal Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Trash2 className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Commercial Junk Removal
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Fast, efficient removal of unwanted items and debris
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Professional Junk Removal Services</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Prime Pangea Contracting provides comprehensive commercial junk removal services for businesses 
                throughout the NOVA area. Whether you're clearing out an office, removing construction debris, 
                or disposing of old furniture and equipment, our professional team handles all aspects of junk 
                removal with efficiency, care, and environmental responsibility.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">What We Remove</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our junk removal services cover virtually any type of unwanted items from commercial properties. 
                No job is too big or too small - we handle everything from single-item removal to complete 
                facility cleanouts.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Commercial Junk Removal Services:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Office Furniture:</strong> Desks, chairs, cubicles, filing cabinets, and workstations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Electronics & E-Waste:</strong> Computers, monitors, printers, servers, and telecom equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Construction Debris:</strong> Leftover materials, drywall, lumber, and renovation waste</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Appliances:</strong> Refrigerators, microwaves, water coolers, and commercial kitchen equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Fixtures & Equipment:</strong> Shelving, display cases, old signage, and outdated equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>General Clutter:</strong> Boxes, paper, packaging materials, and miscellaneous items</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Heavy Items:</strong> Safes, industrial equipment, and oversized materials</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Junk Removal Process:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Free Assessment:</strong> We evaluate your junk removal needs and provide upfront pricing</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Flexible Scheduling:</strong> Book at your convenience, including after-hours and weekends</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Professional Removal:</strong> Our trained team handles all heavy lifting and loading</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Clean Sweep:</strong> We clean up the area after removal, leaving it spotless</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Responsible Disposal:</strong> Items are donated, recycled, or properly disposed of</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Eco-Friendly Practices:</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Environmental responsibility is a core value at Prime Pangea Contracting. We prioritize 
                sustainable disposal methods to minimize environmental impact:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Donation First:</strong> Usable items donated to local charities and organizations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Maximum Recycling:</strong> Metals, electronics, paper, and other materials recycled when possible</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Proper E-Waste Handling:</strong> Certified electronic waste disposal protecting data and environment</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Responsible Landfill Use:</strong> Only non-recyclable items sent to licensed facilities</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Choose Prime Pangea?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Fast Service:</strong> Same-day and next-day appointments available</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Transparent Pricing:</strong> No hidden fees - you know the cost before we start</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Professional Team:</strong> Uniformed, trained staff who respect your property</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Fully Insured:</strong> Complete liability coverage for your peace of mind</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>15+ Years Experience:</strong> Trusted service throughout the NOVA area</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground mb-6">
                From routine office cleanouts to large-scale facility renovations, Prime Pangea Contracting 
                provides reliable, efficient junk removal services that help you maintain a clean, organized, 
                and productive commercial environment.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Quote</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JunkRemovalPage;