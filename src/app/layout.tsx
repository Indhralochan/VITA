import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DataContextProvider } from '@/app/context/index';
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <DataContextProvider>
            {children}
            </DataContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
