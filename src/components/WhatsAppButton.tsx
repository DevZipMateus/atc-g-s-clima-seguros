import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl p-0"
      onClick={() => window.open("https://wa.me/5521980906393", "_blank")}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
};

export default WhatsAppButton;
