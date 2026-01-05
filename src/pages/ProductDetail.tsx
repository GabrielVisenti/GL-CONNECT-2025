import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Scroll to top whenever product changes or page loads
  useEffect(() => {
    // Scroll to top immediately when component mounts or product changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [productId]);
  
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold mb-4">Produto não encontrado</h1>
          <Button variant="hero" onClick={() => navigate("/")}>
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  // Produtos relacionados da mesma categoria
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const currentIndex = products.findIndex(p => p.id === product.id);
  const previousProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de solicitar uma cotação para: ${product.name}`;
    window.open(`https://wa.me/5544988480543?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleBackToCatalog = () => {
    navigate("/#produtos");
    // Small delay to ensure navigation completes before restoring scroll
    setTimeout(() => {
      const savedPosition = sessionStorage.getItem("catalogScrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem("catalogScrollPosition");
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      
      {/* Back to Catalog Button - Added pt-32 to account for fixed header */}
      <div className="container mx-auto px-4 pt-32">
        <Button 
          variant="outline" 
          onClick={handleBackToCatalog}
          className="group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-smooth" />
          Voltar ao Catálogo
        </Button>
      </div>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm text-gold/60">
          <li><Link to="/" className="hover:text-gold transition-smooth">Home</Link></li>
          <ChevronRight className="h-4 w-4" />
          <li>
            <button 
              onClick={handleBackToCatalog}
              className="hover:text-gold transition-smooth"
            >
              Produtos
            </button>
          </li>
          <ChevronRight className="h-4 w-4" />
          <li className="text-gold">{product.shortName}</li>
        </ol>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images Gallery */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-8 border border-gold/20">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-gold/20 text-gold border-gold/30">
                <product.categoryIcon className="h-3 w-3 mr-1" />
                {product.category.toUpperCase()}
              </Badge>
              <Badge className="bg-gold/20 text-gold border-gold/30">
                Fornecedor para Empresas e Prefeituras
              </Badge>
            </div>

            <h1 className="text-4xl font-bold text-gold">{product.name}</h1>

            <p className="text-gold/80 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 bg-card/50 rounded-xl p-6 border border-gold/20">
              <h3 className="text-xl font-semibold text-gold">Recursos Principais</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gold/70">
                    <ChevronRight className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5" />
              Clique aqui e faça sua cotação pelo WhatsApp
            </Button>

            <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-4">
              <p className="text-gold/90 text-sm">
                <strong>Orçamento Rápido pelo WhatsApp</strong> - Nossa equipe responde em minutos!
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <Card className="mb-16 bg-card border-gold/20">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gold mb-6">Especificações Técnicas</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gold/10">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={index} className="hover:bg-gold/5 transition-smooth">
                      <td className="py-4 px-6 font-semibold text-gold whitespace-nowrap w-1/3">
                        {key}
                      </td>
                      <td className="py-4 px-6 text-gold/70">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Company Info Block */}
        <Card className="mb-16 bg-card border-gold/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gold">
              A GL CONNECT é especialista em vendas de equipamentos eletrônicos para empresas e prefeituras.
            </h3>
            <p className="text-lg mb-6 text-gold/80">
              Solicite sua cotação e receba atendimento imediato.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Especialista
            </Button>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gold mb-8">Produtos Relacionados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/produto/${relatedProduct.id}`}
                  className="group"
                >
                  <Card className="h-full bg-card border-gold/20 hover:border-gold/40 hover:shadow-gold transition-smooth">
                    <CardContent className="p-6">
                      <div className="bg-gold/10 rounded-lg p-4 mb-4 group-hover:bg-gold/20 transition-smooth">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name}
                          className="w-full h-32 object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-gold mb-2 line-clamp-2">{relatedProduct.shortName}</h3>
                      <p className="text-gold/60 text-sm line-clamp-2 mb-4">
                        {relatedProduct.description}
                      </p>
                      <Button variant="quote" size="sm" className="w-full">
                        Ver Detalhes
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Product Navigation */}
        <div className="flex justify-between items-center gap-4 flex-wrap">
          {previousProduct ? (
            <Link to={`/produto/${previousProduct.id}`} className="flex-1 min-w-[200px]">
              <Button variant="outline" className="w-full justify-start group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-smooth" />
                <div className="text-left ml-2">
                  <div className="text-xs text-gold/60">Produto anterior</div>
                  <div className="text-sm font-semibold line-clamp-1">{previousProduct.shortName}</div>
                </div>
              </Button>
            </Link>
          ) : (
            <div className="flex-1 min-w-[200px]"></div>
          )}

          {nextProduct ? (
            <Link to={`/produto/${nextProduct.id}`} className="flex-1 min-w-[200px]">
              <Button variant="outline" className="w-full justify-end group">
                <div className="text-right mr-2">
                  <div className="text-xs text-gold/60">Próximo produto</div>
                  <div className="text-sm font-semibold line-clamp-1">{nextProduct.shortName}</div>
                </div>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          ) : (
            <div className="flex-1 min-w-[200px]"></div>
          )}
        </div>

        {/* Fixed Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-navy/95 backdrop-blur-sm border-t border-gold/20 lg:hidden z-40">
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar Cotação
          </Button>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProductDetail;
