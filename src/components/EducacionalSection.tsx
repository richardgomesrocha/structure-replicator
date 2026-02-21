import { BookOpen, Video, HelpCircle } from "lucide-react";

const EducacionalSection = () => {
  const resources = [
    { icon: BookOpen, title: "Cartilhas", desc: "Guias passo a passo para proteger jovens e conservar provas." },
    { icon: Video, title: "Vídeos", desc: "Conteúdo curto, legendado e em linguagem acessível." },
    { icon: HelpCircle, title: "FAQ", desc: "Perguntas frequentes sobre direitos, denúncias e suporte." },
  ];

  return (
    <section id="educacional" className="section-padding">
      <div className="container mx-auto">
        <p className="text-primary font-semibold mb-2 uppercase tracking-wide text-sm">Área educacional</p>
        <h2 className="text-3xl md:text-4xl mb-4">Educação é prevenção</h2>
        <p className="text-muted-foreground max-w-3xl text-lg mb-12 leading-relaxed">
          Oferecemos materiais pensados para vítimas, familiares e educadores: cartilhas, vídeos curtos
          e orientações práticas em linguagem clara.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((r) => (
            <div key={r.title} className="group bg-card rounded-xl p-8 border hover:border-primary/40 transition-colors cursor-pointer">
              <r.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-sans font-semibold mb-2">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducacionalSection;
