import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-[#324d5b] to-[#243842]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-nanum italic text-white mb-6">
                        Contacto
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        ¿Te gusta lo que ves? Contáctanos para saber más.
                    </p>
                </div>
                
                <div className="flex justify-center">
                    
                    {/* Información de contacto */}
                    <div className="lg:basis-1/2 p-2 w-full">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center space-x-4 mb-6">
                                <img 
                                    src="/logo.png" 
                                    alt="Solventium Logo" 
                                    className="w-16 h-16"
                                />
                                <h3 className="text-2xl font-bold text-white">Solventium</h3>
                            </div>
                              <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <FaPhone className="text-[#F2931F] text-xl mt-1" />
                                    <div>
                                        <p className="text-white font-semibold">Teléfonos</p>
                                        <p className="text-white/80">+57 3117876693</p>
                                        <p className="text-white/80">+57 6063406052</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <FaEnvelope className="text-[#F2931F] text-xl mt-1" />
                                    <div>
                                        <p className="text-white font-semibold">Emails</p>
                                        <a href="mailto:abogadamiriamp@gmail.com" className="text-white/80 hover:text-[#F2931F] transition-colors">
                                            abogadamiriamp@gmail.com
                                        </a>
                                        <br />
                                        <a href="mailto:solventiumnotificaciones@gmail.com" className="text-white/80 hover:text-[#F2931F] transition-colors">
                                            solventiumnotificaciones@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <FaMapMarkerAlt className="text-[#F2931F] text-xl mt-1" />
                                    <div>
                                        <p className="text-white font-semibold">Dirección</p>
                                        <p className="text-white/80">
                                            Carrera 6N # 19-62 Ofi 201<br />
                                            Edificio Central P.H.<br />
                                            Pereira, Risaralda, Colombia
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <FaInstagram className="text-[#F2931F] text-xl mt-1" />
                                    <div>
                                        <p className="text-white font-semibold">Síguenos</p>
                                        <a 
                                            href="https://www.instagram.com/solventium_slv/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white/80 hover:text-[#F2931F] transition-colors"
                                        >
                                            @solventium_slv
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
