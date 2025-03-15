"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Loader2 } from "lucide-react"

interface SharedJournalFormProps {
  onSubmit: (data: {
    title: string
    content: string
    emotions: string[]
    needs: string[]
  }) => void
  onCancel?: () => void
  initialData?: {
    title: string
    content: string
    emotions: string[]
    needs: string[]
  }
  isEditing?: boolean
  promptTitle?: string
  promptDescription?: string
  isLoading?: boolean
}

export function SharedJournalForm({
  onSubmit,
  onCancel,
  initialData,
  isEditing = false,
  promptTitle,
  promptDescription,
  isLoading = false,
}: SharedJournalFormProps) {
  const [title, setTitle] = useState(initialData?.title || "")
  const [content, setContent] = useState(initialData?.content || "")
  const [currentEmotion, setCurrentEmotion] = useState("")
  const [emotions, setEmotions] = useState<string[]>(initialData?.emotions || [])
  const [currentNeed, setCurrentNeed] = useState("")
  const [needs, setNeeds] = useState<string[]>(initialData?.needs || [])

  const handleAddEmotion = () => {
    if (currentEmotion.trim() && !emotions.includes(currentEmotion.trim())) {
      setEmotions([...emotions, currentEmotion.trim()])
      setCurrentEmotion("")
    }
  }

  const handleRemoveEmotion = (emotion: string) => {
    setEmotions(emotions.filter((e) => e !== emotion))
  }

  const handleAddNeed = () => {
    if (currentNeed.trim() && !needs.includes(currentNeed.trim())) {
      setNeeds([...needs, currentNeed.trim()])
      setCurrentNeed("")
    }
  }

  const handleRemoveNeed = (need: string) => {
    setNeeds(needs.filter((n) => n !== need))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      title,
      content,
      emotions,
      needs,
    })
  }

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>{promptTitle || (isEditing ? "Edit Journal Entry" : "New Journal Entry")}</CardTitle>
          <CardDescription>
            {promptDescription || "Record your thoughts and feelings to gain insights into your emotional patterns"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Give your entry a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">What's on your mind?</Label>
            <Textarea
              id="content"
              placeholder="Write about your feelings, experiences, or reflections..."
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label>Emotions</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {emotions.map((emotion, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {emotion}
                  <button
                    type="button"
                    onClick={() => handleRemoveEmotion(emotion)}
                    className="rounded-full hover:bg-muted p-0.5"
                    disabled={isLoading}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {emotion}</span>
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add an emotion (e.g., joy, anger, fear)"
                value={currentEmotion}
                onChange={(e) => setCurrentEmotion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddEmotion()
                  }
                }}
                disabled={isLoading}
              />
              <Button type="button" variant="outline" onClick={handleAddEmotion} disabled={isLoading}>
                Add
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Needs (NVC)</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {needs.map((need, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  {need}
                  <button
                    type="button"
                    onClick={() => handleRemoveNeed(need)}
                    className="rounded-full hover:bg-muted p-0.5"
                    disabled={isLoading}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {need}</span>
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add a need (e.g., connection, autonomy, security)"
                value={currentNeed}
                onChange={(e) => setCurrentNeed(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddNeed()
                  }
                }}
                disabled={isLoading}
              />
              <Button type="button" variant="outline" onClick={handleAddNeed} disabled={isLoading}>
                Add
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
              Cancel
            </Button>
          )}
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 ml-auto" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEditing ? "Updating..." : "Saving..."}
              </>
            ) : isEditing ? (
              "Update Entry"
            ) : (
              "Save Entry"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

