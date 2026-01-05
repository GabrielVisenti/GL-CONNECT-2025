import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (id: string) => {
    scrollToSection(id, () => setIsMenuOpen(false));
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544988480543", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="GL CONNECT" className="h-16 md:h-20" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("home")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("sobre")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick("produtos")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => handleNavClick("prefeituras")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Soluções para Prefeituras
            </button>
            <button
              onClick={() => handleNavClick("contato")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Fazer Cotação WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-gold/20">
            <button
              onClick={() => handleNavClick("home")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("sobre")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick("produtos")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Produtos
            </button>
            <button
              onClick={() => handleNavClick("prefeituras")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Soluções para Prefeituras
            </button>
            <button
              onClick={() => handleNavClick("contato")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Contato
            </button>
            <Button variant="hero" size="lg" onClick={handleWhatsAppClick} className="w-full">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fazer Cotação WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
