import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PageTransition } from "@/components/page-transition"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "KalaKathiravan - UI/UX Designer Lead | Creative Portfolio",
  description:
    "Portfolio of KalaKathiravan, a passionate UI/UX Designer Lead specializing in animation-based design, user-centered experiences, and modern web solutions.",
  generator: "v0.app",
  keywords: "UI/UX Designer Lead, Animation Designer, Portfolio, Web Design, User Experience, Creative Developer",
  authors: [{ name: "KalaKathiravan" }],
  openGraph: {
    title: "KalaKathiravan - UI/UX Designer Lead Portfolio",
    description:
      "Crafting beautiful, animated digital experiences that bridge the gap between user needs and business goals with innovative design solutions.",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen bg-background">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }
        >
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
