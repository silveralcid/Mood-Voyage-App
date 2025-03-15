"use client"

import { useState, useEffect } from "react"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Header } from "@/components/layout/header"
import { EmotionDistribution } from "@/components/insights/emotion-distribution"
import { NeedsFrequency } from "@/components/insights/needs-frequency"
import { TimeOfDay } from "@/components/insights/time-of-day"
import { EmotionChart } from "@/components/dashboard/emotion-chart"

import { EmotionDistributionSkeleton } from "@/components/insights/emotion-distribution-skeleton"
import { NeedsFrequencySkeleton } from "@/components/insights/needs-frequency-skeleton"
import { TimeOfDaySkeleton } from "@/components/insights/time-of-day-skeleton"
import { EmotionChartSkeleton } from "@/components/dashboard/emotion-chart-skeleton"

import { emotionData, emotionDistributionData, needFrequencyData } from "@/lib/data"
import type { EmotionData, EmotionDistributionData, NeedFrequencyData, TimeOfDayData } from "@/lib/types"

export default function InsightsPage() {
  // Loading states
  const [isLoadingDistribution, setIsLoadingDistribution] = useState(true)
  const [isLoadingFrequency, setIsLoadingFrequency] = useState(true)
  const [isLoadingTimeOfDay, setIsLoadingTimeOfDay] = useState(true)
  const [isLoadingTrends, setIsLoadingTrends] = useState(true)

  // Data states
  const [distributionData, setDistributionData] = useState<EmotionDistributionData[]>([])
  const [frequencyData, setFrequencyData] = useState<NeedFrequencyData[]>([])
  const [timeOfDayData, setTimeOfDayData] = useState<TimeOfDayData[]>([])
  const [trendsData, setTrendsData] = useState<EmotionData[]>([])

  // Simulate data fetching
  useEffect(() => {
    const fetchDistributionData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1200))
        setDistributionData(emotionDistributionData)
      } catch (error) {
        console.error("Error fetching distribution data:", error)
      } finally {
        setIsLoadingDistribution(false)
      }
    }

    const fetchFrequencyData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setFrequencyData(needFrequencyData)
      } catch (error) {
        console.error("Error fetching frequency data:", error)
      } finally {
        setIsLoadingFrequency(false)
      }
    }

    const fetchTimeOfDayData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1800))
        setTimeOfDayData(timeOfDayData)
      } catch (error) {
        console.error("Error fetching time of day data:", error)
      } finally {
        setIsLoadingTimeOfDay(false)
      }
    }

    const fetchTrendsData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setTrendsData(emotionData)
      } catch (error) {
        console.error("Error fetching trends data:", error)
      } finally {
        setIsLoadingTrends(false)
      }
    }

    fetchDistributionData()
    fetchFrequencyData()
    fetchTimeOfDayData()
    fetchTrendsData()
  }, [])

  return (
    <DashboardLayout>
      <Header title="Insights" />

      <main className="p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {isLoadingDistribution ? (
            <EmotionDistributionSkeleton />
          ) : (
            <EmotionDistribution
              data={distributionData}
              title="Emotion Distribution"
              description="Breakdown of your emotions over the past month"
            />
          )}

          {isLoadingFrequency ? (
            <NeedsFrequencySkeleton />
          ) : (
            <NeedsFrequency
              data={frequencyData}
              title="Most Common Needs"
              description="Needs that appear most frequently in your entries"
            />
          )}
        </div>

        {isLoadingTimeOfDay ? (
          <TimeOfDaySkeleton />
        ) : (
          <TimeOfDay
            data={timeOfDayData}
            title="Emotions by Time of Day"
            description="How your emotions vary throughout the day"
          />
        )}

        {isLoadingTrends ? (
          <EmotionChartSkeleton />
        ) : (
          <EmotionChart
            data={trendsData}
            title="Weekly Emotion Trends"
            description="Your emotional patterns over the past week"
          />
        )}
      </main>
    </DashboardLayout>
  )
}

