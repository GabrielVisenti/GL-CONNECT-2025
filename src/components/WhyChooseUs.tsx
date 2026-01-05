import { Shield, Zap, Headset, Truck, Building, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Garantia e Procedência",
    description: "Produtos originais com garantia oficial do fabricante"
  },
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Resposta em até 2 horas via WhatsApp"
  },
  {
    icon: Headset,
    title: "Suporte Especializado",
    description: "Equipe técnica pronta para auxiliar"
  },
  {
    icon: Truck,
    title: "Entregas para Todo Brasil",
    description: "Logística nacional eficiente"
  },
  {
    icon: Building,
    title: "Experiência com Órgãos Públicos",
    description: "Expertise em processos licitatórios"
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Apenas equipamentos de marcas reconhecidas"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Por que escolher a GL CONNECT?
          </h2>
          <p className="text-lg text-gold/80 max-w-3xl mx-auto">
            Diferenciais que nos tornam a melhor escolha em tecnologia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold-lg hover:scale-110 transition-smooth">
                <reason.icon className="h-12 w-12 text-navy stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">{reason.title}</h3>
              <p className="text-gold/80 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
