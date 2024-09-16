import QuranVerseVocabularyLearning from '@/components/QuranVerseVocabularyLearning'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Learn() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Learn Quranic Arabic</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground mb-4">
            Explore Quranic verses, learn new vocabulary, and deepen your understanding of the Arabic language.
          </p>
        </CardContent>
      </Card>
      <QuranVerseVocabularyLearning />
    </div>
  )
}