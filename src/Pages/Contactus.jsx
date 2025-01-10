import React from 'react';
import ContactUsForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer';
import { MessageSquare, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Our technical team is always here to help.",
      detail: "care.veediq@gmail.com",
    },
    {
      icon: MapPin,
      title: "Experience Center",
      description: "Visit our IOT experience center.",
      detail: "40 foot Road , Badarpur Border, Delhi-110044",
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Available 24/7 for emergencies",
      detail: "+91 6201169660",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0),_rgba(17,24,39,1))]"></div>
        <div className="absolute w-full h-full">
          <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.2)" />
              </linearGradient>
            </defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="url(#grid-gradient)" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Slogan Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h2 className="text-6xl font-bold text-white/5 whitespace-nowrap">
          Think Smart, Think VeedIQ
        </h2>
      </div>
      
      {/* Main content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Transform Your Living Space
              </h1>
              <p className="text-lg text-gray-400">
                Ready to make your things smarter? Our automation experts are here to help design your perfect smart solution.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl 
                      border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300
                      transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                      <p className="text-gray-400 mb-2">{info.description}</p>
                      <p className="font-semibold text-blue-400">{info.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form Section */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl shadow-lg p-8 md:p-12
              border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Start Your Smart automation Journey
                  </h2>
                  <p className="text-gray-400">
                    Whether you're looking to automate a single home or your entire industries, we're here to help. Tell us about your automation needs.
                  </p>
                </div>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;