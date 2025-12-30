"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { IMAGE } from "src/presentation/assets";
import { Carousel, CarouselContent, CarouselItem } from "../carousel/carousel";

import styles from "./representatives.module.scss";

const LOGOS = [
  { alt: "HS Consórcios", src: IMAGE.HS.src },
  { alt: "Ancora", src: IMAGE.ANCORA.src, special: true },
  { alt: "Embracon", src: IMAGE.EMBRACON.src },
  { alt: "Santander Consórcio", src: IMAGE.SANTANDER.src },
  { alt: "Rodobens", src: IMAGE.RODOBENS.src, special: true },
];

export default function Representatives() {
  return (
    <section className={styles.representativesSection}>
      <h3 className={styles.title}>REPRESENTANTE AUTORIZADA:</h3>

      <div className={styles.carouselContainer}>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {/* Duplicating logos to ensure smooth infinite scroll on wider screens */}
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
              <CarouselItem key={idx} className={styles.carouselItem}>
                <div className={styles.logoWrapper}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={styles.logoImg}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className={styles.gradientLeft}></div>
        <div className={styles.gradientRight}></div>
      </div>
    </section>
  );
}
