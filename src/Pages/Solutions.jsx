import React, { useState, useEffect } from 'react';
import { Shield, Home, Cpu, Cloud, ChevronRight, Check } from 'lucide-react';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

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


  const solutions = {
    home: {
      icon: Home,
      title: "Smart Home Automation",
      description: "Transform your home into an intelligent living space",
      features: [
        "Automated lighting control",
        "Smart temperature regulation",
        "Voice-controlled systems",
        "Automated security systems",
        "Energy consumption optimization",
        "Remote access and control"
      ],
      benefits: [
        "Reduce energy costs by up to 30%",
        "Enhanced home security",
        "Improved comfort and convenience",
        "Increased property value"
      ]
    },
    security: {
      icon: Shield,
      title: "Advanced Security Solutions",
      description: "Protect your smart home with military-grade security",
      features: [
        "End-to-end encryption",
        "Biometric authentication",
        "Real-time threat detection",
        "Automated security protocols",
        "24/7 monitoring systems",
        "Secure remote access"
      ],
      benefits: [
        "Peace of mind with robust security",
        "Protected private data",
        "Quick threat response",
        "Regular security updates"
      ]
    },
    cloud: {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity for your IoT ecosystem",
      features: [
        "Real-time data synchronization",
        "Automated backups",
        "Cross-device compatibility",
        "Scalable storage solutions",
        "Advanced analytics",
        "Remote management"
      ],
      benefits: [
        "Access from anywhere",
        "Never lose your data",
        "Seamless device integration",
        "Real-time insights"
      ]
    },
    ai: {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent automation powered by advanced AI",
      features: [
        "Predictive automation",
        "Learning from habits",
        "Smart scheduling",
        "Energy optimization",
        "Anomaly detection",
        "Personalized experiences"
      ],
      benefits: [
        "Automated decision making",
        "Improved efficiency",
        "Personalized comfort",
        "Reduced waste"
      ]
    }
  };

  const ActiveIcon = solutions[activeTab].icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our IoT Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive range of smart home and IoT solutions
            designed to transform your living space into an intelligent ecosystem.
          </p>
        </div>
      </div>

      {/* Solution Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(solutions).map(([key, solution]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                activeTab === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
              }`}
            >
              <solution.icon className="w-5 h-5 mr-2" />
              {solution.title}
            </button>
          ))}
        </div>

        {/* Active Solution Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 animate-on-scroll">
          {/* Left Column - Features */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <ActiveIcon className="w-6 h-6 mr-2 text-blue-400" />
                {solutions[activeTab].title}
            </h2>
            <p className="text-gray-400 mb-8">{solutions[activeTab].description}</p>
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
                {solutions[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                </li>
                ))}
            </ul>
          </div>

          {/* Right Column - Benefits */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Benefits</h3>
            <div className="grid gap-6">
              {solutions[activeTab].benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 transform hover:scale-105 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <ChevronRight className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-20 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact our team of experts to learn more about our IoT solutions and how they can benefit your home.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition-all transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Solutions;