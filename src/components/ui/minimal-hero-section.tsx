"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon, Droplets, Activity, Flower2, Zap } from "lucide-react";

const STYLE_ID = "bento3-animations";

const palette = {
  surface: "bg-[#f8f6f1] text-brand-dark",
  heading: "text-brand-dark",
  muted: "text-brand-secondary",
  capsule: "bg-white/70 border-brand-secondary/20 text-brand-secondary",
  card: "bg-white/80",
  button: "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-light",
  gridColor: "rgba(139, 115, 85, 0.08)",
  overlay:
    "linear-gradient(180deg, rgba(248,246,241,0.96) 0%, rgba(248,246,241,0.68) 45%, rgba(248,246,241,0.96) 100%)",
};

function BenefitsHeroSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes bento3-reveal {
        0% { opacity: 0; transform: translate3d(0, 36px, 0) scale(0.97); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      .bento3-root {
        min-height: 100svh;
        min-height: 100vh;
        padding-inline: clamp(1.25rem, 6vw, 4.5rem);
        padding-block: clamp(2.75rem, 6vw, 5rem);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bento3-shell {
        display: grid;
        gap: clamp(2rem, 6vw, 3.5rem);
        grid-template-columns: repeat(2, minmax(0, 1fr));
        width: min(100%, 72rem);
        align-items: stretch;
      }
      .bento3-copy {
        display: flex;
        flex-direction: column;
        gap: clamp(1.5rem, 4vw, 2.5rem);
        align-items: flex-start;
        text-align: left;
      }
      .bento3-lede {
        display: flex;
        flex-direction: column;
        gap: clamp(1rem, 3vw, 1.75rem);
      }
      .bento3-cta {
        display: flex;
        gap: clamp(1rem, 4vw, 1.5rem);
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
      }
      .bento3-benefits {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .bento3-footnote {
        display: flex;
        gap: clamp(1.2rem, 4vw, 2rem);
        flex-wrap: wrap;
        font-size: 0.7rem;
        letter-spacing: 0.35em;
        text-transform: uppercase;
        align-items: center;
        justify-content: space-between;
      }
      @media (max-width: 1024px) {
        .bento3-shell {
          gap: clamp(1.75rem, 6vw, 3rem);
        }
      }
      @media (max-width: 860px) {
        .bento3-shell {
          grid-template-columns: 1fr;
          justify-items: center;
          text-align: center;
        }
        .bento3-copy {
          align-items: center;
          text-align: center;
        }
        .bento3-cta {
          justify-content: center;
        }
      }
      @media (max-width: 640px) {
        .bento3-root {
          padding-inline: clamp(1rem, 8vw, 1.8rem);
          padding-block: clamp(2rem, 10vw, 4rem);
        }
        .bento3-cta {
          flex-direction: column;
          justify-content: center;
        }
        .bento3-footnote {
          letter-spacing: 0.28em;
          justify-content: center;
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const containerStyle = {
    "--bento3-grid-color": palette.gridColor,
  } as React.CSSProperties;

  const bodyBenefits = [
    { icon: Droplets, text: "Redução real de inchaço e retenção" },
    { icon: Activity, text: "Circulação e metabolismo otimizados" },
    { icon: Flower2, text: "Desinflamação corporal profunda" },
    { icon: Zap, text: "Rejuvenescimento saudável e duradouro" },
  ];

  const lifeBenefits = [
    "Leveza ao acordar todos os dias",
    "Conforto genuíno no próprio corpo",
    "Autoconfiança construída com consciência",
    "Sensação real de cuidado e evolução",
  ];

  return (
    <div
      className={`bento3-root relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${palette.surface}`}
      style={containerStyle}
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--bento3-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--bento3-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in" as never,
        }}
      />
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ background: palette.overlay }} />

        <section
          ref={sectionRef}
          className={`relative z-10 mx-auto w-full ${visible ? "animate-[bento3-reveal_0.9s_cubic-bezier(.22,.68,0,1)_forwards]" : "opacity-0"}`}
        >
          <div className="bento3-shell w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm rounded-[32px] border border-brand-secondary/10 p-6 shadow-[0_24px_80px_-60px_rgba(15,15,15,0.3)] transition-colors duration-500 sm:p-10">
            
            {/* Left: Copy */}
            <div className="bento3-copy">
              <div className={`inline-flex w-fit items-center gap-3 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.45em] ${palette.capsule}`}>
                Transformação Real
              </div>
              <div className="bento3-lede">
                <h2 className={`text-3xl font-serif leading-tight sm:text-4xl lg:text-5xl ${palette.heading}`}>
                  O que você pode sentir
                </h2>
                <p className={`max-w-md text-base ${palette.muted}`}>
                  Resultados construídos com respeito ao seu tempo e às necessidades reais do seu corpo.
                </p>
              </div>
              <div className="bento3-cta">
                <a href="#atendimento">
                  <button
                    type="button"
                    className={`rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition ${palette.button}`}
                  >
                    Agendar avaliação
                  </button>
                </a>
              </div>
            </div>

            {/* Right: Benefits Cards */}
            <div className="flex flex-col gap-4">
              {/* Card: No seu corpo */}
              <div className="bg-white p-6 md:p-8 rounded-2xl relative group transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors duration-500 rounded-l-2xl" />
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-6 h-6 text-brand-primary" strokeWidth={1.5} />
                  <h3 className={`text-xl font-serif ${palette.heading}`}>No seu corpo</h3>
                </div>
                <ul className="space-y-3">
                  {bodyBenefits.map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${palette.muted}`}>
                      <item.icon className="w-4 h-4 text-brand-primary/60 shrink-0" strokeWidth={1.5} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card: Na sua vida - mesmo tom da seção 02 (brand-dark) */}
              <div className="bg-brand-dark text-brand-light p-6 md:p-8 rounded-2xl relative group transition-colors duration-500">
                <div className="absolute top-0 right-0 w-1 h-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors duration-500 rounded-r-2xl" />
                <div className="flex items-center gap-3 mb-4">
                  <Moon className="w-6 h-6 text-brand-primary" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif text-brand-light">Na sua vida</h3>
                </div>
                <ul className="space-y-3">
                  {lifeBenefits.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-brand-light/80">
                      <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        <div className={`bento3-footnote mt-10 max-w-6xl mx-auto ${palette.muted}`}>
          <span className="italic">Uma jornada de cuidado consciente e evolução genuína.</span>
          <span>Estética Integrativa & Saúde Feminina</span>
        </div>
      </section>
    </div>
  );
}

export default BenefitsHeroSection;
export { BenefitsHeroSection };
