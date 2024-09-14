import QuranVerseVocabularyLearning from '@/components/QuranVerseVocabularyLearning'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Learn() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Learn Quranic Arabic</CardTitle>
        </CardHeader>
        <CardContent>
          <QuranVerseVocabularyLearning />
        </CardContent>
      </Card>
    </div>
  )
}