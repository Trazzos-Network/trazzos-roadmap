"use client";

import { motion } from "framer-motion";
import { TimelinePhase } from "@/components/timeline-phase";
import { GoNoGoChecklist } from "@/components/go-no-go-checklist";
import { CheckCircle2, Zap, Target, Rocket } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-20 md:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <span className="text-sm font-mono text-primary">
              Estrategia Trazzos - Clúster Industrial Cartagena
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center py-8"
          >
            <Image
              src="/logo-trazzos.svg"
              alt="Trazzos Logo"
              width={600}
              height={400}
              className="max-w-full h-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed"
          >
            Trazzos integra inteligencia artificial (IA) y blockchain para que
            la industria del Caribe funcione con eficiencia, confianza y
            transparencia. Desde la Fase 0, el proyecto busca fortalecer el
            vínculo entre eficiencia operativa y gobernanza trazable, asegurando
            que cada acción y cada dato sea verificable. Trazzos no es solo
            tecnología: es una red de colaboración donde todas las personas
            involucradas ganan y comparten valor real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">3 Fases</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">12 Meses</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">
                Eficiencia + Gobernanza Trazable
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Phase 0 - Pre-Phase */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/30 rounded-xl p-8 mb-16"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                  Fase 0: Preparación Transversal
                </h2>
                <p className="text-muted-foreground">
                  Meses 0–1 | Cimiento de Gobernanza, Datos y Automatización
                  (n8n-first)
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-primary">🎯 Objetivo</h3>
              <p className="text-sm text-muted-foreground">
                Crear las condiciones básicas para que la plataforma funcione
                bien desde el inicio: ordenar datos, estandarizar catálogos y
                dejar las reglas de juego listas; también preparar plantillas y
                workflows n8n que orquesten paradas, necesidades y proveedores.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  🔧 Actividades Clave
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Kickoff, definición de roles, política de calidad de datos
                      y dueños de datasets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Catálogo maestro de equipos/sensores; diseño Data Lake +
                      Warehouse; bitácora y feature store
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Automatización Layer 0 (n8n-first): plantillas listas
                      (calendario_paradas_cluster.csv,
                      necesidades_materiales.csv, proveedores.csv)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Workflows S1–S3 en n8n: ingesta multi-empresa,
                      calidad/deduplicación, detección de sinergias (±X días +
                      umbral volumen)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Seguridad: credenciales por empresa, webhooks con API key,
                      IP allowlist, logging Execution ID
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  📦 Entregables
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Charter, RACI y plan de trabajo; diccionario de datos
                      (campos, formatos, validaciones); catálogo completo y
                      mapeo de fuentes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Playbook de calidad (reglas, black/white lists,
                      normalización de unidades); SOPs para carga/actualización
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Repositorio con S1–S3 operativos (JSON de n8n listo para
                      importar), plantillas CSV y guía de conexión
                      ERP/CMMS/Sheets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Diccionario de KPIs v1 (definiciones y fórmulas: horas
                      decisión, ahorros estimados/reales, cobertura, on-time,
                      SLA, integridad datos)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold mb-3 text-primary">
                💚 Impacto Humano y Social
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Humano:</strong> menos
                reproceso, roles claros, capacitación básica en
                datos/automatización; reducción de estrés por tareas manuales.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Social:</strong> inclusión
                de proveedores PYME mediante plantillas simples; reglas de
                evaluación transparentes.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Ambiental:</strong> base
                para medir viajes urgentes evitados (logística), desperdicio por
                compras duplicadas y paradas imprevistas; línea base para
                objetivos de reducción CO₂ asociados a urgencias (proxy
                inicial).
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Phases */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Cronograma de Implementación
            </h2>
            <p className="text-muted-foreground text-lg">
              Tres fases estratégicas para transformar las operaciones
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline connector line - Updated to use primary color gradient */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/70 to-primary/40 hidden md:block"
              style={{ height: "calc(100% - 100px)" }}
            />

            <TimelinePhase
              phaseNumber={1}
              title="Fundaciones Inteligentes + Base de Gobernanza"
              duration="Meses 1-4"
              objectives={[
                "Construir la primera versión de la red de confianza y puente IA↔Blockchain, con paneles en tiempo real",
                "Activar alertas y RFP ligero apoyado por Layer 0",
                "Validar con usuarios: cobertura ≥70% y latencia <24 h",
              ]}
              deliverables={[
                "Acceso y permisos (roles), PdM Bridge v1, panel de salud (adopción/latencia/cobertura) y reporte resultados piloto",
                "Paquete RFP ligero: plantillas Minuta + Anexos A/B, formulario ofertas (webhook), dashboard tracking RFP (ofertas, decisión, ahorros)",
                "Workflows n8n S4–S6 (JSON), manual operación y guía respuesta incidentes (fallback e idempotencia)",
                "Matriz de ponderación aprobada por comité y bitácora de versionado",
              ]}
              tools={[
                "n8n (workflows S4–S6)",
                "Hyperledger Fabric",
                "Node.js / Go (chaincode)",
                "PostgreSQL / MongoDB",
                "FastAPI",
                "Teams / Slack / Email (alertas)",
              ]}
              successCriteria={[
                "Red blockchain mínima viable operativa",
                "SSO/MFA implementado",
                "PdM Bridge v1 funcional (alertas → tickets verificables)",
                "Paneles ejecutivos operativos",
                "Cobertura ≥70% y latencia <24 h",
              ]}
              dataRequired={[
                "Calendario de paradas (12–24 meses)",
                "Necesidades de materiales y proveedores",
                "Maestro de proveedores y SLA",
                "Ofertas RFP con ponderaciones",
                "Identidades de usuarios y roles organizacionales",
              ]}
              kpis={[
                "Horas a decisión (RFP ligero): ↓ 40%",
                "Ahorros reales por consolidación: 8–12%",
                "Conflictos de ventanas: ↓ 50%",
                "Cobertura inputs críticos: ↑ 25%",
                "On-time entrega proveedores: ↑ 15 pp",
                "% hitos certificados on-chain: ≥ 30%",
              ]}
              linkEfficiencyGovernance="Layer 0 automatiza la orquestación de datos mínimos existentes (paradas, necesidades, proveedores y RFPs) para limpiar, detectar sinergias y publicar KPIs comparables. Todo queda registrado con evidencia verificable desde el primer día."
              valueDistribution={[
                "Empresas: ahorran tiempo y dinero mediante consolidación y decisiones más rápidas",
                "Técnicos y proveedores: obtienen transparencia en el proceso RFP y trazabilidad de decisiones",
                "Trazzos: percibe ingresos por suscripción SaaS inicial y pequeñas comisiones de uso",
                "Incentivos: quienes participen en RFPs consolidados y compartan datos precisos reciben reconocimientos y acceso anticipado a reportes",
              ]}
              humanImpact={[
                "Alertas tempranas reducen horas extras e interrupciones no planificadas",
                "Evidencia clara disminuye conflictos entre áreas",
                "Transparencia en RFP (criterios visibles, bitácora pública) mejora la confianza interempresarial",
                "Menos compras urgentes y entregas express → menor huella logística",
              ]}
            />

            <TimelinePhase
              phaseNumber={2}
              title="Gobernanza Operativa + Parada Inteligente"
              duration="Meses 5-8"
              objectives={[
                "Llevar la tecnología a la operación diaria: contratos por hitos, DAO operativa y modelos IA avanzados",
                "Cerrar el ciclo sinergia→RFP→PO con bitácora y KPIs en BI",
                "Integrar con paradas programadas; contratos inteligentes (pagos/penalizaciones por SLA); DAO para decisiones",
                "IA avanzada: RUL, NLP para reportes; paneles con MTTR −15% y adopción ≥60%",
              ]}
              deliverables={[
                "Contratos automáticos por hitos (plantillas + despliegue), DAO operativa (reglamentos y quórums), modelos RUL documentados (model cards)",
                "Reporte de reducción de fallas/paradas y paneles de resultados por empresa y clúster consolidado",
                "Paquete cierre operativo: evidencia (hash), checklist recepción, tracking SLA y SOP auditoría",
                "Acciones comité: reabrir RFP y cerrar sinergia (PO emitido) con trazabilidad (log_cambios)",
                "Dashboards BI: calendario 12–24 m, sinergias activas, funnel RFP, ahorros estimados/reales por bundle y por familia input",
              ]}
              tools={[
                "Hyperledger Fabric (chaincode avanzado)",
                "Go / Node.js",
                "FastAPI",
                "lifelines / análisis de supervivencia",
                "spaCy / Hugging Face",
                "n8n (workflows operativos)",
                "BI Tools (Power BI / Tableau / Metabase)",
              ]}
              successCriteria={[
                "Parada real operada con flujo inteligente",
                "Contratos firmados y ejecutados vía Fabric",
                "Alertas gestionadas en <24h",
                "Evidencias completas y verificables on-chain",
                "MTTR ↓15%, fill rate ≥95%, stock-outs ↓50%",
              ]}
              dataRequired={[
                "Flujos de datos de sensores (IoT)",
                "Órdenes de trabajo de mantenimiento",
                "Notas y reportes de técnicos",
                "Historial de reemplazo de piezas",
                "Contratos y acuerdos de servicio",
                "Datos de paradas programadas",
                "Ofertas y decisiones RFP",
              ]}
              kpis={[
                "MTTR (Mean Time To Repair) ↓15%",
                "Fill rate (%) ≥95%",
                "% Reducción de stock-outs ↓50%",
                "Tiempo de respuesta a alertas <24h",
                "% Contratos ejecutados exitosamente",
                "Auditoría activa (evidencia, SLA, firmas)",
              ]}
              linkEfficiencyGovernance="Las mejoras de eficiencia ahora se validan con datos verificables. Cada decisión de mantenimiento, pago o validación colectiva queda registrada, garantizando una gobernanza justa, auditable y compartida."
              valueDistribution={[
                "Empresas: reducen pérdidas por paradas y obtienen métricas claras de desempeño",
                "Técnicos y proveedores: cobran más rápido gracias a los contratos automáticos",
                "Trazzos: obtiene ingresos por fees de transacción",
                "Incentivos: quienes validen datos o participen en decisiones colectivas reciben tokens de reputación que mejoran su posición en el marketplace",
              ]}
              humanImpact={[
                "Menos accidentes por mantenimiento imprevisto",
                "Claridad de responsabilidades y tiempos",
                "Capacitación en uso de dashboards",
                "Pagos por desempeño (justos, basados en evidencia) fortalecen relación con contratistas",
                "Reducción de paradas no planificadas (consumo energético y emisiones asociadas)",
              ]}
            />

            <TimelinePhase
              phaseNumber={3}
              title="Escala Multiorgánica + SaaS Gobernado"
              duration="Meses 9-12"
              objectives={[
                "Escalar Trazzos a un modelo SaaS regional con gemelos digitales que simulen operaciones y aseguren documentación verificable",
                "Crear gemelo digital (simulación, energía, optimización)",
                "Conectar múltiples empresas a la red Trazzos",
                "Implementar firmas digitales y hashes para validar documentos",
                "Desplegar plataforma SaaS y certificar en gobernanza ética y sostenibilidad",
              ]}
              deliverables={[
                "Gemelo digital operativo",
                "Plataforma SaaS multiempresa",
                "Sistema de trazabilidad documental y firmas digitales",
                "Manual de replicación y escalabilidad",
                "Reporte final de resultados (ahorro 8–12%, productividad +10%)",
              ]}
              tools={[
                "Hyperledger Fabric (multi-org)",
                "Kubernetes",
                "PostgreSQL (multi-tenant)",
                "OR-Tools / Gurobi",
                "SimPy",
                "Grafana / Prometheus",
                "CI/CD (GitHub Actions / GitLab)",
                "Herramientas de simulación energética",
              ]}
              successCriteria={[
                "Gobernanza 360°: datos, decisiones, documentos trazables",
                "Parada optimizada con simulación previa",
                "SaaS desplegado en 3-5 plantas",
                "Auditorías externas confirman integridad y cumplimiento",
                "Aprobaciones 1ra vez ↑, Trazabilidad 100%, Hallazgos auditoría ↓50%, NPS ≥50",
              ]}
              dataRequired={[
                "Datos de costos (mano de obra, piezas, tiempo de inactividad)",
                "Programas de producción",
                "Disponibilidad de recursos",
                "Datos operacionales multi-sitio",
                "Contratos y documentos legales",
                "Métricas de auditoría y cumplimiento",
              ]}
              kpis={[
                "% Reducción de costos (8-12%)",
                "% Tiempo de actividad de equipos (↑10%)",
                "NPS (Net Promoter Score) ≥50",
                "Métricas de escalabilidad del sistema",
                "% Aprobaciones en primera vez",
                "Trazabilidad (%)",
                "% Reducción de hallazgos de auditoría",
              ]}
              linkEfficiencyGovernance="El gemelo digital convierte los datos en conocimiento: cada simulación, ajuste o mejora se valida automáticamente en blockchain. La eficiencia se convierte en confianza colectiva y la gobernanza en una práctica diaria."
              valueDistribution={[
                "Empresas: obtienen una plataforma lista para escalar a nuevos mercados y cumplir estándares internacionales",
                "Técnicos y proveedores: acceden a datos comparativos y oportunidades en todo el clúster",
                "Trazzos: monetiza la licencia SaaS y los servicios premium",
                "Incentivos: quienes compartan datos de operación reales mejoran los modelos de IA y reciben acceso preferente a gemelos digitales avanzados",
              ]}
              humanImpact={[
                "Los trabajadores aprenden con simulaciones sin riesgo",
                "Las PYMES acceden a herramientas antes reservadas a grandes corporaciones",
                "La industria del Caribe se posiciona como referente ético, digital y sostenible",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Go/No-Go Checklist */}
      {/* <GoNoGoChecklist /> */}

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 mt-20 border-t border-border"
      >
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          <p>
            Estrategia de Implementación Trazzos - Clúster Industrial de
            Cartagena
          </p>
          <p className="mt-2">
            Desde la Fase 0, Trazzos une la eficiencia operativa con la
            gobernanza trazable. Una industria del Caribe más eficiente,
            confiable y humana donde cada participante gana, el valor se
            distribuye equitativamente y los incentivos mantienen viva la red y
            los gemelos digitales.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
