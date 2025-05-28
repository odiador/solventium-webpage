import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Ana Martínez",
            company: "Empresa Comercial S.A.S",
            text: "Solventium ha sido fundamental en la gestión de nuestros procesos legales. Su profesionalismo y eficiencia son incomparables.",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            company: "Inversiones del Valle",
            text: "Excelente servicio de recuperación de cartera. Lograron resolver casos que teníamos pendientes desde hace años.",
            rating: 5
        },
        {
            name: "María González",
            company: "Constructora Andina",
            text: "La plataforma Solventium Executives nos ha permitido tener un control total de nuestros procesos judiciales.",
            rating: 5
        }
    ];    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-xl text-yellow-400">
                {i < rating ? <FaStar /> : <FaRegStar />}
            </span>
        ));
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-nanum italic text-[#324d5b] mb-6">
                        Testimonios
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre lo que dicen nuestros clientes
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-gradient-to-br from-[#007CD4]/5 to-[#F2931F]/5 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                        >                            <div className="flex mb-4 space-x-1">
                                {renderStars(testimonial.rating)}
                            </div>
                            <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                                "{testimonial.text}"
                            </blockquote>
                            <div className="border-t pt-4">
                                <p className="font-bold text-[#324d5b]">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
