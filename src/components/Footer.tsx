import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaHome, FaUsers, FaShieldAlt, FaFileContract } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1a2530] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img 
                                src="/logo.png" 
                                alt="Solventium Logo" 
                                className="w-10 h-10"
                            />
                            <span className="text-white text-xl font-bold">Solventium</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Soluciones tecnológicas y jurídicas a un clic de distancia.
                        </p>
                    </div>
                    
                    {/* Enlaces rápidos */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Enlaces Rápidos</h4>                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-white/70 hover:text-[#F2931F] transition-colors text-sm flex items-center space-x-2">
                                    <FaHome className="text-xs" />
                                    <span>Inicio</span>
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-white/70 hover:text-[#F2931F] transition-colors text-sm flex items-center space-x-2">
                                    <FaUsers className="text-xs" />
                                    <span>Nosotros</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white/70 hover:text-[#F2931F] transition-colors text-sm flex items-center space-x-2">
                                    <FaEnvelope className="text-xs" />
                                    <span>Contacto</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Servicios */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Servicios</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="text-white/70">Soluciones Legales</li>
                            <li className="text-white/70">Desarrollo Empresarial</li>
                            <li className="text-white/70">Recuperación de Cartera</li>
                            <li className="text-white/70">Asistencia a Deudores</li>
                        </ul>
                    </div>
                </div>
                
                {/* Línea divisoria y copyright */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/60 text-sm">
                            © 2025 Solventium. Todos los derechos reservados.
                        </p>                        <div className="flex space-x-6">
                            <a href="#" className="text-white/60 hover:text-[#F2931F] transition-colors text-sm flex items-center space-x-1">
                                <FaShieldAlt className="text-xs" />
                                <span>Política de Privacidad</span>
                            </a>
                            <a href="#" className="text-white/60 hover:text-[#F2931F] transition-colors text-sm flex items-center space-x-1">
                                <FaFileContract className="text-xs" />
                                <span>Términos de Servicio</span>
                            </a>
                            <a 
                                href="https://www.instagram.com/solventium_slv/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-[#F2931F] transition-colors text-sm flex items-center space-x-1"
                            >
                                <FaInstagram className="text-xs" />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
