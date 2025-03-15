import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface NeedsChartSkeletonProps {
  className?: string
}

export function NeedsChartSkeleton({ className }: NeedsChartSkeletonProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-36" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-56" />
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

