import Image from "next/image";

import { IMAGE } from "src/presentation/assets";

import S from "./founder.module.scss";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";

const Founder = () => (
  <section id="quem-somos" className={S.container}>
    <div className={S["box-section"]}>
      <div className={S["title-section"]}>
        <h3 className={S.subtitle}>Excelência que inspira confiança</h3>
        <h1 className={S.title}>
          Conheça nossa <br />{" "}
          <Highlighter action="underline" color="#eed56d">liderança</Highlighter>
        </h1>
      </div>
      <div className={S["about-section"]}>
        <div className={S["image-section"]}>
          {/* <a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer"> */}
          <Image
            src={IMAGE.AGNALDO}
            alt="Agnaldo, CEO da Prospéritté Consult"
            className={S.img}
          />
          {/* </a> */}
        </div>
        <div className={S["text-section"]}>
          <h1 className={S.title}>Agnaldo Tomsic</h1>
          <h3 className={S.subtitle}>CEO</h3>
          <p className={S.paragraph}>
            Com mais de uma década em consórcios e soluções financeiras,
            Agnaldo Tomsic conduz uma operação orientada a resultados, com
            foco em segurança, ética e clareza na tomada de decisão.
          </p>
          <p className={S.paragraph}>
            Une método e estratégia para destravar objetivos de curto e longo
            prazo, respeitando o perfil de cada cliente e garantindo processos
            simples, ágeis e 100% digitais.
          </p>
          <p className={S.paragraph}>
            A atuação se baseia em transparência, parceria com administradoras
            autorizadas e acompanhamento dedicado em todas as etapas, para uma
            experiência superior em consórcio.
          </p>
          <p className={S.paragraph}>
            Mais do que oferecer produtos, entrega visão estratégica, orientação
            prática e condições competitivas, para que cada decisão seja segura
            e gere valor real ao seu patrimônio.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
