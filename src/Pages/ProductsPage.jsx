import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Cpu, Server, Factory, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(
      (element) => observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      icon: Factory,
      title: "SmartFactory Pro",
      description: "Complete industrial IoT solution for manufacturing automation",
      features: ["Real-time monitoring", "Predictive maintenance", "Process optimization"],
      price: "Custom pricing",
      category: "Industrial"
    },
    {
      icon: Server,
      title: "EdgeCompute X1",
      description: "Edge computing device for distributed IoT processing",
      features: ["Low latency", "Offline capability", "Secure processing"],
      price: "Starting $999",
      category: "Hardware"
    },
    {
      icon: Cloud,
      title: "CloudConnect Hub",
      description: "Cloud integration platform for IoT device management",
      features: ["Device management", "Data analytics", "API integration"],
      price: "From $299/mo",
      category: "Software"
    },
    {
      icon: Shield,
      title: "SecureIoT Gateway",
      description: "Security-focused IoT gateway for enterprise deployments",
      features: ["End-to-end encryption", "Threat detection", "Access control"],
      price: "Starting $1499",
      category: "Security"
    },
    {
      icon: Cpu,
      title: "SensorNet Pro",
      description: "Advanced sensor network for industrial monitoring",
      features: ["Wireless mesh network", "Long battery life", "Environmental monitoring"],
      price: "Starting $1499",
      category: "Hardware"
    },
    {
      icon: Zap,
      title: "EnergyOptimize AI",
      description: "AI-powered energy optimization solution",
      features: ["Smart metering", "Consumption analytics", "Automated control"],
      price: "From $499/mo",
      category: "Software"
    }
  ];

  const categories = ['All', 'Industrial', 'Hardware', 'Software', 'Security'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0),_rgba(17,24,39,1))]" />
        </div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Our Products
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover our comprehensive suite of IoT solutions designed to transform your business
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white scale-105'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 
                  hover:border-blue-500/50 transition-all duration-300 transform 
                  hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{product.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <ArrowRight className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-semibold">{product.price}</span>
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg 
                    hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 
          rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-6">
            Contact our team of experts to find the perfect IoT solution for your needs
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
            text-white rounded-lg font-semibold shadow-lg hover:shadow-xl 
            transition-all duration-300 hover:scale-105">
            Contact Sales
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;