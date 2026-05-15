# Evaluación Heurística — Usability Test Dashboard 2.0

**Metodología:** 10 Heurísticas de Usabilidad de Jakob Nielsen
**Fecha:** Mayo 15, 2026
**Evaluador:** Kerly Chicaiza
**Contexto:** Evaluación de 10 pantallas críticas del sistema

---

## PANTALLAS EVALUADAS

1. **LoginView** — Autenticación
2. **RegisterView** — Registro de usuario
3. **GlobalDashboard** — Vista principal de proyectos
4. **PlanView** — Definición del plan de prueba
5. **ScriptView** — Redacción del guión
6. **ObservationsView** — Registro de observaciones
7. **FindingsView** — Registro de hallazgos
8. **ReportsView** — Visualización de reportes
9. **TabNavigation** — Barra de navegación entre pestañas
10. **Header** — Encabezado global

---

## HEURÍSTICAS EVALUADAS

1. **Visibilidad del Estado del Sistema**
2. **Correspondencia entre Sistema y Mundo Real**
3. **Control y Libertad del Usuario**
4. **Prevención y Recuperación de Errores**
5. **Prevención de Errores**
6. **Reconocimiento vs. Recuerdo**
7. **Flexibilidad y Eficiencia de Uso**
8. **Diseño Estético y Minimalista**
9. **Ayuda y Documentación**
10. **Recuperación de Errores**

---

## HALLAZGOS POR SEVERIDAD

### 🔴 PROBLEMAS CRÍTICOS (Bloquean la tarea)

#### **P-C-001 | Falta de Breadcrumbs en Vistas Internas**
- **Pantalla:** PlanView, ScriptView, ObservationsView, FindingsView
- **Heurística Violada:** #1 Visibilidad del Estado del Sistema
- **Severidad:** CRÍTICA
- **Descripción:** 
  El usuario navega entre pestañas (Plan → Guión → Observaciones → Hallazgos) pero NO HAY indicador visual de:
  - Dónde está en el sistema
  - Cómo volver atrás
  - La ruta de navegación (breadcrumb)
  
  Después de navegar a `/plan/uuid/observations`, el usuario no sabe si puede volver a PlanView o si perderá datos.

- **Impacto:** Usuario desorientado, riesgo de abandonar tareas, confusión sobre flujo
- **Contexto:** En PlanView línea 32: "return <main id="plan-panel"..." pero SIN breadcrumbs
- **Recomendación:** 
  - Agregar componente `<Breadcrumbs />` en PlanDetailContainer
  - Mostrar: Proyectos > [Producto] > [Paso Actual]
  - Hacer clickeable para navegar
- **Prototipo:**
  ```
  Proyectos › Mi App › Observaciones
  ```

---

#### **P-C-002 | Validación de Campos Obligatorios Inconsistente**
- **Pantalla:** PlanView (todas las secciones)
- **Heurística Violada:** #4 Prevención de Errores
- **Severidad:** CRÍTICA
- **Descripción:**
  En PlanView, hay campos marcados con asterisco rojo (*) como obligatorios, pero:
  - NO hay retroalimentación visual clara durante la entrada (solo after blur)
  - El usuario puede hacer click en "Guardar" con campos vacíos sin error
  - Los mensajes de error aparecen DEBAJO del campo (no siempre visible en móvil)
  - No hay indicador que diga "5 campos obligatorios faltantes"

- **Impacto:** Usuario envía formularios incompletos, debe rellenar nuevamente
- **Contexto:** PlanView línea 120, FieldWarning aparece solo si `touched` = true
- **Recomendación:**
  - Mostrar asterisco + color rojo en label
  - Validación en tiempo real (onChange, no solo onBlur)
  - Mensaje de error inline + tooltip
  - Deshabilitar botón "Guardar" si hay campos críticos vacíos
  - Resumen: "3 de 7 campos obligatorios completados"

- **Prototipo:**
  ```
  ANTES:
  [Nombre del Producto _______________]
  
  DESPUÉS:
  [Nombre del Producto * ____________] 🔴 Campo obligatorio
  (campo rojo) (símbolo: *)
  ```

---

#### **P-C-003 | No Hay Confirmación Explícita al Eliminar Datos**
- **Pantalla:** PlanView, ObservationsView, FindingsView
- **Heurística Violada:** #4 Prevención de Errores, #10 Recuperación de Errores
- **Severidad:** CRÍTICA
- **Descripción:**
  Al hacer click en el ícono de basurero para eliminar una tarea:
  - SÓLO aparece: "(✓) (✗)" dos botones pequeños
  - NO hay descripción de QUÉ se va a eliminar
  - NO hay confirmación modal
  - Usuario puede eliminar accidentalmente una tarea con 1 click
  
  Ejemplo: En PlanView línea 1178, TaskCard muestra:
  ```
  [trash icon] → [✓] [✗]  // ¿Eliminar QUÉ exactamente?
  ```

- **Impacto:** Pérdida de datos accidental, frustración usuario
- **Contexto:** TaskCard.tsx línea 180
- **Recomendación:**
  - Modal de confirmación ANTES de mostrar (✓)(✗)
  - Texto claro: "¿Eliminar tarea 'Imagina que quieres comprar'?"
  - Datos que se perderán: "Esto eliminará también 5 observaciones asociadas"
  - Botones: [Cancelar] [Sí, eliminar] (rojo)

- **Prototipo:**
  ```
  [Modal]
  ⚠️ ¿Eliminar esta tarea?
  "Imagina que quieres comprar"
  
  Esto eliminará también:
  • 5 observaciones registradas
  • 2 hallazgos asociados
  
  [Cancelar] [Sí, eliminar]
  ```

---

### 🟠 PROBLEMAS MODERADOS (Dificultan la tarea)

#### **P-M-001 | TabNavigation Poco Intuitiva**
- **Pantalla:** TabNavigation (componente global en PlanDetail)
- **Heurística Violada:** #2 Correspondencia con Mundo Real
- **Severidad:** MODERADA
- **Descripción:**
  La barra de pestañas muestra:
  ```
  [Plan de Prueba] [Guion y Tareas] [Registro Observación] [Hallazgos] [Reportes]
  ```
  
  Problemas:
  - Los textos son muy largos, se cortan en móvil
  - No hay indicador visual claro de "pestaña activa" (solo bg-color)
  - No hay descripción de qué hace cada pestaña
  - El usuario no entiende el orden lógico del flujo

- **Impacto:** Usuario no entiende dónde está, navega al azar
- **Contexto:** TabNavigation.tsx línea 45-90
- **Recomendación:**
  - Abreviar textos: "Plan" → "📋 Plan"
  - Agregar ícono + número de paso: "1️⃣ Plan", "2️⃣ Guión", etc.
  - Pestaña activa: color + indicador inferior (underline)
  - Tooltip al hover: "Paso 1 de 5: Define el contexto del test"
  - Deshabilitar pestañas siguientes si los pasos previos no están completos

- **Prototipo:**
  ```
  ANTES:
  [Plan de Prueba] [Guion y Tareas] [Registro Observación]...
  
  DESPUÉS:
  📋 Plan    🎬 Guión    👁️ Obs.    🔍 Hallazgos    📊 Reportes
  ─────────────────
  ```

---

#### **P-M-002 | Falta Feedback Visual de Cambios Guardados**
- **Pantalla:** PlanView, ScriptView, ObservationsView
- **Heurística Violada:** #1 Visibilidad del Estado del Sistema
- **Severidad:** MODERADA
- **Descripción:**
  El usuario escribe en un campo, y cuando hace blur (sale del campo):
  - El campo DESAPARECE visualmente (se ve igual)
  - NO hay confirmación tipo: "✓ Campo guardado"
  - NO hay indicador global: "Cambios guardados"
  - Usuario piensa: "¿Guardó o no?"

- **Impacto:** Incertidumbre del usuario, intenta guardar múltiples veces, frustración
- **Contexto:** PlanView usa onBlur pero no hay feedback visual
- **Recomendación:**
  - Agregar ícono ✓ verde al lado del campo (3 segundos)
  - O barra de estado: "✓ Cambios guardados" (fade out en 2 seg)
  - Animación de transición suave
  - En Header: indicador de "Guardado" vs. "Hay cambios sin guardar"

- **Prototipo:**
  ```
  [Nombre del Producto: Mi App ────────] ✓ (verde, 3s)
  
  O global:
  [Header] ✓ Cambios guardados (emerald-400)
  ```

---

#### **P-M-003 | Falta Indicador Visual de Progreso del Plan**
- **Pantalla:** PlanDetailContainer, FlowProgress
- **Heurística Violada:** #1 Visibilidad del Estado del Sistema
- **Severidad:** MODERADA
- **Descripción:**
  Existe el componente `FlowProgress` (línea 140 en App.tsx) pero:
  - NO es visible en las secciones del formulario
  - El usuario no sabe "cuánto falta completar"
  - En móvil, el componente es muy pequeño
  - No hay indicador de "6 de 10 campos obligatorios completados"

- **Impacto:** Usuario no sabe si está cerca de terminar
- **Contexto:** FlowProgress.tsx línea 1-100 (existe pero no se usa adecuadamente)
- **Recomendación:**
  - Mantener FlowProgress visible en toda la vista
  - Sticky en el top en móvil
  - Mostrar: "Plan 60% completo • 6 de 10 campos"
  - Color rojo si hay campos críticos vacíos

---

#### **P-M-004 | Mensajes de Error Poco Claros**
- **Pantalla:** Todas las vistas con validación
- **Heurística Violada:** #9 Ayuda y Documentación
- **Severidad:** MODERADA
- **Descripción:**
  Mensajes como:
  - "El objetivo es obligatorio." ← ¿Qué es objetivo? ¿Para qué sirve?
  - "Seleccione una fecha válida." ← ¿Cuál es el formato esperado?
  - "Campo requerido." ← ¿Qué campo? ¿Por qué es requerido?

- **Impacto:** Usuario confundido, no sabe cómo corregir
- **Contexto:** FieldWarning.tsx línea 20-45
- **Recomendación:**
  - Mensajes con contexto: "Objetivo: describe qué quieres lograr con esta prueba"
  - Ejemplo: "Ej: Validar si los usuarios pueden completar un pago en menos de 2 minutos"
  - Link a ayuda: "¿Necesitas ayuda? Ver guía"

---

#### **P-M-005 | Inconsistencia de Colores y Estilos**
- **Pantalla:** Todas las vistas
- **Heurística Violada:** #8 Diseño Estético y Minimalista
- **Severidad:** MODERADA
- **Descripción:**
  El sistema usa múltiples variaciones de colores:
  - Errores: rojo (#dc2626), rojo oscuro (#7f1d1d), naranja (#ea580c)
  - Success: verde (#14532d), emerald (#16a34a)
  - Warnings: amarillo (#d97706), ámbar (#92400e)
  
  No hay sistema de colores consistente. El usuario no aprende a asociar colores con estados.

- **Impacto:** Interfaz confusa, falta de coherencia visual
- **Contexto:** index.css define variables, pero no se usan consistentemente
- **Recomendación:**
  - Paleta única: 3 colores para error, success, warning
  - Aplicar consistentemente en TODOS los componentes
  - Documentar en Design System

---

### 🟡 PROBLEMAS LEVES (Incomodan pero no bloquean)

#### **P-L-001 | Texto Pequeño en Móvil**
- **Pantalla:** TabNavigation, Labels de campos
- **Heurística Violada:** #8 Diseño Estético y Minimalista
- **Severidad:** LEVE
- **Descripción:** El texto en pestañas se ve muy pequeño en móvil
- **Recomendación:** Font-size mínimo 12px para labels

---

#### **P-L-002 | Falta Ayuda Contextual (Tooltips)**
- **Pantalla:** PlanView (algunos campos tienen tooltips, otros no)
- **Heurística Violada:** #9 Ayuda y Documentación
- **Severidad:** LEVE
- **Descripción:** Campos como "Método" y "Duración" no tienen tooltip explicativo
- **Recomendación:** Agregar tooltip a todos los campos complejos

---

#### **P-L-003 | Ausencia de Atajos de Teclado**
- **Pantalla:** Formularios
- **Heurística Violada:** #7 Flexibilidad y Eficiencia
- **Severidad:** LEVE
- **Descripción:** Usuario avanzado no puede usar Tab para navegar campos
- **Recomendación:** Implementar navegación por Tab (ya existe pero mejorar UX)

---

## TABLA RESUMEN DE HALLAZGOS

| ID | Problema | Pantalla | Heurística | Severidad | Impacto |
|---|---|---|---|---|---|
| P-C-001 | Falta Breadcrumbs | Vistas internas | #1 | CRÍTICA | Desorientación |
| P-C-002 | Validación inconsistente | PlanView | #4 | CRÍTICA | Errores de entrada |
| P-C-003 | Eliminación sin confirmación | Todas | #4, #10 | CRÍTICA | Pérdida de datos |
| P-M-001 | TabNavigation poco clara | TabNav | #2 | MODERADA | Confusión flujo |
| P-M-002 | Sin feedback de guardado | Formularios | #1 | MODERADA | Incertidumbre |
| P-M-003 | Sin indicador de progreso | PlanDetail | #1 | MODERADA | Desconocimiento avance |
| P-M-004 | Errores poco claros | Todas | #9 | MODERADA | Confusión usuario |
| P-M-005 | Inconsistencia de colores | Todas | #8 | MODERADA | Interfaz confusa |
| P-L-001 | Texto pequeño en móvil | Mobile | #8 | LEVE | Legibilidad |
| P-L-002 | Falta tooltips | PlanView | #9 | LEVE | Documentación |
| P-L-003 | Sin atajos teclado | Formularios | #7 | LEVE | Ineficiencia |

---

## ESTADÍSTICAS

- **Total de Problemas Identificados:** 11
- **Críticos:** 3 (27%)
- **Moderados:** 5 (45%)
- **Leves:** 3 (28%)

---

## RECOMENDACIONES GENERALES

1. **Implementar Breadcrumbs** como prioridad máxima
2. **Mejorar Validación** con feedback visual inmediato
3. **Crear Design System** con colores, tipografía, componentes consistentes
4. **Agregar Ayuda Contextual** (tooltips, guías inline)
5. **Validar en Dispositivos Reales** (no solo responsive design)

---

## PRÓXIMOS PASOS

- Sprint 1: Implementar P-C-001 (Breadcrumbs), P-C-002 (Validación)
- Sprint 2: P-C-003 (Confirmación), P-M-001 (TabNav mejorado)
- Sprint 3: P-M-002, P-M-003, P-M-005 (Feedback, Progreso, Colores)
