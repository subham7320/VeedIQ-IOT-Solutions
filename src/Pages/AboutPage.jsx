import React from 'react';
import Footer from '../components/Footer';
import { Cpu, Server, Globe, Shield, Network, Cloud, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Factory },
    { number: "100K+", label: "Connected Devices", icon: Cpu },
    { number: "99.99%", label: "Uptime", icon: Server },
    { number: "24/7", label: "Global Support", icon: Globe },
  ];

  const features = [
    {
      title: "Industrial IoT Solutions",
      description: "Transform manufacturing processes with advanced IoT sensors and real-time monitoring systems.",
      icon: Factory
    },
    {
      title: "Edge Computing",
      description: "Process data closer to the source with our distributed computing architecture.",
      icon: Network
    },
    {
      title: "Cloud Integration",
      description: "Seamless cloud connectivity for scalable IoT deployments and data management.",
      icon: Cloud
    },
    {
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols protecting your IoT infrastructure.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
      {/* Hero Section with Particle Effect */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Pioneering IoT Innovation
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            At VeedIQ, we're revolutionizing industries through cutting-edge IoT solutions.
            Our technology empowers businesses to achieve unprecedented levels of automation,
            efficiency, and intelligence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Our Core Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Our Vision
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We envision a future where IoT technology seamlessly integrates into every aspect of industrial operations.
            Our commitment to innovation drives us to develop solutions that not only meet today's challenges but
            anticipate tomorrow's needs.
          </p>
          <div className="inline-block">
            <Link to="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold 
                        shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                Contact Sales
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;