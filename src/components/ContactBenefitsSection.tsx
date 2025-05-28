import React from "react";
import { FaBolt, FaComments, FaBullseye } from "react-icons/fa";

export default function ContactBenefitsSection() {
    const benefits = [
        {
            icon: FaBolt,
            title: "Respuesta Rápida",
            description: "Respondemos a tu consulta en un máximo de 24 horas.",
            bgColor: "bg-[#007CD4]"
        },
        {
            icon: FaComments,
            title: "Consulta Gratuita",
            description: "Primera consulta sin costo para evaluar tu caso.",
            bgColor: "bg-[#F2931F]"
        },
        {
            icon: FaBullseye,
            title: "Soluciones Personalizadas",
            description: "Cada caso es único y merece una atención especializada.",
            bgColor: "bg-[#007CD4]"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className={`${benefit.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <IconComponent className="text-3xl text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#324d5b] mb-4">{benefit.title}</h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
