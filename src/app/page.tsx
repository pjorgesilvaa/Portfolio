"use client";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const handleHover = (event: MouseEvent | AnimationEvent) => {
    const target = event.target as HTMLSpanElement;
    target.classList.toggle(styles.animated);
  };

  useEffect(() => {
    const rubberBandElements = document.querySelectorAll<HTMLSpanElement>(
      `.${styles.rubberBand}`
    );

    rubberBandElements.forEach((element) => {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("animationend", handleHover);
    });

    return () => {
      // Clean up the event listeners when the component unmounts
      rubberBandElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("animationend", handleHover);
      });
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.stars} />
      <section
        id="about"
        className={`${styles.section} ${styles.aboutSection}`}
      >
        <div className={styles.aboutText}>
          <h1>
            <span className={styles.rubberBand}>H</span>
            <span className={styles.rubberBand}>e</span>
            <span className={styles.rubberBand}>y</span>
            <span className={styles.rubberBand}>!</span>
            <br />
            <span className={styles.rubberBand}>I</span>
            <span className={styles.rubberBand}>&apos;</span>
            <span className={styles.rubberBand}>m</span>
            <span className={styles.rubberBand}>&nbsp;</span>
            <span className={styles.rubberBand}>P</span>
            <span className={styles.rubberBand}>a</span>
            <span className={styles.rubberBand}>u</span>
            <span className={styles.rubberBand}>l</span>
            <span className={styles.rubberBand}>o</span>
            <span className={styles.rubberBand}>,</span>
            <span className={styles.rubberBand}>&nbsp;</span>
            <br />
            <span className={styles.rubberBand}>S</span>
            <span className={styles.rubberBand}>o</span>
            <span className={styles.rubberBand}>f</span>
            <span className={styles.rubberBand}>t</span>
            <span className={styles.rubberBand}>w</span>
            <span className={styles.rubberBand}>a</span>
            <span className={styles.rubberBand}>r</span>
            <span className={styles.rubberBand}>e</span>
            <span className={styles.rubberBand}>&nbsp;</span>
            <span className={styles.rubberBand}>E</span>
            <span className={styles.rubberBand}>n</span>
            <span className={styles.rubberBand}>g</span>
            <span className={styles.rubberBand}>i</span>
            <span className={styles.rubberBand}>n</span>
            <span className={styles.rubberBand}>e</span>
            <span className={styles.rubberBand}>e</span>
            <span className={styles.rubberBand}>r</span>
          </h1>
          <p className={styles.aboutTextSecondary}>
            Web Developer / .NET Developer
          </p>
        </div>
      </section>
      <section id="resume" className={styles.section}></section>
    </main>
  );
}
