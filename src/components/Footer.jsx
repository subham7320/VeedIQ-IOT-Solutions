import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, Phone, Mail, MapPin,
  Facebook, Twitter, Linkedin, Github,
  Shield, Car, Cloud, Cpu
} from 'lucide-react';

const Footer = memo(() => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const solutions = [
    { name: 'Industrial IoT', path: '/solutions/industrial' },
    { name: 'Vehicle Solutions', path: '/solutions/vehicle' },
    { name: 'Edge Computing', path: '/solutions/edge' },
    { name: 'Cloud Services', path: '/solutions/cloud' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const features = [
    { icon: Shield, label: 'Enterprise Security', count: '256-bit Encryption' },
    { icon: Car, label: 'Vehicle Fleet', count: '500+ Connected' },
    { icon: Cloud, label: 'Cloud Platform', count: '99.99% Uptime' },
    { icon: Cpu, label: 'Edge Devices', count: '100K+ Active' }
  ];

  const socialIcons = [
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/shubhampandey.shubhampsndey?mibextid=ZbWKwL' },
    { icon: Twitter, name: 'Twitter', url: 'https://x.com/Golu_9798?t=ooy7wqSEGQyUKsyo3FqL3g&s=09' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/subham-pandey-89a964238/' },
    { icon: Github, name: 'Github', url: 'https://github.com/subham7320' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black">
      {/* Grid pattern background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}></div>
      </div>

      <div className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map(({ icon: Icon, label, count }) => (
            <div 
              key={label}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 
                border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300
                transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">{label}</h3>
                <p className="text-sm text-gray-400">{count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 
          border border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex 
                  items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                  from-blue-400 to-purple-600">
                  VeedIQ
                </h3>
              </div>
              <p className="text-gray-400">
                Empowering industries with cutting-edge IoT solutions. Transform your operations with 
                intelligent automation and real-time insights.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map(({ icon: Icon, name, url }, index) => (
                  <a
                    href={url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 hover:bg-slate-800 rounded-lg transition-colors duration-200"
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                    {hoveredIcon === index && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 
                        bg-slate-800 text-white text-xs rounded">
                        {name}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Solutions</h4>
              <div className="space-y-4">
                {solutions.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <div className="space-y-4">
                {company.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <div className="space-y-4">
                <a href="tel:9798507335" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 
                    transition-colors duration-200">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91 979-850-7335</span>
                </a>
                <a href="mailto:care.veediq@gmail.com" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 
                    transition-colors duration-200">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>care.veediq@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>C-21B 40 Foot Road, Badarpur Border , New Delhi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 text-center">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center 
            space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} VeedIQ. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;