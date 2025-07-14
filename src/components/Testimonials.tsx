
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Fernanda",
      age: "32 anos",
      treatment: "Clareamento Dental",
      text: "Sempre tive vergonha do meu sorriso, mas depois do tratamento na OdontoClinic me sinto muito mais confiante. A equipe é maravilhosa e o resultado superou minhas expectativas!",
      rating: 5,
      image: "/lovable-uploads/d001f620-4fd7-4d87-a0a3-b31c0f8f0c97.png"
    },
    {
      name: "Carlos Eduardo",
      age: "45 anos", 
      treatment: "Implante Dentário",
      text: "Procedimento realizado com muita técnica e cuidado. Dr. João explicou todo o processo e me deixou muito tranquilo. Recomendo para todos que precisam!",
      rating: 5,
      image: "/lovable-uploads/7a727fbb-2433-45f8-8395-91580102a5ff.png"
    },
    {
      name: "Ana Paula",
      age: "28 anos",
      treatment: "Ortodontia",
      text: "Minha filha estava com muito medo do dentista, mas a Dra. Ana foi incrível! Agora ela adora vir às consultas. Profissionalismo e carinho em cada atendimento.",
      rating: 5,
      image: "/lovable-uploads/03d0944d-7a91-4c49-a9e8-e47e0bc2c29e.png"
    },
    {
      name: "Roberto Silva",
      age: "38 anos",
      treatment: "Limpeza e Prevenção",
      text: "Atendimento excepcional desde a recepção até o final do tratamento. Ambiente moderno, equipamentos de última geração e profissionais altamente qualificados.",
      rating: 5,
      image: "/lovable-uploads/f0fa3312-d0c7-4168-9b82-59e1557f2122.png"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-primary-500">pacientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confia em nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-primary-50/20"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={`Depoimento de ${testimonial.name}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
                    />
                    <div className="absolute -top-2 -right-2 bg-primary-500 rounded-full p-1">
                      <Quote className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm mb-1">
                      {testimonial.age} • {testimonial.treatment}
                    </p>
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-gradient-to-r from-primary-50 to-accent/50 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-700">Satisfação dos Pacientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-700">Avaliações Positivas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5★</div>
              <div className="text-gray-700">Nota Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
