import React from 'react';
import { Verse, Word } from '../../types';

interface ArabicVerseProps {
  verse: Verse;
  knownWords: Set<number>;
  setSelectedWord: (index: number) => void;
}

const ArabicVerse: React.FC<ArabicVerseProps> = ({ verse, knownWords, setSelectedWord }) => {
  return (
    <div className="mb-8 text-center">
      <p className="text-4xl font-bold mb-4 arabic-text" dir="rtl">
        {verse.words.map((word: Word, index: number) => (
          <span
            key={index}
            className={`cursor-pointer mx-1 ${
              knownWords.has(index) ? 'text-green-600' : 'text-blue-600'
            } hover:text-blue-800 transition duration-300`}
            onClick={() => setSelectedWord(index)}
          >
            {word.arabic}
          </span>
        ))}
      </p>
      <p className="text-xl italic mb-4 text-gray-600">{verse.transliteration}</p>
    </div>
  );
};

export default ArabicVerse;