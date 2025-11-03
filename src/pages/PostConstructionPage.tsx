import { Construction } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import postConstructionImg from "@/assets/post-construction.jpg";

const PostConstructionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={postConstructionImg}
              alt="Post-Construction Cleaning Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Construction className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Post-Construction Cleaning
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              10+ million square feet cleaned - from medical to government facilities
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Premier Post-Construction Cleaning Services</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Prime Pangea Contracting has established itself as the leading post-construction cleaning 
                specialist in the NOVA area, having successfully cleaned more than 10 million square feet 
                of new constructions. Our extensive portfolio includes high-end medical facilities, government 
                buildings, commercial offices, and specialized facilities requiring the highest standards of 
                cleanliness and attention to detail.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Post-Construction Expertise</h3>
              <p className="text-lg text-muted-foreground mb-6">
                From rough clean to final clean, we handle every phase of post-construction cleaning with 
                precision and professionalism. Our experienced teams understand the unique challenges of 
                construction cleanup, including the removal of construction debris, fine dust particles, 
                protective films, and ensuring all surfaces are inspection-ready.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Comprehensive Post-Construction Services:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Rough Clean:</strong> Initial debris removal and surface preparation during construction</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Final Clean:</strong> Detailed cleaning preparing facility for occupancy and inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Dust & Debris Removal:</strong> Complete elimination of construction dust from all surfaces</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Window & Glass Cleaning:</strong> Removal of stickers, films, and construction residue</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Floor Care:</strong> Carpet cleaning, hard floor finishing, and protective coating removal</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>HVAC System Cleaning:</strong> Vent cleaning and filter replacement for optimal air quality</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Fixture & Surface Polishing:</strong> Detailed cleaning of hardware, fixtures, and finishes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Detail-Oriented Cleaning:</strong> Baseboards, corners, edges, and hard-to-reach areas</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Specialized Facility Experience:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Medical Facilities:</strong> Clean room protocols, sterile environment preparation, and healthcare-specific requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Government Buildings:</strong> Security clearances, compliance documentation, and government standards</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Commercial Offices:</strong> Large-scale office spaces, high-rise buildings, and corporate environments</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Educational Institutions:</strong> Schools, universities, and training facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Industrial Spaces:</strong> Warehouses, manufacturing facilities, and specialized work environments</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Choose Prime Pangea for Post-Construction?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Proven Track Record:</strong> Over 10 million square feet successfully cleaned</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>15+ Years Experience:</strong> Established expertise serving the NOVA area</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Inspection Ready:</strong> Meeting or exceeding all final inspection requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Flexible Scheduling:</strong> Working with your construction timeline and deadlines</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Professional Equipment:</strong> Industrial-grade tools and eco-friendly products</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Fully Insured:</strong> Complete liability and workers' compensation coverage</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground mb-6">
                Whether you're completing a small renovation or a large-scale new construction project, 
                Prime Pangea Contracting delivers the meticulous post-construction cleaning services that 
                transform construction sites into pristine, move-in-ready facilities.
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

export default PostConstructionPage;