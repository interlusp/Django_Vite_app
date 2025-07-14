
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, QrCode, FileText, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PaymentDemo = () => {
  const { toast } = useToast();
  const [selectedPayment, setSelectedPayment] = useState('');
  const [amount, setAmount] = useState('');

  const paymentMethods = [
    {
      id: 'credit',
      name: 'Cartão de Crédito',
      icon: CreditCard,
      description: 'Visa, Mastercard, Elo',
      fees: '2.9% + R$ 0,30'
    },
    {
      id: 'pix',
      name: 'PIX',
      icon: QrCode,
      description: 'Transferência instantânea',
      fees: '0.99%'
    },
    {
      id: 'boleto',
      name: 'Boleto Bancário',
      icon: FileText,
      description: 'Vencimento em 3 dias úteis',
      fees: 'R$ 3,49'
    }
  ];

  const handlePayment = (method: string) => {
    if (!amount) {
      toast({
        title: "Valor obrigatório",
        description: "Por favor, insira o valor do pagamento.",
        variant: "destructive"
      });
      return;
    }

    console.log(`Processing payment: ${method}, Amount: R$ ${amount}`);
    
    toast({
      title: "Pagamento iniciado!",
      description: `Redirecionando para o pagamento via ${paymentMethods.find(p => p.id === method)?.name}...`,
    });

    // Aqui seria a integração real com PagSeguro, Stripe, etc.
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="border-0 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2">
            <Shield className="h-6 w-6 text-primary-600" />
            <span>Demonstração de Pagamento</span>
          </CardTitle>
          <p className="text-gray-600">
            Simulação de integração com gateways de pagamento
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Valor do Tratamento
            </label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0,00"
              className="text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Forma de Pagamento
            </label>
            <div className="grid gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPayment === method.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <div className="flex items-center space-x-3">
                    <method.icon className="h-6 w-6 text-primary-600" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {method.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {method.description}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Taxa: {method.fees}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={() => handlePayment(selectedPayment)}
            disabled={!selectedPayment || !amount}
            className="w-full bg-primary-500 hover:bg-primary-600 text-lg py-3"
          >
            Prosseguir com Pagamento
          </Button>

          <div className="text-center text-sm text-gray-500">
            <p>🔒 Pagamento seguro com criptografia SSL</p>
            <p>Integração preparada para PagSeguro, Stripe e outros gateways</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentDemo;
