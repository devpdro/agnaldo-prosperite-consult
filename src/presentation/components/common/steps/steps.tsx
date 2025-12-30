"use client";

import {
  IconSun,
  IconFileText,
  IconCalendarEvent,
  IconTrophy,
} from "@tabler/icons-react";
import styles from "./steps.module.scss";

const STEPS = [
  {
    id: 1,
    icon: <IconSun size={32} />,
    title: "1 - Simulação e Planejamento",
    description:
      "Defina o valor da carta de crédito e o prazo ideal para o seu bolso. Simule online e encontre o plano perfeito para você.",
    large: true,
  },
  {
    id: 2,
    icon: <IconFileText size={32} />,
    title: "2 - Contratação Digital",
    description:
      "Assine o contrato digitalmente de forma 100% segura, rápida e sem burocracia desnecessária.",
    large: false,
  },
  {
    id: 3,
    icon: <IconCalendarEvent size={32} />,
    title: "3 - Lances e Sorteios",
    description:
      "Participe das assembleias mensais, acompanhe os sorteios e oferte lances para antecipar sua conquista.",
    large: false,
  },
  {
    id: 4,
    icon: <IconTrophy size={32} />,
    title: "4 - Conquiste seu Sonho",
    description:
      "Ao ser contemplado, use sua carta de crédito para adquirir seu bem, quitar financiamentos ou investir no seu futuro.",
    large: true,
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Passo a Passo</span>
          <h2 className={styles.title}>Como funciona o consórcio?</h2>
          <p className={styles.subtitle}>
            Entenda como é simples conquistar seu objetivo com a Prospéritté
            Consult. Processo simplificado em 4 etapas.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={`${styles.card} ${step.large ? styles.large : ""}`}
            >
              <div className={styles.icon}>{step.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
