'use client';

import React, { useState } from 'react';
import { versesData } from '../../lib/versesData';
import { Verse, Word } from '../../types';
import ArabicVerse from './ArabicVerse';
import TranslationToggle from './TranslationToggle';
import WordDetails from './WordDetails';
import NavigationControls from './NavigationControls';
import ProgressIndicator from './ProgressIndicator';

const QuranVerseVocabularyLearning: React.FC = () => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [knownWords, setKnownWords] = useState<Set<number>>(new Set());
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [language, setLanguage] = useState<'russian' | 'kazakh'>('russian');

  const currentVerse: Verse = versesData[currentVerseIndex];

  const toggleWordKnown = (wordIndex: number) => {
    setKnownWords(prevKnownWords => {
      const newKnownWords = new Set(prevKnownWords);
      if (newKnownWords.has(wordIndex)) {
        newKnownWords.delete(wordIndex);
      } else {
        newKnownWords.add(wordIndex);
      }
      return newKnownWords;
    });
  };

  const nextVerse = () => {
    setCurrentVerseIndex((prevIndex) => (prevIndex + 1) % versesData.length);
    setSelectedWord(null);
    setShowTranslation(false);
  };

  const prevVerse = () => {
    setCurrentVerseIndex((prevIndex) => (prevIndex - 1 + versesData.length) % versesData.length);
    setSelectedWord(null);
    setShowTranslation(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'russian' ? 'kazakh' : 'russian');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {language === 'russian' ? 'Изучение Корана' : 'Құранды үйрену'}
        </h2>
        <button
          onClick={toggleLanguage}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
        >
          {language === 'russian' ? 'Қазақша' : 'Русский'}
        </button>
      </div>

      <ArabicVerse 
        verse={currentVerse} 
        knownWords={knownWords} 
        setSelectedWord={setSelectedWord} 
      />

      <TranslationToggle 
        showTranslation={showTranslation}
        setShowTranslation={setShowTranslation}
        translation={currentVerse.translation[language]}
        language={language}
      />

      {selectedWord !== null && (
        <WordDetails 
          word={currentVerse.words[selectedWord]}
          language={language}
          isKnown={knownWords.has(selectedWord)}
          toggleWordKnown={() => toggleWordKnown(selectedWord)}
        />
      )}

      <NavigationControls 
        prevVerse={prevVerse}
        nextVerse={nextVerse}
        surah={currentVerse.surah}
        ayah={currentVerse.ayah}
        language={language}
      />

      <ProgressIndicator 
        knownWordsCount={knownWords.size}
        totalWordsCount={currentVerse.words.length}
        language={language}
      />
    </div>
  );
};

export default QuranVerseVocabularyLearning;