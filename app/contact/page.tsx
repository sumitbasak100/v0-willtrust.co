"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle2, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("loading")
    setErrorMessage("")

    const formData = new FormData(form)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Get in Touch</p>
              <h1 className="font-serif text-5xl mb-6">Let&apos;s Start a Conversation</h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Have questions about estate planning? Our specialists are here to help you navigate the process with
                clarity and compassion.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-1 text-foreground">Secure Inquiries</h3>
                    <p className="text-muted-foreground">
                      Use our secure portal to the right for all legal and general inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 lg:p-10 shadow-2xl border-border bg-white">
              {status === "success" ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h2 className="text-2xl font-serif mb-4">Message Received</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. One of our estate planning specialists will be in touch shortly.
                  </p>
                  <Button onClick={() => setStatus("idle")} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : status === "error" ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-6" />
                  <h2 className="text-2xl font-serif mb-4">Something Went Wrong</h2>
                  <p className="text-muted-foreground mb-8">
                    {errorMessage || "We couldn't send your message. Please try again or contact us directly."}
                  </p>
                  <Button onClick={() => setStatus("idle")} variant="outline" className="cursor-pointer">
                    Try Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="5902ed70-bb62-44e7-9b20-37c4e78df60e" />
                  <input type="hidden" name="subject" value="New Contact Form Submission from Willtrust.co" />
                  <input type="hidden" name="from_name" value="Willtrust.co Contact Form" />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input name="first_name" placeholder="Jane" required className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input name="last_name" placeholder="Doe" required className="bg-background border-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                    <select
                      name="inquiry_type"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
                    >
                      <option>General Estate Planning</option>
                      <option>Will Creation</option>
                      <option>Living Trust Setup</option>
                      <option>Probate Assistance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">How can we help?</label>
                    <Textarea
                      name="message"
                      placeholder="Share a few details about your situation..."
                      className="min-h-[120px] bg-background border-border"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary text-white text-lg hover:bg-primary/90 transition-all cursor-pointer"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Secure Message"}
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-wider">
                    Your information is protected by industry-standard encryption.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
