import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { lessons } from '@/lib/lessons';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            {t('description')}
          </p>
          <LocaleSwitcher />

        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-2">{t('currentLesson')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{t('currentLessonDescription')}</p>
              <Button asChild>
                <Link href="/learn">
                  {t('continueLesson')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-2">{t('basics')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/learn/basics/alphabet" className="text-primary hover:underline">
                    {t('alphabet')}
                  </Link>
                </li>
                <li>
                  <Link href="/learn/words" className="text-primary hover:underline">
                    {t('words')}
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl mb-2">{t('chapters')}</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(lessons).map((lesson) => (
              <Link
                key={lesson.id}
                href={`/learn?lesson=${lesson.id}&surah=${lesson.verses[0].surah}&ayah=${lesson.verses[0].ayah}`}
                className="block p-6 rounded-lg "
              >
                <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                <p className="text-gray-600">{lesson.description}</p>
              </Link>
            ))}
          </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="text-center py-8">
            <h2 className="text-3xl font-bold mb-4">{t('startLearning')}</h2>
            <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-4">
              <Link href="/learn">{t('getStarted')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}