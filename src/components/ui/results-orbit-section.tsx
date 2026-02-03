"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface GalleryItem {
  common: string;
  binomial?: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by?: string;
  };
}

interface CircularGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
  itemClassName?: string;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 560,
      autoRotateSpeed = 0.02,
      itemClassName,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
      const autoRotate = () => {
        setRotation((prev) => prev + autoRotateSpeed);
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center",
          className
        )}
        style={{ perspective: "2000px" }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle
            );
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180);

            return (
              <div
                key={`${item.common}-${i}`}
                role="group"
                aria-label={item.common}
                className={cn("absolute", itemClassName)}
                style={{
                  transform: `translate(-50%, -50%) rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  opacity,
                  transition: "opacity 0.3s linear",
                }}
              >
                <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden group border border-border bg-card/70 dark:bg-card/30 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || "center" }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h2 className="text-xl font-bold">{item.common}</h2>
                    {item.binomial ? (
                      <em className="text-sm italic opacity-80">
                        {item.binomial}
                      </em>
                    ) : null}
                    {item.photo.by ? (
                      <p className="text-xs mt-2 opacity-70">{item.photo.by}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export function ResultsOrbitSection() {
  const isMobile = useIsMobile();
  const image1 = "/resultado-1.jpeg";
  const image2 = "/resultado-2.jpeg";
  const image3 = "/resultado-3.jpeg";
  const image4 = "/resultado-4.jpeg";
  const image5 = "/resultado-5.jpeg";
  const image6 = "/resultado-6.jpeg";

  const items: GalleryItem[] = [
    {
      common: "Harmonia Natural",
      binomial: "",
      photo: { url: image1, text: "Harmonia Natural" },
    },
    {
      common: "Proporção & Equilíbrio",
      binomial: "",
      photo: { url: image2, text: "Proporção & Equilíbrio", pos: "center" },
    },
    {
      common: "Textura de Pele Real",
      binomial: "",
      photo: { url: image3, text: "Textura de Pele Real", pos: "center" },
    },
    {
      common: "Leveza no Contorno",
      binomial: "",
      photo: { url: image4, text: "Leveza no Contorno", pos: "center" },
    },
    {
      common: "Sutil, Não Artificial",
      binomial: "",
      photo: { url: image5, text: "Sutil, Não Artificial", pos: "center" },
    },
    {
      common: "Resultado Que Se Sente",
      binomial: "",
      photo: { url: image6, text: "Resultado Que Se Sente", pos: "center" },
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block">
            Resultados
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
            Resultados reais em estética integrativa em Curitiba
          </h2>
          <p className="mt-6 text-lg text-brand-secondary leading-relaxed">
            Transformações que respeitam o seu corpo, seu tempo e a sua
            identidade. Antes e depois de protocolos personalizados, pensados de
            dentro para fora.
          </p>
        </div>
      </div>

      <div className="mt-16 h-[440px] md:h-[640px]">
        <CircularGallery
          items={items}
          radius={isMobile ? 380 : 520}
          autoRotateSpeed={0.6}
          itemClassName={isMobile ? "w-[220px] h-[300px]" : "w-[300px] h-[400px]"}
        />
      </div>
    </section>
  );
}

export { CircularGallery };
