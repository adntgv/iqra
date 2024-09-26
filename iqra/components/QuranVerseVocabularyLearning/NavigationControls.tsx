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
    <div className="flex flex-col sm:flex-row justify-between items-center p-2 rounded-lg text-sm transition-all duration-300 ease-in-out">
      <Button onClick={prevVerse} variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-full sm:w-auto mb-2 sm:mb-0">
        <ChevronLeft className="mr-1 h-4 w-4" />
        <span className="hidden sm:inline">{t('previousVerse')}</span>
      </Button>
      <div className="text-center text-muted-foreground   sm:order-none mb-2 sm:mb-0">
        <Book className="inline-block mr-1 h-4 w-4" />
        <span className="font-medium text-xs sm:text-sm">
          {lessonTitle}: {t('surah')} {surah}, {t('ayah')} {ayah}
        </span>
      </div>
      <Button onClick={nextVerse} variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-full sm:w-auto">
        <span className="hidden sm:inline">{t('nextVerse')}</span>
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavigationControls;