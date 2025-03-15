export interface Emotion {
  id: number
  emotion: string
  need: string
  time: string
  intensity: number
  note?: string
}

export interface EmotionData {
  name: string
  joy: number
  sadness: number
  anger: number
  fear: number
}

export interface NeedsData {
  name: string
  value: number
}

export interface JournalEntry {
  id: string
  title: string
  content: string
  date: Date
  emotions: string[]
  needs: string[]
}

export interface EmotionEntry {
  date: Date
  primaryEmotion: string
  intensity: number
}

export interface EmotionDistributionData {
  name: string
  value: number
  color: string
}

export interface NeedFrequencyData {
  name: string
  frequency: number
}

export interface TimeOfDayData {
  hour: string
  joy: number
  sadness: number
  anger: number
  fear: number
}

// API response types for future backend integration
export interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// User types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

// Authentication types
export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

