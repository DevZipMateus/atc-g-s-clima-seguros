import { useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import servicoAquecedor from "@/assets/servico-aquecedor.jpg";
import servicoArCondicionado from "@/assets/servico-arcondicionado.jpg";
import servicoTubulacao from "@/assets/servico-tubulacao.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: servicoAquecedor,
      alt: "Instalação de aquecedor Lorenzetti",
      title: "Instalação de aquecedor"
    },
    {
      src: servicoArCondicionado,
      alt: "Instalação de ar-condicionado",
      title: "Instalação de ar-condicionado"
    },
    {
      src: servicoTubulacao,
      alt: "Instalação de tubulação de gás",
      title: "Instalação de tubulação de gás"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Alguns de nossos serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Confira alguns dos nossos trabalhos realizados com qualidade e segurança
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="border-0 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-primary-foreground font-semibold p-3 sm:p-4 w-full text-sm sm:text-base">
                    {image.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Fechar"
            >
              <X size={28} className="sm:hidden" />
              <X size={32} className="hidden sm:block" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Visualização ampliada"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
