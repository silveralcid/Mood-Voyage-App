import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EmotionEntry {
  id: string
  time: string
  emotion: string
  need: string
  intensity: number
  note?: string
}

interface DayDetailProps {
  date: Date
  entries: EmotionEntry[]
}

export function DayDetail({ date, entries }: DayDetailProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{format(date, "EEEE, MMMM d, yyyy")}</CardTitle>
        <CardDescription>
          {entries.length > 0
            ? `${entries.length} emotion ${entries.length === 1 ? "entry" : "entries"} recorded`
            : "No emotions recorded for this day"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {entries.length > 0 ? (
          <div className="space-y-4">
            {entries.map((entry) => (
              <div key={entry.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{entry.emotion}</span>
                    <Badge variant="outline" className="text-xs">
                      {entry.need}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{entry.time}</span>
                </div>

                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-2">Intensity:</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-6 rounded-full ${i < entry.intensity ? "bg-indigo-600" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                </div>

                {entry.note && <p className="text-sm mt-2">{entry.note}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No emotion entries for this day.</p>
            <p className="text-sm mt-2">Click "Log New Emotion" to add an entry.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

