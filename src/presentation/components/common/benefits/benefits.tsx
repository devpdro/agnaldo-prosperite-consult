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
import { Highlighter } from "src/presentation/components";

const BENEFITS = [
  {
    id: 1,
    icon: <IconFileCertificate size={36} stroke={1.7} />,
    title: "Segurança regulatória",
    desc: (
      <>
        Parceria com administradoras autorizadas e fiscalizadas pelo Banco
        Central. Recursos{" "}
        <Highlighter action="underline">protegidos</Highlighter> e conformidade
        garantida.
      </>
    ),
  },
  {
    id: 2,
    icon: <IconPigMoney size={36} stroke={1.7} />,
    title: "Sem juros, sem entrada",
    desc: (
      <>
        Condição especial com{" "}
        <Highlighter action="underline">sem juros</Highlighter> e sem entrada,
        com parcelas que cabem no seu bolso.
      </>
    ),
  },
  {
    id: 3,
    icon: <IconTrendingUp size={36} stroke={1.7} />,
    title: "Estratégia personalizada",
    desc: (
      <>
        Plano construído de acordo com seu perfil, metas e orçamento, com
        estratégia totalmente{" "}
        <Highlighter action="underline">personalizada</Highlighter>.
      </>
    ),
  },
  {
    id: 4,
    icon: <IconGift size={36} stroke={1.7} />,
    title: "Contemplação estratégica",
    desc: (
      <>
        Método exclusivo para{" "}
        <Highlighter action="underline">acelerar</Highlighter> sua contemplação
        com orientação prática e clara.
      </>
    ),
  },
  {
    id: 5,
    icon: <IconShieldCheck size={36} stroke={1.7} />,
    title: "100% digital e ágil",
    desc: (
      <>
        Processos totalmente{" "}
        <Highlighter action="underline">100% online</Highlighter> e
        descomplicados. Contratação simples e acompanhamento direto.
      </>
    ),
  },
  {
    id: 6,
    icon: <IconUsersGroup size={36} stroke={1.7} />,
    title: "Atendimento dedicado",
    desc: (
      <>
        Acompanhamento especializado e{" "}
        <Highlighter action="underline">dedicado</Highlighter>, com foco em
        clareza e decisões objetivas em cada etapa.
      </>
    ),
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
            Por que escolher a{" "}
            <Highlighter action="underline">Primora</Highlighter> Capital
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
