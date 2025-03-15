"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Header } from "@/components/layout/header"
import { WelcomeCard } from "@/components/dashboard/welcome-card"
import { EmotionChart } from "@/components/dashboard/emotion-chart"
import { NeedsChart } from "@/components/dashboard/needs-chart"
import { RecentEmotions } from "@/components/dashboard/recent-emotions"
import { ReflectionPrompts } from "@/components/dashboard/reflection-prompts"
import { SharedJournalForm } from "@/components/journal/shared-journal-form"

import { EmotionChartSkeleton } from "@/components/dashboard/emotion-chart-skeleton"
import { NeedsChartSkeleton } from "@/components/dashboard/needs-chart-skeleton"
import { RecentEmotionsSkeleton } from "@/components/dashboard/recent-emotions-skeleton"
import { ReflectionPromptsSkeleton } from "@/components/dashboard/reflection-prompts-skeleton"

import { emotionData, needsData, recentEmotions, reflectionPrompts } from "@/lib/data"
import type { Emotion, EmotionData, NeedsData } from "@/lib/types"

export default function DashboardPage() {
  const router = useRouter()
  const [showJournalForm, setShowJournalForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Loading states
  const [isLoadingEmotionData, setIsLoadingEmotionData] = useState(true)
  const [isLoadingNeedsData, setIsLoadingNeedsData] = useState(true)
  const [isLoadingRecentEmotions, setIsLoadingRecentEmotions] = useState(true)
  const [isLoadingReflectionPrompts, setIsLoadingReflectionPrompts] = useState(true)

  // Data states
  const [emotionChartData, setEmotionChartData] = useState<EmotionData[]>([])
  const [needsChartData, setNeedsChartData] = useState<NeedsData[]>([])
  const [recentEmotionsData, setRecentEmotionsData] = useState<Emotion[]>([])

  // Simulate data fetching
  useEffect(() => {
    const fetchEmotionData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setEmotionChartData(emotionData)
      } catch (error) {
        console.error("Error fetching emotion data:", error)
      } finally {
        setIsLoadingEmotionData(false)
      }
    }

    const fetchNeedsData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setNeedsChartData(needsData)
      } catch (error) {
        console.error("Error fetching needs data:", error)
      } finally {
        setIsLoadingNeedsData(false)
      }
    }

    const fetchRecentEmotions = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setRecentEmotionsData(recentEmotions)
      } catch (error) {
        console.error("Error fetching recent emotions:", error)
      } finally {
        setIsLoadingRecentEmotions(false)
      }
    }

    const fetchReflectionPrompts = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800))
      } catch (error) {
        console.error("Error fetching reflection prompts:", error)
      } finally {
        setIsLoadingReflectionPrompts(false)
      }
    }

    fetchEmotionData()
    fetchNeedsData()
    fetchRecentEmotions()
    fetchReflectionPrompts()
  }, [])

  const handleLogEmotion = () => {
    setShowJournalForm(true)
  }

  const handleCancelJournal = () => {
    setShowJournalForm(false)
  }

  const handleSubmitJournal = async (data: {
    title: string
    content: string
    emotions: string[]
    needs: string[]
  }) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, this would be an API call to save the journal entry
      console.log("Journal entry submitted:", data)

      // Redirect to journal page
      router.push("/dashboard/journal")
    } catch (error) {
      console.error("Error submitting journal entry:", error)
    } finally {
      setIsSubmitting(false)
      setShowJournalForm(false)
    }
  }

  const handleSubmitReflection = async (data: {
    title: string
    content: string
    emotions: string[]
    needs: string[]
  }) => {
    // Handle reflection submission the same way as journal entries
    await handleSubmitJournal(data)
  }

  if (showJournalForm) {
    return (
      <DashboardLayout>
        <Header title="Log Emotion" showBackButton onBackButtonClick={() => setShowJournalForm(false)} />

        <main className="p-4 md:p-6">
          <SharedJournalForm onSubmit={handleSubmitJournal} onCancel={handleCancelJournal} isLoading={isSubmitting} />
        </main>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <Header
        title="Dashboard"
        showActionButton
        actionButtonText="Log Emotion"
        actionButtonIcon={<Plus className="h-4 w-4 mr-2" />}
        onActionButtonClick={handleLogEmotion}
      />

      <main className="p-4 md:p-6 space-y-6">
        <WelcomeCard name="John" onLogEmotionClick={handleLogEmotion} />

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {isLoadingEmotionData ? (
            <EmotionChartSkeleton className="lg:col-span-2" />
          ) : (
            <EmotionChart
              data={emotionChartData}
              title="Emotion Trends"
              description="Your emotional journey over the past week"
              className="lg:col-span-2"
            />
          )}

          {isLoadingNeedsData ? (
            <NeedsChartSkeleton />
          ) : (
            <NeedsChart data={needsChartData} title="Needs Analysis" description="Your underlying needs based on NVC" />
          )}
        </div>

        {isLoadingRecentEmotions ? <RecentEmotionsSkeleton /> : <RecentEmotions emotions={recentEmotionsData} />}

        {isLoadingReflectionPrompts ? (
          <ReflectionPromptsSkeleton />
        ) : (
          <ReflectionPrompts
            dailyPrompts={reflectionPrompts.daily}
            weeklyPrompts={reflectionPrompts.weekly}
            monthlyPrompts={reflectionPrompts.monthly}
            onSubmitReflection={handleSubmitReflection}
          />
        )}
      </main>
    </DashboardLayout>
  )
}

