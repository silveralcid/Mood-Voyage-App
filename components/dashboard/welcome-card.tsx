"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"

interface WelcomeCardProps {
  name: string
  onLogEmotionClick?: () => void
}

export function WelcomeCard({ name, onLogEmotionClick }: WelcomeCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Welcome back, {name}</h2>
            <p className="text-muted-foreground mt-1">Track your emotions and discover your needs</p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={onLogEmotionClick}>
            <Plus className="h-4 w-4 mr-2" />
            Log New Emotion
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

