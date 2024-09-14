import Link from 'next/link';
import { ArrowRight, BookOpen, Languages, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Welcome to Iqra
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Embark on a journey to learn Arabic and understand the Quran through interactive lessons and vocabulary building.
          </p>
          <Button asChild size="lg">
            <Link href="/learn">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: BookOpen, title: "Interactive Lessons", description: "Engage with our carefully crafted lessons designed to make learning Arabic intuitive and enjoyable." },
            { icon: Languages, title: "Vocabulary Building", description: "Expand your Arabic vocabulary with context-based learning, focusing on words used in the Quran." },
            { icon: Star, title: "Track Progress", description: "Monitor your learning journey with our built-in progress tracking system." },
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

        <Card className="mb-16 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-center">Begin Your Quranic Journey Today</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Join thousands of learners who have deepened their understanding of the Quran through our platform.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/learn">Get Started Now</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">What Our Learners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Ahmed", quote: "Iqra has transformed my understanding of the Quran. The interactive lessons are engaging and effective." },
              { name: "Fatima", quote: "The vocabulary building feature is incredible. I've expanded my Arabic vocabulary significantly." },
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

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Iqra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}