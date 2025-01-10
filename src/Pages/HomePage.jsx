import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Monitor, Factory, Cloud, Cpu, Car, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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

  const features = [
    { 
      icon: Shield, 
      title: "Advanced Security", 
      desc: "Enterprise-grade security for all your IoT devices and data" 
    },
    { 
      icon: Monitor, 
      title: "Smart Monitoring", 
      desc: "Real-time monitoring and analytics for optimal performance" 
    },
    { 
      icon: Factory, 
      title: "Industrial IoT", 
      desc: "Transforming manufacturing with intelligent automation" 
    },
    { 
      icon: Cloud, 
      title: "Cloud Integration", 
      desc: "Seamless cloud connectivity for all your IoT solutions" 
    },
    { 
      icon: Cpu, 
      title: "Edge Computing", 
      desc: "Process data closer to the source for faster response" 
    },
    { 
      icon: Car, 
      title: "Vehicle Solutions", 
      desc: "Smart solutions for vehicle monitoring and management" 
    }
  ];

  const stats = [
    { value: "100K+", label: "Connected Devices" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.99%", label: "Uptime" },
    { value: "24/7", label: "Expert Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black overflow-x-hidden">
      {/* Optimized background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0),_rgba(17,24,39,1))]"></div>
        {/*Slogan*/}
        <div className="absolute inset-0 flex items-start justify-center pt-20 sm:pt-32 px-4 transform translate-y-[253px]">
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Background glow effect */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-blue-600/10 blur-2xl animate-pulse break-words sm:whitespace-nowrap">
                Think Smart, Think VeedIQ
              </h2>
            </div>
            
            {/* Main slogan with gradient */}
            <div className="absolute top-0 w-full text-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold break-words sm:whitespace-nowrap
                bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-blue-600/20 
                bg-clip-text text-transparent 
                animate-gradient-x">
                Think Smart, Think VeedIQ
              </h2>
            </div>
            
            {/* Overlay effect */}
            <div className="absolute top-0 w-full text-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold break-words sm:whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r 
                  from-blue-400/30 via-purple-500/30 to-blue-600/30 
                  blur-sm animate-pulse">
                  Think Smart, Think VeedIQ
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* shimmer effect container */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent" 
               style={{
                 backgroundSize: '200% 100%',
                 animation: 'shimmer 8s infinite linear'
               }}>
          </div>
        </div> */}
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

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className={`max-w-7xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
              Innovate
            </span>
            <br />
            <span className="text-white">
              With VeedIQ
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Unleash the power of IoT with our comprehensive solutions for industries,
            vehicles, and smart spaces. Transform your operations with intelligent automation.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16 animate-on-scroll">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl 
                  border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300
                  transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 mb-16 animate-on-scroll">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 
              border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join industry leaders who have revolutionized their operations with our IoT solutions.
                Start your digital transformation journey today.
              </p>
              <button 
                onClick={() => navigate('/solutions')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                  hover:from-blue-500 hover:to-blue-600 rounded-xl text-white font-semibold text-lg 
                  transition-all transform hover:scale-105 hover:shadow-xl flex items-center mx-auto"
              >
                Explore Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;