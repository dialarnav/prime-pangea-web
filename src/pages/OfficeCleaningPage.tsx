import { Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import officeCleaningImg from "@/assets/office-cleaning.jpg";

const OfficeCleaningPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={officeCleaningImg}
              alt="Office Cleaning Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Building2 className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Office Cleaning Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Professional office cleaning solutions for businesses of 5,000+ sq ft
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Office Cleaning Excellence</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Prime Pangea Contracting delivers superior office cleaning services designed to maintain 
                pristine, productive work environments. Our expert team specializes in commercial properties 
                of 5,000 square feet and above, ensuring every corner of your workspace meets the highest 
                standards of cleanliness and professionalism.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Industry-Leading DATA CENTER Cleaning</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We provide the best and most cost-effective DATA CENTER specialized cleaning in the nation. 
                Our technicians are trained in the unique requirements of data center environments, including 
                raised floor cleaning, containment aisle maintenance, and contamination control protocols that 
                protect your critical IT infrastructure.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Office Cleaning Services Include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Daily & Weekly Cleaning:</strong> Customized schedules to fit your business operations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Professional Floor Care:</strong> Carpet cleaning, hard floor maintenance, and specialized finishes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Restroom Sanitization:</strong> Hospital-grade disinfection and supplies management</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Break Room & Kitchen Cleaning:</strong> Complete sanitation of food preparation areas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Window & Glass Cleaning:</strong> Interior and exterior window maintenance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Workstation Sanitization:</strong> Desk, phone, and computer equipment cleaning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Common Area Maintenance:</strong> Lobbies, conference rooms, and hallways</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Choose Prime Pangea for Office Cleaning?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span>15+ years serving the NOVA area with proven excellence</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span>Specialized in properties 5,000+ square feet</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span>Green cleaning products and eco-friendly practices</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span>Fully insured and bonded professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span>Flexible scheduling including after-hours service</span>
                </li>
              </ul>
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

export default OfficeCleaningPage;