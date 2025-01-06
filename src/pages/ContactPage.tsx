import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Have questions? We're here to help. Reach out through any of our channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Mail className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <a 
                  href="mailto:Info@PraxisInitiative.Org" 
                  className="text-navy hover:text-teal text-lg"
                >
                  Info@PraxisInitiative.Org
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Phone className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
                <a 
                  href="tel:+16027777503" 
                  className="text-navy hover:text-teal text-lg"
                >
                  (602) 777-7503
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Globe className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Website</h3>
                <a 
                  href="https://praxisinitiative.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-navy hover:text-teal text-lg"
                >
                  praxisinitiative.org
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <MapPin className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>
                <address className="text-gray-600 not-italic text-lg">
                  4022 E. Greenway Rd.<br />
                  Ste. 11 PMB 1046<br />
                  Phoenix, AZ 85032
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-[350px] flex items-center bg-[#8080ff] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-8">
              Join us in creating meaningful change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center px-6 py-3 bg-maroon text-white rounded-md hover:bg-teal transition-colors"
              >
                Join Our Team
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors"
              >
                Support Our Mission
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center px-6 py-3 bg-copper text-white rounded-md hover:bg-copper-dark transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;