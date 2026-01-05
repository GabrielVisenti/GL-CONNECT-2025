import logo from "@/assets/logo.png";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Footer = () => {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="bg-navy-lighter border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="GL CONNECT" className="h-16 mb-4" />
            <p className="text-gold/70 leading-relaxed">
              Tecnologia de qualidade para empresas e prefeituras em todo o Brasil. 
              Compromisso com excelência e atendimento diferenciado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gold/70 hover:text-gold transition-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-gold/70 hover:text-gold transition-smooth"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-gold/70 hover:text-gold transition-smooth"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("prefeituras")}
                  className="text-gold/70 hover:text-gold transition-smooth"
                >
                  Soluções para Prefeituras
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gold/70 hover:text-gold transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gold/70 text-sm">
              <li>
                <a href="https://wa.me/5544988480543" className="hover:text-gold transition-smooth">
                  WhatsApp: (44) 9 8848-0543
                </a>
              </li>
              <li>
                <a href="mailto:glconnect2025@gmail.com" className="hover:text-gold transition-smooth">
                  glconnect2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 text-center">
          <p className="text-gold/70 text-sm">
            © {new Date().getFullYear()} GL CONNECT - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
