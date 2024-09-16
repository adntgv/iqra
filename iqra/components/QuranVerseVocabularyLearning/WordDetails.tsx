import React from 'react';
import { Word } from '../../types';

interface WordDetailsProps {
  word: Word;
  language: 'russian' | 'kazakh';
  isKnown: boolean;
  toggleWordKnown: () => void;
}
const WordDetails: React.FC<WordDetailsProps> = ({ word, language, isKnown, toggleWordKnown }) => {
  return (
    <div className="mb-6 p-4 sm:p-6 bg-secondary rounded-lg shadow-inner">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">{word.arabic}</h3>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{language === 'russian' ? 'Перевод:' : 'Аударма:'}</strong> <span className="text-foreground">{word[language]}</span></p>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{language === 'russian' ? 'Транслитерация:' : 'Транслитерация:'}</strong> <span className="text-foreground">{word.transliteration}</span></p>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{language === 'russian' ? 'Корень слова:' : 'Сөз түбірі:'}</strong> <span className="text-foreground">{word.rootLetters}</span></p>
      <p className="mb-2 text-sm sm:text-base"><strong className="text-primary">{language === 'russian' ? 'Использование:' : 'Қолданылуы:'}</strong> <span className="text-foreground">{word.usage}</span></p>
      <p className="mb-4 text-sm sm:text-base"><strong className="text-primary">{language === 'russian' ? 'Частота в Коране:' : 'Құрандағы жиілігі:'}</strong> <span className="text-foreground">{word.frequency}</span></p>
      <button
        onClick={toggleWordKnown}
        className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full ${
          isKnown 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-green-500 hover:bg-green-600'
        } text-white transition duration-300 shadow-md text-sm sm:text-base`}
      >
        {isKnown 
          ? (language === 'russian' ? 'Отметить как неизвестное' : 'Білмейтін деп белгілеу')
          : (language === 'russian' ? 'Отметить как известное' : 'Білетін деп белгілеу')
        }
      </button>
    </div>
  );
};

export default WordDetails;