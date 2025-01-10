import React from 'react';
import { 
    Home, Factory, Car, Shield, 
    Cpu, Cloud, Database, LineChart 
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Home,
            title: "Smart Home Solutions",
            description: "Transform your living space with intelligent automation systems for lighting, security, and climate control.",
            features: ["Remote Control", "Energy Management", "Security Integration"]
        },
        {
            icon: Factory,
            title: "Industrial IoT",
            description: "Optimize manufacturing processes with real-time monitoring, predictive maintenance, and automated workflows.",
            features: ["Process Automation", "Asset Tracking", "Predictive Maintenance"]
        },
        {
            icon: Car,
            title: "Vehicle Intelligence",
            description: "Enhanced vehicle monitoring and management systems for fleet operators and individual vehicles.",
            features: ["Fleet Management", "Performance Tracking", "Safety Systems"]
        },
        {
            icon: Shield,
            title: "Security Solutions",
            description: "Comprehensive security systems with advanced monitoring and instant alert capabilities.",
            features: ["24/7 Monitoring", "Instant Alerts", "Access Control"]
        },
        {
            icon: Cpu,
            title: "Edge Computing",
            description: "Process data closer to the source with our advanced edge computing solutions.",
            features: ["Real-time Processing", "Low Latency", "Reduced Bandwidth"]
        },
        {
            icon: Cloud,
            title: "Cloud Integration",
            description: "Seamless cloud connectivity for data storage, analysis, and remote access.",
            features: ["Data Storage", "Analytics", "Remote Access"]
        },
        {
            icon: Database,
            title: "Data Management",
            description: "Robust data management solutions for collecting, storing, and analyzing IoT data.",
            features: ["Data Collection", "Storage Solutions", "Analytics Tools"]
        },
        {
            icon: LineChart,
            title: "Analytics & Insights",
            description: "Transform raw data into actionable insights with our advanced analytics platform.",
            features: ["Real-time Analytics", "Custom Reports", "Predictive Insights"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive IoT solutions tailored to transform your operations across various domains
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6
                                border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300
                                transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
                            </div>
                            <p className="text-gray-400 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;