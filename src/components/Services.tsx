import { Flame, Wind, Wrench, Droplets, HardHat, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import serviceAquecedor from "@/assets/service-aquecedor.jpg";
import serviceArCondicionado from "@/assets/service-arcondicionado.jpg";
import serviceTubulacao from "@/assets/service-tubulacao.jpg";
import serviceAdequacao from "@/assets/service-adequacao.jpg";
import serviceRemanejamento from "@/assets/service-remanejamento.jpg";
import serviceFogao from "@/assets/service-fogao.jpg";

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: "Aquecedores",
      description: "Instalação, manutenção preventiva e corretiva de aquecedores. Venda de equipamentos de alta qualidade.",
      image: serviceAquecedor
    },
    {
      icon: Wind,
      title: "Ar-condicionado",
      description: "Instalação e manutenção completa de sistemas de ar-condicionado. Venda de aparelhos modernos e eficientes.",
      image: serviceArCondicionado
    },
    {
      icon: Wrench,
      title: "Tubulação de gás",
      description: "Construção de nova tubulação, aplicação de resina para preservação e reparo de sistemas existentes.",
      image: serviceTubulacao
    },
    {
      icon: Droplets,
      title: "Adequação de ambientes",
      description: "Adequação completa de ambientes para instalação segura de equipamentos a gás.",
      image: serviceAdequacao
    },
    {
      icon: HardHat,
      title: "Remanejamento",
      description: "Remanejamento profissional de pontos de gás com segurança e qualidade.",
      image: serviceRemanejamento
    },
    {
      icon: Gauge,
      title: "Fogões",
      description: "Conversão e instalação especializada de fogões para diferentes tipos de gás.",
      image: serviceFogao
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas para todas as suas necessidades em gás e climatização
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-0 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in group bg-gradient-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
