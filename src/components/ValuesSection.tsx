import React from "react";
import { FaHandshake, FaBolt, FaRocket, FaBullseye } from "react-icons/fa";

export default function ValuesSection() {
    const values = [
        {
            icon: FaHandshake,
            title: "Integridad",
            description: "Actuamos con honestidad y transparencia en cada una de nuestras acciones.",
            bgColor: "bg-[#007CD4]"
        },
        {
            icon: FaBolt,
            title: "Eficiencia",
            description: "Optimizamos procesos para ofrecer resultados rápidos y efectivos.",
            bgColor: "bg-[#F2931F]"
        },
        {
            icon: FaRocket,
            title: "Innovación",
            description: "Desarrollamos soluciones tecnológicas que revolucionan el sector legal.",
            bgColor: "bg-[#007CD4]"
        },
        {
            icon: FaBullseye,
            title: "Compromiso",
            description: "Nos dedicamos completamente al éxito y satisfacción de nuestros clientes.",
            bgColor: "bg-[#F2931F]"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-nanum italic text-[#324d5b] mb-6">
                        Nuestros Valores
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Los principios que guían nuestro trabajo diario y definen nuestra cultura empresarial.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className={`${value.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <IconComponent className="text-3xl text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#324d5b] mb-4">{value.title}</h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
