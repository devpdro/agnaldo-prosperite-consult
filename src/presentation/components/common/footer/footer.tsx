"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGE } from "src/presentation/assets";
import { FaInstagram } from "react-icons/fa";
import styles from "./footer.module.scss";
import { MENU } from "src/data/ui";

export default function Footer() {
  const [pathname, setPathname] = useState("");
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    if (pathname !== "/") {
      window.location.href = `/?scrollTo=${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
            alt="Logo Primora Capital"
            width={160}
            height={60}
          />
          <h4>Redes Sociais</h4>
          <div className={styles.social}>
            <a
              href="https://www.facebook.com/primoracapital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Primora Capital"
            >
              <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/primoracapital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Primora Capital"
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/agnaldo-tomsic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Agnaldo Tomsic"
            >
              <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Fale com a gente</h4>
          <ul>
            <li>
              Suporte Administrativo
              <br />
              <strong>atendimento01@primoracapital.com.br</strong>
            </li>
            <li>
              Diretor Comercial
              <br />
              <strong>atendimento02@primoracapital.com.br</strong>
            </li>
            <li>
              Gerente Comercial
              <br />
              <strong>+55 19 99284-1239</strong>
            </li>
            <li>
              E-mail
              <br />
              <strong>Agnaldo.tomsic@primoracapital.com.br</strong>
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
        <div className={styles.location}>
          <strong>Localização:</strong> Rua João Teixeira da Frota, 1106 - São Pedro - SP, Brasil - CEP 13520-000
        </div>
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
