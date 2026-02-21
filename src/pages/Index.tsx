import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CyberbullyingSection from "@/components/CyberbullyingSection";
import SinaisSection from "@/components/SinaisSection";
import CrimesSection from "@/components/CrimesSection";
import ProtecaoSection from "@/components/ProtecaoSection";
import DenunciaSection from "@/components/DenunciaSection";
import FormularioSection from "@/components/FormularioSection";
import EducacionalSection from "@/components/EducacionalSection";
import SuporteSection from "@/components/SuporteSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CyberbullyingSection />
      <SinaisSection />
      <CrimesSection />
      <ProtecaoSection />
      <DenunciaSection />
      <FormularioSection />
      <EducacionalSection />
      <SuporteSection />
      <FooterSection />
    </div>
  );
};

export default Index;
