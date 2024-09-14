import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="flex justify-between items-center mb-6">
      <button
        onClick={prevVerse}
        className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-300 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="text-center text-lg font-semibold text-gray-700">
        <p>{language === 'russian' ? 'Сура' : 'Сүре'} {surah}, {language === 'russian' ? 'Аят' : 'Аят'} {ayah}</p>
      </div>
      <button
        onClick={nextVerse}
        className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-300 shadow-md"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default NavigationControls;