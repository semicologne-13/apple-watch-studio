import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Customize Apple Watch Series 10 - Apple",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='antialiased'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
              <Header/>
              {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
