import React from "react";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";

export default function CTASection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br bg-[#007cd4]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-nanum italic text-white mb-6 flex justify-center">
                    <span className="relative left-1 block rotate-180">?</span>Listo para transformar tu negocio?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Únete a cientos de empresas que ya confían en nuestras soluciones tecnológicas y jurídicas.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                        href="/contact"
                        className="bg-white text-[#324d5b] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                    >
                        <span>Solicitar Consulta</span>
                        <FaArrowRight className="text-sm" />
                    </a>
                    
                    <div className="flex space-x-4">
                        <a 
                            href="tel:+573117876693"
                            className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
                        >
                            <FaPhone className="text-sm" />
                            <span>Llamar Ahora</span>
                        </a>
                        
                        <a 
                            href="mailto:abogadamiriamp@gmail.com"
                            className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
                        >
                            <FaEnvelope className="text-sm" />
                            <span>Enviar Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
