import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Diretor de TI",
    company: "Prefeitura de Maringá",
    content: "Excelente parceiro! A GL CONNECT nos forneceu equipamentos de alta qualidade com entrega rápida e toda documentação necessária para licitação. Recomendo!",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Gerente de Compras",
    company: "Empresas Reunidas Ltda",
    content: "Atendimento impecável e produtos de primeira linha. Conseguimos renovar todo nosso parque tecnológico com preços competitivos e suporte excepcional.",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    role: "Secretário de Administração",
    company: "Prefeitura de Londrina",
    content: "Profissionalismo e agilidade definem a GL CONNECT. Processos de pregão facilitados e entrega dentro do prazo. Parceria de confiança!",
    rating: 5
  },
  {
    name: "Ana Paula Costa",
    role: "CEO",
    company: "Tech Solutions Brasil",
    content: "Fornecedor confiável que atende prazos e oferece produtos de qualidade. A cotação via WhatsApp é muito prática. Excelente experiência de compra!",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-gold/80 max-w-3xl mx-auto">
            Confiança construída através de entregas de excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card p-8 border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Quote className="h-10 w-10 text-gold/30 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gold/80 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gold/20 pt-4">
                <p className="font-bold text-gold">{testimonial.name}</p>
                <p className="text-gold/70 text-sm">{testimonial.role}</p>
                <p className="text-gold/60 text-sm">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
