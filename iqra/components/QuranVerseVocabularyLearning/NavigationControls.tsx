import React from 'react';
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface NavigationControlsProps {
  prevVerse: () => void;
  nextVerse: () => void;
  surah: number;
  ayah: number;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  prevVerse,
  nextVerse,
  surah,
  ayah,
}) => {
  const t = useTranslations('learn');

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-lg shadow-md space-y-2 sm:space-y-0">
      <Button onClick={prevVerse} variant="outline" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-emerald-700">
        <ChevronLeft className="mr-2 h-4 w-4" />
        {t('previousVerse')}
      </Button>
      <div className="text-center text-lg sm:text-xl font-bold text-white">
        <Book className="inline-block mr-2 h-5 w-5 sm:h-6 sm:w-6" />
        <p className="inline-block">{t('surah')} {surah}, {t('ayah')} {ayah}</p>
      </div>
      <Button onClick={nextVerse} variant="outline" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-emerald-700">
        {t('nextVerse')}
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavigationControls;