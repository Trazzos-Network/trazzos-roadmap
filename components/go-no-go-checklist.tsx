"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle2, Circle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const checklistItems = [
  {
    phase: "Fase 1",
    criteria: [
      "MAPE ≤35% logrado para pronóstico de demanda",
      "Cobertura de equipos ≥70% en radar de salud",
      "Pipeline de datos operacional con latencia <24h",
      "Aprobación de stakeholders en funcionalidad MVP",
    ],
  },
  {
    phase: "Fase 2",
    criteria: [
      "Desabastecimientos reducidos en 50% en piloto",
      "MTTR reducido en 15% vs línea base",
      "Rendimiento de API cumple SLA (<500ms)",
      "Adopción de usuarios ≥60% en grupo piloto",
    ],
  },
  {
    phase: "Fase 3",
    criteria: [
      "Reducción de costos de mantenimiento 8-12% lograda",
      "Tiempo de actividad de equipos aumentado en 10%",
      "Puntuación NPS ≥50 de usuarios",
      "Sistema escalado exitosamente a 5+ sitios",
    ],
  },
]

export function GoNoGoChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setCheckedItems(newChecked)
  }

  const totalItems = checklistItems.reduce((acc, phase) => acc + phase.criteria.length, 0)
  const checkedCount = checkedItems.size
  const progress = (checkedCount / totalItems) * 100

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Criterios de Decisión Go/No-Go</h2>
          <p className="text-muted-foreground text-lg">
            Rastrea el progreso y valida la preparación antes de avanzar a la siguiente fase
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 md:p-8"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">Progreso General</span>
              <span className="text-sm text-muted-foreground">
                {checkedCount} / {totalItems} criterios cumplidos
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-primary"
              />
            </div>
          </div>

          {/* Checklist by Phase */}
          <div className="space-y-8">
            {checklistItems.map((phase, phaseIndex) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: phaseIndex * 0.1, duration: 0.5 }}
              >
                <h3 className="font-semibold mb-4 text-primary">{phase.phase} - Puerta de Control</h3>
                <div className="space-y-3">
                  {phase.criteria.map((criterion, criterionIndex) => {
                    const itemId = `${phaseIndex}-${criterionIndex}`
                    const isChecked = checkedItems.has(itemId)

                    return (
                      <motion.button
                        key={itemId}
                        onClick={() => toggleItem(itemId)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full flex items-start gap-3 p-4 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors text-left"
                      >
                        <motion.div
                          initial={false}
                          animate={{
                            scale: isChecked ? [1, 1.2, 1] : 1,
                            rotate: isChecked ? [0, 10, 0] : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </motion.div>
                        <span className={`text-sm ${isChecked ? "text-foreground" : "text-muted-foreground"}`}>
                          {criterion}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Export Button */}
          <div className="mt-8 pt-8 border-t border-border">
            <Button
              variant="outline"
              className="w-full md:w-auto bg-transparent text-foreground"
              onClick={() => {
                console.log("[v0] Export functionality would generate PDF report here")
                alert("La funcionalidad de exportación generaría un reporte PDF con el estado actual del checklist.")
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar Reporte de Progreso
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
