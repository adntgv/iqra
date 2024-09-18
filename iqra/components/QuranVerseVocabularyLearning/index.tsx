'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { versesData } from '../../lib/versesData';
import { Verse } from '../../types';
import ArabicVerse from './ArabicVerse';
import TranslationToggle from './TranslationToggle';
import WordDetails from './WordDetails';
import NavigationControls from './NavigationControls';
import VerseNavigation from './VerseNavigation';
import { Card, CardContent } from "@/components/ui/card"

const QuranVerseVocabularyLearning: React.FC = () => {
  const t = useTranslations('learn');
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [knownWords, setKnownWords] = useState<Set<number>>(new Set());
  const [selectedWord, setSelectedWord] = useState<number>(0);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);

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
    resetVerseState();
  };

  const prevVerse = () => {
    setCurrentVerseIndex((prevIndex) => (prevIndex - 1 + versesData.length) % versesData.length);
    resetVerseState();
  };

  const resetVerseState = () => {
    setSelectedWord(0);
    setActiveWordIndex(0);
    setShowTranslation(false);
  };

  const getAudioUrl = (verseNumber: number) => {
    return `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${verseNumber}.mp3`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      <div className="space-y-6">
        <NavigationControls 
          prevVerse={prevVerse}
          nextVerse={nextVerse}
          surah={currentVerse.surah}
          ayah={currentVerse.ayah}
        />

        <Card className="overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <ArabicVerse 
              verse={currentVerse} 
              knownWords={knownWords} 
              setSelectedWord={(index) => {
                setSelectedWord(index);
                setActiveWordIndex(index);
              }}
              activeWordIndex={activeWordIndex}
            />
          </CardContent>
        </Card>

        <TranslationToggle 
          showTranslation={showTranslation}
          setShowTranslation={setShowTranslation}
          translation={currentVerse.translation}
          audioUrl={getAudioUrl(currentVerse.number)}
        />

        <WordDetails 
          word={currentVerse.words[selectedWord]}
          isKnown={knownWords.has(selectedWord)}
          toggleWordKnown={() => toggleWordKnown(selectedWord)}
        />

        <VerseNavigation
          currentVerseIndex={currentVerseIndex}
          totalVerses={versesData.length}
          onPrevious={prevVerse}
          onNext={nextVerse}
        />
      </div>
    </div>
  );
};

export default QuranVerseVocabularyLearning;