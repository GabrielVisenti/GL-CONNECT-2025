import { Button } from "@/components/ui/button";
import { Building2, FileCheck, Truck, Shield, FileText, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Atendimento Especializado",
    description: "Equipe dedicada para órgãos públicos e prefeituras"
  },
  {
    icon: FileCheck,
    title: "Suporte em Licitações",
    description: "Pregão Eletrônico, Dispensa e SRP"
  },
  {
    icon: Shield,
    title: "Garantia e Qualidade",
    description: "Equipamentos com nota fiscal e garantia oficial"
  },
  {
    icon: Truck,
    title: "Entregas Rápidas",
    description: "Logística eficiente para todo o Brasil"
  },
  {
    icon: FileText,
    title: "Orçamento Formal",
    description: "Propostas oficiais em PDF prontas para licitação"
  },
  {
    icon: BadgeCheck,
    title: "Certidões Atualizadas",
    description: "Documentação completa disponível sob solicitação"
  },
];

const MunicipalitySolutions = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544988480543", "_blank");
  };

  return (
    <section id="prefeituras" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Soluções para Prefeituras
          </h2>
          <p className="text-lg text-gold/80 leading-relaxed">
            Expertise comprovada no fornecimento de equipamentos tecnológicos para o setor público. 
            Atendemos processos licitatórios com agilidade, transparência e total conformidade legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card p-6 rounded-xl border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">{feature.title}</h3>
              <p className="text-gold/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-navy to-navy-lighter rounded-2xl p-8 md:p-12 border border-gold/30 max-w-4xl mx-auto text-center shadow-gold">
          <h3 className="text-3xl font-bold text-gold mb-4">
            Precisa de uma Proposta Oficial?
          </h3>
          <p className="text-gold/80 mb-8 text-lg">
            Solicite agora mesmo um orçamento formal para sua licitação. 
            Atendimento rápido e documentação completa.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsAppClick}>
            Solicitar Proposta Oficial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MunicipalitySolutions;
