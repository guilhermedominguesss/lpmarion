"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Quote } from "lucide-react"

const painPoints = [
  {
    quote: "Manchas que insistem em voltar, mesmo depois de tantos tratamentos.",
    category: "Pele",
  },
  {
    quote: "Inchaço constante que ninguém consegue explicar de verdade.",
    category: "Corpo",
  },
  {
    quote: "Dor no corpo e sensação de peso nas pernas que não passa.",
    category: "Circulação",
  },
  {
    quote: "Cansaço profundo que nenhum exame parece justificar.",
    category: "Energia",
  },
  {
    quote: "Frustração com abordagens superficiais que só tratam o sintoma.",
    category: "Experiência",
  },
]

export function IdentificationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % painPoints.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length)

  useEffect(() => {
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [])

  const current = painPoints[activeIndex]

  return (
    <section className="py-24 md:py-32 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block"
          >
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-6 text-brand-dark"
          >
            Tratamentos estéticos em Curitiba que explicam, respeitam e entregam resultados.
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto" onMouseMove={handleMouseMove}>
          <motion.div
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-serif text-brand-dark/[0.03] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <div className="relative flex flex-col md:flex-row">
            <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-brand-secondary/10">
              <motion.span
                className="text-xs font-mono text-brand-secondary/50 tracking-widest uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Você sente isso?
              </motion.span>

              <div className="relative h-32 w-px bg-brand-secondary/10 mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-brand-primary origin-top"
                  animate={{
                    height: `${((activeIndex + 1) / painPoints.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            <div className="flex-1 md:pl-16 py-8 md:py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-brand-secondary/60 border border-brand-secondary/20 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    {current.category}
                  </span>
                </motion.div>
              </AnimatePresence>

              <div className="relative mb-12 min-h-[120px] md:min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-2xl md:text-4xl lg:text-5xl font-light text-brand-dark leading-[1.2] tracking-tight"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.3em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.04,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, delay: i * 0.02 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="flex items-end justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      className="w-8 h-px bg-brand-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <p className="text-sm text-brand-secondary/60 italic">
                      {activeIndex + 1} de {painPoints.length}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={goPrev}
                    className="group relative w-12 h-12 rounded-full border border-brand-secondary/20 flex items-center justify-center overflow-hidden hover:border-brand-primary/40 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-brand-secondary/60 group-hover:text-brand-primary transition-colors"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    className="group relative w-12 h-12 rounded-full border border-brand-secondary/20 flex items-center justify-center overflow-hidden hover:border-brand-primary/40 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-brand-secondary/60 group-hover:text-brand-primary transition-colors"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20"
            >
              <div className="w-full max-w-2xl mx-auto">
                <div className="relative bg-white p-10 md:p-12 border-l-4 border-brand-dark shadow-sm">
                  <Quote className="absolute top-6 left-6 text-brand-secondary/5 transform -scale-x-100" size={80} />
                  
                  <div className="relative z-10 pl-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-dark leading-snug mb-4">
                      O problema nunca foi falta de esforço seu. <br/>
                      <span className="text-brand-secondary/50 italic">Foi falta de uma abordagem que olhasse para o todo.</span>
                    </h3>
                    <div className="flex items-center gap-3 mt-6 border-t border-brand-secondary/10 pt-6">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-xs font-bold text-brand-primary">
                        MV
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-dark">Marion Vaz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
