"use client"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

interface EmotionData {
  name: string
  joy: number
  sadness: number
  anger: number
  fear: number
}

interface EmotionChartProps {
  data: EmotionData[]
  title?: string
  description?: string
  className?: string
}

export function EmotionChart({
  data,
  title = "Emotion Trends",
  description = "Your emotional journey over time",
  className,
}: EmotionChartProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] sm:h-[300px]">
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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
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

