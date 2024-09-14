import React from 'react';
import { Verse, Word } from '../../types';
import { cn } from "@/lib/utils";

interface ArabicVerseProps {
  verse: Verse;
  knownWords: Set<number>;
  setSelectedWord: (index: number) => void;
}

const ArabicVerse: React.FC<ArabicVerseProps> = ({ verse, knownWords, setSelectedWord }) => {
  return (
    <div className="mb-8 text-center">
      <p className="text-5xl font-bold mb-6 arabic-text" dir="rtl">
        {verse.words.map((word: Word, index: number) => (
          <span
            key={index}
            className={cn(
              "cursor-pointer mx-1 p-1 rounded transition-all duration-300 ease-in-out",
              "hover:bg-primary/10 active:bg-primary/20",
              knownWords.has(index) 
                ? "text-green-600 hover:text-green-700" 
                : "text-primary hover:text-primary-foreground",
              "relative group"
            )}
            onClick={() => setSelectedWord(index)}
          >
            {word.arabic}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        ))}
      </p>
      <p className="text-xl italic mb-4 text-muted-foreground">{verse.transliteration}</p>
    </div>
  );
};

export default ArabicVerse;