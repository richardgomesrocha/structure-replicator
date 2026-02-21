import { Heart, MessageCircle, Stethoscope } from "lucide-react";

const SuporteSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4">Suporte emocional e orientações para familiares</h2>
        <p className="text-muted-foreground max-w-3xl text-lg mb-12 leading-relaxed">
          Quando alguém que você ama sofre online, o papel da família é acolher, não minimizar.
          Escute sem julgar, valide sentimentos e procure apoio profissional se houver sinais de depressão ou risco.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-5 items-start bg-card rounded-xl p-8 border">
            <MessageCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-sans font-semibold mb-2">Como conversar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perguntas abertas, evitar culpa, reforçar apoio incondicional.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start bg-card rounded-xl p-8 border">
            <Stethoscope className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-sans font-semibold mb-2">Profissionais</h3>
              <p className="text-muted-foreground leading-relaxed">
                Encaminhamento para psicólogos especializados em trauma digital.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-5 rounded-xl bg-destructive/10 border border-destructive/20">
          <p className="text-sm flex items-center gap-2">
            <Heart className="h-4 w-4 text-destructive flex-shrink-0" />
            Se houver risco de autoagressão ou violência, contate serviços de emergência locais imediatamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuporteSection;
