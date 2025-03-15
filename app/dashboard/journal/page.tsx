"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { JournalEntry } from "@/components/journal/journal-entry"
import { JournalForm } from "@/components/journal/journal-form"
import { JournalEntrySkeleton } from "@/components/journal/journal-entry-skeleton"

import { journalEntries } from "@/lib/data"
import type { JournalEntry as JournalEntryType } from "@/lib/types"

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntryType[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingEntry, setEditingEntry] = useState<JournalEntryType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Simulate data fetching
  useEffect(() => {
    const fetchJournalEntries = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setEntries(journalEntries)
      } catch (error) {
        console.error("Error fetching journal entries:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJournalEntries()
  }, [])

  const handleNewEntry = () => {
    setEditingEntry(null)
    setShowForm(true)
  }

  const handleEditEntry = (id: string) => {
    const entry = entries.find((e) => e.id === id)
    if (entry) {
      setEditingEntry(entry)
      setShowForm(true)
    }
  }

  const handleDeleteEntry = async (id: string) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setEntries(entries.filter((entry) => entry.id !== id))
    } catch (error) {
      console.error("Error deleting entry:", error)
    }
  }

  const handleSubmitEntry = async (data: {
    title: string
    content: string
    emotions: string[]
    needs: string[]
  }) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (editingEntry) {
        // Update existing entry
        setEntries(
          entries.map((entry) =>
            entry.id === editingEntry.id
              ? {
                  ...entry,
                  title: data.title,
                  content: data.content,
                  emotions: data.emotions,
                  needs: data.needs,
                }
              : entry,
          ),
        )
      } else {
        // Add new entry
        const newEntry: JournalEntryType = {
          id: Date.now().toString(),
          title: data.title,
          content: data.content,
          date: new Date(),
          emotions: data.emotions,
          needs: data.needs,
        }
        setEntries([newEntry, ...entries])
      }
    } catch (error) {
      console.error("Error submitting entry:", error)
    } finally {
      setIsSubmitting(false)
      setShowForm(false)
      setEditingEntry(null)
    }
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingEntry(null)
  }

  return (
    <DashboardLayout>
      <Header
        title="Journal"
        showActionButton
        actionButtonText="New Entry"
        actionButtonIcon={<Plus className="h-4 w-4 mr-2" />}
        onActionButtonClick={handleNewEntry}
      />

      <main className="p-4 md:p-6 space-y-6">
        {showForm ? (
          <JournalForm
            onSubmit={handleSubmitEntry}
            onCancel={handleCancelForm}
            initialData={editingEntry || undefined}
            isEditing={!!editingEntry}
            isLoading={isSubmitting}
          />
        ) : isLoading ? (
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <JournalEntrySkeleton key={index} />
            ))}
          </div>
        ) : entries.length > 0 ? (
          <div className="space-y-6">
            {entries.map((entry) => (
              <JournalEntry
                key={entry.id}
                id={entry.id}
                title={entry.title}
                content={entry.content}
                date={entry.date}
                emotions={entry.emotions}
                needs={entry.needs}
                onEdit={handleEditEntry}
                onDelete={handleDeleteEntry}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No journal entries yet</h3>
            <p className="text-muted-foreground mb-6">Start recording your thoughts and emotions</p>
            <Button onClick={handleNewEntry} className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Entry
            </Button>
          </div>
        )}
      </main>
    </DashboardLayout>
  )
}

