import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  taskIndex: string | number;
  taskScenario?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  taskIndex,
  taskScenario,
  onConfirm,
  onCancel,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  /* Enfocar "Cancelar" al abrir para accesibilidad */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => cancelRef.current?.focus(), 50);
    }
  }, [isOpen]);

  /* Cerrar con Escape */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cdm-title"
      aria-describedby="cdm-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onCancel}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-200">

        {/* Franja roja superior */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-1.5">
              <AlertTriangle size={20} className="text-white" aria-hidden="true" />
            </div>
            <h2 id="cdm-title" className="text-white font-black text-base uppercase tracking-widest m-0">
              Eliminar tarea
            </h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1 rounded-lg hover:bg-white/10"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cuerpo */}
        <div className="px-6 py-5 space-y-4">
          {/* Identificador de la tarea */}
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
            <span className="inline-flex items-center justify-center bg-red-100 text-red-700 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest shrink-0">
              {taskIndex}
            </span>
            <p className="text-sm text-slate-700 font-medium line-clamp-2 m-0">
              {taskScenario?.trim()
                ? taskScenario
                : <span className="italic text-slate-400">Sin descripción</span>}
            </p>
          </div>

          {/* Advertencia irreversible */}
          <p id="cdm-desc" className="text-sm text-slate-600 leading-relaxed m-0">
            ¿Estás seguro de que deseas eliminar esta tarea?{' '}
            <strong className="text-red-600">Esta acción es irreversible</strong> y no podrá
            deshacerse una vez confirmada.
          </p>
        </div>

        {/* Acciones */}
        <div className="px-6 pb-6 flex flex-col-reverse sm:flex-row gap-3">
          <button
            ref={cancelRef}
            type="button"
            onClick={onCancel}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
          >
            <X size={16} aria-hidden="true" />
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-red-200 hover:shadow-red-300"
          >
            <Trash2 size={16} aria-hidden="true" />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
