"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Wrench, Database, TrendingUp, FileText, Link2, DollarSign, Heart } from "lucide-react"

interface TimelinePhaseProps {
  phaseNumber: number
  title: string
  duration: string
  objectives: string[]
  deliverables: string[]
  tools: string[]
  successCriteria: string[]
  dataRequired: string[]
  kpis: string[]
  linkEfficiencyGovernance: string
  valueDistribution: string[]
  humanImpact: string[]
}

export function TimelinePhase({
  phaseNumber,
  title,
  duration,
  objectives,
  deliverables,
  tools,
  successCriteria,
  dataRequired,
  kpis,
  linkEfficiencyGovernance,
  valueDistribution,
  humanImpact,
}: TimelinePhaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative mb-12 md:ml-16"
    >
      {/* Timeline dot - Updated to use primary color */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="absolute -left-[4.5rem] top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block"
      />

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-card border border-primary/30 rounded-xl p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                Fase {phaseNumber}
              </span>
              <span className="text-sm text-muted-foreground font-mono">{duration}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
            <CheckCircle2 className="w-5 h-5 text-primary" />🎯 Objetivos
          </h4>
          <ul className="space-y-2">
            {objectives.map((objective, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>{objective}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Expandable Sections */}
        <Accordion type="multiple" className="space-y-2">
          <AccordionItem value="deliverables" className="border border-border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-foreground">
                <FileText className="w-4 h-4 text-primary" />
                <span className="font-semibold">📦 Entregables</span>
                <span className="text-xs text-muted-foreground">({deliverables.length})</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tools" className="border border-border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-foreground">
                <Wrench className="w-4 h-4 text-primary" />
                <span className="font-semibold">🔧 Herramientas y Tecnologías</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 pt-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data" className="border border-border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-foreground">
                <Database className="w-4 h-4 text-primary" />
                <span className="font-semibold">📊 Datos Requeridos</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2">
                {dataRequired.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="kpis" className="border border-border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-semibold">📈 Criterios de Éxito y KPIs</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div>
                  <h5 className="text-xs font-semibold text-muted-foreground mb-2">Criterios de Éxito</h5>
                  <ul className="space-y-2">
                    {successCriteria.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-muted-foreground mb-2">KPIs Clave</h5>
                  <div className="flex flex-wrap gap-2">
                    {kpis.map((kpi, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="link" className="border border-border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-foreground">
                <Link2 className="w-4 h-4 text-primary" />
                <span className="font-semibold">🔗 Vínculo Eficiencia + Gobernanza</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground pt-2">{linkEfficiencyGovernance}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="value" className="border border-border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-foreground">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="font-semibold">💰 Distribución de Valor</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2">
                {valueDistribution.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="impact" className="border border-border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-foreground">
                <Heart className="w-4 h-4 text-primary" />
                <span className="font-semibold">💚 Impacto Humano y Social</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2">
                {humanImpact.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.div>
  )
}
