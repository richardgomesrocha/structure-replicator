import { UserX2, Mail, ImageOff, AlertTriangle } from "lucide-react";

const CrimesSection = () => {
  const crimes = [
    { icon: UserX2, title: "Perfis falsos", desc: "Criação de contas falsas para enganar, chantagear ou difamar." },
    { icon: Mail, title: "Golpes online", desc: "Mensagens que pedem dados, dinheiro ou levam a sites falsos." },
    { icon: ImageOff, title: "Vazamento de imagens", desc: "Compartilhamento não consentido de fotos íntimas — é crime." },
    { icon: AlertTriangle, title: "Ameaças virtuais", desc: "Mensagens com intimidação ou chantagem que colocam em risco a segurança." },
  ];

  return (
    <section id="crimes" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4">Crimes cibernéticos — o que você precisa saber</h2>
        <p className="text-muted-foreground max-w-3xl text-lg mb-12 leading-relaxed">
          Além do cyberbullying, existem vários crimes digitais que podem afetar você ou alguém que você conhece.
          Conhecer os tipos ajuda a identificar riscos e agir com mais segurança.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          {crimes.map((c) => (
            <div key={c.title} className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-semibold mb-1">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-xl border bg-card">
          <p className="text-sm leading-relaxed">
            <strong>Legislação brasileira:</strong> crimes como difamação, ameaça, divulgação de conteúdo
            íntimo sem consentimento e extorsão são tipificados e podem ser denunciados. Procure delegacias
            especializadas (polícia civil digital) ou serviços como a SaferNet para orientação jurídica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrimesSection;
