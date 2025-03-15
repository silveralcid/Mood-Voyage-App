import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquareText } from "lucide-react"

interface Emotion {
  id: number
  emotion: string
  need: string
  time: string
  intensity: number
}

interface RecentEmotionsProps {
  emotions: Emotion[]
}

export function RecentEmotions({ emotions }: RecentEmotionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Emotions</CardTitle>
        <CardDescription>Your latest emotional check-ins</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {emotions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.emotion}</span>
                  <Badge variant="outline" className="text-xs">
                    {item.need}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.time}</p>
              </div>
              <div className="flex items-center mt-1 sm:mt-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-6 rounded-full ${i < item.intensity ? "bg-indigo-600" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <MessageSquareText className="h-4 w-4 mr-2" />
          View All Entries
        </Button>
      </CardFooter>
    </Card>
  )
}

