"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl font-bold text-primary">Willtrust.co</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/what-is-a-will"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Wills
            </Link>
            <Link
              href="/what-is-a-trust"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Trusts
            </Link>
            <Link
              href="/what-is-probate"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Probate
            </Link>
            <Link
              href="/examples"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Examples
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90 cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
