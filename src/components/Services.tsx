
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Smile, 
  Heart, 
  Shield, 
  Sparkles, 
  Baby, 
  Stethoscope,
  Scissors,
  Zap 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "Dentística Restauradora",
      description: "Restaurações estéticas em resina e porcelana para devolver a função e beleza do seu sorriso.",
      image: "/lovable-uploads/c7e0563f-d6c7-424c-817a-68a88e1a9879.png"
    },
    {
      icon: Baby,
      title: "Odontopediatria",
      description: "Cuidado especializado para crianças, com ambiente lúdico e técnicas adaptadas à idade.",
      image: "/lovable-uploads/03d0944d-7a91-4c49-a9e8-e47e0bc2c29e.png"
    },
    {
      icon: Sparkles,
      title: "Clareamento Dental",
      description: "Tratamentos de clareamento seguros e eficazes para um sorriso mais branco e radiante.",
      image: "/lovable-uploads/4cca2d11-0947-4a87-ba76-d45973b9a13c.png"
    },
    {
      icon: Shield,
      title: "Prevenção",
      description: "Limpeza profissional, aplicação de flúor e orientações para manter sua saúde bucal.",
      image: "/lovable-uploads/4a30caa7-d6ac-459d-936e-c45b749819c3.png"
    },
    {
      icon: Stethoscope,
      title: "Diagnóstico Avançado",
      description: "Tecnologia de ponta para diagnósticos precisos e tratamentos mais eficazes.",
      image: "/lovable-uploads/a67dfe06-f37f-4539-9922-f02441cf3ec3.png"
    },
    {
      icon: Zap,
      title: "Ortodontia",
      description: "Aparelhos fixos e móveis para correção de posicionamento dentário e facial.",
      image: "/lovable-uploads/02f57b96-1ef3-4aad-aa1e-c4b7f40f8f2d.png"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-primary-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos, 
            desde cuidados preventivos até procedimentos especializados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Ver Todos os Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
