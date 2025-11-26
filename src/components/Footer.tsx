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
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Empresa */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              ATC Especializada
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              Excelência que você confia, segurança que você merece.
            </p>
            <p className="text-secondary-foreground/70 text-sm">
              Soluções completas em gás e climatização no Rio de Janeiro.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left"
              >
                Sobre nós
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5521980906393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>(21) 98090-6393</p>
                  <p>(21) 99266-5091</p>
                </div>
              </a>
              <a
                href="mailto:atcespecializada.gasrio@gmail.com"
                className="flex items-start gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="break-all">atcespecializada.gasrio@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Localização e Horário */}
          <div>
            <h4 className="text-lg font-bold mb-4">Informações</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>Rua Porto Camargo, lote 16 quadra 29<br />Guaratiba - RJ</p>
              </div>
              <div className="flex items-start gap-2 text-secondary-foreground/80">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>Segunda à sexta<br />08:00 às 17:00</p>
              </div>
              <a
                href="https://www.instagram.com/atcespecializadagasrio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors mt-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Siga-nos no Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-secondary-foreground/70 text-sm">
            © {new Date().getFullYear()} ATC Especializada em Gás Rio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
