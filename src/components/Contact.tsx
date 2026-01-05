import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Meu nome é ${formData.name}, da empresa ${formData.company}.\n\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5544988480543?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para continuar a conversa no WhatsApp.",
    });
    
    setFormData({ name: "", company: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-gold/80 max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa ou prefeitura
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-6">
                Fale Conosco
              </h3>
              <p className="text-gold/80 mb-8">
                Entre em contato agora mesmo e receba um atendimento personalizado. 
                Estamos disponíveis para esclarecer dúvidas e elaborar propostas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gold/70 text-sm mb-3">WhatsApp</p>
                    <div className="flex items-center flex-wrap gap-2">
                      <a 
                        href="https://wa.me/5544988480543"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold font-semibold hover:text-gold/80 transition-smooth"
                      >
                        (44) 9 8848-0543
                      </a>
                      <span className="text-gold/50">/</span>
                      <a 
                        href="https://wa.me/5544988560987"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold font-semibold hover:text-gold/80 transition-smooth"
                      >
                        (44) 9 8856-0987
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="mailto:glconnect2025@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold group"
              >
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-smooth">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-gold/70 text-sm">E-mail</p>
                  <p className="text-gold font-semibold">glconnect2025@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-gold/20 animate-scale-in">
            <h3 className="text-2xl font-bold text-gold mb-6">
              Envie sua Solicitação
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gold/80 mb-2 text-sm">Nome Completo</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-navy-lighter border-gold/30 text-gold focus:border-gold"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-gold/80 mb-2 text-sm">Empresa/Prefeitura</label>
                <Input
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-navy-lighter border-gold/30 text-gold focus:border-gold"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label className="block text-gold/80 mb-2 text-sm">Telefone</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-navy-lighter border-gold/30 text-gold focus:border-gold"
                  placeholder="(00) 0 0000-0000"
                />
              </div>

              <div>
                <label className="block text-gold/80 mb-2 text-sm">E-mail</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-navy-lighter border-gold/30 text-gold focus:border-gold"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-gold/80 mb-2 text-sm">Mensagem</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-navy-lighter border-gold/30 text-gold focus:border-gold min-h-32"
                  placeholder="Descreva sua necessidade..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Solicitação
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
