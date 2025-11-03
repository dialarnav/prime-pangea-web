import { Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import covidDisinfectionImg from "@/assets/covid-disinfection.jpg";

const CovidDisinfectionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={covidDisinfectionImg}
              alt="COVID-19 Disinfection Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              COVID-19 Disinfection Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              EPA-approved protocols for comprehensive sanitization and safety
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Professional COVID-19 Disinfection</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Prime Pangea Contracting provides comprehensive COVID-19 disinfection services that go beyond 
                standard cleaning to ensure a safe, sanitized environment for your employees, customers, and 
                visitors. Our CDC-compliant protocols and EPA-approved disinfectants deliver the highest level 
                of protection against viral contamination.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Disinfection Process</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We employ a systematic, evidence-based approach to disinfection that follows CDC and EPA 
                guidelines for COVID-19 response. Our trained technicians use hospital-grade disinfectants 
                proven effective against SARS-CoV-2 and other pathogens, ensuring comprehensive coverage 
                of all surfaces and high-touch areas.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">COVID-19 Disinfection Services Include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>High-Touch Surface Disinfection:</strong> Door handles, light switches, handrails, elevator buttons</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Workstation Sanitization:</strong> Desks, keyboards, phones, shared equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Restroom Deep Cleaning:</strong> Complete sanitization of all surfaces and fixtures</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Common Area Treatment:</strong> Break rooms, conference rooms, waiting areas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Electrostatic Spraying:</strong> 360-degree coverage for comprehensive disinfection</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Air Quality Improvement:</strong> HVAC system cleaning and filter replacement</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Documentation & Certification:</strong> Detailed reports of all disinfection activities</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Safety Standards:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>CDC Compliant Protocols:</strong> Following latest guidelines and recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>EPA-Approved Products:</strong> Hospital-grade disinfectants on EPA's List N</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Certified Technicians:</strong> Trained in proper PPE use and disinfection techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Contact Time Compliance:</strong> Ensuring proper dwell time for maximum effectiveness</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Safety-First Approach:</strong> Protecting both our team and your occupants</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">When You Need Disinfection Services:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span>After a confirmed or suspected COVID-19 case in your facility</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span>Regular preventive disinfection for high-traffic facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span>Before reopening after closure or reduced operations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span>As part of ongoing health and safety protocols</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground mb-6">
                With 15+ years of experience in the NOVA area, Prime Pangea Contracting brings proven 
                expertise and reliability to every disinfection project. We understand the critical 
                importance of maintaining a safe environment for your business operations.
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

export default CovidDisinfectionPage;