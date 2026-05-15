# Wireframes — Usability Test Dashboard 2.0
## Pantalla Crítica: PlanView (Guion y Tareas)

**Archivo real:** `src/views/PlanView.tsx` (39,269 bytes)  
**Fecha:** Mayo 15, 2026

---

## CONTEXTO ACTUAL

**Componentes existentes (YA IMPLEMENTADOS):**
- ✅ TabNavigation (con breadcrumbs integrado, línea 6-177)
- ✅ FlowProgress (indicador visual 5 pasos, línea 37-131)
- ✅ Breadcrumbs (navegación contextual, línea 5-51)
- ✅ FieldWarning (feedback visual, línea 5)
- ✅ TaskCard (tarjetas móvil/escritorio, línea 34-180)
- ✅ AutoGrowTextarea (expansible, línea 4)
- ✅ CharCounter (contador caracteres, línea 6)

**Problemas Detectados en PlanView:**

| Heurística | Problema | Línea | Severidad |
|---|---|---|---|
| #1 | Sin feedback visual de guardado en tiempo real | 73, 84, 97 | CRÍTICO |
| #4 | Modal de eliminación débil sin descripción | 40-59 | CRÍTICO |
| #9 | Mensajes de error genéricos en FieldWarning | 76 | MODERADO |
| #1 | Sin timestamp "Guardado hace X min" | - | MODERADO |

---

## WIREFRAME LO-FI (Actual vs Propuesta)

### ESTADO ACTUAL

```
┌────────────────────────────────────────────────────────┐
│ HEADER: [Logo] Dashboard                               │
├────────────────────────────────────────────────────────┤
│ 🏠 › Mis Planes › Test Usabilidad V3                 │ BREADCRUMBS ✓
│                                                        │
│ Progreso: ① Plan ② Guion ③ Obs ④ Hall ⑤ Reportes   │ STEPPER ✓
│ ▓▓▓▓▓░░░░░  60%                                       │ PROGRESS ✓
├────────────────────────────────────────────────────────┤
│ TABS: [Plan] [Guion*] [Obs] [Hall] [Reportes]         │
├────────────────────────────────────────────────────────┤
│                                                        │
│  INFORMACIÓN DEL PLAN                                  │
│  ┌──────────────────────────────────────────────────┐ │
│  │ Producto: ________________________ [×]          │ │ SOLO onBlur
│  │ Objetivo: _________________________            │ │ Validación débil
│  │ Moderador: ________________________            │ │
│  └──────────────────────────────────────────────────┘ │
│                                                        │
│  TAREAS (Script)                                       │
│  ┌──────────────────────────────────────────────────┐ │\n  │ Tarea 1                              [🗑 Trash] │ │ SIN TOOLTIP\n  │ ├─ Escenario: ________________ (FieldWarning) │ │\n  │ ├─ Resultado: _________________________       │ │\n  │ ├─ Métrica: __________  Criterio: _________  │ │\n  │ └─ [Confirmar] [✓] [✗] (si delete)           │ │ MODAL DÉBIL\n  └──────────────────────────────────────────────────┘ │\n│                                                        │\n│ [+ Agregar] [Guardar] [Siguiente →]                  │\n│                                                        │\n└────────────────────────────────────────────────────────┘\n```\n\n### PROPUESTA MEJORADA (PlanView+)\n\n```\n┌────────────────────────────────────────────────────────┐\n│ HEADER: [Logo] Dashboard                               │\n├────────────────────────────────────────────────────────┤\n│ 🏠 › Mis Planes › Test Usabilidad V3                 │ BREADCRUMBS ✓\n│                                                        │\n│ Progreso: ① Plan ②● Guion ③ Obs ④ Hall ⑤ Reportes  │ STEPPER CON TOOLTIP\n│ ▓▓▓▓▓░░░░░  60% (Estado actual: Guion — paso 2 de 5) │ PROGRESS + CONTEXTO\n├────────────────────────────────────────────────────────┤\n│ TABS: [Plan] [⚙ Guion] [Obs] [Hall] [Reportes] [💾] │ ICONO GUARDAR VISUAL\n├────────────────────────────────────────────────────────┤\n│                                                        │\n│  INFORMACIÓN DEL PLAN                                  │\n│  ┌──────────────────────────────────────────────────┐ │\n│  │ Producto: ___________________  [✓ válido] ✓    │ │ FEEDBACK INLINE\n│  │ Objetivo: ____________________  [⚠ requerido]  │ │ + ESTADO GUARDADO\n│  │ Moderador: ___________________  [✓ válido] ✓   │ │\n│  └──────────────────────────────────────────────────┘ │\n│  Guardado: Hace 30 segundos                           │ TIMESTAMP\n│                                                        │\n│  TAREAS (Script)                                       │\n│  ┌──────────────────────────────────────────────────┐ │\n│  │ Tarea 1 (●) — EN CURSO                    [🗑]  │ │ TOOLTIP: \"Eliminar\"\n│  │ ├─ Escenario: ________________ (95/200)         │ │ CONTADOR CHARS\n│  │ │  ⚠ Campo requerido                           │ │ VALIDACIÓN TIEMPO REAL\n│  │ ├─ Resultado: _________________ (45/200)        │ │\n│  │ ├─ Métrica: __________  Criterio: _________    │ │\n│  │ └─ Guardado: Hace 1 min ✓                       │ │ TIMESTAMP POR TAREA\n│  └──────────────────────────────────────────────────┘ │\n│                                                        │\n│  ┌─────────────────┐  ┌──────────────────────────┐   │\n│  │ [+ Agregar]     │  │ [💾 Guardar] [Siguiente] │   │\n│  └─────────────────┘  └──────────────────────────┘   │\n│                                                        │\n└────────────────────────────────────────────────────────┘\n```

### Mejoras Implementadas

| Feature | Actual | Propuesta | Heurística |
|---|---|---|---|
| Validación | onBlur solo | **En tiempo real** | #4, #9 |
| Feedback | Genérico | **Específico + Timestamp** | #1, #9 |
| Tooltip eliminar | NO | **SÍ (lucide: Trash2)** | #5 |
| Modal delete | Débil | **Con descripción + confirmación** | #4, #10 |
| Estado tarea | Implícito | **●✓✗ Indicadores claros** | #1 |
| Contador chars | SÍ | **SÍ (mejorado)** | #9 |

---

## WIREFRAME MID-FI (Estructura Detallada)

### TaskCard Mejorada (Componente Principal)

```jsx
// ESTRUCTURA REACT ACTUAL EN PlanView.tsx (línea 34-180)

<TaskCard
  task={task}
  handleTaskChange={handleTaskChange}
  onSaveTask={onSaveTask}  // ← GUARDAR EN TIEMPO REAL
  onDeleteTask={onDeleteTask}
/>

// ESTADO DE TAREA
const taskState = {
  status: 'in-progress',    // ● (línea 44-48 detecta)
  validating: true,         // ⚠ (línea 76 FieldWarning)
  isDirty: true,            // Cambios sin guardar
  lastSaved: '2 min ago',   // NUEVO: TIMESTAMP
};
```

### Layout Mejorado (Flujo)

```
REGIÓN 1: HEADER + NAVEGACIÓN
┌─────────────────────────────────────────────┐
│ Breadcrumbs                                 │ (Ya implementado)
│ FlowProgress (5 pasos numerados)            │ (Ya implementado)
│ TabNavigation (con Save button)             │ (Ya implementado)
└─────────────────────────────────────────────┘
                    ↓
REGIÓN 2: CONTENIDO PRINCIPAL (PlanView)
┌─────────────────────────────────────────────┐
│ Sección: Información del Plan               │
│ ┌───────────────────────────────────────┐   │
│ │ Campo 1: [input] → Validación inline  │   │
│ │ Campo 2: [input] → ⚠ / ✓ Feedback    │   │
│ │ Timestamp: "Guardado hace X min ✓"    │   │ NUEVO
│ └───────────────────────────────────────┘   │
│                                              │
│ Sección: Tareas (Repetición)                │
│ ┌───────────────────────────────────────┐   │
│ │ TaskCard                              │   │
│ │ ├─ Header: Status + Delete btn        │   │
│ │ ├─ Fields: Con validación inline      │   │
│ │ ├─ Feedback: Msgs específicos         │   │
│ │ ├─ Timestamp: \"Guardado hace X\"      │   │ NUEVO\n│ │ └─ Contador: \"45/200 caracteres\"     │   │\n│ └───────────────────────────────────────┘   │\n└─────────────────────────────────────────────┘\n                    ↓\nREGIÓN 3: ACCIONES\n┌─────────────────────────────────────────────┐\n│ [+ Agregar Tarea] [💾 Guardar] [Siguiente]  │\n└─────────────────────────────────────────────┘\n```

### Principios HCI Aplicados

**Ley de Proximidad (Gestalt):**
- Campos de un formulario agrupados → gap-4
- Información del Plan separada de Tareas → mb-8

**Ley de Similaridad:**
- Todos los TaskCard mismo estilo
- Todos los campos mismo tamaño, border, color

**Jerarquía Visual:**
- Encabezado TaskCard (navy bg) > Contenido > Timestamp
- Icono de delete rojo (attentional capture)

---

## WIREFRAME HI-FI (Mejoras en Código React)

### 1. Validación EN TIEMPO REAL (NO onBlur)

**Actual (línea 72-73):**
```tsx
onBlur={e => { 
  touch('scenario'); 
  onSaveTask(task.id!, { scenario: e.target.value }); 
}}
```

**Propuesta:**
```tsx
// Validar mientras se escribe
const [validationState, setValidationState] = useState<{
  valid: boolean;
  message?: string;
} | null>(null);

const handleChange = (field: keyof TestTask, value: string) => {
  handleTaskChange(task.id!, { [field]: clamp(value) });
  
  // Validar EN TIEMPO REAL
  if (field === 'scenario') {
    const valid = value.trim().length > 0;
    setValidationState({
      valid,
      message: valid ? 'Campo requerido' : undefined
    });
    // Auto-guardar después de 1 segundo
    setTimeout(() => onSaveTask(task.id!, { [field]: value }), 1000);
  }
};
```

### 2. Modal Robusto de Eliminación

**Actual (línea 54-59):**
```tsx
{confirmDelete ? (
  <div className="flex gap-2 items-center">
    <button onClick={() => { onDeleteTask(task.id!); setConfirmDelete(false); }}>
      ✓ Confirmar
    </button>
  </div>
) : null}
```

**Propuesta:**
```tsx
<ConfirmDeleteModal
  isOpen={confirmDelete}
  itemName={`Tarea ${task.task_index}: "${task.scenario}"`}
  message="Esta acción no se puede deshacer. Se eliminarán todos los registros de observaciones asociados."
  onConfirm={() => {
    onDeleteTask(task.id!);
    setConfirmDelete(false);
  }}
  onCancel={() => setConfirmDelete(false)}
/>
```

### 3. Tooltip en Delete Button

**Actual (línea 61):**
```tsx
<button onClick={() => setConfirmDelete(true)}>
  <Trash2 size={16} />
</button>
```

**Propuesta:**
```tsx
<Tooltip text="Eliminar esta tarea permanentemente" position="left">
  <button 
    onClick={() => setConfirmDelete(true)}
    aria-label={`Eliminar tarea ${task.task_index}`}
  >
    <Trash2 size={16} />
  </button>
</Tooltip>
```

### 4. Timestamp de Guardado

**Propuesta:**
```tsx
const [lastSaved, setLastSaved] = useState<Date | null>(null);

const handleSave = async (updates: Partial<TestTask>) => {
  await onSaveTask(task.id!, updates);
  setLastSaved(new Date());
  // Mostrar "Guardado hace X min"
  setTimeout(() => setLastSaved(null), 5000);
};

return (
  <div className="text-xs text-emerald-600 mt-2">
    ✓ Guardado hace {getTimeAgo(lastSaved)}
  </div>
);
```

---

## MAPEO A LÍNEAS DE CÓDIGO

| Mejora | Archivo | Línea | Acción |
|---|---|---|---|
| Validación inline | PlanView.tsx | 72-77 | Refactor onChange |
| Modal robusto | PlanView.tsx | 40-59 | Reemplazar componente |
| Tooltip delete | PlanView.tsx | 61 | Envolver en Tooltip |
| Timestamp | PlanView.tsx | 65 | Agregar estado + UI |
| Mensaje específico | FieldWarning.tsx | - | Mejorar mensajes |
| Contador chars | CharCounter.tsx | - | Ya existe ✓ |

---

## IMPLEMENTACIÓN (FASE 4)

**Tiempo estimado:** 45 minutos

**Componentes a crear/modificar:**
1. `src/components/ConfirmDeleteModal.tsx` (NUEVO) — 50 líneas
2. `src/views/PlanView.tsx` (MODIFICAR) — Líneas 34-180
3. `src/components/Tooltip.tsx` (YA EXISTE) — Solo usar

**Commits necesarios:**
```bash
git add src/views/PlanView.tsx src/components/ConfirmDeleteModal.tsx
git commit -m "feat: validación inline, modal robusto, tooltips en PlanView"
git push
```

---

## CONCLUSIÓN

**PlanView ya tiene:**
- ✅ Breadcrumbs integrado
- ✅ FlowProgress con 5 pasos numerados
- ✅ TabNavigation con estado
- ✅ FieldWarning para feedback
- ✅ Contador de caracteres

**Falta implementar:**
- ❌ Validación en tiempo real (no onBlur)
- ❌ Timestamp de guardado
- ❌ Modal robusto de eliminación
- ❌ Tooltip en icono eliminar
- ❌ Mensajes específicos de validación

**Impacto en Heurísticas Nielsen:**
- #1 Visibilidad → Timestamp + indicadores estado
- #4 Prevención → Modal confirmación + validación inline
- #9 Mensajes → Feedback específico + contexto
- #10 Ayuda → Tooltips + descripciones claras
