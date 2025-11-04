import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    squareFootage: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Information Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      squareFootage: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Request Information Form</h2>
          <p className="text-lg text-muted-foreground">
            Let us know your cleaning needs and we'll provide a customized quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@primepangea.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@primepangea.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-muted-foreground">
                      Serving commercial properties nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Choose Prime Pangea?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground mt-2 mr-3" />
                  <span>15+ years of commercial cleaning experience</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground mt-2 mr-3" />
                  <span>Fully licensed, bonded, and insured</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground mt-2 mr-3" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground mt-2 mr-3" />
                  <span>Eco-friendly cleaning products</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground mt-2 mr-3" />
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Smith"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(123) 456-7890"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Needed *</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Office Cleaning</SelectItem>
                  <SelectItem value="porter">Day Porter Service</SelectItem>
                  <SelectItem value="covid">COVID-19 Disinfection</SelectItem>
                  <SelectItem value="construction">Post-Construction Clean</SelectItem>
                  <SelectItem value="junk">Junk Removal</SelectItem>
                  <SelectItem value="residential">Residential Cleaning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="squareFootage">Square Footage</Label>
              <Input
                id="squareFootage"
                value={formData.squareFootage}
                onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                placeholder="e.g., 10,000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your cleaning needs..."
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Request Information
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
