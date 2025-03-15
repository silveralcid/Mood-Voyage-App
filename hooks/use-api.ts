"use client"

import { useState } from "react"
import type { ApiResponse } from "@/lib/types"

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  body?: any
  headers?: Record<string, string>
}

interface UseApiOptions<T> {
  initialData?: T
  mockData?: T
  mockDelay?: number
  useMock?: boolean
}

export function useApi<T>(endpoint: string, options: UseApiOptions<T> = {}) {
  const { initialData, mockData, mockDelay = 1000, useMock = process.env.NODE_ENV === "development" } = options

  const [data, setData] = useState<T | undefined>(initialData)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async (fetchOptions: FetchOptions = {}) => {
    setIsLoading(true)
    setError(null)

    try {
      if (useMock && mockData) {
        // Use mock data in development
        await new Promise((resolve) => setTimeout(resolve, mockDelay))
        setData(mockData)
        return mockData
      }

      // In a real app, this would be a fetch call to the API
      const response = await fetch(`/api/${endpoint}`, {
        method: fetchOptions.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...fetchOptions.headers,
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : undefined,
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const result: ApiResponse<T> = await response.json()
      setData(result.data)

      return result.data
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An unknown error occurred")
      setError(error)
      return undefined
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    error,
    isLoading,
    fetchData,
    setData,
  }
}

// Example usage:
// const { data, error, isLoading, fetchData } = useApi<EmotionData[]>("emotions", {
//   mockData: emotionData,
//   mockDelay: 1500
// });

