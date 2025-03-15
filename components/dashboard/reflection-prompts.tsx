"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit3 } from "lucide-react"
import { SharedJournalForm } from "@/components/journal/shared-journal-form"

interface PromptItem {
  title: string
  description: string
}

interface ReflectionPromptsProps {
  dailyPrompts: PromptItem[]
  weeklyPrompts: PromptItem[]
  monthlyPrompts: PromptItem[]
  onSubmitReflection?: (data: {
    title: string
    content: string
    emotions: string[]
    needs: string[]
  }) => void
}

export function ReflectionPrompts({
  dailyPrompts,
  weeklyPrompts,
  monthlyPrompts,
  onSubmitReflection,
}: ReflectionPromptsProps) {
  const [activeTab, setActiveTab] = useState("daily")
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null)

  const handleReflect = (prompt: PromptItem) => {
    setSelectedPrompt(prompt)
  }

  const handleCancelReflection = () => {
    setSelectedPrompt(null)
  }

  const handleSubmitReflection = (data: {
    title: string
    content: string
    emotions: string[]
    needs: string[]
  }) => {
    if (onSubmitReflection) {
      onSubmitReflection(data)
    }
    setSelectedPrompt(null)
  }

  if (selectedPrompt) {
    return (
      <SharedJournalForm
        onSubmit={handleSubmitReflection}
        onCancel={handleCancelReflection}
        initialData={{
          title: selectedPrompt.title,
          content: "",
          emotions: [],
          needs: [],
        }}
        promptTitle="NVC-Guided Reflection"
        promptDescription={selectedPrompt.description}
      />
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>NVC-Guided Reflection</CardTitle>
        <CardDescription>Deepen your emotional awareness with these prompts</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="daily" className="space-y-4">
            {dailyPrompts.map((prompt, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{prompt.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{prompt.description}</p>
                <Button variant="outline" size="sm" className="mt-3" onClick={() => handleReflect(prompt)}>
                  <Edit3 className="h-4 w-4 mr-2" />
                  Reflect on this
                </Button>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="weekly" className="space-y-4">
            {weeklyPrompts.map((prompt, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{prompt.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{prompt.description}</p>
                <Button variant="outline" size="sm" className="mt-3" onClick={() => handleReflect(prompt)}>
                  <Edit3 className="h-4 w-4 mr-2" />
                  Reflect on this
                </Button>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="monthly" className="space-y-4">
            {monthlyPrompts.map((prompt, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{prompt.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{prompt.description}</p>
                <Button variant="outline" size="sm" className="mt-3" onClick={() => handleReflect(prompt)}>
                  <Edit3 className="h-4 w-4 mr-2" />
                  Reflect on this
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

