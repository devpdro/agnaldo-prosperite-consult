"use client";

import Link from 'next/link';
import Image from 'next/image';
import { IMAGE } from 'src/presentation/assets';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.scss";

export default function Footer() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isBlog = pathname.startsWith('/blog');

  const navLinks = [
    { label: 'Faça uma simulação', anchor: 'faca-uma-simulacao' },
    { label: 'Cartas Contempladas', anchor: 'cartas-contempladas' },
    { label: 'Quem somos', anchor: 'quem-somos' },
    { label: 'Como funciona', anchor: 'como-funciona' },
    { label: 'Contato', anchor: 'contato' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <Image className={styles.logo} src={IMAGE.LOGO_BRANCO} alt="Logo Prospéritté Consult" width={160} height={60} />
          <h4>Redes Sociais</h4>
          <div className={styles.social}>
            <a href="https://www.instagram.com/prosperitteconsult/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Fale com a gente</h4>
          <ul>
            <li>
              Suporte Administrativo<br />
              <strong>+55 19 99963-2067</strong>
            </li>
            <li>
              Diretor Comercial<br />
              <strong>+55 19 98243-5337</strong>
            </li>
            <li>
              Gerente Comercial<br />
              <strong>+55 19 98243-5337</strong>
            </li>
            <li>
              E-mail<br />
              <strong>suporte@prosperitteconsult.com.br</strong>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Transparência</h4>
          <ul>
            <li><Link href="/politica-de-privacidade">Política de privacidade</Link></li>
            <li><Link href="/termos-de-uso">Termos de uso</Link></li>
          </ul>
          <h5>Ajuda</h5>
          <ul>
            <li>
              <a href="#perguntas-frequentes" onClick={handleSmoothScroll("perguntas-frequentes")}>Perguntas frequentes</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Navegue</h4>
          <ul className={styles.navFooter}>
            {navLinks.map(link => (
              <li key={link.anchor}>
                {isBlog ? (
                  <a href={`/${'#' + link.anchor}`}>{link.label}</a>
                ) : (
                  <a href={`#${link.anchor}`} onClick={handleSmoothScroll(link.anchor)}>{link.label}</a>
                )}
              </li>
            ))}
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          A Prospéritté Consult é uma consultoria especializada na intermediação de consórcios, atuando em parceria com administradoras autorizadas e fiscalizadas pelo Banco Central do Brasil, conforme a Lei nº 11.795/2008 e a Circular 3.432/2009.
          Atuamos de forma 100% online, oferecendo suporte, simulações e acompanhamento completo durante todo o processo de aquisição da sua cota. Não somos uma administradora de consórcios, nem realizamos gestão de grupos.
          Importante: Não solicitamos pagamentos antecipados e não possuímos representantes externos. Qualquer negociação deve ser feita exclusivamente pelos nossos canais oficiais.
          As condições de taxa, prazo e contemplação podem variar de acordo com a administradora e o grupo escolhido. Consulte sempre as regras e condições no ato da simulação e no Contrato de Participação em Grupos de Consórcio.
        </div>
      </div>
    </footer>
  );
}
