
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              OdontoClinic
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cuidando da saúde bucal com excelência, tecnologia e humanização. 
              Seu sorriso é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Limpeza e Prevenção</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Dentística Restauradora</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Ortodontia</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Clareamento Dental</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Odontopediatria</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Emergências 24h</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span>contato@odontoclinic.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-1" />
                <div>
                  <p>Rua das Flores, 123</p>
                  <p>Vila Madalena - São Paulo, SP</p>
                  <p>CEP: 05435-000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary-400" />
                <div>
                  <p className="font-medium">Segunda a Quinta</p>
                  <p className="text-sm">8h às 18h</p>
                </div>
              </div>
              <div className="ml-7">
                <p className="font-medium">Sexta</p>
                <p className="text-sm">8h às 17h</p>
              </div>
              <div className="ml-7">
                <p className="font-medium">Sábado</p>
                <p className="text-sm">8h às 12h</p>
              </div>
              <div className="ml-7">
                <p className="font-medium text-red-400">Domingo</p>
                <p className="text-sm">Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 OdontoClinic. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
