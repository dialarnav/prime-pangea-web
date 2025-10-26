import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Prime Pangea Contracting</h3>
            <p className="text-primary-foreground/80 mb-4">
              Professional commercial cleaning services you can trust. Serving businesses with excellence for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Day Porter Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  COVID-19 Disinfection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Post-Construction Clean
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Junk Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Residential Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  Phone: (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@primepangea.com" className="hover:text-accent transition-colors">
                  Email: info@primepangea.com
                </a>
              </li>
              <li className="mt-4">
                <p className="font-semibold text-primary-foreground">Business Hours:</p>
                <p>Monday - Friday: 8am - 6pm</p>
                <p>24/7 Emergency Service</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} Prime Pangea Contracting. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Sister Company: <span className="font-semibold text-primary-foreground">MaidPerfect</span> - Residential Cleaning Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
