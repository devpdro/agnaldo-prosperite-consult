"use client";

import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import {
  IconShieldCheck,
  IconPigMoney,
  IconTrendingUp,
  IconFileCertificate,
  IconGift,
  IconUsersGroup,
} from "@tabler/icons-react";

import styles from "./benefits.module.scss";

const BENEFITS = [
  {
    id: 1,
    icon: <IconShieldCheck size={36} stroke={1.7} />,
    title: "Segurança e Credibilidade",
    desc: "Empresa autorizada e fiscalizada pelo Banco Central. Seu dinheiro está 100% protegido.",
  },
  {
    id: 2,
    icon: <IconPigMoney size={36} stroke={1.7} />,
    title: "Sem Juros, Sem Entrada",
    desc: "Planeje seu futuro sem pagar juros abusivos. Aqui, você investe no que é seu.",
  },
  {
    id: 3,
    icon: <IconTrendingUp size={36} stroke={1.7} />,
    title: "Planos Flexíveis",
    desc: "Diversas opções de créditos, parcelas que cabem no seu bolso e prazos sob medida.",
  },
  {
    id: 4,
    icon: <IconFileCertificate size={36} stroke={1.7} />,
    title: "Atendimento Especializado",
    desc: "Consultores prontos para te ajudar a escolher o melhor plano, de forma transparente e humanizada.",
  },
  {
    id: 5,
    icon: <IconGift size={36} stroke={1.7} />,
    title: "Contemplação Acelerada",
    desc: "Aumente suas chances com lances livres, lances fixos e sorteios mensais.",
  },
  {
    id: 6,
    icon: <IconUsersGroup size={36} stroke={1.7} />,
    title: "Sem Burocracia",
    desc: "Faça tudo 100% online, com agilidade na contratação e acompanhamento da sua cota.",
  },
];

const Benefits = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", dragFree: true },
    [WheelGesturesPlugin()]
  );

  return (
    <section id="beneficios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Por que fazer consórcio com a{" "}
            <span className={styles.highlight}>Prospéritté</span>
            <span className={styles.highlightItalic}> Consult?</span>
          </h2>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              aria-label="Ver anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => emblaApi && emblaApi.scrollNext()}
              aria-label="Ver próximo"
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselViewport} ref={viewportRef}>
            <div className={styles.carouselTrack}>
              {BENEFITS.map((b) => (
                <article key={b.id} className={styles.card}>
                  <div className={styles.icon}>{b.icon}</div>
                  <h3 className={styles.cardTitle}>{b.title}</h3>
                  <p className={styles.cardDesc}>{b.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
