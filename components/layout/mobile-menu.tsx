"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Calendar, Edit3, Home, LogOut, Menu, Settings, X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  pathname: string
}

export function MobileMenu({ pathname }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile menu overlay */}
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
              className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                pathname === "/dashboard" ? "bg-indigo-50 text-indigo-900" : "hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/dashboard/journal"
              className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                pathname === "/dashboard/journal" ? "bg-indigo-50 text-indigo-900" : "hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Edit3 className="h-5 w-5" />
              <span>Journal</span>
            </Link>

            <Link
              href="/dashboard/insights"
              className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                pathname === "/dashboard/insights" ? "bg-indigo-50 text-indigo-900" : "hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Insights</span>
            </Link>

            <Link
              href="/dashboard/calendar"
              className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                pathname === "/dashboard/calendar" ? "bg-indigo-50 text-indigo-900" : "hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              <span>Calendar</span>
            </Link>
          </nav>

          <div className="mt-6 border-t pt-6">
            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                pathname === "/dashboard/settings" ? "bg-indigo-50 text-indigo-900" : "hover:bg-muted"
              }`}
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
    </>
  )
}

