'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Check, X } from 'lucide-react';
import { versesData } from '../lib/versesData';
import { Verse, Word } from '../types';

const QuranVerseVocabularyLearning: React.FC = () => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [knownWords, setKnownWords] = useState<Set<number>>(new Set());
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [language, setLanguage] = useState<'russian' | 'kazakh'>('russian');

  const toggleWordKnown = (wordIndex: number) => {
    setKnownWords(prevKnownWords => {
      const newKnownWords = new Set(prevKnownWords);
      if (newKnownWords.has(wordIndex)) {
        newKnownWords.delete(wordIndex);
      } else {
        newKnownWords.add(wordIndex);
      }
      return newKnownWords;
    });
  };

  const nextVerse = () => {
    setCurrentVerseIndex((prevIndex) => (prevIndex + 1) % versesData.length);
    setSelectedWord(null);
    setShowTranslation(false);
  };

  const prevVerse = () => {
    setCurrentVerseIndex((prevIndex) => (prevIndex - 1 + versesData.length) % versesData.length);
    setSelectedWord(null);
    setShowTranslation(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'russian' ? 'kazakh' : 'russian');
  };

  const currentVerse: Verse = versesData[currentVerseIndex];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {language === 'russian' ? 'Изучение Корана' : 'Құранды үйрену'}
        </h2>
        <button
          onClick={toggleLanguage}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
        >
          {language === 'russian' ? 'Қазақша' : 'Русский'}
        </button>
      </div>

      <div className="mb-8 text-center">
        <p className="text-4xl font-bold mb-4 arabic-text" dir="rtl">
          {currentVerse.words.map((word: Word, index: number) => (
            <span
              key={index}
              className={`cursor-pointer mx-1 ${
                knownWords.has(index) ? 'text-green-600' : 'text-blue-600'
              } hover:text-blue-800 transition duration-300`}
              onClick={() => setSelectedWord(index)}
            >
              {word.arabic}
            </span>
          ))}
        </p>
        <p className="text-xl italic mb-4 text-gray-600">{currentVerse.transliteration}</p>
        {showTranslation && (
          <p className="text-lg font-semibold text-gray-800 bg-yellow-100 p-4 rounded-lg shadow-inner">
            {currentVerse.translation[language]}
          </p>
        )}
      </div>

      <div className="mb-6 flex justify-center space-x-4">
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

      {selectedWord !== null && (
        <div className="mb-8 p-6 bg-blue-50 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">{currentVerse.words[selectedWord].arabic}</h3>
          <p className="mb-2"><strong>{language === 'russian' ? 'Перевод:' : 'Аударма:'}</strong> {currentVerse.words[selectedWord][language]}</p>
          <p className="mb-2"><strong>{language === 'russian' ? 'Транслитерация:' : 'Транслитерация:'}</strong> {currentVerse.words[selectedWord].transliteration}</p>
          <p className="mb-2"><strong>{language === 'russian' ? 'Корень слова:' : 'Сөз түбірі:'}</strong> {currentVerse.words[selectedWord].rootLetters}</p>
          <p className="mb-2"><strong>{language === 'russian' ? 'Использование:' : 'Қолданылуы:'}</strong> {currentVerse.words[selectedWord].usage}</p>
          <p className="mb-4"><strong>{language === 'russian' ? 'Частота в Коране:' : 'Құрандағы жиілігі:'}</strong> {currentVerse.words[selectedWord].frequency}</p>
          <button
            onClick={() => toggleWordKnown(selectedWord)}
            className={`px-6 py-3 rounded-full ${
              knownWords.has(selectedWord) 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-green-500 hover:bg-green-600'
            } text-white transition duration-300 shadow-md`}
          >
            {knownWords.has(selectedWord) 
              ? (language === 'russian' ? 'Отметить как неизвестное' : 'Білмейтін деп белгілеу')
              : (language === 'russian' ? 'Отметить как известное' : 'Білетін деп белгілеу')
            }
          </button>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevVerse}
          className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-300 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="text-center text-lg font-semibold text-gray-700">
          <p>{language === 'russian' ? 'Сура' : 'Сүре'} {currentVerse.surah}, {language === 'russian' ? 'Аят' : 'Аят'} {currentVerse.ayah}</p>
        </div>
        <button
          onClick={nextVerse}
          className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-300 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-lg font-semibold text-gray-700">
          {language === 'russian' 
            ? `Изучено слов: ${knownWords.size} из ${currentVerse.words.length}`
            : `Үйренген сөздер: ${knownWords.size} ${currentVerse.words.length} ішінен`
          }
        </p>
      </div>
    </div>
  );
};
export default QuranVerseVocabularyLearning;