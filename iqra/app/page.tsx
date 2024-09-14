import Link from 'next/link';
import { BookOpen, Languages, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            Welcome to Iqra
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Embark on a journey to learn Arabic and understand the Quran through interactive lessons and vocabulary building.
          </p>
          <Link href="/learn" className="group relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-600 rounded-full shadow-md">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
              <ArrowRight className="w-6 h-6" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">Start Your Journey</span>
            <span className="relative invisible">Start Your Journey</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: BookOpen, title: "Interactive Lessons", description: "Engage with our carefully crafted lessons designed to make learning Arabic intuitive and enjoyable." },
            { icon: Languages, title: "Vocabulary Building", description: "Expand your Arabic vocabulary with context-based learning, focusing on words used in the Quran." },
            { icon: Star, title: "Track Progress", description: "Monitor your learning journey with our built-in progress tracking system." },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="text-blue-500 mb-4">
                <feature.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-lg shadow-lg text-white mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Begin Your Quranic Journey Today</h2>
          <p className="text-center mb-6">
            Join thousands of learners who have deepened their understanding of the Quran through our platform.
          </p>
          <div className="text-center">
            <Link href="/learn" className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Get Started Now
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">What Our Learners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Ahmed", quote: "Iqra has transformed my understanding of the Quran. The interactive lessons are engaging and effective." },
              { name: "Fatima", quote: "The vocabulary building feature is incredible. I've expanded my Arabic vocabulary significantly." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md italic">
                <p className="mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Iqra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}