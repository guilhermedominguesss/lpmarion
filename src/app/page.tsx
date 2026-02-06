"use client";

import React from "react";
import { Heart, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IdentificationCarousel } from "@/components/ui/identification-carousel";
import { HeroSection } from "@/components/ui/hero-section-2";
import { BenefitsHeroSection } from "@/components/ui/minimal-hero-section";
import { CTAWithVerticalMarquee } from "@/components/ui/cta-with-text-marquee";
import { Feature } from "@/components/ui/feature-section-with-bento-grid";
import { Footer7 } from "@/components/ui/footer-7";
import { ResultsOrbitSection } from "@/components/ui/results-orbit-section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LandingPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-primary selection:text-brand-light">
      <nav className="fixed top-0 w-full z-50 bg-brand-light/80 backdrop-blur-md border-b border-brand-secondary/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logos.png"
              alt="Estética Integrativa"
              className="h-10 w-auto md:h-12"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a
              href="#metodo"
              className="hover:text-brand-primary transition-colors"
            >
              Método
            </a>
            <a
              href="#sobre"
              className="hover:text-brand-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#atendimento"
              className="hover:text-brand-primary transition-colors"
            >
              Atendimento
            </a>
            <a
              href="https://wa.me/5541996960405?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-light"
              >
                Agendar Avaliação
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection
          title={
            <>
              <span className="text-primary">Estética Integrativa</span> <br />
              <span className="text-primary italic">em Curitiba</span>
            </>
          }
          subtitle="Tratando a causa e não apenas os sintomas, com foco na saúde sistêmica e no bem-estar real."
          callToAction={{
            text: "AGENDAR AVALIAÇÃO",
            href: "https://wa.me/5541996960405?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o",
          }}
          backgroundImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/da9bbe15-c8e8-45a1-b17f-7f785a90ee34/WhatsApp-Image-2026-01-02-at-17.28.56-1768484067049.jpeg?width=8000&height=8000&resize=contain"
          contactInfo={{
            website: "Atendimento via WhatsApp",
            phone: "+55 41 99696-0405",
            address: "Curitiba, PR",
          }}
        />

        <IdentificationCarousel />

        <section
          id="metodo"
          className="py-24 md:py-32 bg-[#965353] text-brand-light relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <span className="text-brand-neutral tracking-[0.2em] uppercase text-sm mb-4 block">
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                  Aqui, estética não é aparência.
                  <span className="block italic opacity-80 font-light mt-2">
                    É consequência de um corpo saudável.
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-brand-light/70 leading-relaxed">
                  <p>
                    Tratamos o corpo como um sistema integrado, onde cada sinal
                    na pele ou no contorno corporal é uma mensagem do seu
                    organismo.
                  </p>
                  <p>
                    Não buscamos atalhos agressivos ou injetáveis que apenas
                    mascaram a realidade. Buscamos a causa.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Melasma Sistêmico",
                    desc: "Tratamento com visão sistêmica e controle inflamatório.",
                  },
                  {
                    title: "Rejuvenescimento Consciente",
                    desc: "Foco em saúde celular e regeneração natural.",
                  },
                  {
                    title: "Lipedema",
                    desc: "Abordagem profunda, respeitosa e terapêutica.",
                  },
                  {
                    title: "Remodulação Intestinal",
                    desc:
                      "O equilíbrio intestinal está diretamente relacionado à forma como o corpo funciona e se expressa, inclusive na pele. Aqui, o cuidado é feito por meio de um protocolo personalizado de suporte intestinal e estilo de vida.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`reveal p-8 bg-brand-light/5 border border-brand-light/10 hover:border-brand-primary/40 transition-all duration-500 ${
                      i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""
                    }`}
                  >
                    <h3 className="text-2xl mb-2 text-brand-light">
                      {item.title}
                    </h3>
                    <p className="text-brand-neutral opacity-70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BenefitsHeroSection />

        <section id="sobre" className="py-24 md:py-32 bg-[#965353] text-brand-light">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="reveal relative">
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/da9bbe15-c8e8-45a1-b17f-7f785a90ee34/WhatsApp-Image-2026-01-02-at-17.28.24-1769782809036.jpeg?width=8000&height=8000&resize=contain"
                    alt="Dra. Especialista"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-brand-light/10 pointer-events-none" />
                </div>
              </div>

              <div className="reveal delay-100">
                <span className="text-brand-light/60 tracking-[0.2em] uppercase text-sm mb-4 block">
                  Sua Especialista
                </span>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                  Você está em mãos experientes e conscientes.
                </h2>

                <div className="space-y-8 mb-10">
                  <div className="flex gap-5 items-start">
                    <div className="p-3 bg-brand-light/10 border border-brand-light/20">
                      <Microscope className="w-6 h-6 text-brand-light" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-2 font-medium">
                        Formação Acadêmica
                      </h4>
                      <p className="text-brand-light/80 leading-relaxed">
                        Esteticista e Cosmetóloga com Pós-graduação em Saúde
                        Integrativa e formação contínua em estética avançada.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="p-3 bg-brand-light/10 border border-brand-light/20">
                      <Heart className="w-6 h-6 text-brand-light" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-2 font-medium">
                        Filosofia Clínica
                      </h4>
                      <p className="text-brand-light/80 leading-relaxed">
                        Acredito na verdade clínica acima de qualquer promessa.
                        Cada protocolo começa com escuta, avaliação e respeito.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-brand-light/5 border-l-2 border-brand-light/40 backdrop-blur-sm">
                  <p className="italic text-lg text-brand-light/90 leading-relaxed">
                    "Meu compromisso não é com a foto do 'antes e depois', mas
                    com a qualidade do seu processo de cuidado."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="atendimento" className="bg-[#f8f6f1]">
          <Feature />
        </section>

        <ResultsOrbitSection />

        <section className="py-24 md:py-32 bg-brand-light">
          <div className="container mx-auto px-6">
            <div className="reveal flex flex-col md:flex-row gap-12 items-end mb-20">
              <div className="flex-1">
                <span className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block">
                  Ciência & Tecnologia
                </span>
                <h2 className="text-4xl md:text-5xl font-serif">
                  Apoio ao seu processo, sem milagres.
                </h2>
              </div>
              <p className="flex-1 text-brand-secondary italic">
                Utilizamos tecnologia de ponta para potencializar a resposta
                biológica natural do seu corpo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Drenagem pneumática terapêutica de alta precisão",
                "Protocolos exclusivos de desinflamação tecidual",
                "Cosméticos de alta performance (Drug Delivery)",
                "Prescrição personalizada de nutracêuticos manipulados",
                "Terapia manual integrativa avançada",
                "Acompanhamento metabólico estético",
              ].map((tech, i) => (
                <div
                  key={i}
                  className={`reveal flex gap-4 p-6 bg-white border border-brand-secondary/5 hover:border-brand-primary/20 transition-all duration-300 ${
                    i === 1 || i === 4
                      ? "delay-100"
                      : i === 2 || i === 5
                        ? "delay-200"
                        : ""
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                  <p className="text-brand-dark/80">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTAWithVerticalMarquee />
      </main>

      <Footer7 />
    </div>
  );
}
