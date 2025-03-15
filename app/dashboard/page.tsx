"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  ChevronDown,
  Edit3,
  Home,
  LogOut,
  Menu,
  MessageSquareText,
  Plus,
  Settings,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Chart } from "@/components/ui/chart"

// Mock data for emotions
const emotionData = [
  { name: "Mon", joy: 4, sadness: 2, anger: 1, fear: 3 },
  { name: "Tue", joy: 3, sadness: 3, anger: 2, fear: 1 },
  { name: "Wed", joy: 2, sadness: 4, anger: 3, fear: 2 },
  { name: "Thu", joy: 5, sadness: 1, anger: 0, fear: 1 },
  { name: "Fri", joy: 4, sadness: 2, anger: 1, fear: 2 },
  { name: "Sat", joy: 5, sadness: 1, anger: 0, fear: 0 },
  { name: "Sun", joy: 4, sadness: 2, anger: 1, fear: 1 },
]

// Mock data for needs
const needsData = [
  { name: "Connection", value: 65 },
  { name: "Autonomy", value: 45 },
  { name: "Security", value: 80 },
  { name: "Meaning", value: 55 },
  { name: "Rest", value: 30 },
]

// Mock recent emotions
const recentEmotions = [
  { id: 1, emotion: "Grateful", need: "Connection", time: "Today, 10:30 AM", intensity: 4 },
  { id: 2, emotion: "Anxious", need: "Security", time: "Today, 8:15 AM", intensity: 3 },
  { id: 3, emotion: "Inspired", need: "Meaning", time: "Yesterday, 4:45 PM", intensity: 5 },
  { id: 4, emotion: "Frustrated", need: "Autonomy", time: "Yesterday, 11:20 AM", intensity: 4 },
]

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar for desktop */}
        <Sidebar className="hidden md:flex">
          <SidebarHeader className="border-b px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-indigo-600"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                </svg>
              </div>
              <span className="font-semibold text-lg">Mood Voyage</span>
            </div>
          </SidebarHeader>

          <SidebarContent className="px-4 py-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/journal">
                    <Edit3 className="h-5 w-5" />
                    <span>Journal</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/insights">
                    <BarChart3 className="h-5 w-5" />
                    <span>Insights</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/calendar">
                    <Calendar className="h-5 w-5" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="border-t px-4 py-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start px-2">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4 mr-2" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Mobile menu */}
        <div className={`fixed inset-0 z-50 bg-background md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-indigo-600"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                </svg>
              </div>
              <span className="font-semibold text-lg">Mood Voyage</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="px-4 py-6">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-md bg-indigo-50 px-3 py-2 text-indigo-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>

              <Link
                href="/dashboard/journal"
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Edit3 className="h-5 w-5" />
                <span>Journal</span>
              </Link>

              <Link
                href="/dashboard/insights"
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BarChart3 className="h-5 w-5" />
                <span>Insights</span>
              </Link>

              <Link
                href="/dashboard/calendar"
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="h-5 w-5" />
                <span>Calendar</span>
              </Link>
            </nav>

            <div className="mt-6 border-t pt-6">
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>

              <button className="mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Plus className="h-4 w-4 mr-2" />
                Log Emotion
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main content */}
          <main className="p-4 md:p-6 space-y-6">
            {/* Welcome card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">Welcome back, John</h2>
                    <p className="text-muted-foreground mt-1">Track your emotions and discover your needs</p>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Log New Emotion
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats and charts */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Emotion trends */}
              <Card className="col-span-full lg:col-span-2">
                <CardHeader>
                  <CardTitle>Emotion Trends</CardTitle>
                  <CardDescription>Your emotional journey over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] sm:h-[300px]">
                    <Chart>
                      <Chart.Line
                        data={emotionData}
                        dataKey="name"
                        categories={["joy", "sadness", "anger", "fear"]}
                        colors={["#4F46E5", "#60A5FA", "#F43F5E", "#F59E0B"]}
                        valueFormatter={(value) => `${value}`}
                        showLegend
                        showXAxis
                        showYAxis
                        showGridLines
                      />
                    </Chart>
                  </div>
                </CardContent>
              </Card>

              {/* Needs analysis */}
              <Card>
                <CardHeader>
                  <CardTitle>Needs Analysis</CardTitle>
                  <CardDescription>Your underlying needs based on NVC</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] sm:h-[300px]">
                    <Chart>
                      <Chart.Bar
                        data={needsData}
                        dataKey="name"
                        categories={["value"]}
                        colors={["#4F46E5"]}
                        valueFormatter={(value) => `${value}%`}
                        showLegend={false}
                        showXAxis
                        showYAxis
                        showGridLines
                      />
                    </Chart>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent emotions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Emotions</CardTitle>
                <CardDescription>Your latest emotional check-ins</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {recentEmotions.map((item) => (
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

            {/* Journal prompts */}
            <Card>
              <CardHeader>
                <CardTitle>NVC-Guided Reflection</CardTitle>
                <CardDescription>Deepen your emotional awareness with these prompts</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="daily">
                  <TabsList className="mb-4">
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="daily" className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">When I felt frustrated today...</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        What need was not being met? How might I address this need?
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Reflect on this
                      </Button>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">A moment of joy I experienced...</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        What need was being fulfilled? How can I create more such moments?
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Reflect on this
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="weekly" className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Patterns in my emotions this week...</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        What recurring needs are showing up? What strategies might help?
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Reflect on this
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="monthly" className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">My emotional growth this month...</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        How has my understanding of my needs evolved? What have I learned?
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Reflect on this
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

