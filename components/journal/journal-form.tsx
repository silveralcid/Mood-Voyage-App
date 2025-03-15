"use client"

import { SharedJournalForm } from "@/components/journal/shared-journal-form"

interface JournalFormProps {
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
  isLoading?: boolean
}

export function JournalForm({
  onSubmit,
  onCancel,
  initialData,
  isEditing = false,
  isLoading = false,
}: JournalFormProps) {
  return (
    <SharedJournalForm
      onSubmit={onSubmit}
      onCancel={onCancel}
      initialData={initialData}
      isEditing={isEditing}
      isLoading={isLoading}
    />
  )
}

