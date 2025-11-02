# AGENTS.md - Guía para Agentes de IA

Este documento proporciona información esencial para agentes de IA que trabajan en el código de Trazzos Roadmap.

## 📋 Descripción del Proyecto

**Trazzos Roadmap** es una aplicación Next.js que presenta la estrategia de implementación de Trazzos, una plataforma que combina Inteligencia Artificial (IA) y blockchain para optimizar el mantenimiento predictivo industrial en el Clúster Industrial de Cartagena.

### Propósito

- Visualizar la hoja de ruta de implementación de 3 fases (12 meses)
- Presentar objetivos, entregables, herramientas y métricas de éxito
- Documentar la estrategia de gobernanza trazable y eficiencia operativa
- Proporcionar una experiencia visual interactiva con animaciones

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

- **Framework**: Next.js 15.5.4 (App Router)
- **Runtime**: React 19.1.0
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4.1.9 (CSS Variables)
- **UI Components**: Shadcn UI (estilo "new-york")
- **Animaciones**: Framer Motion 12.23.22
- **Iconos**: Lucide React
- **Fuentes**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics

### Estructura de Directorios

```
trazzos-roadmap/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout raíz con metadata y fonts
│   ├── page.tsx           # Página principal (roadmap)
│   └── globals.css        # Estilos globales y variables CSS
├── components/            # Componentes React
│   ├── ui/               # Componentes Shadcn UI base
│   ├── timeline-phase.tsx # Componente para fases del timeline
│   └── go-no-go-checklist.tsx # Checklist de criterios Go/No-Go
├── lib/                   # Utilidades
│   └── utils.ts          # Funciones helper (cn, etc.)
└── public/               # Assets estáticos
    └── logo-trazzos.svg  # Logo de la marca
```

## 🎨 Guías de Diseño y UX

### Idioma y Localización

- **Idioma principal**: Español (ES)
  - Todos los textos de UI deben estar en español
  - Los comentarios en código pueden estar en inglés
  - Variables y funciones en inglés (convención de código)

### Tema y Estilos

- **Modo**: Dark mode por defecto
- **Paleta de colores**: Basada en CSS Variables (neutral base)
  - Variables definidas en `app/globals.css`
  - Usar tokens semánticos: `primary`, `secondary`, `muted-foreground`, etc.
- **Tipografía**:
  - Sans: Geist Sans (UI)
  - Mono: Geist Mono (código, badges)

### Patrones de Animación

- **Framer Motion** para todas las animaciones
- Patrones comunes:
  - `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
  - `whileInView` para animaciones al hacer scroll
  - `viewport={{ once: true }}` para animar solo una vez
  - Transiciones con `duration: 0.6` estándar

### Componentes UI

- **Sistema**: Shadcn UI (Radix UI + Tailwind)
- **Estilo**: "new-york"
- **Iconos**: Lucide React (todos los iconos)
- **Accordions**: Para secciones colapsables (entregables, herramientas, etc.)
- **Botones**: Usar componente `Button` de `@/components/ui/button`

## 📝 Convenciones de Código

### TypeScript

- **Strict mode**: Habilitado
- **Tipos**: Siempre definir interfaces para props de componentes
- **Exportaciones**: Named exports para componentes
- **Naming**: PascalCase para componentes, camelCase para funciones/variables

### React

- **Componentes**: Functional components con TypeScript
- **Hooks**: Usar hooks nativos de React (useState, useEffect, etc.)
- **Client Components**: Marcar con `"use client"` cuando sea necesario (animaciones, interactividad)
- **Server Components**: Preferir por defecto (mejor rendimiento)

### Estilos

- **Tailwind CSS**: Utilizar clases de utilidad
- **CSS Variables**: Para colores y valores temáticos
- **Responsive**: Mobile-first approach
  - `md:` para tablets y desktop
  - `lg:` para pantallas grandes
- **Spacing**: Seguir escala de Tailwind (4, 8, 12, 16, etc.)

### Estructura de Componentes

```typescript
"use client"; // Solo si es necesario

import { motion } from "framer-motion";
import { ComponentProps } from "@/types";

interface ComponentNameProps {
  // Props tipadas
}

export function ComponentName({ props }: ComponentNameProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto"
    >
      {/* Contenido */}
    </motion.div>
  );
}
```

## 🎯 Reglas de Desarrollo

### Al Agregar Nuevas Características

1. **Mantener consistencia visual** con el diseño existente
2. **Usar animaciones** para transiciones suaves (Framer Motion)
3. **Responsive** desde el inicio (mobile-first)
4. **Tipado estricto** en TypeScript
5. **Textos en español** para toda la UI
6. **Componentes reutilizables** cuando sea posible

### Al Modificar Componentes Existentes

1. **Preservar estructura** de animaciones
2. **Mantener tokens de color** (CSS variables)
3. **No romper responsive** diseño
4. **Actualizar tipos** si cambian props
5. **Documentar cambios** significativos

### Al Trabajar con Datos

- **Fases del timeline**: Definidas como props en `TimelinePhase`
- **Checklist**: Definido como constante en `GoNoGoChecklist`
- **Información estática**: Actualmente hardcodeada en componentes

### Mejores Prácticas

- ✅ Usar `motion` components para animaciones
- ✅ Usar `viewport={{ once: true }}` para animaciones de scroll
- ✅ Usar `flex-shrink-0` en iconos para evitar compresión
- ✅ Usar `text-balance` para mejor legibilidad de texto
- ✅ Usar `container mx-auto px-4` para layout consistente
- ❌ Evitar inline styles cuando se puede usar Tailwind
- ❌ Evitar animaciones innecesarias que afecten rendimiento
- ❌ No usar colores hardcodeados (usar CSS variables)

## 🔧 Configuración del Entorno

### Path Aliases

- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/components/ui` → `./components/ui`
- `@/hooks` → `./hooks` (si existe)

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

### Dependencias Clave

- `next` - Framework React
- `react` / `react-dom` - Biblioteca React
- `framer-motion` - Animaciones
- `lucide-react` - Iconos
- `tailwindcss` - Estilos
- `@radix-ui/*` - Componentes accesibles base
- `class-variance-authority` - Variantes de componentes
- `clsx` / `tailwind-merge` - Utilidades CSS

## 📊 Contenido del Roadmap

### Fases de Implementación

1. **Fase 0**: Preparación Transversal (Meses 0-1)

   - Gobernanza y datos base
   - Catálogo de equipos
   - Arquitectura de datos

2. **Fase 1**: Fundaciones Inteligentes + Base de Gobernanza (Meses 1-4)

   - Red blockchain mínima viable
   - PdM Bridge v1
   - Modelos predictivos MVP

3. **Fase 2**: Gobernanza Operativa + Parada Inteligente (Meses 5-8)

   - Contratos inteligentes
   - DAO operativa
   - Modelos RUL y NLP

4. **Fase 3**: Escala Multiorgánica + SaaS Gobernado (Meses 9-12)
   - Gemelo digital
   - Plataforma SaaS multiempresa
   - Documentación legal verificable

### Secciones Clave por Fase

- 🎯 Objetivos
- 📦 Entregables
- 🔧 Herramientas y Tecnologías
- 📊 Datos Requeridos
- 📈 Criterios de Éxito y KPIs
- 🔗 Vínculo Eficiencia + Gobernanza
- 💰 Distribución de Valor
- 💚 Impacto Humano y Social

## ⚠️ Consideraciones Importantes

### Rendimiento

- Usar Server Components cuando sea posible
- Lazy loading para imágenes grandes
- Optimizar animaciones para 60fps
- Evitar re-renders innecesarios

### Accesibilidad

- Componentes Radix UI ya incluyen a11y
- Asegurar contraste adecuado en textos
- Navegación por teclado funcional
- Etiquetas semánticas HTML

### SEO

- Metadata en `layout.tsx`
- Títulos descriptivos
- Estructura semántica HTML
- Alt text en imágenes

### Mantenibilidad

- Componentes pequeños y enfocados
- Separación de lógica y presentación
- Tipos bien definidos
- Comentarios para lógica compleja

## 🚀 Flujo de Trabajo Recomendado

1. **Leer contexto**: Revisar archivos relacionados antes de modificar
2. **Planificar cambios**: Considerar impacto en diseño y funcionalidad
3. **Implementar**: Seguir convenciones establecidas
4. **Validar**: Verificar responsive, animaciones, y tipos
5. **Documentar**: Actualizar este archivo si hay cambios arquitectónicos

## 📚 Referencias Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)

---

**Última actualización**: Basado en la estructura actual del proyecto  
**Mantenedor**: Equipo de desarrollo Trazzos
