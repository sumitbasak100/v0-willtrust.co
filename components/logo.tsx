import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-xl tracking-tight", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="M8 11h8" />
          <path d="M12 8v6" />
        </svg>
      </div>
      <span className="hidden sm:inline-block">
        Trust<span className="text-primary">&</span>Will
      </span>
    </div>
  )
}
