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
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-foreground">
              {translation}
            </p>
          </CardContent>
        </Card>
      )}
      <div className="flex flex-row justify-center space-x-4">
        <Button
          onClick={() => setShowTranslation(!showTranslation)}
          variant="outline"
        >
          {showTranslation 
            ? (language === 'russian' ? 'Скрыть перевод' : 'Аударманы жасыру')
            : (language === 'russian' ? 'Показать перевод' : 'Аударманы көрсету')
          }
        </Button>
        <Button
          onClick={() => {/* Implement audio playback */}}
          variant="outline"
        >
          <Play className="h-4 w-4 mr-2" />
          {language === 'russian' ? 'Прослушать' : 'Тыңдау'}
        </Button>
      </div>
    </div>
  );
};

export default TranslationToggle;