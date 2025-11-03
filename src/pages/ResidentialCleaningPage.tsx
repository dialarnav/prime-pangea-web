import { Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import residentialCleaningImg from "@/assets/residential-cleaning.jpg";

const ResidentialCleaningPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={residentialCleaningImg}
              alt="Residential Cleaning Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Home className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Residential Cleaning Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Fully customizable cleaning - you pick and choose the areas
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Customized Residential Cleaning</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                This is not your traditional house cleaning service. Through our sister company MaidPerfect, 
                Prime Pangea Contracting offers a completely customizable residential cleaning experience 
                tailored to your specific needs and preferences. Whether you need just one bathroom cleaned 
                before guests arrive or a comprehensive whole-house deep clean including exterior areas, 
                you have complete control over what gets cleaned.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Complete Customization</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Unlike traditional cleaning services that offer fixed packages, we let you pick and choose 
                exactly which areas of your home need attention. Clean as little or as much as you want - 
                the choice is entirely yours. This flexibility ensures you only pay for the services you 
                actually need, when you need them.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Flexible Cleaning Options:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Single Room Service:</strong> Need just the family room cleaned before guests? We've got you covered.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>One Bathroom:</strong> Quick bathroom refresh or deep sanitization of a single restroom</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Multiple Rooms:</strong> Select any combination of bedrooms, living areas, or spaces</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Kitchen Only:</strong> Comprehensive kitchen cleaning including appliances</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Full Interior:</strong> Complete cleaning of all indoor living spaces</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Exterior Cleaning:</strong> Decks, patios, entry ways, and outdoor living spaces</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Whole House Package:</strong> Complete interior and exterior cleaning solution</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Residential Cleaning Services:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Dusting & Surface Cleaning:</strong> All surfaces, furniture, fixtures, and decorative items</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Vacuuming & Floor Care:</strong> Carpets, rugs, hardwood, tile, and all floor types</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Bathroom Sanitization:</strong> Complete cleaning and disinfection of all bathroom areas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Kitchen Cleaning:</strong> Countertops, sinks, appliances, and cabinet exteriors</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Bedroom Services:</strong> Bed making, closet organization, and thorough cleaning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Living Area Care:</strong> Common spaces, entertainment areas, and home offices</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Window Cleaning:</strong> Interior and exterior window washing</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Outdoor Spaces:</strong> Patios, decks, porches, and entry areas</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Perfect For:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Pre-Guest Preparation:</strong> Quick cleanup of main areas before visitors arrive</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Post-Event Cleanup:</strong> Thorough cleaning after parties or gatherings</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Seasonal Deep Cleaning:</strong> Spring cleaning or preparing for holidays</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Move-In/Move-Out:</strong> Complete cleaning for transitions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Regular Maintenance:</strong> Ongoing service with your customized plan</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Special Occasions:</strong> Holiday preparation, open houses, or special events</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">MaidPerfect - Our Sister Company:</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Residential services are provided through MaidPerfect, our dedicated residential cleaning 
                division. MaidPerfect combines the professional standards and reliability of Prime Pangea 
                Contracting with specialized residential cleaning expertise, bringing 15+ years of trusted 
                service from the commercial sector into your home.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Commitment to You:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>No Minimum Requirements:</strong> One bathroom or whole house - we're here for you</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Professional Staff:</strong> Trained, uniformed, and background-checked team members</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Eco-Friendly Products:</strong> Safe, effective cleaning solutions for your family</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Flexible Scheduling:</strong> Work around your schedule and preferences</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Satisfaction Guaranteed:</strong> We're not happy unless you're completely satisfied</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground mb-6">
                Experience the difference of truly customizable residential cleaning. With MaidPerfect and 
                Prime Pangea Contracting, you get exactly the cleaning services you need, delivered with 
                the professionalism and reliability we've built our reputation on over 15 years in the NOVA area.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Request Information</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialCleaningPage;