import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções seguras, eficientes e de alta qualidade em sistemas de gás e ar-condicionado, garantindo tranquilidade, conforto e confiança aos nossos clientes. Atuar com responsabilidade técnica, comprometimento e transparência em cada serviço realizado."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecida como uma das principais referências em serviços de gás e climatização no Rio de Janeiro, destacando-nos pela excelência técnica, pelo atendimento humanizado e pela inovação constante. Ampliar nossa atuação com responsabilidade, mantendo sempre a segurança como prioridade máxima."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Segurança em primeiro lugar • Responsabilidade e ética • Qualidade e excelência técnica • Transparência • Pontualidade e organização • Atenção e acolhimento • Inovação"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Sobre nós
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Profissionais comprometidos com a excelência e a segurança em cada serviço
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
