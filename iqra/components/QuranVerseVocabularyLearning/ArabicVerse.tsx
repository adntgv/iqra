import React from 'react';
import { Verse, Word } from '../../types';
import { cn } from "@/lib/utils";

interface ArabicVerseProps {
  verse: Verse;
  knownWords: Set<number>;
  setSelectedWord: (index: number) => void;
  activeWordIndex: number;
}
const ArabicVerse: React.FC<ArabicVerseProps> = ({ verse, knownWords, setSelectedWord, activeWordIndex }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
      <div className="flex flex-wrap justify-center items-center mb-2 sm:mb-4 arabic-text" dir="rtl">
        {verse.words.map((word: Word, index: number) => (
          <span
            key={index}
            className={cn(
              "cursor-pointer m-1 p-1 sm:p-2 rounded transition-all duration-300 ease-in-out text-3xl sm:text-5xl",
              "hover:bg-primary/20 active:bg-primary/30",
              knownWords.has(index) 
                ? "text-green-600 dark:text-green-400" 
                : "text-primary",
              "relative group",
              index === activeWordIndex && "text-4xl sm:text-6xl text-primary transform -translate-y-1 font-bold",
              index !== activeWordIndex && "underline decoration-primary/20 decoration-dashed underline-offset-4 decoration-2",
            )}
            onClick={() => setSelectedWord(index)}
          >
            {word.arabic}
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        ))}
      </div>
      <p className="text-base sm:text-xl italic text-muted-foreground text-center">{verse.transliteration}</p>
    </div>
  );
};
export default ArabicVerse;