"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Header } from "@/components/layout/header"
import { EmotionCalendar } from "@/components/calendar/emotion-calendar"
import { DayDetail } from "@/components/calendar/day-detail"
import { EmotionCalendarSkeleton } from "@/components/calendar/emotion-calendar-skeleton"
import { DayDetailSkeleton } from "@/components/calendar/day-detail-skeleton"

import { calendarEntries, dayDetailEntries } from "@/lib/data"
import type { EmotionEntry, Emotion } from "@/lib/types"

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isLoadingCalendar, setIsLoadingCalendar] = useState(true)
  const [isLoadingDayDetail, setIsLoadingDayDetail] = useState(true)
  const [calendarData, setCalendarData] = useState<EmotionEntry[]>([])
  const [dayDetailData, setDayDetailData] = useState<Record<string, Emotion[]>>({})

  // Simulate data fetching for calendar
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setCalendarData(calendarEntries)
      } catch (error) {
        console.error("Error fetching calendar data:", error)
      } finally {
        setIsLoadingCalendar(false)
      }
    }

    const fetchDayDetailData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setDayDetailData(dayDetailEntries)
      } catch (error) {
        console.error("Error fetching day detail data:", error)
      } finally {
        setIsLoadingDayDetail(false)
      }
    }

    fetchCalendarData()
    fetchDayDetailData()
  }, [])

  const handleSelectDate = async (date: Date) => {
    setSelectedDate(date)
    setIsLoadingDayDetail(true)

    try {
      // Simulate API call for the specific date
      await new Promise((resolve) => setTimeout(resolve, 800))
    } catch (error) {
      console.error("Error fetching day detail:", error)
    } finally {
      setIsLoadingDayDetail(false)
    }
  }

  // Get entries for the selected date
  const dateKey = format(selectedDate, "yyyy-MM-dd")
  const entriesForDay = dayDetailData[dateKey] || []

  return (
    <DashboardLayout>
      <Header title="Calendar" />

      <main className="p-4 md:p-6 space-y-6">
        {isLoadingCalendar ? (
          <EmotionCalendarSkeleton />
        ) : (
          <EmotionCalendar entries={calendarData} onSelectDate={handleSelectDate} />
        )}

        {isLoadingDayDetail ? <DayDetailSkeleton /> : <DayDetail date={selectedDate} entries={entriesForDay} />}
      </main>
    </DashboardLayout>
  )
}

