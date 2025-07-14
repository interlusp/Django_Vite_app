
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Dra. Maria Silva",
      specialty: "Dentista Geral e Estética",
      description: "Especialista em dentística restauradora com mais de 10 anos de experiência em tratamentos estéticos.",
      credentials: ["CRO-SP 12345", "Especialização USP", "Mestrado em Estética"],
      image: "/lovable-uploads/200442c0-beac-434b-b3cd-f90c735a8216.png"
    },
    {
      name: "Dr. João Santos",
      specialty: "Ortodontista",
      description: "Especializado em ortodontia e ortopedia facial, com foco em tratamentos modernos e eficazes.",
      credentials: ["CRO-SP 67890", "Especialização UNICAMP", "Certificação Invisalign"],
      image: "/lovable-uploads/4a30caa7-d6ac-459d-936e-c45b749819c3.png"
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Odontopediatra",
      description: "Especialista no atendimento infantil, criando experiências positivas para as crianças.",
      credentials: ["CRO-SP 11111", "Especialização PUC", "Curso Sedação Consciente"],
      image: "/lovable-uploads/03d0944d-7a91-4c49-a9e8-e47e0bc2c29e.png"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Pacientes Atendidos" },
    { icon: Award, number: "15+", label: "Anos de Experiência" },
    { icon: GraduationCap, number: "3", label: "Especialistas" }
  ];

  return (
    <section id="equipe" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-primary-500">Equipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Profissionais qualificados e experientes, dedicados a oferecer 
            o melhor atendimento para você e sua família.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 font-semibold mb-3">
                    {member.specialty}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <div className="space-y-1">
                    {member.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="text-sm text-gray-500 flex items-center">
                        <GraduationCap className="h-3 w-3 mr-2 text-primary-500" />
                        {credential}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comprometidos com a Excelência
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nossa equipe está sempre em constante atualização, participando de 
              cursos e congressos para trazer as mais modernas técnicas e tecnologias 
              para nossos pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
