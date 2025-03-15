"use client"

import { useState } from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface EmotionEntry {
  date: Date
  primaryEmotion: string
  intensity: number
}

interface EmotionCalendarProps {
  entries: EmotionEntry[]
  onSelectDate: (date: Date) => void
}

export function EmotionCalendar({ entries, onSelectDate }: EmotionCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const getEmotionForDay = (day: Date) => {
    return entries.find((entry) => isSameDay(entry.date, day))
  }

  const getEmotionColor = (emotion: string) => {
    const emotionColors: Record<string, string> = {
      joy: "bg-green-100 text-green-800",
      sadness: "bg-blue-100 text-blue-800",
      anger: "bg-red-100 text-red-800",
      fear: "bg-yellow-100 text-yellow-800",
      surprise: "bg-purple-100 text-purple-800",
      disgust: "bg-orange-100 text-orange-800",
      trust: "bg-teal-100 text-teal-800",
      anticipation: "bg-indigo-100 text-indigo-800",
    }

    return emotionColors[emotion.toLowerCase()] || "bg-gray-100 text-gray-800"
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Emotion Calendar</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <span className="font-medium">{format(currentMonth, "MMMM yyyy")}</span>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="py-2 text-sm font-medium">
              {day}
            </div>
          ))}

          {Array.from({ length: monthStart.getDay() }).map((_, index) => (
            <div key={`empty-start-${index}`} className="p-2" />
          ))}

          {days.map((day) => {
            const emotion = getEmotionForDay(day)
            return (
              <button
                key={day.toString()}
                className={cn(
                  "aspect-square p-2 relative rounded-md hover:bg-muted",
                  emotion ? getEmotionColor(emotion.primaryEmotion) : "",
                )}
                onClick={() => onSelectDate(day)}
              >
                <time dateTime={format(day, "yyyy-MM-dd")} className="text-sm">
                  {format(day, "d")}
                </time>
                {emotion && <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-current" />}
              </button>
            )
          })}

          {Array.from({ length: 6 - monthEnd.getDay() }).map((_, index) => (
            <div key={`empty-end-${index}`} className="p-2" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

