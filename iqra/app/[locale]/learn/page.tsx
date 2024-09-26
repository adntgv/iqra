'use client';

import { useSearchParams } from 'next/navigation';
import QuranVerseVocabularyLearning from '@/components/QuranVerseVocabularyLearning';

export default function Learn() {
  const searchParams = useSearchParams() || new URLSearchParams();
  const lessonId = searchParams.get('lesson') || 'alFatiha';
  const surah = searchParams.get('surah') || '1';
  const ayah = searchParams.get('ayah') || '1';

  return (
    <div className="container mx-auto px-4 py-8">
      <QuranVerseVocabularyLearning key={`${lessonId}-${surah}-${ayah}`} />
    </div>
  );
}