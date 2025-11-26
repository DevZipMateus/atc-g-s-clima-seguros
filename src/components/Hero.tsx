import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gas-heating.jpg";

const Hero = () => {
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Serviços especializados em gás e ar-condicionado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            ATC Especializada em Gás Rio
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Excelência que você confia, segurança que você merece
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Soluções completas em instalação e manutenção de aquecedores, ar-condicionado e sistemas de gás. Atendimento profissional com responsabilidade técnica e compromisso com a sua segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              Nossos serviços
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/5521980906393", "_blank")}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50 backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
