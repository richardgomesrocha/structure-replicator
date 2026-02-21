import { MessageSquare, Eye, UserX } from "lucide-react";

const CyberbullyingSection = () => {
  const types = [
    {
      icon: MessageSquare,
      title: "Mensagens ofensivas",
      desc: "Insultos, rumores e perseguição por texto ou áudio.",
    },
    {
      icon: Eye,
      title: "Exposição pública",
      desc: "Publicação de rumores, imagens ou nomes para humilhar.",
    },
    {
      icon: UserX,
      title: "Exclusão e ostracismo",
      desc: "Bloquear ou excluir alguém de grupos para isolar socialmente.",
    },
  ];

  return (
    <section id="cyberbullying" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6">O que é cyberbullying?</h2>
        <p className="text-muted-foreground max-w-3xl text-lg mb-12 leading-relaxed">
          Cyberbullying é o uso de tecnologias digitais para intimidar, humilhar ou excluir alguém.
          Pode acontecer por mensagens, redes sociais, grupos de conversa, imagens editadas ou postadas
          sem consentimento. Mesmo quando não há contato físico, o impacto é real e profundo.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {types.map((t) => (
            <div key={t.title} className="bg-card rounded-xl p-8 shadow-sm border">
              <t.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-sans font-semibold mb-2">{t.title}</h3>
              <p className="text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-muted-foreground text-sm max-w-3xl leading-relaxed">
          Se algo parece persistente, ameaçador ou fora do seu controle, procure apoio — emocional e legal.
          Guardar provas e conversar com alguém de confiança é um primeiro passo poderoso.
        </p>
      </div>
    </section>
  );
};

export default CyberbullyingSection;
