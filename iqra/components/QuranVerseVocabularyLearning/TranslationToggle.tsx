import React from 'react';
import { Play } from 'lucide-react';

interface TranslationToggleProps {
  showTranslation: boolean;
  setShowTranslation: (show: boolean) => void;
  translation: string;
  language: 'russian' | 'kazakh';
}

const TranslationToggle: React.FC<TranslationToggleProps> = ({
  showTranslation,
  setShowTranslation,
  translation,
  language,
}) => {
  return (
    <div className="mb-6">
      {showTranslation && (
        <p className="text-lg font-semibold text-gray-800 bg-yellow-100 p-4 rounded-lg shadow-inner mb-4">
          {translation}
        </p>
      )}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 shadow-md"
        >
          {showTranslation 
            ? (language === 'russian' ? 'Скрыть перевод' : 'Аударманы жасыру')
            : (language === 'russian' ? 'Показать перевод' : 'Аударманы көрсету')
          }
        </button>
        <button
          onClick={() => {/* Implement audio playback */}}
          className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          <Play size={24} />
        </button>
      </div>
    </div>
  );
};

export default TranslationToggle;