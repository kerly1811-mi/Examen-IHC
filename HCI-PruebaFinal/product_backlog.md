# Product Backlog — Usability Test Dashboard 2.0

## Objetivo del Producto
Mejorar la experiencia de usuario del Dashboard de Pruebas de Usabilidad mediante aplicación de principios HCI, arquitectura de información y diseño centrado en el usuario.

---

## ÉPICAS

### Épica 1: Evaluar y documentar problemas UX
**Descripción:** Realizar evaluación heurística completa del sistema para identificar problemas de usabilidad.

### Épica 2: Rediseñar la navegación del Dashboard
**Descripción:** Mejorar la estructura, jerarquía visual y flujo de navegación del dashboard principal.

### Épica 3: Implementar mejoras de experiencia
**Descripción:** Desarrollar funcionalidades que mejoren el feedback visual y prevención de errores.

---

## HISTORIAS DE USUARIO

### US-001 | Evaluación Heurística Completa
**Como:** UX Engineer
**Quiero:** Identificar problemas UX en todas las pantallas del sistema
**Para:** Establecer una línea base de mejora

**Criterios de aceptación:**
- Evaluar 10 pantallas críticas del sistema
- Clasificar problemas en Críticos, Moderados y Leves
- Documentar cada problema con: heurística Nielsen violada, severidad, contexto, impacto
- Mínimo 10 problemas identificados

**Estimación:** 5 pts | **Prioridad:** ALTA

---

### US-002 | Rediseño de Navegación Global
**Como:** Usuario
**Quiero:** Entender claramente dónde estoy y cómo navegar
**Para:** Completar mis tareas sin confusion

**Criterios de aceptación:**
- Agregar breadcrumbs a todas las vistas internas
- Mejorar la estructura del menú principal
- Implementar jerarquía visual clara
- Validar con wireframes Lo-Fi, Mid-Fi, Hi-Fi

**Estimación:** 8 pts | **Prioridad:** CRÍTICA

---

### US-003 | Indicador Visual de Progreso
**Como:** Usuario realizando un test
**Quiero:** Ver mi progreso en el proceso de evaluación
**Para:** Mantener contexto y motivación

**Criterios de aceptación:**
- Crear componente FlowProgress mejorado
- Mostrar completitud de cada sección
- Indicar paso actual y pasos faltantes
- Usar colores semánticos (Gestalt)

**Estimación:** 5 pts | **Prioridad:** ALTA

---

### US-004 | Validación y Feedback Dinámico
**Como:** Usuario completando formularios
**Quiero:** Recibir feedback inmediato sobre mis entradas
**Para:** Corregir errores antes de guardar

**Criterios de aceptación:**
- Validación en tiempo real de campos críticos
- Mensajes de error claros y accionables
- Indicador visual de campos obligatorios
- Prevención de submit con datos inválidos

**Estimación:** 5 pts | **Prioridad:** ALTA

---

### US-005 | Arquitectura de Información Mejorada
**Como:** Usuario nuevo
**Quiero:** Encontrar fácilmente lo que necesito
**Para:** Aprender el sistema rápidamente

**Criterios de aceptación:**
- Reorganizar secciones del Plan de Prueba
- Agrupar campos relacionados
- Mejorar etiquetado de campos
- Crear flujo lógico y predecible

**Estimación:** 8 pts | **Prioridad:** ALTA

---

### US-006 | Confirmación Explícita de Acciones Destructivas
**Como:** Usuario
**Quiero:** Confirmar antes de eliminar información importante
**Para:** Evitar perder datos por accidente

**Criterios de aceptación:**
- Modal de confirmación para eliminaciones
- Descripción clara de qué se va a eliminar
- Opciones Cancelar/Confirmar explícitas
- No permitir doble-click accidental

**Estimación:** 3 pts | **Prioridad:** MODERADA

---

## BACKLOG ORDENADO POR PRIORIDAD

| ID | Historia | Prioridad | Estimación | Estado |
|---|---|---|---|---|
| US-002 | Rediseño de Navegación Global | CRÍTICA | 8 pts | Pendiente |
| US-001 | Evaluación Heurística Completa | ALTA | 5 pts | Pendiente |
| US-005 | Arquitectura de Información Mejorada | ALTA | 8 pts | Pendiente |
| US-003 | Indicador Visual de Progreso | ALTA | 5 pts | Pendiente |
| US-004 | Validación y Feedback Dinámico | ALTA | 5 pts | Pendiente |
| US-006 | Confirmación Explícita de Acciones | MODERADA | 3 pts | Pendiente |

**Capacidad del Sprint:** 13 pts

---

## NOTAS SCRUM
- Sprint Duration: 2 semanas
- Retrospectiva enfocada en mejora UX
- Daily Standup: Reportar bloqueos de diseño
- Entregables: Código + Documentación + Evidencia
