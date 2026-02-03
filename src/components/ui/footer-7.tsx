import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Navegação",
    links: [
      { name: "Método", href: "#metodo" },
      { name: "Sobre", href: "#sobre" },
      { name: "Atendimento", href: "#atendimento" },
    ],
  },
  {
    title: "Tratamentos",
    links: [
      { name: "Melasma Sistêmico", href: "#" },
      { name: "Envelhecimento Consciente", href: "#" },
      { name: "Lipedema", href: "#" },
    ],
  },
    {
      title: "Contato",
      links: [
        { name: "Agendar Avaliação", href: "https://wa.me/5541996960405?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o" },
        { name: "WhatsApp", href: "https://wa.me/5541996960405?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o" },
        { name: "Instagram", href: "#" },
      ],
    },
  ];
  
  const defaultSocialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/5541996960405?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o", label: "WhatsApp" },
  ];

const defaultLegalLinks = [
  { name: "Termos e Condições", href: "#" },
  { name: "Política de Privacidade", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    title: "Estética Integrativa",
  },
  sections = defaultSections,
  description = "Estética consciente e saúde feminina. Tratamentos personalizados com foco na causa, não apenas nos sintomas.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Estética Integrativa. Todos os direitos reservados.`,
    legalLinks = defaultLegalLinks,
  }: Footer7Props) => {
    return (
      <section className="py-20 lg:py-32 bg-[#965353] text-brand-light">
        <div className="container mx-auto px-6">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-sm">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url} aria-label={logo.title}>
                <img
                  src="/logos.png"
                  alt={logo.title}
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <p className="text-sm text-brand-light/60 leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-brand-light/60">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-brand-primary transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-16">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-medium text-brand-light uppercase tracking-widest text-sm">{section.title}</h3>
                <ul className="space-y-3 text-sm text-brand-light/60">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-brand-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-brand-light/10 pt-8 text-xs text-brand-light/40 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-brand-primary transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
