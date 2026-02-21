import { Shield, Mail, Phone, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-4">Contato, privacidade e próximos passos</h2>
            <p className="text-background/70 leading-relaxed">
              Rede Segura prioriza sua privacidade. Dados enviados são usados apenas para orientação
              e encaminhamento, com consentimento. Oferecemos modo de envio anônimo e aviso claro sobre
              retenção de dados.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-background/80">contato@redesegura.org.br</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-background/80">+55 11 9XXXX-XXXX (horário comercial)</span>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-primary" />
              <span className="text-background/80">@RedeSegura — recursos e atualizações</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Preciso de ajuda
          </a>
          <a
            href="#educacional"
            className="inline-flex items-center gap-2 border border-background/30 font-semibold px-6 py-3 rounded-lg hover:bg-background/10 transition-colors"
          >
            Ver materiais
          </a>
        </div>
        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-display">Rede Segura</span>
          </div>
          <p className="text-background/50 text-sm">
            Juntos construímos uma internet mais segura.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
