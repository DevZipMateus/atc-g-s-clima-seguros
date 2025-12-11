import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
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
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-8 mb-8 sm:mb-12">
          {/* Empresa */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">
              ATC Especializada
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Excelência que você confia, segurança que você merece.
            </p>
            <p className="text-secondary-foreground/70 text-xs sm:text-sm">
              Soluções completas em gás e climatização no Rio de Janeiro.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left text-sm sm:text-base"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left text-sm sm:text-base"
              >
                Sobre nós
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left text-sm sm:text-base"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left text-sm sm:text-base"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="https://wa.me/5521980906393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p>(21) 98090-6393</p>
                  <p>(21) 99266-5091</p>
                </div>
              </a>
              <a
                href="mailto:atcespecializada.gasrio@gmail.com"
                className="flex items-start gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span className="break-all text-xs sm:text-sm">atcespecializada.gasrio@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Localização e Horário */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Informações</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-start gap-2 text-secondary-foreground/80">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm">Guaratiba - RJ</p>
              </div>
              <div className="flex items-start gap-2 text-secondary-foreground/80">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm">Segunda à sexta<br />08:00 às 17:00</p>
              </div>
              <a
                href="https://www.instagram.com/atcespecializadagasrio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors mt-2"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">Siga-nos no Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-secondary-foreground/20 pt-6 sm:pt-8">
          <p className="text-center text-secondary-foreground/70 text-xs sm:text-sm px-4">
            © {new Date().getFullYear()} ATC Especializada em Gás Rio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
