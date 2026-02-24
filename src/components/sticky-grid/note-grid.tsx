"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { NoteCard, NoteColor } from './note-card';
import { Skeleton } from '@/components/ui/skeleton';

interface Note {
  id: string;
  text: string;
  color: NoteColor;
  createdAt: any;
}

export function NoteGrid() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'notas'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesData: Note[] = [];
      snapshot.forEach((doc) => {
        notesData.push({ id: doc.id, ...doc.data() } as Note);
      });
      setNotes(notesData);
      setLoading(false);
    }, (error) => {
      console.error("Firestore snapshot error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Skeleton key={i} className="h-[220px] w-full rounded-sm shadow-sm" />
        ))}
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="bg-secondary/50 p-6 rounded-full">
          <span className="text-4xl">📝</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#3D4759]">No notes yet</h3>
          <p className="text-muted-foreground">Be the first to post something on the wall!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          text={note.text}
          color={note.color}
          createdAt={note.createdAt}
        />
      ))}
    </div>
  );
}