import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productCategories, getProductsByCategory } from "@/data/products";

const Products = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544988480543", "_blank");
  };

  const handleProductClick = () => {
    // Save current scroll position before navigating to product
    sessionStorage.setItem("catalogScrollPosition", window.scrollY.toString());
  };

  return (
    <section id="produtos" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Nosso Catálogo de Produtos
          </h2>
          <p className="text-lg text-gold/80 max-w-3xl mx-auto">
            Equipamentos de alta qualidade para atender todas as necessidades 
            tecnológicas da sua empresa ou prefeitura.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {productCategories.map((category, categoryIndex) => {
            const categoryProducts = getProductsByCategory(category.id);
            
            return (
              <div key={category.id} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <category.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-3xl font-bold text-gold">{category.name}</h3>
                  <div className="flex-1 h-px bg-gold/20"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {categoryProducts.map((product, productIndex) => (
                    <Link 
                      key={product.id}
                      to={`/produto/${product.id}`}
                      onClick={handleProductClick}
                      className="group animate-scale-in"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (productIndex * 0.05)}s` }}
                    >
                      <div className="bg-card rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold h-full flex flex-col">
                        <div className="bg-gold/10 rounded-lg p-4 mb-4 group-hover:bg-gold/20 transition-smooth flex items-center justify-center min-h-[160px]">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-40 object-contain"
                          />
                        </div>
                        
                        <h4 className="text-base font-bold text-gold mb-2 line-clamp-2 flex-1">
                          {product.shortName}
                        </h4>
                        
                        <Button 
                          variant="quote" 
                          size="sm"
                          className="w-full mt-auto"
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gold/70 mb-4">E muito mais! Entre em contato para conhecer nosso catálogo completo.</p>
          <Button variant="hero" size="lg" onClick={handleWhatsAppClick}>
            Ver Catálogo Completo no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
