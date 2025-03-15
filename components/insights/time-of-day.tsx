"use client"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface TimeData {
  hour: string
  joy: number
  sadness: number
  anger: number
  fear: number
}

interface TimeOfDayProps {
  data: TimeData[]
  title?: string
  description?: string
}

export function TimeOfDay({
  data,
  title = "Emotions by Time of Day",
  description = "How your emotions vary throughout the day",
}: TimeOfDayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer
            config={{
              joy: {
                label: "Joy",
                color: "#4F46E5",
              },
              sadness: {
                label: "Sadness",
                color: "#60A5FA",
              },
              anger: {
                label: "Anger",
                color: "#F43F5E",
              },
              fear: {
                label: "Fear",
                color: "#F59E0B",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="joy" stroke="var(--color-joy)" strokeWidth={2} />
                <Line type="monotone" dataKey="sadness" stroke="var(--color-sadness)" strokeWidth={2} />
                <Line type="monotone" dataKey="anger" stroke="var(--color-anger)" strokeWidth={2} />
                <Line type="monotone" dataKey="fear" stroke="var(--color-fear)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

