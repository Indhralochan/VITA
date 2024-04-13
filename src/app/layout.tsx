import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DataContextProvider } from '@/app/context/index';
import { ThemeProvider } from "@/components/theme-provider"
import { AnswerContextProvider } from './context/answerContext';

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      <script src="
https://cdn.jsdelivr.net/npm/mermaid@10.9/dist/mermaid.min.js
" async ></script>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <DataContextProvider>
             <AnswerContextProvider>
            {children}
            </AnswerContextProvider>
            </DataContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
