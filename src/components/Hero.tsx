
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary-50 to-accent overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Seu <span className="text-primary-500">sorriso</span> em 
              <br />
              <span className="text-primary-600">boas mãos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Oferecemos atendimento odontológico completo e humanizado, 
              com tecnologia de ponta e profissionais especializados para 
              cuidar da saúde bucal de toda sua família.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-lg px-8 py-3">
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-500 text-primary-600 hover:bg-primary-50 text-lg px-8 py-3"
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Segurança</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Emergências</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/200442c0-beac-434b-b3cd-f90c735a8216.png"
                alt="Dentista profissional em consultório moderno"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Tecnologia Avançada</div>
                  <div className="text-sm text-gray-600">Equipamentos de última geração</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/30 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/40 rounded-full translate-y-48 -translate-x-48"></div>
    </section>
  );
};

export default Hero;
