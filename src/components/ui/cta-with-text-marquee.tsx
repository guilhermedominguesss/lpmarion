"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
  onItemsRef?: (items: HTMLElement[]) => void;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(containerRef.current.querySelectorAll('.marquee-item')) as HTMLElement[];
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex flex-col overflow-hidden",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Melasma Sistêmico",
  "Lipedema",
  "Rejuvenescimento Consciente",
  "Desinflamação Corporal",
  "Saúde Feminina",
];

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-[#965353] text-brand-light flex items-center justify-center px-6 py-12 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl animate-fade-in-up relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 max-w-xl">
            <span className="text-brand-neutral tracking-[0.2em] uppercase text-sm block animate-fade-in-up">
              Sua Transformação
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight animate-fade-in-up [animation-delay:200ms]">
              Cuidar do seu corpo não deveria ser uma luta.
              <span className="block italic font-light opacity-70 mt-2">Deveria ser um processo consciente.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-neutral leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              Você não precisa de mais um tratamento genérico. Precisa de alguém que entenda o seu corpo, respeite seus limites e construa resultados reais com você.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
              <a href="https://wa.me/5541996960405?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-brand-light px-8 py-6 text-base rounded-none transition-all duration-500 group relative overflow-hidden">
                  <span className="relative z-10 uppercase tracking-widest text-sm">Agendar Avaliação</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Button>
              </a>
              <a href="https://wa.me/5541996960405?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-brand-light/40 text-brand-light bg-transparent hover:bg-brand-light/10 px-8 py-6 text-base rounded-none transition-all duration-500 group relative overflow-hidden">
                  <span className="relative z-10 uppercase tracking-widest text-sm text-brand-light">Fale no WhatsApp</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-light/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Button>
              </a>
            </div>
          </div>

          <div ref={marqueeRef} className="relative h-[500px] lg:h-[600px] flex items-center justify-center animate-fade-in-up [animation-delay:400ms]">
            <div className="relative w-full h-full">
              <VerticalMarquee speed={20} className="h-full">
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif tracking-tight py-6 marquee-item text-brand-light/80"
                  >
                    {item}
                  </div>
                ))}
              </VerticalMarquee>
              
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#965353] via-[#965353]/50 to-transparent z-10"></div>
              
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#965353] via-[#965353]/50 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTAWithVerticalMarquee };
