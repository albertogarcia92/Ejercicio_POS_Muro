"use client";

import React, { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { NoteColor } from './note-card';
import { cn } from '@/lib/utils';
import { Send, Check } from 'lucide-react';

export function CreateNoteForm() {
  const [text, setText] = useState('');
  const [color, setColor] = useState<NoteColor>('yellow');
  const [isPublishing, setIsPublishing] = useState(false);

  const colors: { name: NoteColor; value: string }[] = [
    { name: 'yellow', value: '#FFFF80' },
    { name: 'blue', value: '#94CCF7' },
    { name: 'green', value: '#99FF99' },
    { name: 'pink', value: '#FFCCE5' },
  ];

  const handlePublish = async () => {
    if (!text.trim()) return;
    
    setIsPublishing(true);
    try {
      await addDoc(collection(db, 'notas'), {
        text,
        color,
        createdAt: serverTimestamp(),
      });
      setText('');
      setColor('yellow');
    } catch (error) {
      console.error("Error adding note: ", error);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-border space-y-4 max-w-2xl mx-auto w-full">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#3D4759]">New Note</label>
        <Textarea
          placeholder="What's on your mind?..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[120px] resize-none border-none bg-secondary/50 focus-visible:ring-accent"
          maxLength={280}
        />
        <div className="flex justify-end">
          <span className="text-[10px] text-muted-foreground font-mono">
            {text.length}/280
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#3D4759]">Color:</span>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                className={cn(
                  "w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center",
                  color === c.name ? "border-[#3D4759] scale-110 shadow-sm" : "border-transparent"
                )}
                style={{ backgroundColor: c.value }}
                title={`Select ${c.name}`}
              >
                {color === c.name && <Check className="w-4 h-4 text-[#3D4759]" />}
              </button>
            ))}
          </div>
        </div>

        <Button 
          onClick={handlePublish} 
          disabled={!text.trim() || isPublishing}
          className="bg-[#4AC0DE] hover:bg-[#3db0cc] text-white font-semibold px-8"
        >
          {isPublishing ? (
            "Publishing..."
          ) : (
            <>
              Publish <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}