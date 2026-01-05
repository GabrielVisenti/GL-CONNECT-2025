import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544988480543", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold mb-6 leading-tight">
            Tecnologia que impulsiona
            <span className="block text-gold-light">Empresas e Prefeituras</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gold/80 mb-8 leading-relaxed">
            Soluções completas em equipamentos eletrônicos com suporte, agilidade e confiança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Solicitar Cotação Instantânea
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => {
                const element = document.getElementById("produtos");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Catálogo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-gold/20">
            <div className="text-center">
              <p className="text-4xl font-bold text-gold mb-2">100+</p>
              <p className="text-gold/70 text-sm">Produtos Disponíveis</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold mb-2">50+</p>
              <p className="text-gold/70 text-sm">Empresas Atendidas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold mb-2">80+</p>
              <p className="text-gold/70 text-sm">Prefeituras Fornecidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
