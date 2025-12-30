import {
  Achievement,
  About,
  Path,
  Benefits,
  Faq,
  Footer,
  Header,
  Meta,
  Navbar,
  Rate,
  Steps,
  Letters,
  Representatives,
  Contact,
  Founder,
} from "src/presentation/components";
import { ICON } from "src/presentation/assets";

import S from "./home.module.scss";

const Home = () => {

  return (
    <div>
      <Meta
        title="Prospéritté Consult | Consórcio digital que cabe no seu plano de vida"
        description="Realize seus sonhos com a Prospéritté Consult, especialista em consórcios. Simule seu consórcio de forma rápida, segura e sem burocracia. Planeje seu futuro com as melhores condições do mercado!"
        keywords="consórcio, simulação de consórcio, Prospéritté Consult, consórcio imobiliário, consórcio de veículos, consórcio online, planejamento financeiro, segurança, sem juros, carta de crédito"
      />
      <Navbar />
      <Header
        title="Simule seu consórcio agora mesmo!"
        subtitle={`Realizando sonhos \n com planejamento e \n segurança`}
        paragraph="*Aqui seu consórcio é simples, rápido e sem burocracia"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
      />

      <Representatives />
      <Achievement />
      <Letters />
      <Path />
      <Benefits />
      <Steps />
      <Founder />
      <Faq />
      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20gostaria%20de%20saber%20mais%20informações!"
        target="_blank"
        rel="noopener noreferrer"
        className={S["whatsapp-button"]}
      >
        <ICON.IconBrandWhatsapp className={S.icon} />
      </a>
    </div>
  );
};

export default Home;
