import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-indigo-600"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              </svg>
            </div>
            <span className="font-semibold text-lg">Mood Voyage</span>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/auth/login" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              Log in
            </Link>
            <Link href="/auth/register" className="hidden sm:inline-flex">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-6 mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                Track emotions, discover needs, grow with
                <span className="text-indigo-600"> Mood Voyage</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Develop emotional intelligence using Nonviolent Communication principles. Simplify self-awareness
                through structured insights and reflection tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/auth/register">
                  <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Emotion Tracking</h3>
                <p className="text-gray-600">Log categorized emotions throughout the day and identify patterns.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600"
                  >
                    <path d="M2 12h5" />
                    <path d="M17 12h5" />
                    <path d="M12 2v5" />
                    <path d="M12 17v5" />
                    <path d="M12 12 Z" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Needs Identification</h3>
                <p className="text-gray-600">Link emotions to underlying needs using NVC principles.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Visualization</h3>
                <p className="text-gray-600">View charts and graphs displaying emotional trends and patterns.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 text-indigo-600"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                </svg>
              </div>
              <span className="text-sm font-medium">Mood Voyage</span>
            </div>

            <div className="text-sm text-gray-500">© 2025 Mood Voyage. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

