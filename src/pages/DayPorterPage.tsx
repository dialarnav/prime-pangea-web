import { Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import dayPorterImg from "@/assets/day-porter.jpg";

const DayPorterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={dayPorterImg}
              alt="Day Porter Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Clock className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Day Porter Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              On-site cleaning professionals maintaining excellence during business hours
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Professional Day Porter Services</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Our Day Porter Services provide you with dedicated on-site cleaning professionals who work 
                during your business hours to ensure your facility maintains impeccable standards throughout 
                the day. Unlike traditional janitorial services that work after hours, day porters are present 
                when your employees and clients are on-site, providing immediate response to cleaning needs 
                and maintaining a consistently professional appearance.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">What is a Day Porter?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A day porter is a trained cleaning professional who works on-site during your regular business 
                hours to maintain cleanliness, handle immediate cleaning needs, and ensure your facility always 
                looks its best. They act as the face of facility maintenance, providing visible, responsive 
                service that enhances your company's professional image.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Day Porter Services Include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Restroom Monitoring:</strong> Regular checks and immediate cleaning throughout the day</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Break Room Maintenance:</strong> Continuous upkeep of kitchens and common areas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Trash & Recycling Management:</strong> Regular collection and proper disposal</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Lobby & Entrance Care:</strong> Keeping first impressions spotless</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Conference Room Turnover:</strong> Quick setup and cleanup between meetings</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Spill Response:</strong> Immediate cleanup of accidents and spills</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Supply Restocking:</strong> Paper products, soap, and other consumables</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                  <span><strong>Light Maintenance:</strong> Minor repairs and reporting of facility issues</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits of Day Porter Services:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Immediate Response:</strong> Problems addressed before they become noticeable</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Enhanced Image:</strong> Always present your best face to clients and visitors</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Employee Satisfaction:</strong> Clean facilities improve morale and productivity</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Flexible Coverage:</strong> Part-time to full-time options based on your needs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3 mt-2" />
                  <span><strong>Cost-Effective:</strong> Prevent small issues from becoming expensive problems</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground mb-6">
                With 15+ years of experience serving the NOVA area, Prime Pangea Contracting provides 
                professionally trained, uniformed day porters who understand the importance of maintaining 
                your facility's appearance and functionality during business hours.
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

export default DayPorterPage;