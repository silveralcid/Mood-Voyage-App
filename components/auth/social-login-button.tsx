"use client"

import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface SocialLoginButtonProps {
  provider: string
  icon: LucideIcon
  onClick?: () => void
}

export function SocialLoginButton({ provider, icon: Icon, onClick }: SocialLoginButtonProps) {
  return (
    <Button type="button" variant="outline" className="w-full flex items-center justify-center gap-2" onClick={onClick}>
      <Icon className="h-5 w-5" />
      <span>Continue with {provider}</span>
    </Button>
  )
}

