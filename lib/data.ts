import type {
  Emotion,
  EmotionData,
  NeedsData,
  JournalEntry,
  EmotionEntry,
  EmotionDistributionData,
  NeedFrequencyData,
  TimeOfDayData,
} from "@/lib/types"

// Mock data for emotions
export const emotionData: EmotionData[] = [
  { name: "Mon", joy: 4, sadness: 2, anger: 1, fear: 3 },
  { name: "Tue", joy: 3, sadness: 3, anger: 2, fear: 1 },
  { name: "Wed", joy: 2, sadness: 4, anger: 3, fear: 2 },
  { name: "Thu", joy: 5, sadness: 1, anger: 0, fear: 1 },
  { name: "Fri", joy: 4, sadness: 2, anger: 1, fear: 2 },
  { name: "Sat", joy: 5, sadness: 1, anger: 0, fear: 0 },
  { name: "Sun", joy: 4, sadness: 2, anger: 1, fear: 1 },
]

// Mock data for needs
export const needsData: NeedsData[] = [
  { name: "Connection", value: 65 },
  { name: "Autonomy", value: 45 },
  { name: "Security", value: 80 },
  { name: "Meaning", value: 55 },
  { name: "Rest", value: 30 },
]

// Mock recent emotions
export const recentEmotions: Emotion[] = [
  { id: 1, emotion: "Grateful", need: "Connection", time: "Today, 10:30 AM", intensity: 4 },
  { id: 2, emotion: "Anxious", need: "Security", time: "Today, 8:15 AM", intensity: 3 },
  { id: 3, emotion: "Inspired", need: "Meaning", time: "Yesterday, 4:45 PM", intensity: 5 },
  { id: 4, emotion: "Frustrated", need: "Autonomy", time: "Yesterday, 11:20 AM", intensity: 4 },
]

// Mock reflection prompts
export const reflectionPrompts = {
  daily: [
    {
      title: "When I felt frustrated today...",
      description: "What need was not being met? How might I address this need?",
    },
    {
      title: "A moment of joy I experienced...",
      description: "What need was being fulfilled? How can I create more such moments?",
    },
  ],
  weekly: [
    {
      title: "Patterns in my emotions this week...",
      description: "What recurring needs are showing up? What strategies might help?",
    },
  ],
  monthly: [
    {
      title: "My emotional growth this month...",
      description: "How has my understanding of my needs evolved? What have I learned?",
    },
  ],
}

// Mock journal entries
export const journalEntries: JournalEntry[] = [
  {
    id: "1",
    title: "Finding peace in chaos",
    content:
      "Today was incredibly hectic at work. Deadlines piling up, meetings back-to-back, and unexpected issues arising. Despite all this, I found a moment of calm during my lunch break when I stepped outside and just breathed for five minutes.\n\nI realized how important these small moments of peace are for my wellbeing. When I returned to my desk, I felt more centered and able to approach the challenges with clarity.",
    date: new Date(2023, 6, 15),
    emotions: ["Overwhelmed", "Peaceful", "Grateful"],
    needs: ["Rest", "Balance", "Clarity"],
  },
  {
    id: "2",
    title: "Conflict with a friend",
    content:
      "Had a disagreement with Alex today about plans we made. I felt hurt when they canceled last minute, especially since I had rearranged my schedule to make time. I'm trying to understand their perspective - they mentioned being overwhelmed with work.\n\nI notice I have a need for reliability and consideration that wasn't met. Instead of reacting immediately, I took some time to process my feelings before responding.",
    date: new Date(2023, 6, 10),
    emotions: ["Hurt", "Disappointed", "Understanding"],
    needs: ["Reliability", "Consideration", "Connection"],
  },
  {
    id: "3",
    title: "Breakthrough moment",
    content:
      "I've been working on a challenging project for weeks, and today I finally had a breakthrough! The solution came to me while I was taking a shower, not actively thinking about the problem.\n\nThis reminds me how important it is to step away and let my mind rest. I felt such a surge of excitement and satisfaction when the pieces finally clicked together.",
    date: new Date(2023, 6, 5),
    emotions: ["Excited", "Proud", "Relieved"],
    needs: ["Achievement", "Growth", "Competence"],
  },
]

// Mock calendar emotion entries
export const calendarEntries: EmotionEntry[] = [
  { date: new Date(2023, 6, 1), primaryEmotion: "joy", intensity: 4 },
  { date: new Date(2023, 6, 3), primaryEmotion: "sadness", intensity: 3 },
  { date: new Date(2023, 6, 5), primaryEmotion: "joy", intensity: 5 },
  { date: new Date(2023, 6, 8), primaryEmotion: "anger", intensity: 4 },
  { date: new Date(2023, 6, 10), primaryEmotion: "fear", intensity: 3 },
  { date: new Date(2023, 6, 12), primaryEmotion: "joy", intensity: 4 },
  { date: new Date(2023, 6, 15), primaryEmotion: "sadness", intensity: 2 },
  { date: new Date(2023, 6, 18), primaryEmotion: "joy", intensity: 5 },
  { date: new Date(2023, 6, 20), primaryEmotion: "anger", intensity: 3 },
  { date: new Date(2023, 6, 22), primaryEmotion: "joy", intensity: 4 },
  { date: new Date(2023, 6, 25), primaryEmotion: "fear", intensity: 2 },
  { date: new Date(2023, 6, 28), primaryEmotion: "joy", intensity: 5 },
]

// Mock day detail entries
export const dayDetailEntries: Record<string, Emotion[]> = {
  "2023-07-15": [
    {
      id: 1,
      emotion: "Grateful",
      need: "Connection",
      time: "10:30 AM",
      intensity: 4,
      note: "Felt grateful after a good conversation with my friend",
    },
    { id: 2, emotion: "Overwhelmed", need: "Peace", time: "2:15 PM", intensity: 3, note: "Work deadlines piling up" },
    {
      id: 3,
      emotion: "Peaceful",
      need: "Rest",
      time: "6:45 PM",
      intensity: 4,
      note: "Evening meditation session helped me find calm",
    },
  ],
  "2023-07-10": [
    {
      id: 1,
      emotion: "Disappointed",
      need: "Reliability",
      time: "11:20 AM",
      intensity: 4,
      note: "Friend canceled our plans last minute",
    },
    {
      id: 2,
      emotion: "Understanding",
      need: "Empathy",
      time: "4:30 PM",
      intensity: 3,
      note: "Realized my friend is going through a tough time",
    },
  ],
}

// Mock emotion distribution data
export const emotionDistributionData: EmotionDistributionData[] = [
  { name: "Joy", value: 35, color: "#4F46E5" },
  { name: "Sadness", value: 20, color: "#60A5FA" },
  { name: "Anger", value: 15, color: "#F43F5E" },
  { name: "Fear", value: 10, color: "#F59E0B" },
  { name: "Surprise", value: 8, color: "#8B5CF6" },
  { name: "Disgust", value: 5, color: "#10B981" },
  { name: "Trust", value: 7, color: "#14B8A6" },
]

// Mock needs frequency data
export const needFrequencyData: NeedFrequencyData[] = [
  { name: "Connection", frequency: 28 },
  { name: "Autonomy", frequency: 22 },
  { name: "Security", frequency: 18 },
  { name: "Meaning", frequency: 15 },
  { name: "Rest", frequency: 12 },
  { name: "Growth", frequency: 10 },
  { name: "Play", frequency: 8 },
]

// Mock time of day data
export const timeOfDayData: TimeOfDayData[] = [
  { hour: "6 AM", joy: 2, sadness: 1, anger: 0, fear: 2 },
  { hour: "9 AM", joy: 3, sadness: 2, anger: 1, fear: 1 },
  { hour: "12 PM", joy: 4, sadness: 1, anger: 1, fear: 0 },
  { hour: "3 PM", joy: 3, sadness: 2, anger: 2, fear: 1 },
  { hour: "6 PM", joy: 4, sadness: 1, anger: 1, fear: 0 },
  { hour: "9 PM", joy: 5, sadness: 0, anger: 0, fear: 0 },
]

