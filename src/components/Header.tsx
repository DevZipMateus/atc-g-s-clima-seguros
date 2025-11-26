import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            ATC Especializada
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
            >
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 sm:pb-6 animate-fade-in border-t border-border/40 mt-2">
            <div className="flex flex-col gap-3 sm:gap-4 pt-4">
              <button 
                onClick={() => scrollToSection("sobre")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left text-sm sm:text-base"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("servicos")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left text-sm sm:text-base"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left text-sm sm:text-base"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                size="sm"
              >
                Fale conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
