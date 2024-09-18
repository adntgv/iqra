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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            {t('description')}
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <Link href="/learn">
              {t('startJourney')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: BookOpen, title: t('interactiveLessons'), description: t('interactiveLessonsDescription') },
            { icon: Languages, title: t('vocabularyBuilding'), description: t('vocabularyBuildingDescription') },
            { icon: Star, title: t('trackProgress'), description: t('trackProgressDescription') },
          ].map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">{t('testimonials')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Ahmed", quote: t('testimonialsDescription') },
              { name: "Fatima", quote: t('testimonialsDescription') },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-secondary">
                <CardContent className="pt-8">
                  <p className="italic mb-4 text-lg">"{testimonial.quote}"</p>
                  <p className="font-semibold text-right">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mb-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl text-center">{t('beginJourney')}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-8 text-lg">
              {t('joinLearners')}
            </p>
            <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-4">
              <Link href="/learn">{t('getStarted')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}