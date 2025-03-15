"use client"

import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"

interface JournalEntryProps {
  id: string
  title: string
  content: string
  date: Date
  emotions: string[]
  needs: string[]
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export function JournalEntry({ id, title, content, date, emotions, needs, onEdit, onDelete }: JournalEntryProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{formatDistanceToNow(date, { addSuffix: true })}</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={() => onEdit?.(id)}>
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => onDelete?.(id)}>
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line mb-4">{content}</p>
        <div className="flex flex-wrap gap-2">
          {emotions.map((emotion, index) => (
            <Badge key={`emotion-${index}`} variant="secondary">
              {emotion}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex flex-col items-start">
        <p className="text-sm font-medium mb-2">Needs identified:</p>
        <div className="flex flex-wrap gap-2">
          {needs.map((need, index) => (
            <Badge key={`need-${index}`} variant="outline">
              {need}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

