import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { ArrowRight, BookOpen, Languages, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <Button asChild size="lg">
            <Link href="/learn">
              {t('startJourney')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: BookOpen, title: t('interactiveLessons'), description: t('interactiveLessonsDescription') },
            { icon: Languages, title: t('vocabularyBuilding'), description: t('vocabularyBuildingDescription') },
            { icon: Star, title: t('trackProgress'), description: t('trackProgressDescription') },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-16 bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-center">{t('beginJourney')}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              {t('joinLearners')}
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/learn">{t('getStarted')}</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">{t('testimonials')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Ahmed", quote: t('testimonialsDescription') },
              { name: "Fatima", quote: t('testimonialsDescription') },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}