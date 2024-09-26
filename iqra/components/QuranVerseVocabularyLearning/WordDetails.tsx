import React from 'react';
import { useTranslations } from 'next-intl';
import { Word } from '../../types';

interface WordDetailsProps {
  word: Word;
  isKnown: boolean;
  toggleWordKnown: () => void;
}

const WordDetails: React.FC<WordDetailsProps> = ({ word, isKnown, toggleWordKnown }) => {
  const t = useTranslations('learn');

  return (
    <div className="mb-6 p-4 sm:p-6 bg-secondary rounded-lg shadow-inner animate-fadeIn">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">{word.arabic}</h3>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{t('translation')}:</strong> <span className="text-foreground">{word.russian}</span></p>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{t('transliteration')}:</strong> <span className="text-foreground">{word.transliteration}</span></p>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{t('rootLetters')}:</strong> <span className="text-foreground">{word.rootLetters}</span></p>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{t('usage')}:</strong> <span className="text-foreground">{word.usage}</span></p>
      <p className="mb-4 text-sm sm:text-base"><strong className="text-primary">{t('frequency')}:</strong> <span className="text-foreground">{word.frequency}</span></p>
      <button
        onClick={toggleWordKnown}
        className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full ${
          isKnown 
            ? 'bg-accent hover:bg-accent/90'
            : 'bg-background hover:bg-accent text-primary'
        } transition duration-300 shadow-md text-sm sm:text-base`}
      >
        {isKnown ? t('markAsUnknown') : t('markAsKnown')}
      </button>
    </div>
  );
};

export default WordDetails;