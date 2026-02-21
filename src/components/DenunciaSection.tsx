import { ExternalLink, Phone } from "lucide-react";

const DenunciaSection = () => {
  const channels = [
    {
      title: "SaferNet Brasil",
      desc: "Atendimento e orientação para casos de violação de direitos na internet.",
      action: "Denunciar SaferNet",
      url: "https://new.safernet.org.br/denuncie",
      variant: "filled" as const,
    },
    {
      title: "Delegacia Eletrônica",
      desc: "Registro oficial de ocorrências digitais — varia por estado.",
      action: "Acessar delegacia",
      url: "#",
      variant: "outline" as const,
    },
    {
      title: "Disque 100",
      desc: "Canal de denúncias de violações de direitos humanos, incluindo crianças e adolescentes.",
      action: "Ligar: 100",
      url: "tel:100",
      variant: "outline" as const,
    },
  ];

  return (
    <section id="denuncia" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4">Canal de Denúncia — contatos oficiais</h2>
        <p className="text-primary-foreground/80 max-w-3xl text-lg mb-12 leading-relaxed">
          Se a situação envolver crime ou risco imediato, utilize os canais oficiais abaixo.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {channels.map((ch) => (
            <div key={ch.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20">
              <h3 className="text-xl font-sans font-semibold mb-3">{ch.title}</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">{ch.desc}</p>
              <a
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors ${
                  ch.variant === "filled"
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "border border-primary-foreground/40 hover:bg-primary-foreground/10"
                }`}
              >
                {ch.title === "Disque 100" ? <Phone className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                {ch.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DenunciaSection;
