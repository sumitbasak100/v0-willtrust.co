import { Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold text-primary">WillTrust</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <h1 className="font-serif text-4xl mb-8">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
          <p>Welcome to WillTrust. By accessing our website, you agree to these terms.</p>
          <h2 className="text-primary font-serif text-2xl mt-8">Educational Purposes Only</h2>
          <p>
            The content provided on this website is for educational and informational purposes only. It does not
            constitute legal, financial, or tax advice. Use of our platform does not create an attorney-client
            relationship.
          </p>
          <h2 className="text-primary font-serif text-2xl mt-8">User Responsibility</h2>
          <p>
            You are responsible for ensuring that any information you provide is accurate and complete. Estate planning
            documents require careful consideration of individual circumstances.
          </p>
          <h2 className="text-primary font-serif text-2xl mt-8">Limitation of Liability</h2>
          <p>
            WillTrust shall not be liable for any damages arising out of or in connection with the use of our website or
            services.
          </p>
        </div>
      </div>
    </main>
  )
}
