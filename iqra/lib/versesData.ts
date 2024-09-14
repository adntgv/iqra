import { Verse } from '../types';

export const versesData: Verse[] = [
  {
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    transliteration: 'Bismillāhi r-raḥmāni r-raḥīm',
    translation: {
      russian: 'Во имя Аллаха, Милостивого, Милосердного',
      kazakh: 'Аса қамқор, ерекше мейірімді Алланың атымен',
    },
    words: [
      {
        arabic: 'بِسْمِ',
        transliteration: 'Bismi',
        russian: 'Именем',
        kazakh: 'Атымен',
        rootLetters: 'س م و',
        usage: 'Используется в начале каждой суры Корана, кроме одной.',
        frequency: 22,
      },
      {
        arabic: 'اللَّهِ',
        transliteration: 'Allāhi',
        russian: 'Аллаха',
        kazakh: 'Алланың',
        rootLetters: 'ا ل ه',
        usage: 'Имя Бога в исламе, встречается очень часто в Коране.',
        frequency: 2699,
      },
      {
        arabic: 'الرَّحْمَٰنِ',
        transliteration: 'ar-Raḥmāni',
        russian: 'Милостивого',
        kazakh: 'Аса қамқор',
        rootLetters: 'ر ح م',
        usage: 'Одно из имен Аллаха, означающее "Милостивый".',
        frequency: 57,
      },
      {
        arabic: 'الرَّحِيمِ',
        transliteration: 'ar-Raḥīmi',
        russian: 'Милосердного',
        kazakh: 'Ерекше мейірімді',
        rootLetters: 'ر ح م',
        usage: 'Одно из имен Аллаха, означающее "Милосердный".',
        frequency: 115,
      },
    ],
    surah: 1,
    ayah: 1,
  },
  // Add more verses here...
  {
    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
    transliteration: 'Qul huwa Allāhu ʾAḥad',
    translation: {
      russian: 'Скажи: "Он — Аллах, Единый',
      kazakh: 'Тағы бірі, Аллаһ біріншісі',
    },
    words: [
      {
        arabic: 'قُلْ',
        transliteration: 'Qul',
        russian: 'Скажи',
        kazakh: 'Айта',
        rootLetters: 'ق و ل',
        usage: 'Используется в начале предложения для приказа сказать что-то.',
        frequency: 334,
      },
      {
        arabic: 'هُوَ',
        transliteration: 'huwa',
        russian: 'Он',
        kazakh: 'Ол',
        rootLetters: 'ه و ي',
        usage: 'Местоимение, указывающее на мужчину или мужской предмет.',
        frequency: 2432,
      },
      {
        arabic: 'اللَّهُ',
        transliteration: 'Allāhu',
        russian: 'Аллах',
        kazakh: 'Аллаһ',
        rootLetters: 'ا ل ه',
        usage: 'Имя Бога в исламе, встречается очень часто в Коране.',
        frequency: 2699,
      },
      {
        arabic: 'أَحَدٌ',
        transliteration: 'ʾAḥad',
        russian: 'Единый',
        kazakh: 'Біріншісі',
        rootLetters: 'ا ح د',
        usage: 'Означает "один" или "единственный".',
        frequency: 73,
      },
    ],
    surah: 112,
    ayah: 1,
  },
  {
    arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
    transliteration: 'Qul ʾaʿūḏu bi-Rabbi l-Falaq',
    translation: {
      russian: 'Скажи: "Прибегаю к Господу рассвета',
      kazakh: 'Айт: "Таң алатын Раббыма қорғанымды',
    },
    words: [
      {
        arabic: 'قُلْ',
        transliteration: 'Qul',
        russian: 'Скажи',
        kazakh: 'Айта',
        rootLetters: 'ق و ل',
        usage: 'Используется в начале предложения для приказа сказать что-то.',
        frequency: 334,
      },
      {
        arabic: 'أَعُوذُ',
        transliteration: 'ʾaʿūḏu',
        russian: 'Прибегаю',
        kazakh: 'Қорғанымды',
        rootLetters: 'ع و ذ',
        usage: 'Защита, прибежище, убежище, защищаться.',
        frequency: 6,
      },
      {
        arabic: 'بِ',
        transliteration: 'bi',
        russian: 'К',
        kazakh: 'Мен',
        rootLetters: 'ب و',
        usage: 'Предлог, указывающий на средство или причину.',
        frequency: 130,
      },
      {
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        russian: 'Господу',
        kazakh: 'Раббыма',
        rootLetters: 'ر ب ب',
        usage: 'Господь, Владыка, Хозяин.',
        frequency: 970,
      },
      {
        arabic: 'الْفَلَقِ',
        transliteration: 'l-Falaq',
        russian: 'Рассвета',
        kazakh: 'Таң алатын',
        rootLetters: 'ف ل ق',
        usage: 'Рассвет, заря, начало.',
        frequency: 1,
      }
    ],
    surah: 113,
    ayah: 1,
  }
]