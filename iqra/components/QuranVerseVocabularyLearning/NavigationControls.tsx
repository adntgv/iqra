import React from 'react';
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface NavigationControlsProps {
  prevVerse: () => void;
  nextVerse: () => void;
  surah: number;
  ayah: number;
  lessonTitle: string;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  prevVerse,
  nextVerse,
  surah,
  ayah,
  lessonTitle,
}) => {
  const t = useTranslations('learn');

  return (
    <div className="flex justify-between items-center p-2 rounded-lg text-sm">
      <Button onClick={prevVerse} variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
        <ChevronLeft className="mr-1 h-4 w-4" />
        {t('previousVerse')}
      </Button>
      <div className="text-center text-muted-foreground">
        <Book className="inline-block mr-1 h-4 w-4" />
        <span className="font-medium">{lessonTitle}: {t('surah')} {surah}, {t('ayah')} {ayah}</span>
      </div>
      <Button onClick={nextVerse} variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
        {t('nextVerse')}
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavigationControls;