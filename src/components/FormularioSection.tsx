import { ExternalLink } from "lucide-react";

const FormularioSection = () => {
  return (
    <section id="formulario" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Formulário de ajuda</h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Use nosso formulário para registrar o ocorrido de forma segura e, se desejar, anônima.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
        >
          <ExternalLink className="h-5 w-5" />
          Acessar formulário
        </a>
      </div>
    </section>
  );
};

export default FormularioSection;
