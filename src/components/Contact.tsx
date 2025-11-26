import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      content: ["(21) 98090-6393", "(21) 99266-5091"],
      action: () => window.open("https://wa.me/5521980906393", "_blank")
    },
    {
      icon: Mail,
      title: "E-mail",
      content: ["atcespecializada.gasrio@gmail.com"],
      action: () => window.location.href = "mailto:atcespecializada.gasrio@gmail.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: ["Rua Porto Camargo, lote 16 quadra 29", "Guaratiba - Rio de Janeiro"]
    },
    {
      icon: Clock,
      title: "Horário",
      content: ["Segunda à sexta", "08:00 às 17:00"]
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você com excelência e segurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.content.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                  {info.action && (
                    <Button 
                      variant="link" 
                      className="mt-2 text-primary hover:text-primary/80"
                      onClick={info.action}
                    >
                      Clique aqui
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open("https://www.instagram.com/atcespecializadagasrio", "_blank")}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Siga-nos no Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
