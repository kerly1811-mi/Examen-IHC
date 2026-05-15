import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface SaveTimestampProps {
  lastSaved: Date | null;
  isSaving?: boolean;
}

export const SaveTimestamp = ({ lastSaved, isSaving = false }: SaveTimestampProps) => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    if (!lastSaved) return;

    const updateTime = () => {
      const now = new Date();
      const diffMs = now.getTime() - lastSaved.getTime();
      const diffSecs = Math.floor(diffMs / 1000);
      const diffMins = Math.floor(diffSecs / 60);

      if (diffSecs < 60) {
        setTimeAgo(`Guardado hace ${diffSecs}s`);
      } else if (diffMins < 60) {
        setTimeAgo(`Guardado hace ${diffMins}min`);
      } else {
        setTimeAgo(`Guardado hace ${Math.floor(diffMins / 60)}h`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lastSaved]);

  if (isSaving) {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <div className="animate-spin w-3 h-3 border-2 border-slate-300 border-t-slate-600 rounded-full" />
        Guardando...
      </div>
    );
  }

  if (!lastSaved) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
      <Check size={14} strokeWidth={3} />
      {timeAgo}
    </div>
  );
};