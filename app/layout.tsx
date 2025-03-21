import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me, my work, and my skills",
  icons: {
    icon: "/images/panda-icon.svg",
    shortcut: "/images/panda-icon.svg",
    apple: "/images/panda-icon.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

