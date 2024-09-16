import React from 'react';
import { useTranslations } from 'next-intl';

interface ProgressIndicatorProps {
  knownWordsCount: number;
  totalWordsCount: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  knownWordsCount,
  totalWordsCount,
}) => {
  const t = useTranslations('learn');

  return (
    <div className="text-center mt-6">
      <p className="text-lg font-semibold text-gray-700">
        {t('wordsLearned')}: {knownWordsCount} {t('of')} {totalWordsCount}
      </p>
    </div>
  );
};

export default ProgressIndicator;