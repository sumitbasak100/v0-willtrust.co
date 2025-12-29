"use client"

import Link from "next/link"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/what-is-a-will", label: "Wills" },
    { href: "/what-is-a-trust", label: "Trusts" },
    { href: "/what-is-probate", label: "Probate" },
    { href: "/examples", label: "Examples" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <Shield className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl font-bold text-primary">Willtrust.co</span>
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button size="sm" className="bg-primary text-white hover:bg-primary/90 cursor-pointer">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-primary text-white hover:bg-primary/90 cursor-pointer mt-2">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
