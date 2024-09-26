'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DonationPrompt from '@/components/DonationPrompt';

const arabicAlphabet = [
  { letter: 'ا', name: 'Alif', transliteration: 'a' },
  { letter: 'ب', name: 'Ba', transliteration: 'b' },
  { letter: 'ت', name: 'Ta', transliteration: 't' },
  { letter: 'ث', name: 'Tha', transliteration: 'th' },
  { letter: 'ج', name: 'Jim', transliteration: 'j' },
  { letter: 'ح', name: 'Ha', transliteration: 'h' },
  { letter: 'خ', name: 'Kha', transliteration: 'kh' },
  { letter: 'د', name: 'Dal', transliteration: 'd' },
  { letter: 'ذ', name: 'Dhal', transliteration: 'dh' },
  { letter: 'ر', name: 'Ra', transliteration: 'r' },
  { letter: 'ز', name: 'Zay', transliteration: 'z' },   
  { letter: 'س', name: 'Sin', transliteration: 's' },
  { letter: 'ش', name: 'Shin', transliteration: 'sh' },
  { letter: 'ص', name: 'Sad', transliteration: 'sad' },
  { letter: 'ض', name: 'Dad', transliteration: 'dad' },
  { letter: 'ط', name: 'Ta', transliteration: 'ta' },
  { letter: 'ظ', name: 'Dha', transliteration: 'dha' },
  { letter: 'ع', name: 'Ain', transliteration: 'ain' },
  { letter: 'غ', name: 'Gha', transliteration: 'gha' }, 
  { letter: 'ف', name: 'Fa', transliteration: 'f' },
  { letter: 'ق', name: 'Qaf', transliteration: 'q' },
  { letter: 'ك', name: 'Kaf', transliteration: 'k' },
  { letter: 'ل', name: 'Lam', transliteration: 'l' },
  { letter: 'م', name: 'Mim', transliteration: 'm' },
  { letter: 'ن', name: 'Nun', transliteration: 'n' },
  { letter: 'ه', name: 'Ha', transliteration: 'h' },
  { letter: 'و', name: 'Waw', transliteration: 'w' }, 
  { letter: 'ي', name: 'Ya', transliteration: 'ya' },
];

const AlphabetLearning: React.FC = () => {
  const t = useTranslations('learn.alphabet');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const currentLetter = arabicAlphabet[currentLetterIndex];

  const nextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % arabicAlphabet.length);
  };

  const prevLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex - 1 + arabicAlphabet.length) % arabicAlphabet.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('title')}</h1>
      <Card className="mb-8">
        <CardContent className="p-6 text-center">
          <div className="text-8xl mb-4 font-arabic text-primary">{currentLetter.letter}</div>
          <h2 className="text-2xl font-semibold mb-2">{currentLetter.name}</h2>
          <p className="text-xl text-muted-foreground">{t('transliteration')}: {currentLetter.transliteration}</p>
        </CardContent>
      </Card>
      <div className="flex justify-between items-center mb-8">
        <Button onClick={prevLetter}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t('previous')}
        </Button>
        <span className="text-sm text-muted-foreground">
          {currentLetterIndex + 1} / {arabicAlphabet.length}
        </span>
        <Button onClick={nextLetter}>
          {t('next')}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <DonationPrompt />
    </div>
  );
};

export default AlphabetLearning;