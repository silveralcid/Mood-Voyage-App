"use client"

import type React from "react"

import Link from "next/link"
import { LogOut, Plus, Settings, ArrowLeft } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  title: string
  showBackButton?: boolean
  showActionButton?: boolean
  actionButtonText?: string
  actionButtonIcon?: React.ReactNode
  onActionButtonClick?: () => void
  onBackButtonClick?: () => void
}

export function Header({
  title,
  showBackButton = false,
  showActionButton = false,
  actionButtonText = "Log Emotion",
  actionButtonIcon = <Plus className="h-4 w-4 mr-2" />,
  onActionButtonClick,
  onBackButtonClick,
}: HeaderProps) {
  const pathname = usePathname()

  const handleBackClick = (e: React.MouseEvent) => {
    if (onBackButtonClick) {
      e.preventDefault()
      onBackButtonClick()
    }
  }

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
      <div className="flex items-center gap-4">
        <MobileMenu pathname={pathname || ""} />

        <div className="flex items-center gap-2">
          {showBackButton && (
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              onClick={handleBackClick}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:inline">Back</span>
            </Link>
          )}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        {showActionButton && (
          <Button variant="outline" size="sm" className="hidden md:flex" onClick={onActionButtonClick}>
            {actionButtonIcon}
            {actionButtonText}
          </Button>
        )}

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
  )
}

