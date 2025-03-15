import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface EmotionChartSkeletonProps {
  className?: string
}

export function EmotionChartSkeleton({ className }: EmotionChartSkeletonProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-48" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-64" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] sm:h-[300px] relative">
          <Skeleton className="absolute inset-0" />
        </div>
      </CardContent>
    </Card>
  )
}

