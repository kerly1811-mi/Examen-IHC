# Sprint Planning — Sprint 1

**Duración del Sprint:** 2 semanas (May 15 - May 29, 2026)
**Facilitador:** Kerly Chicaiza
**Velocidad del equipo:** 13 puntos

---

## META DEL SPRINT

Evaluar la experiencia actual del Dashboard, identificar problemas UX críticos y comenzar la implementación de mejoras en navegación y arquitectura de información.

---

## HISTORIAS SELECCIONADAS

### Sprint 1 — Evaluación y Rediseño

| Historia | Puntos | Tareas | Responsable |
|---|---|---|---|
| **US-001: Evaluación Heurística** | 5 | Análisis de 10 pantallas, documentación | Kerly |
| **US-002: Rediseño de Navegación** | 8 | Wireframes Lo-Fi/Mid-Fi/Hi-Fi, implementación Breadcrumbs | Kerly |

**Total Sprint:** 13 pts

---

## DESGLOSE DE TAREAS

### US-001: Evaluación Heurística Completa

#### Tarea 1.1: Auditoría de Pantalla Login
- **Descripción:** Evaluar pantalla de Login contra 10 heurísticas Nielsen
- **Puntos:** 1
- **Aceptación:** Documento con problemas identificados
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 1.2: Auditoría de Dashboard Global
- **Descripción:** Evaluar GlobalDashboard contra heurísticas
- **Puntos:** 1
- **Aceptación:** Tabla con severidades (Crítico/Moderado/Leve)
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 1.3: Auditoría de Formularios (PlanView, ScriptView)
- **Descripción:** Evaluar UX de entrada de datos
- **Puntos:** 1
- **Aceptación:** Documento con problemas de validación, claridad, flujo
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 1.4: Auditoría de Navegación y Flujo
- **Descripción:** Evaluar consistencia de navegación entre vistas
- **Puntos:** 1
- **Aceptación:** Mapa de flujos identificando puntos de fricción
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 1.5: Documento Final de Evaluación Heurística
- **Descripción:** Consolidar todos los hallazgos en documento único
- **Puntos:** 1
- **Aceptación:** Mínimo 10 problemas clasificados con ejemplos
- **Responsable:** Kerly
- **Estado:** Pendiente

---

### US-002: Rediseño de Navegación Global

#### Tarea 2.1: Wireframe Lo-Fi — Navegación
- **Descripción:** Sketches en papel/digital del nuevo flujo de navegación
- **Puntos:** 2
- **Aceptación:** 5+ bocetos mostrando: breadcrumbs, menú mejorado, jerarquía
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 2.2: Wireframe Mid-Fi — Estructura Visual
- **Descripción:** Wireframes detallados en Figma/papel con layout final
- **Puntos:** 2
- **Aceptación:** 3+ wireframes (Dashboard, PlanDetail, ObservationsView) con componentes
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 2.3: Wireframe Hi-Fi — Diseño Funcional
- **Descripción:** Implementación React de nueva navegación
- **Puntos:** 2
- **Aceptación:** Componente Breadcrumbs implementado, funcional, accesible
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 2.4: Implementar Breadcrumbs en Todas las Vistas
- **Descripción:** Integrar componente Breadcrumbs en rutas internas
- **Puntos:** 1.5
- **Aceptación:** Breadcrumbs visibles en /plan/:id, /plan/:id/:tab
- **Responsable:** Kerly
- **Estado:** Pendiente

#### Tarea 2.5: Mejorar TabNavigation (Pestañas)
- **Descripción:** Rediseñar barra de navegación entre tabs
- **Puntos:** 0.5
- **Aceptación:** Tabs con mejor jerarquía visual y estados
- **Responsable:** Kerly
- **Estado:** Pendiente

---

## CRITERIOS DE DONE (DEFINICIÓN DE COMPLETADO)

Una tarea se considera HECHA cuando:

✅ Código escrito y testeado
✅ Commits realizados en GitHub con mensaje descriptivo
✅ Documentación actualizada
✅ Cumple criterios de aceptación
✅ Accesibilidad verificada (WCAG 2.1 AA)
✅ No hay regresiones visuales

---

## CAPACIDAD Y VELOCIDAD

**Velocidad del Equipo:** 13 puntos por sprint
**Equipo:** 1 UX Engineer (Kerly Chicaiza)
**Horas disponibles:** ~40 hrs/semana
**Horas estimadas:** ~20 hrs

---

## RIESGOS Y MITIGA CIÓN

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Cambios en diseño sin consenso | Media | Alta | Validar wireframes antes de codear |
| Retrasos en documentación HCI | Baja | Media | Documentar en paralelo a desarrollo |
| Problemas de accesibilidad descubiertos tarde | Media | Alta | Validar WCAG 2.1 en cada paso |

---

## MÉTRICAS DE ÉXITO DEL SPRINT

- ✅ Mínimo 10 problemas UX documentados
- ✅ Wireframes Lo-Fi, Mid-Fi, Hi-Fi completados
- ✅ Breadcrumbs implementado y funcional
- ✅ 5+ commits en GitHub con evidencia clara
- ✅ Documentación HCI completa

---

## PRÓXIMOS PASOS (Sprint 2)

- US-003: Indicador Visual de Progreso
- US-004: Validación y Feedback Dinámico
- US-005: Arquitectura de Información Mejorada
