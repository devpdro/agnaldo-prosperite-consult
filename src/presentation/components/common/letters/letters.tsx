"use client";

import { useEffect, useState } from "react";

import { IconArrowRight } from "@tabler/icons-react";
import styles from "./letters.module.scss";

const LETTERS = [
  { credito: "R$ 145.000,00", pagas: 2, parcela: "R$ 925,00" },
  { credito: "R$ 160.000,00", pagas: 3, parcela: "R$ 1.010,00" },
  { credito: "R$ 180.000,00", pagas: 3, parcela: "R$ 1.135,00" },
  { credito: "R$ 200.000,00", pagas: 3, parcela: "R$ 1.210,00" },
  { credito: "R$ 220.000,00", pagas: 3, parcela: "R$ 1.320,00" },
  { credito: "R$ 255.000,00", pagas: 1, parcela: "R$ 1.520,00" },
  { credito: "R$ 300.000,00", pagas: 4, parcela: "R$ 1.840,00" },
  { credito: "R$ 750.000,00", pagas: 5, parcela: "R$ 4.890,00" },
];

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20tenho%20interesse%20em%20fazer%20um%20cons%C3%B3rcio!";
const ctaUrl =
  "https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20Prosp%C3%A9ritt%C3%A9%20Consult.";

export default function Letters() {
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="cartas-contempladas" className={styles.lettersSection}>
      <h2 className={styles.title}>Cartas Contempladas</h2>
      <p className={styles.subtitle}>
        Os créditos listados abaixo são provenientes de clientes que já foram
        contemplados por lance ou sorteio e estão prontos para uso imediato.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.lettersTable}>
          <thead>
            <tr>
              <th>Crédito</th>
              <th>Parcelas Pagas</th>
              <th>Parcelas</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {LETTERS.map((item, idx) => (
              <tr key={idx}>
                <td>{item.credito}</td>
                <td>{item.pagas}</td>
                <td>{item.parcela}</td>
                <td>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                  >
                    Tenho interesse
                    <IconArrowRight size={16} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.mobileCards}>
        {LETTERS.map((item, idx) => (
          <div className={styles.mobileCard} key={idx}>
            <div className={styles.mobileCardInfo}>
              <div>
                <strong>Crédito:</strong> {item.credito}
              </div>
              <div>
                <strong>Parcela:</strong> {item.parcela}
              </div>
              <div>
                <strong>Pagas:</strong> {item.pagas} parcela
                {item.pagas > 1 ? "s" : ""}
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              Tenho interesse
              <IconArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
      <div className={styles.ctaContainer}>
        <p className={styles.ctaText}>
          Não encontrou o crédito ideal? Fale com nossos consultores <br /> A
          menos taxa com parcelas que cabem no seu bolso!
        </p>
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          FALE CONOSCO
        </a>
      </div>
    </section>
  );
}
