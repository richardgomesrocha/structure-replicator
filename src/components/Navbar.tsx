import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="font-display text-xl">Rede Segura</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#cyberbullying" className="hover:text-foreground transition-colors">O que é</a>
          <a href="#sinais" className="hover:text-foreground transition-colors">Sinais</a>
          <a href="#crimes" className="hover:text-foreground transition-colors">Crimes</a>
          <a href="#protecao" className="hover:text-foreground transition-colors">Proteção</a>
          <a href="#denuncia" className="hover:text-foreground transition-colors">Denúncia</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScd3ZCjEgxpun7UJxMVZBnNtYN-HrFdKGNPym0sI9cPNE8lGQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            Preciso de ajuda
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
