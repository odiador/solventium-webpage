import React from "react";
import { FaUsers, FaGavel, FaCheckCircle, FaClock } from "react-icons/fa";

export default function StatsSection() {
    const stats = [
        {
            icon: FaUsers,
            number: "500+",
            label: "Clientes Satisfechos",
            bgColor: "bg-[#007CD4]"
        },
        {
            icon: FaGavel,
            number: "1000+",
            label: "Casos Resueltos",
            bgColor: "bg-[#F2931F]"
        },
        {
            icon: FaCheckCircle,
            number: "95%",
            label: "Tasa de Éxito",
            bgColor: "bg-[#007CD4]"
        },
        {
            icon: FaClock,
            number: "5+",
            label: "Años de Experiencia",
            bgColor: "bg-[#F2931F]"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-r from-[#324d5b] to-[#243842]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-nanum italic text-white mb-6">
                        Nuestros Resultados
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Números que demuestran nuestro compromiso y experiencia
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <IconComponent className="text-2xl text-white" />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <p className="text-white/80 text-sm">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
