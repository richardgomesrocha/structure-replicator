import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const FormularioSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="formulario" className="section-padding bg-secondary">
        <div className="container mx-auto max-w-2xl text-center">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-4">Relato enviado</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Você receberá orientações iniciais sobre como preservar provas e próximos passos.
            Obrigado por confiar na Rede Segura.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl mb-4">Formulário de ajuda — relato seguro</h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Use este formulário para registrar o ocorrido. Informações pessoais são opcionais;
          você pode enviar anonimamente. Quanto mais detalhes, mais fácil será orientar e encaminhar.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome (opcional)</label>
              <input type="text" placeholder="Informe se desejar contato" className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-ring outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Idade</label>
              <input type="number" placeholder="Importante para salvaguardar menores" className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-ring outline-none" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Cidade / Estado</label>
              <input type="text" placeholder="Facilita encaminhamentos" className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-ring outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tipo de problema</label>
              <select className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-ring outline-none">
                <option value="">Selecione...</option>
                <option>Cyberbullying</option>
                <option>Vazamento de imagens</option>
                <option>Golpe online</option>
                <option>Ameaça virtual</option>
                <option>Perfil falso</option>
                <option>Outro</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Descrição do ocorrido</label>
            <textarea rows={4} placeholder="Datas, plataformas e nomes ajudam na investigação" className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-ring outline-none resize-none" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Deseja contato?</label>
              <select className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-ring outline-none">
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email ou WhatsApp</label>
              <input type="text" placeholder="Opcional" className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-ring outline-none" />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            <Send className="h-5 w-5" />
            Enviar relato
          </button>
          <div className="bg-success-light rounded-lg p-4 mt-4">
            <p className="text-sm text-muted-foreground">
              Após o envio, você receberá uma confirmação automática com orientações iniciais
              sobre como preservar provas e próximos passos.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormularioSection;
