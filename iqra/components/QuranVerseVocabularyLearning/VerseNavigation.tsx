import React from 'react';
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface VerseNavigationProps {
  currentVerseIndex: number;
  totalVerses: number;
  onPrevious: () => void;
  onNext: () => void;
}

const VerseNavigation: React.FC<VerseNavigationProps> = ({
  currentVerseIndex,
  totalVerses,
  onPrevious,
  onNext
}) => {
  const t = useTranslations('learn');

  return (
    <div className="flex justify-between items-center mt-4">
      <Button onClick={onPrevious} disabled={currentVerseIndex === 0}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        {t('previousVerse')}
      </Button>
      <span className="text-sm text-muted-foreground">
        {t('verse')} {currentVerseIndex + 1} / {totalVerses}
      </span>
      <Button onClick={onNext} disabled={currentVerseIndex === totalVerses - 1}>
        {t('nextVerse')}
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default VerseNavigation;