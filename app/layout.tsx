import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Outfit, Pacifico } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Clean Strike - Profesjonalne czyszczenie kostki brukowej",
  description: "Specjaliści w czyszczeniu kostki brukowej na prywatnych posesjach",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
