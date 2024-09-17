import { Verse } from '../types';

const AlFatiha: Verse[] = [{
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
  ayah: 1
},
{
  arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
  transliteration: 'Al-ḥamdu lillāhi rabbi l-ʿālamīn',
  translation: {
    russian: 'Хвала Аллаху, Господу миров',
    kazakh: 'Барлық мақтау әлемдердің Раббысы Аллаға тән',
  },
  words: [
    {
      arabic: 'الْحَمْدُ',
      transliteration: 'Al-ḥamdu',
      russian: 'Хвала',
      kazakh: 'Мақтау',
      rootLetters: 'ح م د',
      usage: 'Выражение благодарности и хвалы Аллаху.',
      frequency: 68,
    },
    {
      arabic: 'لِلَّهِ',
      transliteration: 'lillāhi',
      russian: 'Аллаху',
      kazakh: 'Аллаға',
      rootLetters: 'ا ل ه',
      usage: 'Имя Бога в исламе, встречается очень часто в Коране.',
      frequency: 2699,
    },
    {
      arabic: 'رَبِّ',
      transliteration: 'Rabbi',
      russian: 'Господу',
      kazakh: 'Раббысы',
      rootLetters: 'ر ب ب',
      usage: 'Одно из имен Аллаха, означающее "Господь".',
      frequency: 969,
    },
    {
      arabic: 'الْعَالَمِينَ',
      transliteration: 'l-ʿālamīn',
      russian: 'миров',
      kazakh: 'әлемдердің',
      rootLetters: 'ع ل م',
      usage: 'Мироздание, творение.',
      frequency: 73,
    },
  ],
  surah: 1,
  ayah: 2
},
{
  arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
  transliteration: 'Ar-raḥmāni r-raḥīm',
  translation: {
    russian: 'Милостивого, Милосердного',
    kazakh: 'Аса қамқор, ерекше мейірімді',
  },
  words: [
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
  ayah: 3
},
{
  arabic: 'مَالِكِ يَوْمِ الدِّينِ',
  transliteration: 'Māliki yawmi d-dīn',
  translation: {
    russian: 'Владыка Дня Суда',
    kazakh: 'Қиямет күнінің иесі',
  },
  words: [
    {
      arabic: 'مَالِكِ',
      transliteration: 'Māliki',
      russian: 'Владыка',
      kazakh: 'Иесі',
      rootLetters: 'م ل ك',
      usage: 'Тот, кто обладает чем-то, властитель.',
      frequency: 72,
    },
    {
      arabic: 'يَوْمِ',
      transliteration: 'Yawmi',
      russian: 'Дня',
      kazakh: 'Күні',
      rootLetters: 'ي و م',
      usage: 'Один из дней или День Суда.',
      frequency: 475,
    },
    {
      arabic: 'الدِّينِ',
      transliteration: 'd-dīn',
      russian: 'Суда',
      kazakh: 'Сот',
      rootLetters: 'د ي ن',
      usage: 'Означает суд, религия, вера.',
      frequency: 92,
    },
  ],
  surah: 1,
  ayah: 4
},
{
  arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
  transliteration: 'Iyyāka naʿbudu wa iyyāka nastaʿīn',
  translation: {
    russian: 'Тебе мы поклоняемся и к Тебе взываем о помощи',
    kazakh: 'Саған ғана құлшылық қыламыз және Сенен ғана көмек тілейміз',
  },
  words: [
    {
      arabic: 'إِيَّاكَ',
      transliteration: 'Iyyāka',
      russian: 'Тебе',
      kazakh: 'Саған',
      rootLetters: 'ا ي ك',
      usage: 'Только Тебе.',
      frequency: 11,
    },
    {
      arabic: 'نَعْبُدُ',
      transliteration: 'naʿbudu',
      russian: 'поклоняемся',
      kazakh: 'құлшылық қыламыз',
      rootLetters: 'ع ب د',
      usage: 'Поклоняться, служить.',
      frequency: 275,
    },
    {
      arabic: 'نَسْتَعِينُ',
      transliteration: 'nastaʿīn',
      russian: 'взываем о помощи',
      kazakh: 'көмек тілейміз',
      rootLetters: 'ع و ن',
      usage: 'Просить помощи.',
      frequency: 16,
    },
  ],
  surah: 1,
  ayah: 5
},
{
  arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
  transliteration: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm',
  translation: {
    russian: 'Наставь нас на прямой путь',
    kazakh: 'Бізді тура жолға сала гөр',
  },
  words: [
    {
      arabic: 'اهْدِنَا',
      transliteration: 'Ihdinā',
      russian: 'Наставь нас',
      kazakh: 'Сала гөр',
      rootLetters: 'ه د ي',
      usage: 'Просить о руководстве на путь.',
      frequency: 79,
    },
    {
      arabic: 'الصِّرَاطَ',
      transliteration: 'ṣ-ṣirāṭa',
      russian: 'путь',
      kazakh: 'жолға',
      rootLetters: 'ص ر ط',
      usage: 'Путь, дорога.',
      frequency: 45,
    },
    {
      arabic: 'الْمُسْتَقِيمَ',
      transliteration: 'l-mustaqīm',
      russian: 'прямой',
      kazakh: 'тура',
      rootLetters: 'ق و م',
      usage: 'Прямой, справедливый.',
      frequency: 22,
    },
  ],
  surah: 1,
  ayah: 6
},
{
  arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
  transliteration: 'Ṣirāṭa l-ladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim walā ḍ-ḍāllīn',
  translation: {
    russian: 'Путь тех, кого Ты облагодетельствовал, не тех, на кого пал гнев, и не заблудших',
    kazakh: 'Нығметке бөленгендердің жолына, қаһарыңа ұшырағандардың және адасқандардың жолына емес',
  },
  words: [
    {
      arabic: 'صِرَاطَ',
      transliteration: 'ṣirāṭa',
      russian: 'путь',
      kazakh: 'жолына',
      rootLetters: 'ص ر ط',
      usage: 'Путь, дорога.',
      frequency: 45,
    },
    {
      arabic: 'الَّذِينَ',
      transliteration: 'l-ladhīna',
      russian: 'тех',
      kazakh: 'жолына',
      rootLetters: 'ذ ي ن',
      usage: 'Указывает на группу людей.',
      frequency: 1000,
    },
    {
      arabic: 'أَنْعَمْتَ',
      transliteration: 'anʿamta',
      russian: 'Ты облагодетельствовал',
      kazakh: 'сен сыйлаған',
      rootLetters: 'ن ع م',
      usage: 'Даровать благодать.',
      frequency: 24,
    },
    {
      arabic: 'الْمَغْضُوبِ',
      transliteration: 'l-maghḍūbi',
      russian: 'гнев',
      kazakh: 'қаһар',
      rootLetters: 'غ ض ب',
      usage: 'Испытывающий гнев или неуважение.',
      frequency: 7,
    },
    {
      arabic: 'الضَّالِّينَ',
      transliteration: 'ḍ-ḍāllīn',
      russian: 'заблудших',
      kazakh: 'адасқандар',
      rootLetters: 'ض ل ل',
      usage: 'Те, кто сбились с пути.',
      frequency: 17,
    },
  ],
  surah: 1,
  ayah: 7
}];

export const versesData: Verse[] = AlFatiha;
