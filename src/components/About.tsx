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
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais comprometidos com a excelência e a segurança em cada serviço
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
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

export default About;
