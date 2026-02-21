import { Users, Moon, Brain, GraduationCap } from "lucide-react";

const SinaisSection = () => {
  const items = [
    {
      icon: Users,
      title: "Isolamento",
      desc: "Afasta-se de amigos, evita redes sociais e perde interesse em atividades.",
    },
    {
      icon: Moon,
      title: "Alterações no sono e apetite",
      desc: "Insônia, pesadelos ou perda/ganho de apetite devido ao estresse.",
    },
    {
      icon: Brain,
      title: "Ansiedade e depressão",
      desc: "Sintomas emocionais que merecem atenção profissional imediata.",
    },
    {
      icon: GraduationCap,
      title: "Rendimento escolar",
      desc: "Queda no desempenho ou falta de vontade de ir à escola/trabalho.",
    },
  ];

  return (
    <section id="sinais" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12">Sinais de alerta e impactos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-muted rounded-xl p-8">
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-sans font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-muted-foreground max-w-3xl leading-relaxed">
          Os efeitos variam, mas são reais. Para jovens e adultos, o suporte de familiares, profissionais
          de saúde mental e canais de denúncia pode reduzir danos e recuperar bem-estar.
        </p>
      </div>
    </section>
  );
};

export default SinaisSection;
