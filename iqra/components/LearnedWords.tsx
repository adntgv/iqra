'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';

const LearnedWords: React.FC = () => {
  const t = useTranslations('learn');
  const [learnedWords, setLearnedWords] = useState<string[]>([]);

  useEffect(() => {
    const storedLearnedWords = localStorage.getItem('learnedWords');
    if (storedLearnedWords) {
      setLearnedWords(JSON.parse(storedLearnedWords));
    }
  }, []);

  const removeWord = (word: string) => {
    const updatedWords = learnedWords.filter(w => w !== word);
    setLearnedWords(updatedWords);
    localStorage.setItem('learnedWords', JSON.stringify(updatedWords));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('learnedWords')}</h1>
      {learnedWords.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-muted-foreground">{t('noLearnedWords')}</p>
          <Link href="/learn" className="mt-4">{t('startLearning')}</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {learnedWords.map((word, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex justify-between items-center">
                <span className="text-xl font-arabic">{word}</span>
                <Button variant="destructive" size="sm" onClick={() => removeWord(word)}>
                  {t('remove')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearnedWords;