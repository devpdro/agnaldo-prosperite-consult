"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGE } from "src/presentation/assets";
import { FaInstagram } from "react-icons/fa";
import styles from "./footer.module.scss";
import { MENU } from "src/data/ui";

export default function Footer() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isHome = pathname === "/";

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <Image
            className={styles.logo}
            src={IMAGE.LOGO_BRANCO}
            alt="Logo PRIMORA Capital"
            width={160}
            height={60}
          />
          <h4>Redes Sociais</h4>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/primoracapital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Fale com a gente</h4>
          <ul>
            <li>
              E-mail
              <br />
              <strong>atendimento01@primoracapital.com.br</strong>
            </li>
            <li>
              E-mail
              <br />
              <strong>atendimento02@primoracapital.com.br</strong>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Transparência</h4>
          <ul>
            <li>
              <Link href="/politica-de-privacidade">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso">Termos de uso</Link>
            </li>
          </ul>
          <h5>Ajuda</h5>
          <ul>
            <li>
              <a
                href="#perguntas-frequentes"
                onClick={(e) => handleSmoothScroll(e, "perguntas-frequentes")}
              >
                Perguntas frequentes
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Navegue</h4>
          <ul className={styles.navFooter}>
            {MENU.map((item, idx) => {
              const href = item.link ?? "#";
              const isHash = href.includes("#");
              const id = isHash ? href.split("#")[1] : null;
              return (
                <li key={idx}>
                  {isHome && isHash && id ? (
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleSmoothScroll(e, id)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={isHash && id ? `/?scrollTo=${id}` : href}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          A PRIMORA Capital é uma consultoria independente que intermedia
          consórcios junto a administradoras autorizadas e supervisionadas pelo
          Banco Central do Brasil (Lei nº 11.795/2008 e Circular 3.432/2009).
          Nosso atendimento é 100% digital: realizamos simulações, esclarecemos
          dúvidas e acompanhamos sua jornada até a aquisição da cota. Não somos
          administradora de consórcios e não gerenciamos grupos. Aviso: não
          cobramos valores antecipados e não trabalhamos com representantes
          externos. Negociações devem ocorrer apenas pelos canais oficiais da
          PRIMORA Capital. Taxas, prazos e possibilidades de contemplação podem
          variar conforme a administradora e o grupo. Consulte as condições na
          simulação e no Contrato de Participação em Grupos de Consórcio.
        </div>
      </div>
    </footer>
  );
}
