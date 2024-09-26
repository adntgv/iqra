import React, { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TranslationToggleProps {
  showTranslation: boolean;
  setShowTranslation: (show: boolean) => void;
  translation: {
    russian: string;
    kazakh: string;
  };
}

const TranslationToggle: React.FC<TranslationToggleProps> = ({
  showTranslation,
  setShowTranslation,
  translation,
}) => {
  const t = useTranslations("learn");

  return (
    <div className="space-y-4">
      {showTranslation && (
        <Card className="animate-fadeIn">          <CardContent className="p-4 sm:p-6">
            <p className="text-base sm:text-lg font-semibold text-foreground">
              {translation.russian}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TranslationToggle;
