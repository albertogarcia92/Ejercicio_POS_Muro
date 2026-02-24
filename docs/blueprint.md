# **App Name**: StickyGrid

## Core Features:

- Note Creation: Users can input a short message in a text area and select one of four background colors (yellow, blue, green, or pink) for their sticky note.
- Save Note to Firestore: Upon clicking 'Publish', the note's text, chosen color, and creation timestamp are saved to the 'notas' collection in Firebase Firestore.
- Real-time Note Display: All saved notes are fetched from Firestore and displayed in a responsive grid layout. The 'onSnapshot' feature ensures notes update in real-time without page reload.
- Note Details Display: Each displayed note clearly shows its message text and the date it was created, maintaining its selected background color.

## Style Guidelines:

- Primary app elements (e.g., text, buttons) will use a deep, desaturated blue-gray for a modern and grounded feel (#3D4759).
- The page background will be a very light, cool gray to ensure cleanliness and focus on notes (#F1F3F6).
- Accent color for interactive elements and highlights will be a vibrant yet calming sky blue (#4AC0DE), providing visual pop.
- Note background colors will include classic post-it shades: light yellow (#FFFF80), pastel blue (#94CCF7), soft green (#99FF99), and gentle pink (#FFCCE5).
- Headline and body text will use 'Inter' (sans-serif), chosen for its modern, clean, and objective appearance, suitable for a minimalist aesthetic.
- Notes will be presented in a responsive grid format. Each note will simulate a post-it with a 'shadow-md' effect for depth and realism.
- Simple and clear icons will be used for essential actions, maintaining the app's modern and minimalist design.