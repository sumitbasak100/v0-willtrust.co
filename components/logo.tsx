import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-medium text-xl tracking-tight", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M14.5 2v2.5" />
          <path d="M4.5 7h15" />
          <path d="M14.5 22V7.5" />
          <path d="M12 22h5" />
          <path d="M9 22h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
          <path d="M12 12h2" />
          <path d="M12 16h2" />
          <path d="M4.5 7v10a3 3 0 0 0 3 3h4" />
        </svg>
      </div>
      <span className="sm:inline-block font-serif font-medium">
        WillTrust<span className="text-primary transition-colors">.co</span>
      </span>
    </div>
  )
}
