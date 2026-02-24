"use client";

import React from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export type NoteColor = 'yellow' | 'blue' | 'green' | 'pink';

interface NoteCardProps {
  text: string;
  color: NoteColor;
  createdAt: any; // Firestore Timestamp
}

const colorMap: Record<NoteColor, string> = {
  yellow: 'bg-[#FFFF80]',
  blue: 'bg-[#94CCF7]',
  green: 'bg-[#99FF99]',
  pink: 'bg-[#FFCCE5]',
};

export function NoteCard({ text, color, createdAt }: NoteCardProps) {
  const date = createdAt?.toDate ? createdAt.toDate() : new Date();
  
  return (
    <div className={cn(
      "sticky-note p-6 min-h-[200px] flex flex-col justify-between shadow-md rounded-sm border-t border-black/5",
      colorMap[color] || colorMap.yellow
    )}>
      <p className="text-[#3D4759] font-medium leading-relaxed whitespace-pre-wrap break-words">
        {text}
      </p>
      <div className="mt-4 pt-4 border-t border-black/10 flex justify-between items-end">
        <span className="text-[10px] uppercase tracking-wider font-bold text-[#3D4759]/60">
          {format(date, 'MMM dd, yyyy')}
        </span>
        <div className="h-2 w-2 rounded-full bg-black/10" />
      </div>
    </div>
  );
}