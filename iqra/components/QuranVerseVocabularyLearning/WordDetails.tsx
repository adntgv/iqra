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
    <div className="mb-8 p-6 bg-blue-50 rounded-lg shadow-inner">
      <h3 className="text-2xl font-bold mb-4 text-blue-800">{word.arabic}</h3>
      <p className="mb-2"><strong>{language === 'russian' ? 'Перевод:' : 'Аударма:'}</strong> {word[language]}</p>
      <p className="mb-2"><strong>{language === 'russian' ? 'Транслитерация:' : 'Транслитерация:'}</strong> {word.transliteration}</p>
      <p className="mb-2"><strong>{language === 'russian' ? 'Корень слова:' : 'Сөз түбірі:'}</strong> {word.rootLetters}</p>
      <p className="mb-2"><strong>{language === 'russian' ? 'Использование:' : 'Қолданылуы:'}</strong> {word.usage}</p>
      <p className="mb-4"><strong>{language === 'russian' ? 'Частота в Коране:' : 'Құрандағы жиілігі:'}</strong> {word.frequency}</p>
      <button
        onClick={toggleWordKnown}
        className={`px-6 py-3 rounded-full ${
          isKnown 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-green-500 hover:bg-green-600'
        } text-white transition duration-300 shadow-md`}
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