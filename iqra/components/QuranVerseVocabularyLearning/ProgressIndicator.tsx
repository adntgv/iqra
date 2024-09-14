import React from 'react';

interface ProgressIndicatorProps {
  knownWordsCount: number;
  totalWordsCount: number;
  language: 'russian' | 'kazakh';
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  knownWordsCount,
  totalWordsCount,
  language,
}) => {
  return (
    <div className="text-center mt-6">
      <p className="text-lg font-semibold text-gray-700">
        {language === 'russian' 
          ? `Изучено слов: ${knownWordsCount} из ${totalWordsCount}`
          : `Үйренген сөздер: ${knownWordsCount} ${totalWordsCount} ішінен`
        }
      </p>
    </div>
  );
};

export default ProgressIndicator;