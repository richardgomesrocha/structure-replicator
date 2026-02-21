import { Camera, Settings, Archive, Flag } from "lucide-react";

const ProtecaoSection = () => {
  const steps = [
    { icon: Camera, title: "Guardar provas", desc: "Salve prints, gravações e links em local seguro." },
    { icon: Settings, title: "Configurações de privacidade", desc: "Revise quem pode ver publicações, fotos e marcar você." },
    { icon: Archive, title: "Bloquear e arquivar", desc: "Bloquear e arquivar interações agressivas reduz exposição." },
    { icon: Flag, title: "Recursos legais", desc: "Denuncie às plataformas e, se necessário, às autoridades." },
  ];

  return (
    <section id="protecao" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4">Como se proteger — medidas práticas</h2>
        <p className="text-muted-foreground max-w-3xl text-lg mb-12 leading-relaxed">
          Guarde capturas de tela, URLs e horários; não apague mensagens. Atualize suas senhas, ative
          verificação em duas etapas e ajuste privacidade nas redes sociais para limitar quem vê seu conteúdo.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative bg-primary/5 rounded-xl p-8 border border-primary/15">
              <span className="absolute top-4 right-4 text-4xl font-display text-primary/20">{i + 1}</span>
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-sans font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtecaoSection;
