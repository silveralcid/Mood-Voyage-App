"use client"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface NeedData {
  name: string
  frequency: number
}

interface NeedsFrequencyProps {
  data: NeedData[]
  title?: string
  description?: string
}

export function NeedsFrequency({
  data,
  title = "Needs Frequency",
  description = "How often different needs appear in your emotions",
}: NeedsFrequencyProps) {
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
              frequency: {
                label: "Frequency",
                color: "#4F46E5",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="frequency" fill="var(--color-frequency)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

