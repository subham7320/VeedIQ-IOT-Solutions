import React from 'react'
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: 'Solutions', path: '/solutions' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="fixed w-full z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div onClick={() => navigate('/')}
                        className="flex items-center space-x-2 cursor-pointer group">
                        <Zap className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            VeedIQ
                        </span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <button 
                                key={item.name}
                                onClick={() => navigate(item.path)}
                                className={`relative group ${
                                    isActive(item.path) 
                                    ? 'text-blue-400 scale-105' 
                                    : 'text-white/80 hover:text-white'
                                } transition-all duration-300`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </button>
                        ))}
                        <button 
                            onClick={() => navigate('/')}
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform ${
                                isActive('/get-started')
                                ? 'bg-blue-600 scale-105 text-white'
                                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white hover:scale-105'
                            }`}
                        >
                            Home
                        </button>
                    </div>

                    <button 
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="py-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {
                                    navigate(item.path);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                    isActive(item.path)
                                    ? 'bg-blue-600/20 text-blue-400'
                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                        <button 
                            onClick={() => {
                                navigate("/");
                                setIsMenuOpen(false);
                            }}
                            className={`block w-full text-center px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive('/get-started')
                                ? 'bg-blue-600 text-white'
                                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white'
                            }`}
                        >
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;