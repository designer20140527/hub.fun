import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import LenisProvider from "@/components/lenis-provider"
import SuperCursor from "@/components/SuperCursor"
// 暂时移除鼠标效果组件

export const metadata: Metadata = {
  title: "hub.fun",
  description: "Make Content Worth Holding",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LenisProvider>
            <SuperCursor />
            {/* 鼠标效果组件暂时移除 */}
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
