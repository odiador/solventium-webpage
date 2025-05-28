import React from "react";
import { FaBalanceScale, FaRocket, FaDollarSign, FaHandshake, FaFileContract, FaCheckCircle } from "react-icons/fa";

export default function SecondSection() {
    const services = [
        {
            title: "Soluciones Legales y Tecnológicas",
            description: "Ofrecemos servicios de cobranza legal, asistencia a deudores, acuerdos de pago y terminación de procesos. Nuestra plataforma Solventium Executives facilita el seguimiento eficiente de tus procesos judiciales.",
            icon: FaBalanceScale
        },
        {
            title: "Desarrollo Empresarial",
            description: "Impulsa el crecimiento de tu empresa con nuestras soluciones tecnológicas personalizadas.",
            icon: FaRocket
        },
        {
            title: "Recupera tus Deudas",
            description: "Gestión profesional y efectiva de cobranza con respaldo legal completo.",
            icon: FaDollarSign
        },
        {
            title: "Asistencia a Deudores",
            description: "Apoyo personalizado para encontrar soluciones viables a tus obligaciones financieras.",
            icon: FaHandshake
        },
        {
            title: "Acuerdos de Pago",
            description: "Negociación de términos flexibles que se adapten a tu situación financiera.",
            icon: FaFileContract
        },
        {
            title: "Terminación de Procesos",
            description: "Resolución efectiva y definitiva de procesos judiciales pendientes.",
            icon: FaCheckCircle
        }
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-nanum italic text-white mb-6">
                        Nuestros Servicios
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Brindamos soluciones tecnológicas y asesoría jurídica integral para empresas y personas naturales.
                    </p>
                </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div 
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                            >
                                <div className="text-4xl mb-4 text-white">
                                    <IconComponent />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white/80 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}