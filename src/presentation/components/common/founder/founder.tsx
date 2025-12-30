import Image from "next/image";

import { IMAGE } from "src/presentation/assets";

import S from "./founder.module.scss";

const Founder = () => (
  <div className={S.container}>
    <div className={S["box-section"]}>
      <div className={S["title-section"]}>
        <h3 className={S.subtitle}>Vem com a Prospéritté</h3>
        <h1 className={S.title}>
          Conheça nossa <br /> liderança
        </h1>
      </div>
      <div className={S["about-section"]}>
        <div className={S["image-section"]}>
          {/* <a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer"> */}
          <Image
            src={IMAGE.FOUNDER}
            alt="Agnaldo, CEO da Prospéritté Consult"
            className={S.img}
          />
          {/* </a> */}
        </div>
        <div className={S["text-section"]}>
          <h1 className={S.title}>Agnaldo</h1>
          <h3 className={S.subtitle}>CEO</h3>
          <p className={S.paragraph}>
            Fundada em 2018 e sediada em Piracicaba-SP, a Prospéritté Consult
            nasceu com uma missão clara: transformar o potencial de crescimento
            patrimonial em realidade acessível para nossos clientes.
          </p>
          <p className={S.paragraph}>
            Com mais de 10 anos de experiência no mercado de consórcios e
            seguros, Agnaldo lidera uma equipe de especialistas dedicados a
            oferecer uma abordagem consultiva que vai além da simples venda de
            produtos financeiros.
          </p>
          <p className={S.paragraph}>
            Nosso verdadeiro diferencial está na consultoria estratégica que
            antecede qualquer recomendação, garantindo segurança e as melhores
            condições do mercado para o seu planejamento financeiro.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Founder;
