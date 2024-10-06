import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "wagmigg - shop",
  description: "The page of wagmigg shop",
};
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}  antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
