import { Flame, Wind, Wrench, Droplets, HardHat, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: "Aquecedores",
      description: "Instalação, manutenção preventiva e corretiva de aquecedores. Venda de equipamentos de alta qualidade."
    },
    {
      icon: Wind,
      title: "Ar-condicionado",
      description: "Instalação e manutenção completa de sistemas de ar-condicionado. Venda de aparelhos modernos e eficientes."
    },
    {
      icon: Wrench,
      title: "Tubulação de gás",
      description: "Construção de nova tubulação, aplicação de resina para preservação e reparo de sistemas existentes."
    },
    {
      icon: Droplets,
      title: "Adequação de ambientes",
      description: "Adequação completa de ambientes para instalação segura de equipamentos a gás."
    },
    {
      icon: HardHat,
      title: "Remanejamento",
      description: "Remanejamento profissional de pontos de gás com segurança e qualidade."
    },
    {
      icon: Gauge,
      title: "Fogões",
      description: "Conversão e instalação especializada de fogões para diferentes tipos de gás."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades em gás e climatização
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-card-hover animate-scale-in group bg-gradient-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
