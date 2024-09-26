'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { lessons } from '../../lib/lessons';
import { Verse } from '../../types';
import ArabicVerse from './ArabicVerse';
import TranslationToggle from './TranslationToggle';
import WordDetails from './WordDetails';
import NavigationControls from './NavigationControls';
import VerseNavigation from './VerseNavigation';
import { Card, CardContent } from "@/components/ui/card"
import DonationPrompt from '../DonationPrompt';

const QuranVerseVocabularyLearning: React.FC = () => {
  const t = useTranslations('learn');
  const searchParams = useSearchParams() || new URLSearchParams();
  const lessonId = searchParams.get('lesson') || 'alFatiha';
  const initialSurah = parseInt(searchParams.get('surah') || '1', 10);
  const initialAyah = parseInt(searchParams.get('ayah') || '1', 10);

  const [currentLesson, setCurrentLesson] = useState(lessons[lessonId]);
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [knownWords, setKnownWords] = useState<Set<number>>(new Set());
  const [selectedWord, setSelectedWord] = useState<number>(0);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const [learnedWords, setLearnedWords] = useState<string[]>([]);

  useEffect(() => {
    const storedKnownWords = localStorage.getItem(`knownWords_${lessonId}`);
    if (storedKnownWords) {
      setKnownWords(new Set(JSON.parse(storedKnownWords)));
    }

    const storedLearnedWords = localStorage.getItem('learnedWords');
    if (storedLearnedWords) {
      setLearnedWords(JSON.parse(storedLearnedWords));
    }
  }, [lessonId]);

  const currentVerse: Verse = currentLesson.verses[currentVerseIndex];

  const toggleWordKnown = (wordIndex: number) => {
    setKnownWords(prevKnownWords => {
      const newKnownWords = new Set(prevKnownWords);
      const word = currentVerse.words[wordIndex].arabic;
      if (newKnownWords.has(wordIndex)) {
        newKnownWords.delete(wordIndex);
        setLearnedWords(prev => prev.filter(w => w !== word));
      } else {
        newKnownWords.add(wordIndex);
        setLearnedWords(prev => [...prev, word]);
      }
      localStorage.setItem(`knownWords_${lessonId}`, JSON.stringify(Array.from(newKnownWords)));
      localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
      return newKnownWords;
    });
  };

  const nextVerse = () => {
    setCurrentVerseIndex((prevIndex) => (prevIndex + 1) % currentLesson.verses.length);
    resetVerseState();
  };

  const prevVerse = () => {
    setCurrentVerseIndex((prevIndex) => (prevIndex - 1 + currentLesson.verses.length) % currentLesson.verses.length);
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
          lessonTitle={currentLesson.title}
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
              audioUrl={getAudioUrl(currentVerse.number)}
            />
          </CardContent>
        </Card>

        <TranslationToggle 
          showTranslation={showTranslation}
          setShowTranslation={setShowTranslation}
          translation={currentVerse.translation}
        />

        <WordDetails 
          word={currentVerse.words[selectedWord]}
          isKnown={knownWords.has(selectedWord)}
          toggleWordKnown={() => toggleWordKnown(selectedWord)}
        />

        <div className="mt-8">
          <DonationPrompt />
        </div>
      </div>
    </div>
  );
};

export default QuranVerseVocabularyLearning;