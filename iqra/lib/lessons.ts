import { Verse } from '../types';
import { AlFatiha } from './versesData';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  verses: Verse[];
}

export const lessons: { [key: string]: Lesson } = {
  alFatiha: {
    id: 'alFatiha',
    title: 'Surah Al-Fatiha',
    description: 'The Opening - Learn the most recited surah in the Quran',
    verses: AlFatiha,
  },
  // Add more lessons here
};