import { CreateNoteForm } from '@/components/sticky-grid/create-note-form';
import { NoteGrid } from '@/components/sticky-grid/note-grid';
import { StickyNote } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1F3F6] pb-20">
      {/* Header Section */}
      <header className="bg-white border-b border-border mb-12 py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#4AC0DE] p-2 rounded-lg shadow-sm">
              <StickyNote className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#3D4759] tracking-tight">StickyGrid</h1>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Digital Wall</p>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-[#3D4759]/60">Real-time collaborative wall</p>
          </div>
        </div>
      </header>

      {/* Form Container */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <section className="animate-in fade-in slide-in-from-top-4 duration-700">
          <CreateNoteForm />
        </section>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border"></div>
          <h2 className="text-[#3D4759] font-bold text-sm uppercase tracking-widest px-4">The Wall</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        <NoteGrid />
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-border pt-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} StickyGrid App • Built with React & Firebase</p>
      </footer>
    </main>
  );
}