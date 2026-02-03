import { ClipboardList, Brain, FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const journeySteps = [
  {
    step: "01",
    title: "Avaliação",
    desc: "Anamnese completa e escuta ativa da sua história.",
    icon: ClipboardList,
    span: "lg:col-span-2",
  },
  {
    step: "02",
    title: "Entendimento",
    desc: "Mapeamento profundo das causas e necessidades do seu corpo.",
    icon: Brain,
    span: "",
  },
  {
    step: "03",
    title: "Protocolo",
    desc: "Criação de uma estratégia exclusiva e personalizada.",
    icon: FileText,
    span: "",
  },
  {
    step: "04",
    title: "Acompanhamento",
    desc: "Cuidado consciente e ajustes contínuos responsáveis.",
    icon: HeartHandshake,
    span: "lg:col-span-2",
  },
];

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center text-center max-w-3xl mx-auto">
            <div>
              <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/20">
                Atendimento
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter font-serif text-brand-dark">
                A Jornada do Cuidado
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-brand-secondary italic">
                Um processo estruturado para sua segurança e resultados reais.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeySteps.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-md h-full ${item.span} p-8 aspect-square lg:aspect-auto flex justify-between flex-col border border-brand-secondary/10 hover:border-brand-primary/30 transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="w-8 h-8 stroke-1 text-brand-primary" />
                    <span className="text-5xl font-serif text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight text-brand-dark font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-secondary max-w-xs text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center p-8 border border-brand-primary/20 max-w-2xl mx-auto bg-white rounded-md">
            <ShieldCheck className="w-8 h-8 text-brand-primary mx-auto mb-4" />
            <p className="text-sm uppercase tracking-widest text-brand-secondary">Nota Ética</p>
            <p className="mt-2 text-brand-dark/70">
              Alguns casos exigem avaliação prévia rigorosa. Aqui, sua segurança vem antes de qualquer procedimento estético.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
