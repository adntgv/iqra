import React from 'react';
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';

interface NavigationControlsProps {
  prevVerse: () => void;
  nextVerse: () => void;
  surah: number;
  ayah: number;
  language: 'russian' | 'kazakh';
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  prevVerse,
  nextVerse,
  surah,
  ayah,
  language,
}) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-lg shadow-md">
      <Button onClick={prevVerse} variant="outline" className="bg-white hover:bg-gray-100 text-emerald-700">
        <ChevronLeft className="mr-2 h-4 w-4" />
        {language === 'russian' ? 'Предыдущий' : 'Алдыңғы'}
      </Button>
      <div className="text-center text-xl font-bold text-white">
        <Book className="inline-block mr-2 h-6 w-6" />
        <p className="inline-block">{language === 'russian' ? 'Сура' : 'Сүре'} {surah}, {language === 'russian' ? 'Аят' : 'Аят'} {ayah}</p>
      </div>
      <Button onClick={nextVerse} variant="outline" className="bg-white hover:bg-gray-100 text-emerald-700">
        {language === 'russian' ? 'Следующий' : 'Келесі'}
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavigationControls;