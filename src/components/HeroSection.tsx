import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Pessoas usando tecnologia com segurança"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative container mx-auto section-padding pt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Rede Segura — Internet segura começa com informação
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Se você foi vítima ou testemunhou cyberbullying ou outro crime digital, você não está sozinho.
            A Rede Segura oferece orientação prática, apoio e caminhos claros para denunciar — com empatia,
            segurança e linguagem acessível.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScd3ZCjEgxpun7UJxMVZBnNtYN-HrFdKGNPym0sI9cPNE8lGQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
            >
              Preciso de ajuda
            </a>
            <a
              href="#cyberbullying"
              className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary/5 transition-colors"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
