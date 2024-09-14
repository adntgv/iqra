import React from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="space-y-4">
      {showTranslation && (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <p className="text-base sm:text-lg font-semibold text-foreground">
              {translation}
            </p>
          </CardContent>
        </Card>
      )}
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <Button
          onClick={() => setShowTranslation(!showTranslation)}
          variant="outline"
          className="w-full sm:w-auto"
        >
          {showTranslation 
            ? (language === 'russian' ? 'Скрыть перевод' : 'Аударманы жасыру')
            : (language === 'russian' ? 'Показать перевод' : 'Аударманы көрсету')
          }
        </Button>
        <Button
          onClick={() => {/* Implement audio playback */}}
          variant="outline"
          className="w-full sm:w-auto"
        >
          <Play className="h-4 w-4 mr-2" />
          {language === 'russian' ? 'Прослушать' : 'Тыңдау'}
        </Button>
      </div>
    </div>
  );
};

export default TranslationToggle;